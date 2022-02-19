
from django.http.response import Http404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.decorators import action, api_view, renderer_classes
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from .serializers import ExampleSerializer
from .models import Example


class ExamplesView(APIView):
  """
  List all examples or creates a new example.
  """
  renderer_classes = [JSONRenderer]

  def get(self, request, format=None):
    queryset = Example.objects.all()
    serializer = ExampleSerializer(queryset, many=True)
    return Response(serializer.data)

  def post(self, request, format=None):
    serializer = ExampleSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ExampleView(APIView):
  """
  Retrieve, update or delete an example instance.
  """

  renderer_classes = [JSONRenderer]

  def get_object(self, id):
    try:
      return Example.objects.get(id=id)
    except Example.DoesNotExist:
      raise Http404

  def get(self, request, id, format=None):
    queryset = self.get_object(id)
    serializer = ExampleSerializer(queryset, many=False)
    return Response(serializer.data)

  def put(self, request, id, format=None):
    queryset = self.get_object(id)
    serializer = ExampleSerializer(queryset, data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data)
    else:
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  
  def delete(self, request, id, format=None):
    queryset = self.get_object(id)
    queryset.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
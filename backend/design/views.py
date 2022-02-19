
from django.http.response import Http404
from rest_framework import status, viewsets
from rest_framework.views import APIView
from rest_framework.decorators import action, api_view, renderer_classes
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from .serializers import ExampleSerializer, FileSerializer
from .models import Example, File
from web3 import Web3


class FileView(viewsets.ModelViewSet):
  queryset = File.objects.all()
  serializer_class = FileSerializer

class SmartContractView(viewsets.ModelViewSet):
  """
  Send a get request to this model to run the script

  Idan Tzurdecker wrote this script
  """

  def get(self, request, format=None):
    ganache_url = "HTTP://127.0.0.1:7545"
    web3 = Web3(Web3.HTTPProvider(ganache_url))

    account_1 = "0xB423fd3Db154423E5B5f16e56E17e5d9FCBc69FB"
    account_2 = "0xCfA27430eC320EbEa18F34c2596e1c5aA4A0F803"

    private_key = "8df46d853c4492034d0c2b1bcf0646c4492797031913497c8cc7230124cca716"

    nonce = web3.eth.getTransactionCount(account_1)

    tx = {
        'nonce' : nonce, #prevents from sending the transaction twice based on history
        'to': account_2,
        'value': web3.toWei(1, 'ether'),
        'gas': 2000000,
        'gasPrice': web3.toWei('50','gwei')
    }

    signed_tx = web3.eth.account.signTransaction(tx,private_key)

    tx_hash = web3.eth.sendRawTransaction(signed_tx.rawTransaction)
    return Response(web3.toHex(tx_hash))


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
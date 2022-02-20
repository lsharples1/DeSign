
from urllib.request import Request
from django.http.response import Http404
from rest_framework import status, viewsets
from rest_framework.views import APIView
from rest_framework.decorators import action, api_view, renderer_classes
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from .serializers import ExampleSerializer, FileSerializer
from .models import Example, File
import web3
from web3 import Web3


class FileView(viewsets.ModelViewSet):
  queryset = File.objects.all()
  serializer_class = FileSerializer

class SmartContractView(APIView):
  """
  Send a get request to this model to run the script

  Idan Tzurdecker wrote this script
  """

  @action(detail=True)
  @api_view(['POST'])
  def getSignedTX(self, request, format=None):
    ganache_url = "HTTP://127.0.0.1:7545"
    web3 = Web3(Web3.HTTPProvider(ganache_url))

    account_1 = "0x412e833aC97eC0e05C21f3191808733c0BBdc563"
    # account_2 = "0x1f07d507732716314ED2CFCD67c9D0F880C6fA9a"
    # data: public of recipient, private of sender
    account_2 = request.GET.get('sender')

    # private_key = "f819edb5a54d53ab46d28fd71446cc7365d2be47688ea0e708d9aa6c40515c26"
    private_key = request.GET.get('recipient')

    nonce = web3.eth.getTransactionCount(account_1)

    tx = {
        'nonce' : nonce, #prevents from sending the transaction twice based on history
        'to': account_2,
        'value': web3.toWei(1, 'ether'),
        'gas': 2000000,
        'gasPrice': web3.toWei('50','gwei')
    }

    signed_tx = web3.eth.account.signTransaction(tx,private_key)
    return Response(signed_tx)

  @action(detail=True)
  @api_view(['POST'])
  def getTXHash(self, request, format=None):
    signed_tx = request.GET.get('signed_tx')
    tx_hash = web3.eth.sendRawTransaction(signed_tx.rawTransaction)
    return Response(tx_hash)
    

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
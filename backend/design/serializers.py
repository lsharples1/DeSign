from rest_framework import serializers
from rest_framework.serializers import FileField
from .models import Example, File

class ExampleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Example
        fields = ('id', 'title', 'description')

class FileSerializer(serializers.ModelSerializer):
  class Meta:
    model = File
    fields = ('id', 'filepath')
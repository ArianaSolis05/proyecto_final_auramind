
from rest_framework.serializers import ModelSerializer
from .models import Foro,Respuesta
from rest_framework import serializers
class ForoSerializer(ModelSerializer):
    class Meta:
        model = Foro
        fields = "__all__" 
        
class RespuestaSerializer(ModelSerializer):
    usuario_nombre = serializers.CharField(source='usuario.username', read_only=True)
    class Meta:
        model = Respuesta
        fields = "__all__"
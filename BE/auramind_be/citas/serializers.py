from rest_framework.serializers import ModelSerializer
from .models import Citas
from rest_framework import serializers  


class CitasSerializer(ModelSerializer):
    psicologo_nombre = serializers.CharField(source='psicologo.username', read_only=True)
    class Meta: 
        model = Citas
        fields = "__all__" 
        
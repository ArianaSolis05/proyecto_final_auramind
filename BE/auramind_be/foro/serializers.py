
from rest_framework.serializers import ModelSerializer
from .models import Foro

class ForoSerializer(ModelSerializer):
    class Meta:
        model = Foro
        fields = "__all__" 
        
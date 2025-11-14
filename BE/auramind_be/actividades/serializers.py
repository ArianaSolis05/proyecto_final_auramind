
from rest_framework.serializers import ModelSerializer
from .models import actividad

class ActividadSerializer(ModelSerializer):
    class Meta:
        model = actividad
        fields = "__all__" 
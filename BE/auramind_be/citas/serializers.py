from rest_framework.serializers import ModelSerializer
from .models import Citas

class CitasSerializer(ModelSerializer):
    class Meta:
        model = Citas
        fields = "__all__" 
        
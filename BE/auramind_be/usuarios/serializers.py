from rest_framework.serializers import ModelSerializer
from .models import Usuario


class UsuarioSerializer(ModelSerializer):
    class Meta:
        model = Usuario
        fields = ["id","username","email","password","email","fecha_nacimiento","cedula","nacionalidad","genero","first_name","last_name"]
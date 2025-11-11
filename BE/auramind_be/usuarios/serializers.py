from rest_framework.serializers import ModelSerializer
from .models import Usuario,Paciente,Psicologo


class UsuarioSerializer(ModelSerializer):
    class Meta:
        model = Usuario
        fields = ["id","username","email","password","email","fecha_nacimiento","cedula","nacionalidad","genero","first_name","last_name","rol","telefono"]

class PacienteSerializer(ModelSerializer):
    class Meta:
        model = Paciente
        fields = "__all__"

class PsicologoSerializer(ModelSerializer):
    class Meta:
        model = Psicologo
        fields = "__all__"
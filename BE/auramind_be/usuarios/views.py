from django.shortcuts import render
from .models import Usuario,Paciente,Psicologo
from .serializers import UsuarioSerializer,PacienteSerializer,PsicologoSerializer
from rest_framework.generics import ListCreateAPIView
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from rest_framework.response import Response

class UsuarioCreateView(ListCreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class UsuarioPorIdView(ListCreateAPIView):
    serializer_class = UsuarioSerializer
    
    def get_queryset(self):
        id_usuario = self.kwargs["id_usuario"] # urls
        return Usuario.objects.filter(id=id_usuario)



class PacienteCreateView(ListCreateAPIView):
    queryset = Paciente.objects.all()
    serializer_class = PacienteSerializer

class PsicologoCreateView(ListCreateAPIView):
    queryset = Psicologo.objects.all()
    serializer_class = PsicologoSerializer

class UsuarioLoginView(APIView):
    def post(self,request):
        usuario = request.data.get("nombre_usuario")
        clave = request.data.get("clave_usuario")


        usuario_login = authenticate(username=usuario,password=clave)

        if usuario_login is not None:
            return Response({"mensaje":"Validacion correcta","idUsuario":usuario_login.id})
        else:
            return Response({"mensaje":"JEJE NONONO"})


        




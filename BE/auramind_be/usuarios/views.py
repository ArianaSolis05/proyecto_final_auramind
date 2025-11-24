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


class EditarUsuarioView(APIView):
    def patch(self,request):
        id_usuario = request.data.get("id_usuario")
        username = request.data.get("username")
        email = request.data.get("email")

        password = request.data.get("password")

        usuario = Usuario.objects.filter(id=id_usuario).first()

        if username:
            usuario.username = username
        if password:
            usuario.set_password(password) 
        if email:
            usuario.email = email
        

        usuario.save()

        return Response({"mensaje":"Usuario actualizado con éxito"})





from django.shortcuts import render
from .models import Usuario,Paciente,Psicologo
from .serializers import UsuarioSerializer,PacienteSerializer,PsicologoSerializer
from rest_framework.generics import ListCreateAPIView,DestroyAPIView
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken


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
            token = RefreshToken.for_user(usuario_login)
            return Response({"mensaje":"Validacion correcta",
                             "idUsuario":usuario_login.id,
                             "acceso":str(token.access_token),
                             "rol":usuario_login.rol,
                             "refresh":str(token)}) 
        else:
            return Response({"mensaje":"JEJE NONONO"})

class EditarUsuarioView(APIView):
    def patch(self,request):
        id_usuario = request.data.get("id_usuario")
        username = request.data.get("username")
        first_name = request.data.get("first_name")
        last_name = request.data.get("last_name")
        email = request.data.get("email")
        telefono = request.data.get("telefono")        
        usuario = Usuario.objects.filter(id=id_usuario).first()
        genero = request.data.get("genero")
        rol = request.data.get("rol")

        if username:
            usuario.username = username
        if email:
            usuario.email = email
        if first_name:
            usuario.first_name = first_name
        if last_name:
            usuario.last_name = last_name
        if telefono:
            usuario.telefono = telefono
        if genero:
            usuario.genero = genero
        if rol:
            usuario.rol = rol

        usuario.save()

        return Response({"mensaje":"Usuario actualizado con éxito"})


class EliminarUsuarioView(DestroyAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer
    lookup_field = "id"


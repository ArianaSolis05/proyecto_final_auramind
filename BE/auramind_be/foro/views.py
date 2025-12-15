from .models import Foro,Respuesta
from .serializers import ForoSerializer,RespuestaSerializer
from rest_framework.generics import ListCreateAPIView
from rest_framework.generics import DestroyAPIView

class ForoCreateView(ListCreateAPIView):
    queryset = Foro.objects.all()
    serializer_class = ForoSerializer

class RespuestaCreateView(ListCreateAPIView):
    queryset = Respuesta.objects.all()
    serializer_class = RespuestaSerializer


class RespuestasPorForoView(ListCreateAPIView):
    serializer_class = RespuestaSerializer
    
    def get_queryset(self):
        id_foro = self.kwargs["id_foro"] 
        return Respuesta.objects.filter(foro=id_foro)


class EliminarComentarioView(DestroyAPIView):
    queryset = Foro.objects.all()
    serializer_class = ForoSerializer
    lookup_field = "id"

class ComentariosPorUsuarioView(ListCreateAPIView):
    serializer_class = ForoSerializer
    
    def get_queryset(self):
        id_usuario = self.kwargs["id_usuario"] 
        return Foro.objects.filter(usuario=id_usuario)
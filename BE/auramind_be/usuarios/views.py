from django.shortcuts import render
from .models import Usuario,Paciente,Psicologo
from .serializers import UsuarioSerializer,PacienteSerializer,PsicologoSerializer
from rest_framework.generics import ListCreateAPIView

class UsuarioCreateView(ListCreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class PacienteCreateView(ListCreateAPIView):
    queryset = Paciente.objects.all()
    serializer_class = PacienteSerializer

class PsicologoCreateView(ListCreateAPIView):
    queryset = Psicologo.objects.all()
    serializer_class = PsicologoSerializer


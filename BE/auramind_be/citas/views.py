from django.shortcuts import render

from .models import Citas
from .serializers import CitasSerializer
from rest_framework.generics import ListCreateAPIView

class CitasCreateView(ListCreateAPIView):
    queryset = Citas.objects.all()
    serializer_class = CitasSerializer

class CitasPorUsuarioView(ListCreateAPIView):
    serializer_class = CitasSerializer
    
    def get_queryset(self):
        id_usuario = self.kwargs["id_usuario"] 
        return Citas.objects.filter(paciente=id_usuario)

class CitasPorPsicologoView(ListCreateAPIView):
    serializer_class = CitasSerializer

    def get_queryset(self):
        id_psicologo = self.kwargs["id_psicologo"] 
        return Citas.objects.filter(psicologo=id_psicologo)
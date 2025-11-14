from django.shortcuts import render

from .models import Actividad
from .serializers import ActividadSerializer
from rest_framework.generics import ListCreateAPIView

class ActividadCreateView(ListCreateAPIView):
    queryset = Actividad.objects.all()
    serializer_class = ActividadSerializer
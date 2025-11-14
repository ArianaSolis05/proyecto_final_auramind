from django.shortcuts import render

from .models import actividad
from .serializers import ActividadSerializer
from rest_framework.generics import ListCreateAPIView

class ActividadCreateView(ListCreateAPIView):
    queryset = actividad.objects.all()
    serializer_class = ActividadSerializer
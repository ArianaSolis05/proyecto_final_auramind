from django.shortcuts import render

from .models import Citas
from .serializers import CitasSerializer
from rest_framework.generics import ListCreateAPIView

class CitasCreateView(ListCreateAPIView):
    queryset = Citas.objects.all()
    serializer_class = CitasSerializer


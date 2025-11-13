from django.shortcuts import render


from .models import Foro
from .serializers import ForoSerializer
from rest_framework.generics import ListCreateAPIView

class ForoCreateView(ListCreateAPIView):
    queryset = Foro.objects.all()
    serializer_class = ForoSerializer

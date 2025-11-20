from django.shortcuts import render

from .models import Metas
from .serializers import MetasSerializer
from rest_framework.generics import ListCreateAPIView


class MetasCreateView(ListCreateAPIView):
    queryset = Metas.objects.all()
    serializer_class = MetasSerializer

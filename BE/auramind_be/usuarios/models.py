from django.db import models
from django.contrib.auth.models import AbstractUser


class Usuario(AbstractUser):
    fecha_nacimiento = models.DateField()
    cedula = models.IntegerField(unique=True)
    nacionalidad = models.CharField(max_length=50)
    genero = models.CharField(max_length=30)
from django.db import models

# Create your models here.
class Actividad(models.Model):
    nombre_actividad = models.CharField(max_length=30) 
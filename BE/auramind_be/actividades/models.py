from django.db import models

# Create your models here.
class Actividad(models.Model):
    nombre_actividad = models.CharField(max_length=30)
    descripcion = models.CharField(max_length=100)
    fecha = models.DateField()
    estado = models.BooleanField(default=True)





from django.db import models
from django.contrib.auth.models import AbstractUser

class Usuario(AbstractUser):
    ROL_OPCIONES = (
        ("usuario","Usuario"),
        ("psicologo","Psicologo"),
        ("paciente","Paciente"),
        ("admin","Admin")
    )
    fecha_nacimiento = models.DateField()
    cedula = models.IntegerField(unique=True)
    nacionalidad = models.CharField(max_length=50)
    genero = models.CharField(max_length=30)
    rol = models.CharField(choices=ROL_OPCIONES,max_length=30)
    telefono = models.CharField(max_length=20)


class Psicologo(models.Model):
    usuario = models.ForeignKey(Usuario,on_delete=models.CASCADE)
    especialidad = models.CharField(max_length=50)
    descripcion = models.TextField()

class Paciente(models.Model):
    usuario = models.ForeignKey(Usuario,on_delete=models.CASCADE)
    ocupacion = models.CharField(max_length=50)

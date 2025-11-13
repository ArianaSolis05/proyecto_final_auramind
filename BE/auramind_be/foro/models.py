from django.db import models

# Create your models here.


class Foro(models.Model):
    usuario = models.ForeignKey("usuarios.Paciente", on_delete=models.CASCADE)
    titulo = models.CharField(25)
    contenido = models.TextField()
    fecha_publicacion = models.DateField()
    categoria = models.CharField(20)
    

    
    
from django.db import models

# Create your models here.


class Foro(models.Model):
    usuario = models.ForeignKey("usuarios.Usuario", on_delete=models.CASCADE)
    titulo = models.CharField(max_length=25)
    contenido = models.TextField()
    fecha_publicacion = models.DateField(auto_now_add=True)



class Respuesta(models.Model):
    foro = models.ForeignKey(Foro, on_delete=models.CASCADE)
    usuario = models.ForeignKey("usuarios.Usuario", on_delete=models.CASCADE)
    contenido = models.TextField()
    fecha_respuesta = models.DateField(auto_now_add=True)
    
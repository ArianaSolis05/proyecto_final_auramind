from django.db import models

class Metas(models.Model):
    usuario = models.ForeignKey("usuarios.Usuario",on_delete=models.CASCADE)
    titulo = models.CharField(max_length=50)
    descripcion = models.TextField()
    categoría = (
        ("salud","Salud")
        ("finanzas","Finanzas")
        ("estudio","Estudio")
        ("otros","Otros")
    )



    

from django.db import models

# Create your models here.


class Citas(models.Model):
    paciente = models.ForeignKey(
        "usuarios.Usuario", on_delete=models.CASCADE, related_name="paciente"
    )
    psicologo = models.ForeignKey(
        "usuarios.Usuario", on_delete=models.CASCADE, related_name="psicologo"
    )
    fecha_hora = models.DateTimeField()
    motivo = models.TextField()

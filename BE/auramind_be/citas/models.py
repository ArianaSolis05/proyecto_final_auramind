from django.db import models

# Create your models here.

class Citas(models.Model):
    paciente = models.ForeignKey("usuarios.Paciente", on_delete=models.CASCADE)
    psicologo = models.ForeignKey("usuarios.Psicologo", on_delete=models.CASCADE)
    fecha_hora = models.DateTimeField()
    motivo = models.TextField()
    
    
    


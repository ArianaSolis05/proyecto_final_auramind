from django.db import models
from usuarios.models import Paciente, Psicologo

# Create your models here.

class Citas(models.Model):
    paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    psicologo = models.ForeignKey(Psicologo, on_delete=models.CASCADE)
    fecha_hora = models.DateTimeField()
    motivo = models.TextField()
    
    
    


from django.urls import path
from .views import UsuarioCreateView,PacienteCreateView

urlpatterns = [
    path("crear-usuario/",UsuarioCreateView.as_view()),
    path("crear-paciente/",PacienteCreateView.as_view()),
]

from django.urls import path
from .views import UsuarioCreateView,PacienteCreateView,PsicologoCreateView,UsuarioLoginView

urlpatterns = [
    path("crear-usuario/",UsuarioCreateView.as_view()),
    path("crear-paciente/",PacienteCreateView.as_view()),
    path("crear-psicologo/",PsicologoCreateView.as_view()),
    path("login/",UsuarioLoginView.as_view())
]


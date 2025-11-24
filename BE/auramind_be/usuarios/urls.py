from django.urls import path
from .views import UsuarioCreateView,PacienteCreateView,PsicologoCreateView,UsuarioLoginView,UsuarioPorIdView,EditarUsuarioView

urlpatterns = [
    path("crear-usuario/",UsuarioCreateView.as_view()),
    path("crear-paciente/",PacienteCreateView.as_view()),
    path("crear-psicologo/",PsicologoCreateView.as_view()),
    path("login/",UsuarioLoginView.as_view()),
    path("usuario/<int:id_usuario>/",UsuarioPorIdView.as_view()),
    path("actualizar-usuario/",EditarUsuarioView.as_view())
]


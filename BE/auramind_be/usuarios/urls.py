from django.urls import path
from .views import UsuarioCreateView,PacienteCreateView,PsicologoCreateView,UsuarioLoginView,UsuarioPorIdView,EditarUsuarioView
from .views import EliminarUsuarioView
urlpatterns = [
    path("crear-usuario/",UsuarioCreateView.as_view()),
    path("crear-paciente/",PacienteCreateView.as_view()),
    path("crear-psicologo/",PsicologoCreateView.as_view()),
    path("login/",UsuarioLoginView.as_view()),
    path("usuario/<int:id_usuario>/",UsuarioPorIdView.as_view()),
    path("actualizar-usuario/",EditarUsuarioView.as_view()),
    path("eliminar-usuario/<int:id>/",EliminarUsuarioView.as_view()),
]


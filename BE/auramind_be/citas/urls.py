from django.urls import path
from .views import CitasCreateView,CitasPorUsuarioView,CitasPorPsicologoView

urlpatterns = [
    path("crear-citas/",CitasCreateView.as_view()),
    path("citas-usuario/<int:id_usuario>/",CitasPorUsuarioView.as_view()),
    path("citas-psicologo/<int:id_psicologo>/",CitasPorPsicologoView.as_view()),
]


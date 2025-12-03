from django.urls import path
from .views import ActividadCreateView,EditarActividadView,EliminarActividadView

urlpatterns = [
    path("crear-actividad/",ActividadCreateView.as_view()),
    path("editar-actividad/",EditarActividadView.as_view()),
    path("eliminar-actividad/<int:id>/",EliminarActividadView.as_view()),
]


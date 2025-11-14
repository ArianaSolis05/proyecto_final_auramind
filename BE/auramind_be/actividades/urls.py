from django.urls import path
from .views import ActividadCreateView

urlpatterns = [
    path("crear-actividad/",ActividadCreateView.as_view()),
]


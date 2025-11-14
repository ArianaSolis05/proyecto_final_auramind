
from django.urls import path
from .views import ForoCreateView

urlpatterns = [
    path("crear-comentario/",ForoCreateView.as_view()),
]


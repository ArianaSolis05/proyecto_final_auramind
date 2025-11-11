from django.urls import path
from .views import CitasCreateView

urlpatterns = [
    path("crear-citas/",CitasCreateView.as_view()),
]


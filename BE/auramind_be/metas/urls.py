from django.urls import path
from .views import MetasCreateView

urlpatterns = [
    path("crear-metas/",MetasCreateView.as_view()),
]


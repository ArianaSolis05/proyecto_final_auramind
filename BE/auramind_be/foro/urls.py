from django.urls import path
from .views import ForoCreateView,RespuestaCreateView,RespuestasPorForoView,EliminarComentarioView
from .views import ComentariosPorUsuarioView
urlpatterns = [
    path("crear-comentario/",ForoCreateView.as_view()),
    path("crear-respuesta/",RespuestaCreateView.as_view()),
    path("respuestas-foro/<int:id_foro>/",RespuestasPorForoView.as_view()),
    path("eliminar-comentario/<int:id>/", EliminarComentarioView.as_view()),
    path("comentarios-usuario/<int:id_usuario>/",ComentariosPorUsuarioView.as_view()),
]


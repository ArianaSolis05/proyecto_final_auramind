from rest_framework.generics import ListCreateAPIView, DestroyAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Actividad
from .serializers import ActividadSerializer
from rest_framework.permissions import IsAdminUser

class ActividadCreateView(ListCreateAPIView):
    queryset = Actividad.objects.all()
    serializer_class = ActividadSerializer


class EditarActividadView(APIView):
    def patch(self, request):
        id_actividad = request.data.get("id_actividad")
        nombre_actividad = request.data.get("nombre_actividad")
        descripcion = request.data.get("descripcion")
        fecha = request.data.get("fecha")
        tipo = request.data.get("tipo")
        ubicacion = request.data.get("ubicacion")

        actividad = Actividad.objects.filter(id=id_actividad).first()

        if nombre_actividad:
            actividad.nombre_actividad = nombre_actividad
        if tipo:
            actividad.tipo = tipo
        if descripcion:
            actividad.descripcion = descripcion
        if fecha:
            actividad.fecha = fecha
        if ubicacion:
            actividad.ubicacion = ubicacion

        actividad.save()

        return Response({"mensaje":"Actividad actualizada correctamente"})

class EliminarActividadView(DestroyAPIView):
    permission_classes = [IsAdminUser]
    queryset = Actividad.objects.all()
    serializer_class = ActividadSerializer
    lookup_field = "id"

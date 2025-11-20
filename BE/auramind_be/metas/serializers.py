from rest_framework.serializers import ModelSerializer
from .models import Metas

class MetasSerializer(ModelSerializer):
    class Meta:
        model = Metas
        fields = "__all__"
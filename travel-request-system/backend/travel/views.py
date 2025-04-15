# views.py
from rest_framework import viewsets
from .models import TravelRequest
from .serializers import TravelRequestSerializer

class TravelRequestViewSet(viewsets.ModelViewSet):
    queryset = TravelRequest.objects.all()
    serializer_class = TravelRequestSerializer

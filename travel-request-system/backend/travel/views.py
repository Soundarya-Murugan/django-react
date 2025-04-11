from rest_framework import generics
from .models import TravelRequest
from .serializers import TravelRequestSerializer

class TravelRequestListCreate(generics.ListCreateAPIView):
    queryset = TravelRequest.objects.all()
    serializer_class = TravelRequestSerializer

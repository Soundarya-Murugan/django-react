# serializers.py
from rest_framework import serializers
from .models import TravelRequest

class TravelRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = TravelRequest
        fields = ['id', 'destination', 'date']

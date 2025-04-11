from django.urls import path
from .views import TravelRequestListCreate

urlpatterns = [
    path('requests/', TravelRequestListCreate.as_view(), name='travel-requests'),
]

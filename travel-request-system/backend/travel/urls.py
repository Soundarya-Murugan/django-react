from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TravelRequestViewSet

router = DefaultRouter()
router.register(r'requests', TravelRequestViewSet, basename='travelrequest')

urlpatterns = [
    path('', include(router.urls)),
]

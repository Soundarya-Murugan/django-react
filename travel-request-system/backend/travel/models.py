
from django.db import models

class TravelRequest(models.Model):
    destination = models.CharField(max_length=100)
    date = models.DateField()

    def __str__(self):
        return self.destination

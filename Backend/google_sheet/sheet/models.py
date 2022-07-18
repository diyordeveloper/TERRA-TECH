from django.db import models


class GoogleSheet(models.Model):
    full_name = models.CharField(max_length=200)
    phone = models.CharField(max_length=12)
    bussines_type = models.CharField(max_length=500)
    interesting_service = models.CharField(max_length=200)
    

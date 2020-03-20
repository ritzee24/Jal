from django.db import models

class Product(models.Model):
    productId = models.AutoField(primary_key=True)
    productName = models.CharField(max_length = 50)
    productCode = models.CharField(max_length = 10)
    releaseDate = models.DateField()
    description = models.CharField(max_length = 255)
    price = models.FloatField()
    starRating = models.FloatField()
    imageUrl =  models.CharField(max_length = 200) 

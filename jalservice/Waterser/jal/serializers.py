from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Product

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password' : {'write_only':True , 'required':True}}

    def create(self,validate_data):
        user = User.objects.create_user(**validate_data)
        return user

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']

class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = [  "productId",
                    "productId",
                    "productName",
                    "productCode",
                    "releaseDate",
                    "description",
                    "price",
                    "starRating",
                    "imageUrl" ]
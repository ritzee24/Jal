"""jalservice URL Configuration
"""
from django.contrib import admin
from django.conf.urls import include, url

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^jal/', include('jal.urls'))
]
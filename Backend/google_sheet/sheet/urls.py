from django.urls import path
from . import views
urlpatterns = [
    path('create_google_cheet', views.create_google_sheet),
]
from django.shortcuts import render
from django.shortcuts import redirect

# Create your views here.

from rest_framework import viewsets
from .models import TodoItems
from .serializers import TodoItemSerializer

class TodoItemViewSet(viewsets.ModelViewSet):
    queryset = TodoItems.objects.all()
    serializer_class = TodoItemSerializer


def home(request):
    return redirect('/api/todos')

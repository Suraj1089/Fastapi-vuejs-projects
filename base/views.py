from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'indexcode.html')

def about(request):
    return None
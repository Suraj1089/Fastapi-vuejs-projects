from . import views
from django.urls import path

urlpatterns = [
    path('', views.HomeView.as_view(), name='home'),
    path('math-game/', views.MathGameView.as_view(), name='math_game'),
    path('anagram/', views.AnagramView.as_view(), name='anagram'),
   
]

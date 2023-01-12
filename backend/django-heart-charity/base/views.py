from django.views.generic import TemplateView


class HomeView(TemplateView):
    template_name = "home.html"

class MathGameView(TemplateView):
    template_name = "math_game.html"

class AnagramView(TemplateView):
    template_name = "anagram.html"


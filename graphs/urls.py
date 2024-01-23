from django.urls import path
from .views import index, matches_per_season_view, wins_per_team_view

from . import views
urlpatterns = [
    path("", views.index, name="index"),
    path('matches-per-season/', matches_per_season_view, name='matches_per_season'),
    path('wins-per-team/', wins_per_team_view, name='wins_per_team'),
]
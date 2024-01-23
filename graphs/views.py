from django.shortcuts import render
from .services import populate_database_from_csv
from .models import Matches
from django.http import JsonResponse
import json

def index(request):
    populate_database_from_csv()
    return render(request, 'graphs/index.html')

def matches_per_season_view(request):
    data = Matches.get_matches_per_season()
    json_data = json.dumps(data)
    return render(request, 'graphs/matches_per_season.html', {'data': json_data})

def wins_per_team_view(request):
    data = Matches.get_wins_per_team_per_season()
    json_data = json.dumps(data)
    return render(request, 'graphs/wins_per_team.html', {'data': json_data})

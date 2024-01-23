from django.db import models

class Matches(models.Model):
    season = models.IntegerField()
    team1 = models.CharField(max_length=255)
    team2 = models.CharField(max_length=255)
    winner = models.CharField(max_length=255)

    @classmethod
    def get_matches_per_season(cls):
        queryset = cls.objects.values('season').annotate(freq=models.Count('id')).order_by('season')
        return {item["season"]: item["freq"] for item in queryset}
    
    @classmethod
    def get_wins_per_team_per_season(cls):
        queryset = cls.objects.values('season', 'winner').annotate(wins=models.Count('id')).order_by('season', 'winner')
        return [{'season': item['season'], 'team': item['winner'], 'wins': item['wins']} for item in queryset]
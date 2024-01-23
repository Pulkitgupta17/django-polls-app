import pandas as pd
from .models import Matches

def populate_database_from_csv():
    if not Matches.objects.exists():
        matches_df = pd.read_csv('graphs/matches.csv', usecols=['season', 'team1', 'team2', 'winner'])
        Matches.objects.bulk_create(
            Matches(**row) for row in matches_df.to_dict(orient='records')
        )




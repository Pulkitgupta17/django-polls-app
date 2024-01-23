window.onload = function() {
    var data = document.getElementById('get_data').getAttribute('data')
    data = JSON.parse(data);
    var seasons = Object.keys(data);
    var matchCounts = Object.values(data);


    var ctx = document.getElementById('matchesPerSeasonChart').getContext('2d');
        var matchesPerSeasonChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: seasons,
                datasets: [{
                    label: 'Matches per Season',
                    data: matchCounts,
                    backgroundColor: '#673ab7',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 0.5
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        stepSize: 1  
                    }
                }
            }
    });
};
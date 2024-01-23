window.onload = function () {
    var data = document.getElementById('get_data').getAttribute('data');
    console.log(data);
    data = JSON.parse(data);
    var teams = [...new Set(data.map(item => item.team))];
    var seasons = [...new Set(data.map(item => item.season))];
    var winsData = {};
    teams.forEach(function (team) {
        winsData[team] = new Array(seasons.length).fill(0);
    });
    data.forEach(function (item) {
        var teamIndex = teams.indexOf(item.team);
        var seasonIndex = seasons.indexOf(item.season);
        winsData[item.team][seasonIndex] = item.wins;
    });

    var seasonColors = seasons.map(function () {
        return 'rgba(' + Math.floor(Math.random() * 256) + ',' +
            Math.floor(Math.random() * 256) + ',' +
            Math.floor(Math.random() * 256) + ', 0.2)';
    });

    var ctx = document.getElementById('winsPerTeamPerSeasonChart').getContext('2d');
    var winsPerTeamPerSeasonChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: teams,
            datasets: seasons.map(function (season, index) {
                return {
                    label: season,
                    data: teams.map(function (team) {
                        return winsData[team][index];
                    }),
                    backgroundColor: seasonColors[index],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                };
            })
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

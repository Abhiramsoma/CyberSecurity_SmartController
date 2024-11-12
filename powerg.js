// Turbine Efficiency Chart
const ctx = document.getElementById('turbineEfficiencyChart').getContext('2d');
const turbineEfficiencyChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Coal', 'Wind', 'Solar', 'Hydel'],
        datasets: [{
            labels: 'Efficiency (%)',
            data: [95.53, 80.41, 90, 85.50],
            backgroundColor: ['grey', 'green', 'blue', 'yellow'],
            borderColor: 'black',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});

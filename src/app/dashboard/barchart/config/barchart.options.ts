export const barChartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'Entires summary',
      fontColor: 'black',
    },
    scales: {
      xAxes: [{
        stacked: true,
        ticks: {
          fontColor: 'black',
          min: 0,
          beginAtZero: true,
        },
        gridLines: {
          color: '#dbd9d9'
        },
        scaleLabel: {
          display: true,
          labelString: 'Date',
          fontColor: 'black',
        }
      }],
      yAxes: [{
        stacked: true,
        ticks: {
          fontColor: 'black',
          min: 0,
          beginAtZero: true,
  
        },
        gridLines: {
          color: '#dbd9d9'
        },
        scaleLabel: {
          display: true,
          labelString: 'Entires',
          fontColor: 'black',
        }
      }]
    },
    legend: {
      display: false,
      labels: {
        fontColor: 'black'
      }
    },
    dataConfiguration: {
        fontColor: 'green',
      },
  };
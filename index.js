
// Import required Chart.js modules
import { Chart as ChartJS } from 'chart.js';

// Make sure the script waits until DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  let ctx = document.querySelector("[data-selector='chart']");

  // Create a chart using Chart.js
  new ChartJS(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});




let data = {
   
    datasets: [{
      data: [33.3,66.7], 
      backgroundColor: ["#C1138C","#03FFFF" ] 
    }]
  };

  
let options = {
    cutoutPercentage: 50, 
    responsive: true, 
  };

  
  let nodo = document.querySelector('#risultati').getContext('2d');

 let graficoCiambella = new Chart(nodo, {
    type: 'doughnut',
    data: data,
    options: options
  });
  chart();

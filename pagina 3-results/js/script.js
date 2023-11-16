

  


  



 
  let nodo = document.querySelector('#risultati').getContext('2d');
 

 let graficoCiambella = new Chart(nodo, {
    type: 'doughnut',
   
    data : {
      labels: [
        'Wrong',
        'Correct',
        
      ],
      datasets: [{
        data: [33.3,66.7], 
        backgroundColor: ["#C1138C","#03FFFF" ] 
      }]
    },
   
    options:{

      
      cutoutPercentage: 50, 
      responsive: true, 
      cutout: 140,

      elements: {

        
        arc: {
          borderWidth: 1, // <-- Set this to derired value
          borderColor:'#333'
        }
      },
    
      plugins: {
        legend: false,
    }

    },

    
  }
 
  );
   

 
   console.log(graficoCiambella)


  
  /*label:`Congratulations!
   You passed the exam.`
   `We'll send you the certificate in few minutes.Check your email (including promotions/spam folder)`,*/
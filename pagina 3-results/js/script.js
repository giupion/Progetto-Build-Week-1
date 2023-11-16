

  

var effectColors = {
	highlight: 'rgba(255, 255, 255, 0.75)',
	shadow: 'rgba(25, 255, 255, 0.5)',
	glow: 'rgb(255, 255, 0)'	
};
  



 
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
        backgroundColor: ["#C1138C","#03FFFF" ],
        shadowOffsetX: 3,
			shadowOffsetY: 3,
			shadowBlur: 10,
		
        
      }],
      shadowOffsetX: 3,
			shadowOffsetY: 3,
			shadowBlur: 20,
			shadowColor: effectColors.shadow,
			bevelWidth: 2,
			bevelHighlightColor: effectColors.highlight,
			bevelShadowColor: effectColors.shadow,
			hoverInnerGlowWidth: 20,
			hoverInnerGlowColor: effectColors.glow,
			hoverOuterGlowWidth: 20,
			hoverOuterGlowColor: effectColors.glow

      
    },
   
    options:{

      
      cutoutPercentage: 50, 
      responsive: true, 
      cutout: 150,

      elements: {

        
        arc: {
          borderWidth: 1, 
          borderColor:'#333',
          
        }
      },
    
      plugins: {
        legend: false,
    }

    },

    tooltips: {
			shadowOffsetX: 3,
			shadowOffsetY: 3,
			shadowBlur: 10,
			shadowColor: effectColors.shadow,
			bevelWidth: 2,
			bevelHighlightColor: effectColors.highlight,
			bevelShadowColor: effectColors.shadow
		},

    
  }
 
  );
   

 
   console.log(Chart)


  
  /*label:`Congratulations!
   You passed the exam.`
   `We'll send you the certificate in few minutes.Check your email (including promotions/spam folder)`,*/


  //ciambella//



  // variabili in percentuale

  let percentualeCorrette;

  let percentualeSbagliate;


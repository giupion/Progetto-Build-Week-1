

let percentualeCorrette;

let percentualeSbagliate;

let numeroCorrette;

let numeroSbagliate;

let numeroTotale;

//accoglie il numero di risposte corrette e ne fa avere la percentuale
function PercentualeCorrette(){

  let percentualegiusto=numeroCorrette*100/numeroTotale

  return percentualegiusto
}


console.log(PercentualeCorrette())

//percentuale sbagliate
function PercentualeSbagliate(){

  let percentualesbagliato=(numeroCorrette*100 /numeroTotale)-100

  return percentualesbagliato
}


console.log(PercentualeSbagliate())

//ci dice quante sono le domande corrette e scrivendo in notazione 4/6 corrette


function quanteCorrette(){

  let messaggioCorrette=numeroCorrette+" / " +numeroTotale+"questions";
  return messaggioCorrette
}
console.log(quanteCorrette())


//integrare con querySelector ed innerText  
function quanteSbagliate(){

  let messaggioSbagliate=numeroSbagliate+" / " +numeroTotale+" questions";
  return messaggioSbagliate
}
console.log(quanteSbagliate())


function Congratulation(){
 
  if(percentualegiusto>60){
  let congratulazioni=querySelectorAll( "relative")
  
  }
  
  }




var effectColors = {
	highlight: 'rgba(0, 0, 0, 0.75)',
	shadow: 'rgba(0, 255, 255, 0.5)',
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
      cutout: 130,

      elements: {

        
        arc: {
          borderWidth: 1, 
          borderColor:'#333',

          prototype:{draw:{shadowOffsetX: 3,
            shadowOffsetY: 3,
            shadowBlur: 10,
            shadowColor: effectColors.shadow,
            bevelWidth: 2,
            bevelHighlightColor: effectColors.highlight,
            bevelShadowColor: effectColors.shadow}}
          
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

 





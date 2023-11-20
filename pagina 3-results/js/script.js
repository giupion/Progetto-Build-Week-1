let numeroCorrette=8;
let numeroSbagliate=25;
let numeroTotale=30;
let percentualegiusto;
//accoglie il numero di risposte corrette e ne fa avere la percentuale
let percentualeGiuste=function(){
 percentualegiusto=(numeroCorrette*100/numeroTotale).toFixed(1);

  return percentualegiusto
}

let selezionePercentualeCorrette=document.querySelector("#numeroCorrette")
selezionePercentualeCorrette.innerText=percentualeGiuste()+"%"

//codice per selezionare nodo p e inserirgli testo dinamico CORRETTEPERCENTUALE



console.log(percentualeGiuste())

//percentuale sbagliate
let percentualeSbagliate=function (){


  let percentualesbagliato=(numeroSbagliate*100 /numeroTotale).toFixed(1)


  return percentualesbagliato
}

let selezionePercentualeSbagliate=document.querySelector("#numeroSbagliate")
selezionePercentualeSbagliate.innerText=percentualeSbagliate()+"%"
console.log(percentualeSbagliate())


//codice per selezionare nodo p e inserirgli testo dinamico SBAGLIATE PERCENTUALE

// fin qui tutto bene


//ci dice quante sono le domande corrette e scrivendo in notazione 4/6 corrette


let quanteCorrette=function (){

  let messaggioCorrette=numeroCorrette+" / " +numeroTotale+" questions";
  return messaggioCorrette
}
console.log(quanteCorrette())

let selezioneTestoCorretto=document.querySelector("#testoCorrette")
selezioneTestoCorretto.innerText=quanteCorrette()
//codice per scirvere testo in notazione giuste /totali


let quanteSbagliate=function (){

  let messaggioSbagliate=numeroSbagliate+" / " +numeroTotale+" questions";
  return messaggioSbagliate
}
console.log(quanteSbagliate())



let selezioneTestoSbagliate=document.querySelector("#testoSbagliate")
selezioneTestoSbagliate.innerText=quanteSbagliate()
//codice per scirvere testo in notazione sbagliate/totali


let cong=document.querySelector( "#Congra");
    
    
let  passed=document.querySelector("#youPassed");
let certifi=document.querySelector( "#certificate");


const Congratulation=function (){
 
  if(percentualeGiuste()>=60){
  
    


cong.innerText="Congratulations!"
  
  passed.innerText="You passed the exam."

  certifi.innerText="We'll send you the certificate in few minutes.Check your email (including promotions/spam folder)"

  
  }

  else{cong.innerText="Sorry!"
  
  passed.innerText="Unfortunately you  didn't passed the exam."
  certifi.innerText="Try again! not blame yourself and keep pushing!"
 }
 
  
  }
  Congratulation()



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
        data: [percentualeSbagliate(),percentualeGiuste()], 
        backgroundColor: ["#C1138C","#03FFFF" ],
        
		
        
      }],
      
      
    },
   
    options:{

      
      cutoutPercentage: 50, 
      responsive: true, 
      cutout: 140,

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
   

  const ShadowPlugin = {
    beforeDraw: (chart, args, options) => {
      const { ctx } = chart;
      ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
      ctx.shadowBlur = 10;
      ctx.shadowOffsetX = 5;
      ctx.shadowOffsetY = 5;
    },
  };

 
   




  
  /*label:`Congratulations!
   You passed the exam.`
   `We'll send you the certificate in few minutes.Check your email (including promotions/spam folder)`,*/


  //ciambella//



  // variabili in percentuale

 





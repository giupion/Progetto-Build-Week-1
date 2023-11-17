
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};
const TIME_LIMIT = 20;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("app").innerHTML = `
<!--<button type="button">Inizia il countodown</button>-->
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  
  <span id="base-timer-label" class="base-timer__label">
  ${formatTime(
    timeLeft
  )}
  </span>
  
</div>
`;
/*document.querySelector("button").addEventListener("click",()=>{
   startTimer();
});*/

startTimer()

const questions = [
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
        correct_answer: "Final",
        incorrect_answers: ["Static", "Private", "Public"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "The logo for Snapchat is a Bell.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question:
            "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In web design, what does CSS stand for?",
        correct_answer: "Cascading Style Sheet",
        incorrect_answers: [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        incorrect_answers: [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "On Twitter, what is the character limit for a Tweet?",
        correct_answer: "140",
        incorrect_answers: ["120", "160", "100"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "Linux was first created as an alternative to Windows XP.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
    },
]; 

let punteggioUtente=0;
let questionNumber = 0;
let h2 = document.querySelector("h2");
let form = document.querySelector("form");
h2.innerText = "Seleziona il numero di domande:";
let input= `<input type="number" id="numeroDomande" min="1" max="${questions.length}" value="${questions.length}"></input>`;
let bottoneNumero = ` <button type="button" onclick="iniziaTest()">Inizia il test!</button>`;
form.innerHTML=input+bottoneNumero;
let main = document.querySelector("main");
let numDomande;
let domande;

function iniziaTest(){
    numDomande=Number(document.getElementById("numeroDomande").value);
    console.log(numDomande);
    domande=sottoArray (questions,numDomande);
    mostraDomanda();
}

function mostraDomanda(){    
    console.log("sono in mostra domanda");
    let risposte=[];
    if(questionNumber<numDomande){    
        console.log("Sono nell'if");      
        let form = document.querySelector("form");   
        form.innerHTML=``;
        let h2 = document.querySelector("h2");
        h2.innerHTML=domande[questionNumber].question;
        console.log(domande[questionNumber].question);
        risposte = shuffleRisposte(domande[questionNumber]);
        for(let i=0; i<risposte.length;i++){
            form.innerHTML+=` <input type="radio" id="risposta ${i+1}" name="opzioni" />
                              <label for="risposta ${i+1}"><p>${risposte[i]}</p></label>`;
        }
        console.log(`domanda ${questionNumber+1}`);
        form.innerHTML=`<button type="button" id="conferma">Conferma</button>`+form.innerHTML;
        document.querySelectorAll("input").forEach(ele => {
            ele.addEventListener("click",()=>{
                valutaRisposta();
            })
        });
           
        document.querySelector("#conferma").addEventListener("click",()=>{
            valutaRisposta();
        })
        document.querySelector("footer").innerHTML=`<p>Question <span>${questionNumber+1}/${numDomande}</span></p>`;  
    } else{

    }
}

function sottoArray(arr,n){
    let sottoArray =[];
    let arrClone = [...arr];
    for(let i=0; i<n;i++){
        sottoArray.push(arrClone.splice(Math.floor(Math.random()*arrClone.length),1)[0])
    }
    return sottoArray;
}

function shuffleRisposte(domanda){
    console.log(domanda)
    let risposte = [domanda.correct_answer,...domanda.incorrect_answers];
    console.log(risposte)
    return sottoArray(risposte,risposte.length);
}

function valutaRisposta(){
    console.log("sono in valutaRisposta()"); 
    let opzioni = document.querySelectorAll("label");
    opzioni.forEach(ele => {
        if(ele.innerText==domande[questionNumber].correct_answer){
            ele.classList.add("corretta");
        }else{
            ele.classList.add("sbagliata");
        }        
    });
    try {
        let rispostaUtente = document.querySelector('input[name="opzioni"]:checked+label').innerText;
        if(rispostaUtente===domande[questionNumber].correct_answer){
            document.querySelector('input[name="opzioni"]:checked+label').id="rispostaUtenteCorretta";
            console.log("risposta esatta")
            punteggioUtente++;
            main.innerHTML+=`
            <p> Risposta esatta!</p>`;        
        }else{
            document.querySelector('input[name="opzioni"]:checked+label').id="rispostaUtenteSbagliata";
            console.log("Risposta sbagliata");
            main.innerHTML+=`<p> Risposta sbagliata</p>`;
        }
    } catch (error) {
        console.log("Non hai risposto diocane")
        main.innerHTML+=`<p> Non hai risposto diocane</p>`
    }
    
    questionNumber++;
    setTimeout(function() {
        mostraDomanda();
        main.removeChild(document.querySelector("main>p"))
    }, 2000);    
    
}














function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `<p class="timer_text1">SECONDS</p>
  ${seconds}
  <p class="timer_text2">REMAINING</p>`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

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
        h2.innerHTML=domande[questionNumber].question;
        risposte = shuffleRisposte(domande[questionNumber]);
        for(let i=0; i<risposte.length;i++){
            form.innerHTML+=` <input type="radio" id="risposta ${i+1}" name="opzioni" />
                              <label for="risposta ${i+1}">${risposte[i]}</label>`;
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
        document.querySelector("footer").innerHTML=`<p>Question <span>${questionNumber}/${numDomande}</span></p>`;  
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
            console.log("risposta esatta")
            punteggioUtente++;
            main.innerHTML+=`
            <p> Risposta esatta!</p>`
        
        }else{
            console.log("Risposta sbagliata");
            main.innerHTML+=`<p> Risposta sbagliata</p>`
        }
    } catch (error) {
        console.log("Non hai risposto diocane")
        main.innerHTML+=`<p> Non hai risposto diocane</p>`
    }
    
    questionNumber++;
    setTimeout(function() {
        mostraDomanda();
        main.removeChild(document.querySelector("main p"))
    }, 2000);    
    
}






/*
        QUIZ GAME!

        REGOLE:
        / L'utente dovrà indovinare un certo numero di domandeThe player must guess correctly a certain amount of questions
        / Ogni risposta corretta gli darà 1 punto
        / Le domande possono avere risposte multiple o singole (true/false)
        / Al termine del quiz l'utente dovrà poter vedere il suo punteggio

        TIPS:
        / Usa una variabile globale per registrare il punteggio dell'utente
        / Crea una variabile "questionNumber" per tenere traccia del numero (o posizione) della domanda presentata all'utente
        / Quando "questionNumber" è maggiore delle domande disponibili, a quel punto l'applicazione dovrà mostrare il punteggio
        / Comincia salvando le domande in una variabile
        / Fai test completi: controlla la console periodicamente per verificare che non ci siano errori e che il flusso di dati sia quello che ti aspetti

        EXTRA:
        / Dai un feedback sulla risposta al momento del click (corretta o sbagliata)
        / Visualizza una domanda alla volta in sequenza piuttosto che tutte assieme in forma di lista
        / Permetti all'utente di selezionare la difficoltà del quiz prima di iniziare e il numero di domande che desidera ricevere.
        ( Se hai implementato l'applicazione usando l'URL fornito, puoi ottenere i dati che ti servono in modo semplice, 
        usando query parameters in questo modo: https://opentdb.com/api.php?amount=10&category=18&difficulty=easy e modificarne il numero di domande e difficoltà )
    
        /* NON DIMENTICARE...
          di fare commit & push del codice regolarmente sulla tua repository GitHub e di condividerla con i tuoi colleghi
        */






// TIPS:

        // SE MOSTRI TUTTE LE RISPOSTE ASSIEME IN FORMATO LISTA:
        // Per ogni domanda, crea un container e incorporale tutte all'interno. 
        // Crea poi dei radio button
        // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
        // con le risposte corrette e incorrette come opzioni
        // (dovrai probabilmente cercare su un motore di ricerca come ottenere un valore da un radio button in JS per ottenere il punteggio finale) 
//
// SE MOSTRI UNA DOMANDA ALLA VOLTA:
// Mostra la prima domanda con il testo e i radio button.
// Quando l'utente seleziona una risposta, passa alla domanda successiva dell'array e sostituisci quella precedentemente visualizzata con quella corrente,
// salvando le risposte dell'utente in una variabile


// Come calcolare il risultato? Hai due strade:
// Se stai mostrando tutte le domande nello stesso momento, controlla semplicemente se i radio button selezionati sono === correct_answer
// Se stai mostrando una domanda alla volta, aggiungi semplicemente un punto alla variabile del punteggio che hai precedentemente creato SE la risposta selezionata è === correct_answer

// BUON LAVORO 💪🚀


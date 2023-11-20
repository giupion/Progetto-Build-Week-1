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

const TIME_LIMIT = 30;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

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
    {
        type: "multiple",
        difficulty: "medium",
        category: "Science: Computers",
        question: "What is known as 'the brain' of the Computer?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: ["Motherboard", "Graphics Processing Unit", "Keyboard"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "Science: Computers",
        question: "Which of these programming languages is a low-level language?",
        correct_answer: "Assembly",
        incorrect_answers: ["Python", "C#", "Pascal"]
    },
    {
        type: "boolean",
        difficulty: "medium",
        category: "Science: Computers",
        question: "The open-source program Redis is a relational database server.",
        correct_answer: "False",
        incorrect_answers: ["True"]
    },
    {
        type: "boolean",
        difficulty: "medium",
        category: "Science: Computers",
        question: '"Windows NT" is a monolithic kernel.',
        correct_answer: "False",
        incorrect_answers: ["True"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "Science: Computers",
        question: "Unix Time is defined as the number of seconds that have elapsed since when?",
        correct_answer: "Midnight, January 1, 1970",
        incorrect_answers: ["Midnight, July 4, 1976", "Midnight on the creator of Unix's birthday", "Midnight, July 4, 1980"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "Science: Computers",
        question: "In programming, what do you call functions with the same name but different implementations?",
        correct_answer: "Overloading",
        incorrect_answers: ["Overriding", "Abstracting", "Inheriting"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "Science: Computers",
        question: "What does the term GPU stand for?",
        correct_answer: "Graphics Processing Unit",
        incorrect_answers: ["Gaming Processor Unit", "Graphite Producing Unit", "Graphical Proprietary Unit"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "Science: Computers",
        question: "The computer OEM manufacturer Clevo, known for its Sager notebook line, is based in which country?",
        correct_answer: "Taiwan",
        incorrect_answers: ["United States", "Germany", "China (People's Republic of)"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "Science: Computers",
        question: "On which computer hardware device is the BIOS chip located?",
        correct_answer: "Motherboard",
        incorrect_answers: ["Hard Disk Drive", "Central Processing Unit", "Graphics Processing Unit"]
    },
    {
        type: "multiple",
        difficulty: "hard",
        category: "Science: Computers",
        question: "Which of the following computer components can be built using only NAND gates?",
        correct_answer: "ALU",
        incorrect_answers: ["CPU", "RAM", "Register"]
    },
    {
        type: "multiple",
        difficulty: "hard",
        category: "Science: Computers",
        question: "Which data structure does FILO apply to?",
        correct_answer: "Stack",
        incorrect_answers: ["Queue", "Heap", "Tree"]
    },
    {
        type: "multiple",
        difficulty: "hard",
        category: "Science: Computers",
        question: 'The acronym "RIP" stands for which of these?',
        correct_answer: "Routing Information Protocol",
        incorrect_answers: ["Runtime Instance Processes", "Regular Interval Processes", "Routine Inspection Protocol"]
    },
    {
        type: "multiple",
        difficulty: "hard",
        category: "Science: Computers",
        question: "According to DeMorgan's Theorem, the Boolean expression (AB)' is equivalent to:",
        correct_answer: "A' + B'",
        incorrect_answers: ["A'B + B'A", "A'B'", "AB' + AB"]
    },
    {
        type: "multiple",
        difficulty: "hard",
        category: "Science: Computers",
        question: "The internet domain .fm is the country-code top-level domain for which Pacific Ocean island nation?",
        correct_answer: "Micronesia",
        incorrect_answers: ["Fiji", "Tuvalu", "Marshall Islands"]
    },
    {
        type: "boolean",
        difficulty: "hard",
        category: "Science: Computers",
        question: "DHCP stands for Dynamic Host Configuration Port.",
        correct_answer: "False",
        incorrect_answers: ["True"]
    },
    {
        type: "multiple",
        difficulty: "hard",
        category: "Science: Computers",
        question: "Dutch computer scientist Mark Overmars is known for creating which game development engine?",
        correct_answer: "Game Maker",
        incorrect_answers: ["Stencyl", "Construct", "Torque 2D"]
    },
    {
        type: "multiple",
        difficulty: "hard",
        category: "Science: Computers",
        question: "What is the name of the process that sends one qubit of information using two bits of classical information?",
        correct_answer: "Quantum Teleportation",
        incorrect_answers: ["Super Dense Coding", "Quantum Entanglement", "Quantum Programming"]
    },
    {
        type: "multiple",
        difficulty: "hard",
        category: "Science: Computers",
        question: "How many Hz does the video standard PAL support?",
        correct_answer: "50",
        incorrect_answers: ["59", "60", "25"]
    },
    {
        type: "multiple",
        difficulty: "hard",
        category: "Science: Computers",
        question: "What does the International System of Quantities refer 1024 bytes as?",
        correct_answer: "Kibibyte",
        incorrect_answers: ["Kylobyte", "Kilobyte", "Kelobyte"]
    }
];


let punteggioUtente = 0;
let questionNumber = 0;
let h2 = document.querySelector("h2");
let pFeedback = document.querySelector("p");
let form = document.querySelector("form");
let main = document.querySelector("main");
let numDomande;
let domande;
sceltaDifficoltà();

function sceltaNumero() {
    let input = `<input type="number" id="numeroDomande" placeholder="1" min="1" max="${questions.length}" value="${questions.length}"></input>`;
    h2.innerText = "Seleziona il numero di domande:";
    let bottoneNumero = ` <button type="button" onclick="iniziaTest()">Inizia il test!</button>`;
    form.innerHTML = input + bottoneNumero;
    domande = questions;
}
function sceltaDifficoltà() {
    h2.innerText = "Seleziona il livello di difficoltà e il numero delle domande:";

    form.innerHTML = `<select id="selettoreDifficoltà" onchange="mostraNumDomande()" value="qualsiasi">
                        <option value="qualsiasi">Qualsiasi</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                        
                    </select>
                    <input type="number" id="numeroDomande" min="1" max="${questions.length}" value="${questions.length}" ></input>
                    <button type="button" onclick="iniziaTest()" >Inizia il test!</button>`
}



function mostraNumDomande() {
    let selettoreDifficoltà = document.querySelector("#selettoreDifficoltà");
    console.log(selettoreDifficoltà.value);
    let difficoltà = selettoreDifficoltà.value;
    if (difficoltà != "qualsiasi") {
        domande = questions.filter(ele => ele.difficulty === difficoltà);
        console.log(difficoltà);
    } else {
        domande = questions;
    }
    document.querySelector('#numeroDomande').max = `${domande.length}`;
    document.querySelector('#numeroDomande').value = `${domande.length}`;
   document.querySelector('#numeroDomande').disabled = false;
    document.querySelector("button").disabled = false;
}


function iniziaTest() {
    numDomande = Number(document.getElementById("numeroDomande").value);
    console.log(numDomande);
    domande = sottoArray(domande, numDomande);
    mostraDomanda();
}

function mostraDomanda() {
    console.log("sono in mostra domanda");
    let risposte = [];
    if (questionNumber < numDomande) {
        console.log("Sono nell'if");
        document.getElementById("app").innerHTML = `
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
                                        <span id="base-timer-label" class="base-timer__label">${formatTime(
            timeLeft
        )}</span>
                                        </div>
                                        `;
        let form = document.querySelector("form");
        form.innerHTML = ``;
        let h2 = document.querySelector("h2");
        h2.innerHTML = domande[questionNumber].question;
        console.log(domande[questionNumber].question);
        risposte = shuffleRisposte(domande[questionNumber]);
        for (let i = 0; i < risposte.length; i++) {
            form.innerHTML += ` <input type="radio" id="risposta ${i + 1}" name="opzioni" />
                              <label for="risposta ${i + 1}"><p>${risposte[i]}</p></label>`;
        }
        console.log(`domanda ${questionNumber + 1}`);
        document.querySelectorAll("input").forEach(ele => {
            ele.addEventListener("click", onTimesUp);
        });
        document.querySelector("footer").innerHTML = `<p>QUESTION <span>${questionNumber + 1}/${numDomande}</span></p>`;
        startTimer();
    } else { /*
        main.innerHTML = `
                                <div class="container">
                        <div id="title">
                            <h1 id="allinearesults">Results</h1>
                            <p class="pagina3">The summary of your answers:</p>
                            </div> 
                        <div class="result">
                            <h2 id="rightQuestPercento">Correct</h2>
                        <h3 id="numeroCorrette"></h3>
                        <p class="pagina3" id="testoCorrette"></p>
                        
                            
                        </div>
                        <div class="relative"><canvas id="risultati" width="400" height="400"></canvas>
                        <div class="absolute-center text-center">
                            
                            <div id="congratulazioni">
                                <h2 id="Congra"></h2>
                                <h3 id="youPassed"></h2>
                        <p class="pagina3" id="certificate"></p>
                        </div>
                        </div>
                        </div>
                        <div class="result">
                            <h2 >Wrong <h2 id="wrongQuestPercento"></h2></h2>
                            <h3 id="numeroSbagliate"></h3>
                            <p class="pagina3" id="testoSbagliate"></p>
                        </div>
                        </div>
                                `
        document.querySelector("footer").innerHTML = `
        <button type="button" class="pagina3" ><a href="../pagina 4-review/index.html" class="pagina3">RATE US</a></button>
        `
        document.querySelector("footer").classList.add = "footerPagina3";
        document.querySelector("#numeroCorrette").innerText = String((punteggioUtente * 100 / numDomande).toFixed(1)) + "%";
        document.querySelector("#numeroSbagliate").innerText = String(((numDomande - punteggioUtente) * 100 / numDomande).toFixed(1)) + "%";
        document.querySelector("#testoCorrette").innerText = `${punteggioUtente}/${numDomande} questions`;
        document.querySelector("#testoSbagliate").innerText = `${numDomande - punteggioUtente}/${numDomande} questions`;
        if (punteggioUtente / numDomande >= 0.6) {
            document.querySelector("#Congra").innerText = "Congratulations!";
            document.querySelector("#youPassed").innerText = "You passed the test!"
            document.querySelector("#certificate").innerText = "We send you the certificate in few minute";
        } else {
            document.querySelector("#Congra").innerText = "Sorry!";
            document.querySelector("#youPassed").innerText = "Unfurtunately you didn't passed the test.";
            document.querySelector("#certificate").innerText = "Try again! not blame yourself and keep pushing!";
        }
        let nodo = document.querySelector('#risultati').getContext('2d');
      
        graficoCiambella; */

        sessionStorage.setItem("punteggioUtente", punteggioUtente);
        sessionStorage.setItem('numDomande', numDomande);

        window.location.href = "../pagina 3-results/indexProva.html";



    }
}

function sottoArray(arr, n) {
    let sottoArray = [];
    let arrClone = [...arr];
    for (let i = 0; i < n; i++) {
        sottoArray.push(arrClone.splice(Math.floor(Math.random() * arrClone.length), 1)[0])
    }
    return sottoArray;
}

function shuffleRisposte(domanda) {
    console.log(domanda)
    let risposte = [domanda.correct_answer, ...domanda.incorrect_answers];
    console.log(risposte)
    return sottoArray(risposte, risposte.length);
}

function valutaRisposta() {
    console.log("sono in valutaRisposta()");
    document.querySelectorAll("input").forEach(ele => {
        ele.removeEventListener("click", onTimesUp);
    });
    document.getElementById("app").innerHTML = "";
    let opzioni = document.querySelectorAll("label");
    opzioni.forEach(ele => {
        if (ele.innerText == domande[questionNumber].correct_answer) {
            ele.classList.add("corretta");
        } else {
            ele.classList.add("sbagliata");
        }
    });
    try {
        let rispostaUtente = document.querySelector('input[name="opzioni"]:checked+label').innerText;
        if (rispostaUtente === domande[questionNumber].correct_answer) {
            document.querySelector('input[name="opzioni"]:checked+label').id = "rispostaUtenteCorretta";
            console.log("risposta esatta")
            punteggioUtente++;
            pFeedback.innerText += `Risposta esatta!`;
        } else {
            document.querySelector('input[name="opzioni"]:checked+label').id = "rispostaUtenteSbagliata";
            console.log("Risposta sbagliata.");
            pFeedback.innerText += `Risposta sbagliata.`;
        }
    } catch (error) {
        console.log("Non hai risposto!")
        pFeedback.innerText += `Non hai risposto!`
    }
    questionNumber++;
    setTimeout(function () {
        pFeedback.innerHTML = ``;
        mostraDomanda();
    }, 2000);
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

function onTimesUp() {
    clearInterval(timerInterval);
    timeLeft = TIME_LIMIT;
    timePassed = 0;
    valutaRisposta();
}

function formatTime(time) {
    let seconds = time % 60;
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    return `<p class="timer_text1">SECONDS</p>${seconds}<p class="timer_text2">REMAINING</p>`;
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


//state
var problems = [
    {
    question:"5 + 5 = ?" + "<br/>" + "a) 10 " + " b) 3 " + " c) 16",
    answer: "a"
    },
    {
    question: "2 + 2 = ?" + "<br/>" + "a) 8 " + " b) 4 " + " c) 1",
    answer: "b"
    },
    {
    question: "8 x 9 = ?" + "<br/>" + "a) 86 " + " b) 40 " + " c) 72",
    answer: "c"
    },
    {
    question: "6 - 2 = ?" + "<br/>" + "a) 6 " + " b) 40 " + " c) 4",
    answer: "c"
    },
    {
    question: "9 / 3 = ?" + "<br/>" + "a) 3 " + " b) 40 " + " c) 4",
    answer: "a"
    },
    {
    question: "7 x 8 = ?" + "<br/>" + "a) 56 " + " b) 42 " + " c) 1",
    answer: "a"
    },
    {
    question: "4 + 16 = ?" + "<br/>" + "a) 6 " + " b) 20 " + " c) 4",
    answer: "b"
    },
    {
    question: "19 - 7 = ?" + "<br/>" + "a) 62 " + " b) 9 " + " c) 12",
    answer: "c"
    },
    {
    question: "60 - 2 = ?" + "<br/>" + "a) 58 " + " b) 2 " + " c) 14",
    answer: "a"
    },
    {
    question:"50 + 50 = ?" + "<br/>" + "a) 100 " + " b) 13 " + " c) 76",
    answer: "a"
    },
    {
    question: "29 + 23 = ?" + "<br/>" + "a) 82 " + " b) 52 " + " c) 59",
    answer: "b"
    },
    {
    question: "1 x 7 = ?" + "<br/>" + "a) 7 " + " b) 17 " + " c) 71",
    answer: "a"
    },
    {
    question: "2 - 2 = ?" + "<br/>" + "a) 80 " + " b) 2 " + " c) 0",
    answer: "c"
    },
    {
    question: "12 / 6 = ?" + "<br/>" + "a) 2 " + " b) 7 " + " c) 11",
    answer: "a"
    },
    {
    question: "4 x 4 = ?" + "<br/>" + "a) 5 " + " b) 2 " + " c) 16",
    answer: "c"
    },
    {
    question: "41 + 16 = ?" + "<br/>" + "a) 57 " + " b) 28 " + " c) 41",
    answer: "a"
    },
    {
    question: "59 - 17 = ?" + "<br/>" + "a) 42 " + " b) 91 " + " c) 22",
    answer: "a"
    },
    {
    question: "6 - 5 = ?" + "<br/>" + "a) 8 " + " b) 23 " + " c) 1",
    answer: "c"
    }
];

var questions;
var prob;
var rndProb;
var ans;
var probSet;
var score = 0;

// cached elements
var display = document.getElementById('display');
var quest = document.getElementById('quest');
var sco = document.getElementById('sco');
var buttons = document.querySelectorAll('#bttn');
var bottom = document.querySelector('#bottom');
var valBttn1 = document.querySelector('bttn1.value');
var valBttn2 = document.querySelector('bttn2.value');
var valBttn3 = document.querySelector('bttn3.value');
var bttn1 = document.getElementById('bttn1');
var bttn2 = document.getElementById('bttn2');
var bttn3 = document.getElementById('bttn3');
var body = document.querySelector('body');


// event listeners


bttn1.addEventListener('click', function(evt) {
    console.log('button "A" works');    
    if (bttn1.value === ans) {
    console.log("Yay!!! You're so smart!");
    score += 10;
    init();
    } else {
    console.log("You didn't get it :(");
} 
});



bttn2.addEventListener('click', function(evt) {
    console.log('button "B" works');    
    if (bttn2.value === ans) {
    console.log("Yay!!! You're so smart!");
    score += 10;
    init();
    } else {
    console.log("You didn't get it :(");
} 
});



bttn3.addEventListener('click', function(evt) {
    console.log('button "C" works');    
    if (bttn3.value === ans) {
    console.log("Yay!!! You're so smart!");
    score += 10;
    init();
    } else {
    console.log("You didn't get it :(");
} 
});



// functions
init();

function getRandomProb() {
    rndProb = Math.floor(Math.random() * problems.length);
    prob = problems[rndProb].question;
    ans = problems[rndProb].answer;
    return prob;
}

function init() {
    getRandomProb();
    render();
}

function render() {
    if (score === 100) {
        quest.innerHTML = "You reached 100 points!" + "<br/>" + "You're so smart!!";
        sco.innerHTML = 100;
        confetti.start();
    } else {
        quest.innerHTML = prob;
        sco.innerHTML = score;
    }  
}

init();

/*
    for(var i=0; i < problems.length; i++){
            //iterate through questions and alert user
        alert(problems[i].question);
            //problems[i].question;

        var ask = window.prompt(problems[i].prompt); 
            //var ask = problems[i].prompt; 
            //checks if answer is correct and alerts user

        if(ask == problems[i].answer){
            score++;
            alert("Yay!!! You're so smart!");

        } else {
            alert("You didn't get it :(");
        }
    }
*/
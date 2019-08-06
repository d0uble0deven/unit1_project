//state
var problems = [
    {
    question: "5+5=?\n(A) 3\n(B) 10\n(C) 16",
    answer: "A"
    },
    {
    question: "2+2=?\n(A) 8\n(B) 4\n(C) 1",
    answer: "B"
    },
    {
    question: "8*9=?\n(A) 86\n(B) 40\n(C) 72",
    answer: "C"
    }
]

var questions;

// cached elements
var display = document.getElementById('display');
var quest = document.getElementById('quest');
var score = document.getElementById('score');
var buttons = document.querySelectorAll('#bttn');
var bttn1 = document.getElementById('bttn1');
var bttn2 = document.getElementById('bttn2');
var bttn3 = document.getElementById('bttn3');
var valBttn1 = document.querySelector('bttn1.value');

// event listeners
bttn1.addEventListener('click', function(evt) {
    console.log('button "A" works');    
//if statements to be in a separat function to check
    //the function should be called once button is clicked
        //function should also be called after questioned iteration in render
for(let i = 0; i <problems.length; i++) {
    if (bttn1.value === problems[i].answer) {
    console.log("Yay!!! You're so smart!");
    } else {
    console.log("You didn't get it :(");
    }} 
});




// functions

//iterates through questions NOT WORKING
for(let i=0; i < problems.length; i++){
    questions = problems[i].question;
    

};

console.log(questions);



/*
//button clicks check answer and then display message
document.addEventListener('click', function() {
//check if clicked button === problems.answer;
for(let i = 0; i <problems.length; i++) {
   if(problems[i].answer === buttons); 
}

render();
});

*/


/*
//puts question in display RENDER
for (let i = 0; i < problems; i++) {
    var prompt = problems[i].question;
render()
}
*/




function init() {
    render();
}


function render() {
    //display question WORKS
    quest.textContent = questions;
    // console.log("Yay!!! You're so smart!")


}

init();



/* event listener format
 btn.addEventListener('click', function(evt) {
   const li = document.createElement('li');
   const inp = document.querySelector('input');
   li.textContent = inp.value;
 });
  */


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
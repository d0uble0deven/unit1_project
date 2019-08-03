var problems = [
    {
    question: "5+5=?\n(a) 3\n(b) 10\n(c) 16",
    answer: "b"
    },
    {
    question: "2+2=?\n(a) 8\n(b) 4\n(c) 1",
    answer: "b"
    }
]
var score = 0;

for(var i=0; i < problems.length; i++){
    //iterate through questions and alert user
    alert(problems[i].question);
    var ask = window.prompt(problems[i].prompt); 
    //checks if answer is correct and alerts user
    if(ask == problems[i].answer){
        score++;
        alert("Yay!!! You're so smart!");
    } else {
        alert("You didn't get it :(");
    }
}

// render function - show question in div not alert&prompt message

console.log(problems);
console.log(score);
console.log(ask);
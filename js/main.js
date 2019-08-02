var problems = [
    {
    question: "5+5=?\n(a) 3\n(b) 10\n(c) 16",
    answer: "10"
    },
    {
    question: "2+2=?\n(a) 8\n(b) 4\n(c) 1",
    answer: "4"
    }
]
var score = 0;

for(var i=0; i < problems.length; i++){
    var ask = window.prompt(problems[i].prompt);
    //iterate through questions and alert user
    alert(ask == problems[i].question);
    //checks if answer is correct and alerts user
    if(ask == problems[i].answer){
        score++;
        alert("Yay!!! You're so smart!");
    } else {
        alert("You didn't get it :(");
    }
}

console.log(problems);
console.log(score);
console.log(ask);
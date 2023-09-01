var questions=[{
    "question":"Javascript is an _______ language?",
    "option1": "Object-Oriented",
    "option2": "Object-Based",
    "option3": "Procedural",
    "option4": "None of the above",
    "answer":"1"
},{
    "question":"Which of the following keywords is used to define a variable in Javascript?",
    "option1": "var",
    "option2": "let",
    "option3": "both A and B",
    "option4": "None of the above",
    "answer":"3"
},{
    "question":" Which of the following methods is used to access HTML elements using Javascript?",
    "option1": "getElementbyid()",
    "option2": "getElementbyClassName()",
    "option3": "both A and B",
    "option4": "None of the above",
    "answer":"3"
},{
    "question":"Upon encountering empty statements, what does the Javascript Interpreter do?",
    "option1": "Throws an error",
    "option2": "Ignore the statements",
    "option3": "Give a warning",
    "option4": "None of the above",
    "answer":"2"
},{
    "question":"Which of the following methods can be used to display data in some form using Javascript?",
    "option1": "document.write()",
    "option2": "console.log()",
    "option3": "window.alert()",
    "option4": "All of the above",
    "answer":"4"
}]
var container = document.getElementById('container');
var question = document.getElementById('question');
var option1 = document.getElementById('Option1');
var option2 = document.getElementById('Option2');
var option3 = document.getElementById('Option3');
var option4 = document.getElementById('Option4');
var result = document.getElementById('result');

var currQuestion=0;
var score = 0;
var totalQuestions=questions.length;

function loadQuestion(index){
    var data = questions[index];
    question.textContent=(index+1)+'. '+data.question;
    option1.textContent= data.option1;
    option2.textContent = data.option2;
    option3.textContent = data.option3;
    option4.textContent = data.option4;
    var selectedOption = document.querySelector('#container input[type=radio]:checked');
    if(selectedOption)selectedOption.checked=false;
    
}

loadQuestion(currQuestion);
function  NextQuestion(){
    currQuestion++; 
    var selectedOption = document.querySelector('#container input[type=radio]:checked');
    if(!selectedOption){
    alert("Please Enter an option !!!");
    currQuestion--;
     return;
    }
    
    if(questions[currQuestion-1].answer == selectedOption.value){
    score+=10;
    }
    selectedOption.checked=false;
   
    if(currQuestion==totalQuestions-1){
        document.getElementById('next').textContent='Finish';
    }
  
    if(currQuestion == totalQuestions){
        container.style.display='none';
        result.style.display='';
        result.style.textAlign='center';
        result.style.fontFamily='Poppins';
        result.innerHTML=`<div id="score"> Your Score: ${score} </div>`;
        
    }
    loadQuestion(currQuestion);     
};
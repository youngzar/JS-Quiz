
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var correct = 0;
	var wrong = [];


	if (question1 == "mkdir") {
		correct++;
}
	if (question2 == "rm") {
		correct++;
}	
	if (question3 == "rm -rf") {
		correct++;
	}

	if (question4 == "cp -r") {
		correct++;
	}

	if (question5 == "touch") {
		correct++;
	}

	if (question6 == "true") {
		correct++;
	}

	if (question7 == "passwd") {
		correct++;
	}

	if (question8 == "both") {
		correct++;
	}

	if (question9 == "q") {
		correct++;
	}

	if (question10 == "find") {
		correct++;
	}

	// wrong answers //
	if (question1 !== "mkdir") {
		wrong.push(" question 1 ");
}
	if (question2 !== "rm") {
		wrong.push(" question 2 ");
}	
	if (question3 !== "rm -rf") {
		wrong.push(" question 3 ");
	}

	if (question4 !== "cp -r") {
		wrong.push(" question 4 ");
	}

	if (question5 !== "touch") {
		wrong.push(" question 5 ");
	}

	if (question6 !== "true") {
		wrong.push(" question 6 ");
	}
 
	if (question7 !== "passwd") {
		wrong.push(" question 7 ");
	}

	if (question8 !== "both") {
		wrong.push(" question 8 ");
	}

	if (question9 !== "q") {
		wrong.push(" question 9 ");
	}

	if (question10 !== "find") {
		wrong.push(" question 10 ");
	}

	
	
	var pictures = ["img/perfect.gif","img/great.gif", "img/ok.gif", "img/shake.gif", "img/virtualhug.gif"];
	var messages = ["Perfect Score!", "Great Job!", "Meh", "Dissapointing"];
	var score;

	if (correct >= 0 && correct < 5) {
		score = 3;
	}

	if (correct >= 5 && correct < 7) {
		score = 2;
	}

	if (correct >= 7 && correct < 10) {
		score = 1;
	}

	if (correct == 10) {
		score = 0;
    }

	if (wrong.length > 0){
		document.getElementById("number_wrong").innerHTML = "Questions wrong: " + "<ol>" + wrong + "</ol>";
	}

	if (wrong.length == 0){
		document.getElementById("number_wrong").innerHTML = " ";
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " out of 10 correct.";
	document.getElementById("picture").src = pictures[score];
	}


	
	const answer = prompt("Are you ready for the quiz? Type 'yes' or 'no'")

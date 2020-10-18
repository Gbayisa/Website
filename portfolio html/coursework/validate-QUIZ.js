var score = 0;
// the valiadate function is called, followed by the questions in order and the the result function
function validate(){

	getNameInput();
	questionOne();
	questionTwo();
	questionThree();
	questionFour();
	results();

	return true;
}


//Gets the name input from the user, If field is empty background turns yellow
//if the field contains an input background stays white and user is alerted "Input OK"	 
function getNameInput(){

	if (document.forms[0].UserInfo.value == "") {
	alert("Name input not valid");
	UserInfo.style.backgroundColor="yellow";
	}

	else {
	alert("Input OK");
	}
	UserInfo.style.backgroundColor="white";
	return false;
}

//if option chosen for question 1 is the third choice "c", variable score is incremented
function questionOne(){

	if (document.forms[0].Question1.value == "c"){
		Question1.style.backgroundColor="white";
		score++;
	}
// else if the user choses any other optiion thaan the third choice, background is highlighted yellow
	else {
		Question1.style.backgroundColor="yellow";
	}	


}
// If the user picks either option a or c the answer is correct
function questionTwo(){

	if (document.getElementById("Question2a").checked){
	}

	if (document.getElementById("Question2c").checked){	
	}

	if (document.getElementById("Question2b").checked){
			Question2b.style.backgroundColor="yellow";
	}

	if (document.getElementById("Question2d").checked){
			Question2d.style.backgroundColor="yellow";
	}

}
// If the user picks either option b the answer is correct
function questionThree(){

	if (document.getElementById("Question3b").checked){
	}

	if (document.getElementById("Question3a").checked){
			Question3.style.backgroundColor="yellow";
	}

	if (document.getElementById("Question3c").checked){
			Question3.style.backgroundColor="yellow";
	}

	if (document.getElementById("Question3d").checked){
			Question3.style.backgroundColor="yellow";
	}

}
	

// if the user inputs the correct text the scoree is incremented
// if the user additionally uses capitals the result is made lower case 
function questionFour(){

	var Question4Input = document.forms[0].Question4.value;

	var correctAnswer = "british australian and new zealand sign language";

	if(Question4Input.toLowerCase() == correctAnswer){
		score++;
	}

// if the field is left empty the user is altered and trhe background changes yellow
	if (document.forms[0].Question4.value == ""){
		alert("Please answer Question 4");
		Question4.style.backgroundColor="yellow";
	}

}

// The checkbox questions points are incremented here as it is more complicated to do so above
function results(){
	
	

	if (document.getElementById("Question2a").checked){
		 	score++;
	}

	if (document.getElementById("Question2c").checked){
			score++;
	}

	if (document.getElementById("Question3b").checked){
			score++;
	}

// at the end, the user is alerted to his or her final score
	alert("Your result is " + score + " /5");

}


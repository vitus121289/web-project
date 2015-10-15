var smlScaleTesting = document.getElementById("smlScaleTesting");

var lrgScaleTesting = document.getElementById("lrgScaleTesting");

var menuSml = smlScaleTesting.querySelectorAll("a.testType");

var menuLrg = lrgScaleTesting.querySelectorAll("a.testType");

var radioButton = document.getElementsByName("relationship");

// console.log(radioButton);
// radioButton.addEventListener("click", testFunction);

var menu = new Array();


menu.push(menuSml);

menu.push(menuLrg);

// console.log(menuSml.length);

// console.log(menuLrg.length)

// function to add click listeners to different calc types

for (var i = 0; i < menu.length; i++) {

	for (var j= 0; j < menu[i].length; j++) {

		menu[i][j].addEventListener("click", dispSteps);

	}

}

//function to display steps to undertake to test hypothesis

function dispSteps() {

	var val = this.getAttribute("value");

	// console.log(val);

	switch(val){

		case "0000":
			// createDispTesting();
			// console.log(this);
			// console.log(radioButton.length);
			break;
		case "0001":
			console.log(this);
			break;
		case "0010":
			console.log(this);
			break;
		case "0011":
			console.log(this);
			break;
		case "0100":
			var given = ["x", "u", "s", "n"];
			var varName = ["sampMean", "popMean", "standDev", "sampSize"];
			createDispSteps(given, varName);
			break;
		case "0101":
			console.log(this);
			break;
		case "0110":
			console.log(this);
			break;
		case "0111":
			console.log(this);
			break;
		default:
			console.log("Error: value not recognize.");
			break;

	}

}

function createDispSteps(given, varName) {

	document.getElementById("step1").innerHTML = "Step I: H<sub>O</sub>: u = <input type=\"text\"><br>H<sub>A</sub>: u <input type=\"radio\" name=\"relationship\" checked>> or <input type=\"radio\" name=\"relationship\">< or <input type=\"radio\" name=\"relationship\">!= <input type=\"text\">";

	document.getElementById("step2").innerHTML = "Step II: &alpha; = <input type=\"text\" readonly> z<sub>&alpha;</sub>(critical value) = <input type=\"text\" readonly>";

	document.getElementById("step3").innerHTML = "Step III: Given: <br> <table border=\"1px\">" + createVarTable(given, varName) + "</table>";

	document.getElementById("step4").innerHTML = "Step IV: ";

	document.getElementById("step5").innerHTML = "Step V: Interpretation: <br> <textarea rows=\"10\" cols=\"75\">"

}

function createVarTable(given, varName) {

	var varTable = "";

	for (var i = 0; i < given.length; i++) {

		varTable = varTable + "<tr><td>" + given[i] + "</td><td><input type=\"text\" id=\"" + varName[i] + "\"></td></tr>"

		// console.log(varName[i]);
	}

	return varTable;

}

function testFunction() {

	console.log("your in testFunction");

}
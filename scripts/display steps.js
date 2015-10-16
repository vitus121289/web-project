var smlScaleTesting = document.getElementById("smlScaleTesting");

var lrgScaleTesting = document.getElementById("lrgScaleTesting");

var menuSml = smlScaleTesting.querySelectorAll("a.testType");

var menuLrg = lrgScaleTesting.querySelectorAll("a.testType");

var radioButton = document.getElementsByName("relationship");

var menu = new Array();

menu.push(menuSml);

menu.push(menuLrg);

// console.log(menuSml);

console.log(lrgScaleTesting);

// console.log(menu);

// function to add click listeners to different calc types

for (var i = 0; i < menu.length; i++) {

	for (var j= 0; j < menu[i].length; j++) {

		menu[i][j].addEventListener("click", dispSteps);

	}

}

solveBtn = document.getElementById("solveBtn");

//function to display steps to undertake to test hypothesis

function dispSteps() {

	var val = this.getAttribute("value");

	// console.log(this);

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
			var given = ["x", "u<sub>0</sub>", "s", "n"];
			var varName = ["sampMean", "popMean", "standDev", "sampSize"];
			createDispSteps(given, varName, val);
			break;
		case "0101":
			var given = ["x<sub>1</sub>", "x<sub>2</sub>", "standard deviation<sub>1</sub>", "standard deviation<sub>2</sub>", "n<sub>1</sub>", "n<sub>2</sub>"];
			var varName = ["sampMean1", "sampMean2", "standDev1", "standDev2", "sampSize1", "sampSize2"];
			createDispSteps(given, varName, val);
			break;
		case "0110":
			var given = ["p", "P", "n"];
			var varName = ["sampProp", "popProp", "sampSize"];
			createDispSteps(given, varName, val);
			break;
		case "0111":
			var given = ["p<sub>1</sub>", "p<sub>2</sub>", "n<sub>1</sub>", "n<sub>2</sub>"]
			var varName = ["sampProp1", "sampProp2", "sampSize1", "sampSize2"];
			createDispSteps(given, varName, val);
			break;
		default:
			console.log("Error: value not recognized.");
			break;

	}

}

// function that creates the content to be displayed in the steps division

function createDispSteps(given, varName, val) {

	document.getElementById("step1").innerHTML = "Step I: H<sub>O</sub>: u = <input type=\"text\"><br>H<sub>A</sub>: u <input type=\"radio\" name=\"relationship\" checked>> or <input type=\"radio\" name=\"relationship\">< or <input type=\"radio\" name=\"relationship\">!= <input type=\"text\">";

	document.getElementById("step2").innerHTML = "Step II: &alpha; = <input type=\"text\" readonly> z<sub>&alpha;</sub>(critical value) = <input type=\"text\" readonly>";

	document.getElementById("step3").innerHTML = "Step III: Given: <br> <table id=\"varTable\" border=\"1px\">" + createVarTable(given, varName) + "</table> <div id=\"solution\"><button id=\"solveBtn\" value=\"" + val + "\" onclick=\"computeForZorT();\">Solve</button></div>";

	document.getElementById("step4").innerHTML = "Step IV: ";

	document.getElementById("step5").innerHTML = "Step V: Interpretation: <br> <textarea rows=\"10\" cols=\"75\">"

}

// function that creates the table where the user will input the given numbers used in z-tests or t-tests

function createVarTable(given, varName) {

	var varTable = "";

	for (var i = 0; i < given.length; i++) {

		varTable = varTable + "<tr><td>" + given[i] + "</td><td><input type=\"text\" id=\"" + varName[i] + "\" class=\"variables\"></td></tr>"

		// console.log(varName[i]);
	}

	return varTable;

}
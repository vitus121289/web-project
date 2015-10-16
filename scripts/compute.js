// function for to compute for t-test or z-test depending on the value of variable val

function computeForZorT() {

	var val = document.getElementById("solveBtn").value;

	// console.log(document.getElementById("varTable"));

	var givenVar = document.getElementById("varTable");

	var givenVal = givenVar.querySelectorAll("input.variables");

	// var given = document.getElementsByClassName("variables");

	console.log(givenVal);

	var z = 0;

	switch(val){
		case "0000":
			statements_1
			break;
		case "0001":
			statements_1
			break;
		case "0010":
			statements_1
			break;
		case "0011":
			statements_1
			break;
		case "0100":
			z = testPopMean(givenVal);
			break;
		case "0101":
			z = comparePopMeans(givenVal);
			break;
		case "0110":
			z = testPopProportion(givenVal);
			break;
		case "0111":
			z = comparePopProportions(givenVal);
			break;
		default:
			console.log("Error: value not recognized.");
			break;
	}

	showAnswer(z);

}

// function used when testing the population mean

function testPopMean(givenVal) {

	var x = parseFloat(givenVal[0].value);
	var u = parseFloat(givenVal[1].value);
	var s = parseFloat(givenVal[2].value);
	var n = parseFloat(givenVal[3].value);
	var z = 0;

	z = (x-u)/(s/Math.sqrt(n));

	return z;

}

// fucntion used when comparing the sample mean against the population mean

function comparePopMeans(givenVal) {

	var x1 = parseFloat(givenVal[0].value);
	var x2 = parseFloat(givenVal[1].value);
	var standDev1 = parseFloat(givenVal[2].value);
	var standDev2 = parseFloat(givenVal[3].value);
	var n1 = parseFloat(givenVal[4].value);
	var n2 = parseFloat(givenVal[5].value);

	var z = 0;

	z = (x1 - x2)/(Math.sqrt((Math.pow(standDev1, 2)/n1) + (Math.pow(standDev2, 2)/n2)));

	return z;

}

// function used to test the population proportion

function testPopProportion(givenVal) {

	var p = parseFloat(givenVal[0].value);
	var P = parseFloat(givenVal[1].value);
	var n = parseFloat(givenVal[2].value);
	var z = 0;

	z = (p - P)/(Math.sqrt((P*(1-P))/n));

	return z;

}

// function used to compare the sample proportion against the population proportion

function comparePopProportions(givenVal) {

	var p1 = parseFloat(givenVal[0].value);
	var p2 = parseFloat(givenVal[1].value);
	var n1 = parseFloat(givenVal[2].value);
	var n2 = parseFloat(givenVal[3].value);

	var z = 0;
	var p = 0;
	var SE = 0;

	p = (p1*n1 + p2*n2)/(n1 + n2);

	console.log(p);

	SE = Math.sqrt(p*(1-p)*(1/n1 + 1/n2));

	console.log(SE);

	z = (p1 - p2)/SE;

	return z;

}

/*function used to display the computed value of either z-test or t-test 
and at the same time replaces the solve button with the answer*/

function showAnswer(ans) {

	document.getElementById("solution").innerHTML = "Answer = " + Math.round(ans*10000)/10000;

}
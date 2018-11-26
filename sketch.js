var a1, d, n, hold;
var sum = 0;
var sequence = [];

function setup(){
	createCanvas(500, 500);
	background(212, 252, 224);
	//a1
	setO = createInput();
  setO.position(20, 65);
	instruction = createElement('p', 'a<sub>1</sub> (First Number)');
  instruction.position(20, 15);
	//d
	setT = createInput();
  setT.position(20, 140);
	instruction2 = createElement('p', 'd (Common Ratio)');
  instruction2.position(20, 95);
	//n
	setN = createInput();
  setN.position(20, 215);
	instruction3 = createElement('p', 'n (Number of Items in Sequence)');
  instruction3.position(20, 175);
	//go button
	buttonGo = createButton('Go');
  buttonGo.position(setT.x, 255);
  buttonGo.mousePressed(printSequenceSeries);
}

function draw(){
	a1 = setO.value();
	d = setT.value();
	n = setN.value();
	a1 = parseInt(a1);
	d = parseFloat(d);
	n = parseInt(n);

}

function printSequenceSeries(){
	sequence = [];
	sum = 0;
	for(i = 0; i < n; i++){
		hold = a1*(d**i);
		print(hold)
		hold*=100;
		float(hold);
		print((hold*100)-hold%.1);
		print(hold)
		hold = hold/100;
		print(hold)
		sequence.push(hold);
		sum = sum+hold;
	}
		//output text
	background(212, 252, 224);	 
	textStyle(BOLD);
	textSize(20);
	text("Sequence",20,320);
	textStyle(NORMAL);
	textSize(12);
	text(sequence,20, 340);
	textStyle(BOLD);
	textSize(20);
	text("Sum of Series",20,375);
	textStyle(NORMAL);
	textSize(12);
	text(sum,20, 395);
	textStyle(BOLD);
	textSize(20);
	text("Sum of Series if infinite",20,425);
	textStyle(NORMAL);
	textSize(12);
	if(d>1){
	text('The common ratio must be less than 1 for the series to be infinite.',20, 450);
	}
	else{
	/*sequence = [];
	sum = 0;
	n=10000;
	for(i = 0; i < n; i++){
		hold = a1*(d**i);
		sequence.push(hold);
		sum = sum+hold;
	}
	text('Sum of 10,000',20, 450);
	text(sum,20, 470); */
	var newsum = int((a1/(1-d)));
	text(newsum,20, 450);
	}
}

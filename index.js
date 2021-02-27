const number = document.querySelectorAll('.num');
const operator = document.querySelectorAll('.op');
const eq = document.querySelector('.eq');

var output = document.querySelector('.output');
var histor = document.querySelector('.history');

var current = '';
var histord = '';
var op = undefined;
var ans = undefined;


for (var i = 0; i < number.length; i++) {
	number[i].addEventListener('click', function () {
	var	num = this.innerText;
		console.log(num);
		appendnum(num);
	})
}

for (var i = 0; i < operator.length; i++) {
	operator[i].addEventListener('click', function () {
		op = this.innerText;
		display(op)
	})
}


eq.addEventListener('click', function () {
   calculate();
});


function appendnum(num) {
   current = Number(current.toString() + num.toString());
   output.innerText = current;
}

function display(op) {
	if (histord != '') {histor.innerText = histord + ' ' + op + ' ' + current;
		calculate();

	}
	histord = Number(current)
	histor.innerText = histord + ' ' + op;
	output.innerText = '';
	current = ''
	  
}

function calculate() {
	histor.innerText = histord + ' ' + op + ' ' + current;
    	switch(op){
		case '+':
		ans = histord + current;
		break;
		case '-':
		ans = histord - current;
		break;
		case '/':
		ans = histord / current;
		break;
		case '*':
		ans = histord * current;
		break;

		default:
		return;
}

   output.innerText = ans;
   current = ans;
}
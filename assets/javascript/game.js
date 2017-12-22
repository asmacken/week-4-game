var wins = 0;
var losses = 0;
var runningCount = 0;

var picked = Math.floor((Math.random()* 100) + 19);
console.log(picked);

var diamond = Math.floor((Math.random()* 12) + 1);
console.log(diamond);
var green = Math.floor((Math.random()* 12) + 1);
console.log(green);
var purple = Math.floor((Math.random()* 12) + 1);
console.log(purple);
var red = Math.floor((Math.random()* 12) + 1);
console.log(red);

var score = function (){
  $('#win').empty();
	$('#win').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
	$('#runningcount').empty();
	$('#runningcount').append(runningCount);
}

var reset = function(){
  runningCount = 0;
  picked = Math.floor((Math.random()* 100) + 19);

	$('#randomnumber').empty();
	$('#randomnumber').append(picked);

	diamond = Math.floor((Math.random()* 12) + 1);
  console.log(diamond);
  green = Math.floor((Math.random()* 12) + 1);
  console.log(green);
  purple = Math.floor((Math.random()* 12) + 1);
  console.log(purple);
  red = Math.floor((Math.random()* 12) + 1);
  console.log(red);
    score();
}
var config = function (){
	if(runningCount == picked){
		wins = wins + 1;
    alert('You win!')
		reset();
}
	else if(runningCount > picked){
		losses = losses + 1;
    alert('You lose!');
		reset();
}
	else{
		score();
}}

	$('#runningcount').append(runningCount);
	$('#randomnumber').append(picked);

	$(document).ready(function(){
	$('#diamond').click(function(){
		runningCount = runningCount + diamond;
		config();
	})
	$('#green').click(function(){
		runningCount = runningCount + green;
		config();
	})
	$('#purple').click(function(){
		runningCount = runningCount + purple;
		config();
	})
	$('#red').click(function(){
		runningCount = runningCount + red;
		config();
	})
});

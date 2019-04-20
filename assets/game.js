$(document).ready(function() {
    var NumberToMatch;
    var YourCurrentNumber;
	var totalScore = 0;
	var wins = 0;
	var losses = 0;
	var crystal1Num;
	var crystal2Num;
	var crystal3Num;
    var crystal4Num;
    
    function randomNewNum() {
        NumberToMatch=Math.floor(Math.random()*20);



    }
    console.log(NumberToMatch);


    function myFunction() {
        document.getElementById("demo").innerHTML = Math.random();
     

}
 console.log(myFunction);
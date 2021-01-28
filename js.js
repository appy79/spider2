var qstns=["","Q1. ", 
			 "Q2. ",
			 "Q3. ", 
			 "Q4. ",
			 "Q5. ",
			 "Q6. ",
			 "Q7. ",
			 "Q8. ",
			 "Q9. ",
			 "Q10. "];

var optn1=["", "Hyderabad", "Chicago", "London", "Nice"];
var optn2=["", "Bangalore", "Las Vegas", "Manchester", "Paris"];
var optn3=["", "Delhi", "Los Angles", "Glasgow", "Marseille"];
var optn4=["", "Mumbai", "Washington DC", "Edinburgh", "Toulouse"];
var cor=["", "Delhi", "Washington DC", "London", "Paris"];
var pnts=[0, 2, 7, 5, 8];
var att=[0,0,0,0,0];
var i=0;
var sco=0;
var correct;
var dis = document.getElementsByTagName("button");
var w = document.getElementById("tabl");

function data(){
	document.getElementById('qstn').innerHTML=qstns[i];
	document.getElementById('opt1').innerHTML=optn1[i];
	document.getElementById('opt2').innerHTML=optn2[i];
	document.getElementById('opt3').innerHTML=optn3[i];
	document.getElementById('opt4').innerHTML=optn4[i];
	document.getElementById('pts').innerHTML=pnts[i];
}

function wel(){
	w.style.visibility="hidden";
	document.getElementById('tab').style.visibility="hidden";
	next();
}

function clo(){
	w.style.visibility="hidden";
	document.getElementById('sco').innerHTML=sco;
	document.getElementById('tab').style.visibility="visible";
}

function str(){
	document.getElementById('start').style.visibility="hidden";
	document.getElementById('wlcm').style.visibility="hidden";
	w.style.visibility="visible";
}

function clear(){
	for(var j=1; j<5; j++){
		document.getElementById('opt'+j).style.backgroundColor="#eee";
	}
}

function check(clicked_id){
	switch(i){
		case 1:
			correct=3;
			break;
		case 2:
			correct=4;
			break;
		case 3:
			correct=1;
			break;
		case 4:
			correct=2;
			break;
	}
	att[i]++;
	if(document.getElementById(clicked_id).innerHTML==cor[i]){
		document.getElementById(clicked_id).style.backgroundColor="lightgreen";
		sco=sco+pnts[i];
	}
	else{
		document.getElementById(clicked_id).style.backgroundColor="red";
		document.getElementById('opt'+correct).style.backgroundColor="lightgreen";
	}
	for (var k = 0; k < 4; k++) {
    	dis[k].disabled=true;
	}
}

function next(){
	i++;
	if(i>4){
		clo();
		i--;
	}
	else{
		data();
		clear();
	}
	if(att[i]==0){
		for (var k = 0; k < 4; k++) {
    		dis[k].disabled=false;
		}
	}
	else{
		for (var k = 0; k < 4; k++) {
    		dis[k].disabled=true;
		}
	}
}
function prev(){
	i--;
	if(i<1){
		alert("No questions before this");
		i++;
	}
	else{
		data();
		clear();
	}
	if(att[i]==0){
		for (var k = 0; k < 4; k++) {
    		dis[k].disabled=false;
		}
	}
	else{
		for (var k = 0; k < 4; k++) {
    		dis[k].disabled=true;
		}
	}
}
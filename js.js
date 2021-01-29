var qstns=["","Q1.How is COVID-19 passed on?", 
			 "Q2. What are the common symptoms of COVID-19? ",
			 "Q3. Can you always tell if someone has COVID-19? ", 
			 "Q4. Can washing your hands protect you from COVID-19? ",
			 "Q5. Are people living with HIV always more at risk?",
			 "Q6. When should fabric face masks be worn?",
			 "Q7. Can COVID-19 be cured? ",
			 "Q8. Which of the following is an example of physical distancing? ",
			 "Q9. How can people living with HIV protect themselves from COVID-19?",
			 "Q10. Which of the following statement is/are correct about Favipiravir?"
			 ];

var optn1=["", "Through droplets that come from your mouth and nose when you cough or breathe out", 
			"A new and continuous cough", 
			"No, not everyone with COVID19 has symptoms", 
			"Yes, but only if you use a strong bleach",
			"Yes, people with HIV have weaker immune systems",
			"On public transport",
			"Yes, Hot drinks can cure COVID-19",
			"You stop going to crowded places and visiting other peoples houses",
			"Wash their hands regularly and follow the physical distancing advice",
			"Favipiravir is an antiviral COVID-19 drug"
			];

var optn2=["", "In sexual fluids, including semen, vaginal fluids or anal mucous", 
			"Fever", 
			"Yes, it will be obvious, a person with COVID19 coughs a lot", 
			"Yes, normal soap and water or hand sanitizer is enough",
			"No, people who adhere to antiretroviral treatment (ART) and have a high CD4 count arent more at risk",
			"In confined or crowded spaces",
			"No, COVID-19 is a death sentence",
			"You stop talking to the people you live with",
			"Keep taking their antiretroviral treatment",
			"Glenmark Pharmaceuticals under the brand name FabiFlu has launched an antiviral drug Favipiravir."
			];

var optn3=["", "By drinking unclean water", 
			"Tiredness", 
			"Yes, you can tell just by where a person comes from, their race and ethnicity", 
			"No, Washing your hands doesnt stop COVID19",
			"Cant be said",
			"In small shops",
			"No, but most people get better by themselves",
			"You stop speaking to your friends on the phone",
			"Exercise regularly, eat well and look after their mental health",
			"It is India's first COVID-19 drug launched, priced at Rs 103 per tablet." 
			];

var optn4=["", "All of the above", 
			"All of the above", 
			"None of the above", 
			"None of the above",
			"None of the above",
			"All of the above",
			"None of the above",
			"None of the above",
			"All of the above",
			"All the above are correct" 
			];

var cor=["", "Through droplets that come from your mouth and nose when you cough or breathe out", 
			"All of the above", 
			"No, not everyone with COVID19 has symptoms", 
			"Yes, normal soap and water or hand sanitizer is enough",
			"No, people who adhere to antiretroviral treatment (ART) and have a high CD4 count arent more at risk",
			"All of the above",
			"No, but most people get better by themselves",
			"You stop going to crowded places and visiting other peoples houses",
			"All of the above",
			"All the above are correct" 
			];

var pnts=[0, 2, 7, 5, 8, 4, 1, 3, 6, 9, 10];
var att=[0,0,0,0,0,0,0,0,0,0,0];
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
	document.getElementById('na').innerHTML=localStorage.getItem("name");
}

function str(){
	document.getElementById('start').style.visibility="hidden";
	document.getElementById('wlcm').style.visibility="hidden";
	w.style.visibility="visible";
	localStorage.setItem("name", document.getElementById('name').value);
}

function clear(){
	for(var j=1; j<5; j++){
		document.getElementById('opt'+j).style.backgroundColor="#eee";
	}
}

function check(clicked_id){
	switch(i){
		case 1:
			correct=1;
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
		case 5:
			correct=2;
			break;
		case 6:
			correct=4;
			break;
		case 7:
			correct=3;
			break;
		case 8:
			correct=1;
			break;
		case 9:
			correct=4;
			break;
		case 10:
			correct=4;
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
	if(i>10){
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
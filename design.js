function div(){
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    b=b/100
    b=b*b
    g=a/b
    document.getElementById("h2").textContent=(g).toFixed(1);

if(g<16){
    document.getElementById("h21").textContent="Severe Thinness"
}
 
else if(g>=16 && g<17){
    document.getElementById("h21").textContent="Moderate Thinness"
}

else if(g>=17 && g<18.5){
    document.getElementById("h21").textContent="Mild Thinness"
}

else  if(g>=18.5 && g<25){
    document.getElementById("h21").textContent="Normal"
}

else if(g>=25 && g<30){
    document.getElementById("h21").textContent="Over Weight"
}

else if(g>=30 && g<35){
    document.getElementById("h21").textContent="Obese Class I"
}

else if(g>=35 && g<40){
    document.getElementById("h21").textContent="Obese Class II"
}

else{
    document.getElementById("h21").textContent="Obese Class III"
}
}
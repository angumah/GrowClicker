var energy = 0;
var clickvalue = 1;
var particleUnlock = false;
var particles = 0;
var partClickValue = 1;
var energyMax = 100;

function energyClick(){
energy += clickvalue;
var e = document.getElementById("energy");
e.innerHTML = energy;

if (energy == energyMax) {
    document.getElementById("eButton").disabled = true;
}

else {
    document.getElementById("eButton").disabled = false;
}
if (energy >= 30) {
    particleUnlock = true;
}

}

function particleClick(){
if (energy >= 100) { 
particleUnlock = true;  
setInterval(myTimer, 1000);
var e = document.getElementById("energy");
e.innerHTML = energy;
}
if (particleUnlock == true){
    if (energy >= 30){
    particles += partClickValue;
    var p = document.getElementById("particle");
    p.innerHTML = particles;
    energy -= 30;
    var e = document.getElementById("energy");
    e.innerHTML = energy;
}
}
console.log(particles)
}

function myTimer(){
energy++;
var e = document.getElementById("energy");
e.innerHTML = energy;
}
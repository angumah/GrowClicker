var energy = 0;
var clickvalue = 1;
var particleUnlock = false;
var particles = 0;
var partClickValue = 1;
var energyMax = 100;
var timer = false;
var particleMax = 100;
var timeInt = 1000;
var gravUnlock = false;

function energyClick(){
energy += clickvalue;
var e = document.getElementById("energy");
e.innerHTML = energy;

if (energy == energyMax) {
    document.getElementById("eButton").disabled = true;
    timer = false;
}

else {
    document.getElementById("eButton").disabled = false;
}
if (energy >= 30) {
    particleUnlock = true;
}
if (particleUnlock == true){
    var pButtonDisplay = document.getElementById("pButton");
    pButtonDisplay.style.display = "block";
    var particleBangDisplay = document.getElementById("particleBang");
    particleBangDisplay.style.display = "block";
}
}

function particleClick(){
    if (particleUnlock == true && energy >= 30){
        particles += partClickValue;
        var p = document.getElementById("particle");
        p.innerHTML = particles;
        energy -= 30;
        var e = document.getElementById("energy");
        e.innerHTML = energy;
        myTimer();
    }
    if(particleUnlock == true && energy >= 30 && energy == energyMax){
        particles += partClickValue;
        var p = document.getElementById("particle");
        p.innerHTML = particles;
        energy -= 30;
    }

}
function myTimer(){
    if (energy < energyMax){
    energy++;
    var e = document.getElementById("energy");
    e.innerHTML = energy;
    setTimeout(myTimer, 1000)
    }
    }

function gravityClick(){
    if (particles >=10 && energy >= 50){
    energyMax += 10;
    var eMax = document.getElementById("energyMax");
    eMax.innerHTML = energyMax;
    }
}
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
var gravity = 0;
var gravMax = 100;
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
        particleClickTimer();
    }
    else if(particleUnlock == true && energy >= 30 && energy == energyMax){
        particles += partClickValue;
        var p = document.getElementById("particle");
        p.innerHTML = particles;
        energy -= 30;
    }
    if (energy >=50 && particles >=10){
        gravUnlock = true;
    }
    if (gravUnlock == true){
        var gravButtonDisplay = document.getElementById("gravButton");
        gravButtonDisplay.style.display ="block";
        var gravBangDisplay = document.getElementById("gravBang");
        gravBangDisplay.style.display = "block"
    }
    if (particles == particleMax){
        document.getElementById("pButton").disabled = true;
    }
    else {
        document.getElementById("pButton").disabled = false;
    }
}
function particleClickTimer(){
    if (energy < energyMax){
    energy++;
    var e = document.getElementById("energy");
    e.innerHTML = energy;
    setTimeout(particleClickTimer, 1000)
    }
    }

function gravityClick(){
    if (gravUnlock == true && particles >=10 && energy >= 50 && gravity < gravityMax){
    energyMax += 10;
    var eMax = document.getElementById("energyMax");
    eMax.innerHTML = energyMax;
    gravityClickTimer();
    }
}

function gravityClickTimer(){
    if (particles < particleMax){
        particles++;
        var p = document.getElementById("particle");
        p.innerHTML = particles;
    }
}
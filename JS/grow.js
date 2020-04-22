var energy = 0;
var clickvalue = 1;
var particleUnlock = false;
var particles = 0;
var partClickValue = 1;
var energyMax = 100;
var timer = false;
var particleMax = 100;

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
}

function particleClick(){
    if (energy >= 30) { 
    timer = true;
    particleUnlock = true;}
    if (particleUnlock == true && timer == true && energy >= 30){
        setInterval(myTimer, 1000);
        particles += partClickValue;
        var p = document.getElementById("particle");
        p.innerHTML = particles;
        energy -= 30;
        var e = document.getElementById("energy");
        e.innerHTML = energy;
    }
    else {
        stop(myTimer);
    }
    if (particle == particleMax){
        document.getElementById("pButton").disabled = true;
    }
    else {
        document.getElementById("pButton").disabled = false;
    }
    
    function myTimer(){
    energy++;
    var e = document.getElementById("energy");
    e.innerHTML = energy;
    }
}
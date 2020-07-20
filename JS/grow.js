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
var particleArray =[];
var directionX = 1;
var directionY = 1;

function setup(){
    createCanvas(500,500);
    background(0);
}

function draw(){
    background(0);
    for (let i=0; i<particleArray.length;i++){
        fill(particleArray[i].pRed, particleArray[i].pGreen, particleArray[i].pBlue);
        ellipse(particleArray[i].xP, particleArray[i].yP, particleArray[i].rad1, particleArray[i].rad2);
        particleArray[i].xP += 3 * directionX;
        particleArray[i].yP -= 3 *directionY;
    if(particleArray[i].xP > 475 || particleArray[i].xP < 25 ){
        directionX *= -1;
    }
    if(particleArray[i].yP > 475 || particleArray[i].yP < 25){
        directionY *= -1;
    }
    
    }

}

function energyClick(){
energy += clickvalue;
var e = document.getElementById("energy");
e.innerHTML = energy;
if (energy >= 30) {
    particleUnlock = true;
}
if (particleUnlock == true){
    var pButtonDisplay = document.getElementById("pButton");
    pButtonDisplay.style.display = "inline";
    var particleBangDisplay = document.getElementById("particleBang");
    particleBangDisplay.style.display = "inline";
}
if (energy == energyMax){
    document.getElementById("eButton").disabled = true;
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
        var rad = random(10,25);
        var particle = new Particle(random(25,475), random(25,475), rad, rad, random(0,255), random(0,255), random(0,255), random(0,255));
        particleArray.push(particle);

    }
    if (energy < energyMax){
        document.getElementById("eButton").disabled = false;
    }
    if (particles >=10){
        gravUnlock = true;
    }
    if (gravUnlock == true){
        var gravButtonDisplay = document.getElementById("gravButton");
        gravButtonDisplay.style.display ="inline";
        var gravBangDisplay = document.getElementById("gravBang");
        gravBangDisplay.style.display = "inline";
    }
    if (particles == particleMax){
        document.getElementById("pButton").disabled = true;
    }
    else if (particles < particleMax){
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
    if (energy < energyMax){
        document.getElementById("eButton").disabled = false;
    }
    }
    /*

function gravityClick(){
    if (gravUnlock == true && particles >=10 && energy >= 50){
    energyMax += 10;
    var eMax = document.getElementById("energyMax");
    eMax.innerHTML = ("/" + energyMax);
    gravity++;
    var g = document.getElementById("gravity");
    g.innerHTML = gravity;
    gravityClickTimer();
    energy -= 50;
    particles -= 10;
    var e = document.getElementById("energy");
    e.innerHTML = energy;
    var p = document.getElementById("particle");
    p.innerHTML = particles;
    }
    if (gravity == gravityMax){
        document.getElementById("gravButton").disabled = true;
    }
    else{
        document.getElementById("gravButton").disabled = false;
    }
}

function gravityClickTimer(){
    if (particles < particleMax){
        particles++;
        var p = document.getElementById("particle");
        p.innerHTML = particles;
        setTimeout(gravityClickTimer, 1000);
    }
}

*/

class Particle{
    constructor(xP, yP, rad1, rad2, pRed, pGreen, pBlue, pTransparency){
        this.xP = xP;
        this.yP = yP;
        this.rad1 = rad1;
        this.rad2 = rad2;
        this.r = pRed;
        this.g = pGreen;
        this.b = pBlue;
        this.a = pTransparency;
    }
}
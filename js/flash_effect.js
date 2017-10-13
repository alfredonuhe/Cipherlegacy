var brightnss = 100;
var opacity =0;
var iID;

window.addEventListener("click", display);


function display(){
	brightnss=100;
	window.removeEventListener("click", display);
	document.getElementById("canvas").style.backgroundColor= "hsl(0, 100%,100%)";
	changeOpacity();
	iID0 = setInterval(HSL_downBright,35);
	particlesJS.load('particles-js', 'assets/particles.json', function() {
	console.log('callback - particles.js config loaded');
	});
}

function HSL_upBright(){
	if(brightnss <100){
		document.getElementById("canvas").style.backgroundColor= "hsl(0, 100%,"+ brightnss++ +"%)";
	}else{
		clearInterval(iID0);
	}
}

function HSL_downBright(){
	if(brightnss >0){
		brightnss= brightnss -2;
		document.getElementById("canvas").style.backgroundColor= "hsl(36, 100%,"+ brightnss +"%)";
	}else{
		clearInterval(iID0);
	}
}

function changeOpacity(){
		document.getElementsByClassName("soon")[0].style.display= "initial";
}

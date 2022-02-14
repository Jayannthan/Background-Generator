var colortext1=document.querySelector("h2");
var colortext2=document.querySelector("h3");
var colortext3=document.querySelector(".form-label");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var angle=document.querySelector(".form-range");
var body=document.querySelector(".gradview");
var selector=document.querySelector(".gradtype");

body.style.background =  "linear-gradient(" +angle.value+"deg, "+ color1.value + ", " + color2.value + ")";
colortext1.textContent= "Current CSS Background";
colortext3.textContent= angle.value+"°";
colortext2.textContent= color1.value+" =====> "+ color2.value ;


function setrange() {

	if (selector.value=="lg") {
		angle.max="360";
		angle.value="90";
		body.style.background =  "linear-gradient(" +angle.value+"deg, "+ color1.value + ", " + color2.value + ")";
		colortext1.textContent= "Current CSS Background";
		colortext3.textContent= angle.value+"°";
		colortext2.textContent= color1.value+" =====> "+ color2.value ;
	}
	else if (selector.value=="rg") {
		angle.max="100";
		angle.value="50";
		body.style.background =  "radial-gradient(circle at " +angle.value+"%, "+ color1.value + ", " + color2.value + ")";
		colortext1.textContent= "Current CSS Background";
		colortext3.textContent= "circle at "+angle.value;

		colortext2.textContent= color1.value+" =====> "+ color2.value ;
	}

	else if (selector.value=="cg") {
		angle.max="360";
		angle.value="100";

		body.style.background =  "conic-gradient(from "+angle.value+"deg,"+ color1.value + ", " + color2.value + ")";
		colortext1.textContent= "Current CSS Background";
		colortext3.textContent= angle.value+"°";
		colortext2.textContent= color1.value+" =====> "+ color2.value ;
	}
}

function setGrad() {

	if (selector.value=="lg") {
		body.style.background =  "linear-gradient(" +angle.value+"deg, "+ color1.value + ", " + color2.value + ")";
		colortext1.textContent= "Current CSS Background";
		colortext3.textContent= angle.value+"°";
		colortext2.textContent= color1.value+" =====> "+ color2.value ;
	}
	else if (selector.value=="rg") {
		body.style.background =  "radial-gradient(circle at " +angle.value+"%, "+ color1.value + ", " + color2.value + ")";
		colortext1.textContent= "Current CSS Background";
		colortext3.textContent= "circle at "+angle.value;
		colortext2.textContent= color1.value+" =====> "+ color2.value ;
	}

	else if (selector.value=="cg") {
		body.style.background =  "conic-gradient(from "+angle.value+"deg,"+ color1.value + ", " + color2.value + ")";
		colortext1.textContent= "Current CSS Background";
		colortext3.textContent= angle.value+"°";
		colortext2.textContent= color1.value+" =====> "+ color2.value ;
	}
}

selector.addEventListener("input",setrange);

angle.addEventListener("input",setGrad);

color1.addEventListener("input", setGrad);

color2.addEventListener("input", setGrad);

var sliders = [
	"./Hotel Making/images/slider1.jpg",
	"./Hotel Making/images/slider2.jpg",
	"./Hotel Making/images/slider3.jpg"
];

var image1 = document.getElementById("slider");
alert(image1);
var i=0;
function changeImage() {
	image.src = sliders[i];
	i+=1;
}

function change(){
	setInterval(changeImage(),5000);
}
change();


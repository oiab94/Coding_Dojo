// Cambiar el texto dentro del HTML
var h3 = document.querySelector("h3");
h3.innerText = "New Title";


// Cambiar los atributos dentro del elemento HTML
var imgSrc = document.querySelector("#imagen");
function switchImg() {
	imgSrc.src = "img/2896623-peanuts_-_schroeder.png"
}


// Cambiar el estilo de un elemento
function setActive(element) {
	element.style.backgroundColor = "#222222"
	element.style.color 					= "#ffffff"
}

// Cambiar el estilo verificando si existe una clase CSS
function setActClass(element) {
	if (element.classList.contains("dark-mode")) {
		element.innerText = "Cambiar modo claro";
		element.classList.remove("dark-mode");
	} else {
		element.innerText = "Cambiar al modo oscuro";
		element.classList.add("dark-mode")
	}
}
// Play del video al pasar encima el mouse
function play() {
	let vid = document.getElementById("video");
	console.log("PLAY");
	vid.play();		
}

// Pause del video al sacar el mouse de encima
function pause() {
	let vid = document.getElementById("video");
	console.log("PAUSE");
	vid.pause();
}
const numberOfPaintings = 5;
if (sessionStorage.getItem('painting') == null){
	sessionStorage.setItem('painting', 1);
}
var paintingNumber = sessionStorage.getItem('painting');
var paintingContainer = document.getElementById("painting-card");
var nextPainting = document.getElementById("nextPainting");
var previousPainting = document.getElementById("previousPainting");

getPainting(paintingNumber);

nextPainting.addEventListener("click", function() {
	paintingNumber++;
	if (paintingNumber > numberOfPaintings) {
		paintingNumber = 1;
	}
	sessionStorage.setItem('painting', paintingNumber);
	getPainting(paintingNumber);
});

previousPainting.addEventListener("click", function() {
	paintingNumber--;
	if (paintingNumber < 1) {
		paintingNumber = numberOfPaintings;
	}
	sessionStorage.setItem('painting', paintingNumber);
	getPainting(paintingNumber);
});

function getPainting(paintingCounter) {
	var requestURL = 'archive/painting-' + paintingCounter + '.json';
	var request = new XMLHttpRequest();

	request.open("GET", requestURL);
	request.onload = function() {
		var painting = JSON.parse(request.response);
		displayPainting(painting);
	}
	request.send();
}

function displayPainting(painting) {
	var innerText = "";
	
	for (i = 0; i < painting.body.length; i++) {
		innerText += '<img src='+ painting.body[2].model.url +' alt='+ painting.body[2].model.altText +' width='+ painting.body[2].model.width +' height='+ painting.body[2].model.height +'></br>';
		innerText += '<div class="bottom-left">';
		innerText += '<h3>' + painting.body[0].model.text + '</h3>';
		innerText += '<p>' + painting.body[1].model.text + '</p>';
		innerText += '</div>';
	}
	
	paintingContainer.innerHTML = innerText;
}
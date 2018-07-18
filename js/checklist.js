var checklistDiv = document.getElementById("checklist");
var bar;
var backbar = document.getElementById("backbar");

function imgError(image) {
    image.onerror = "";
    image.src = "../images/empty.png";
    return true;
}

function toggle(image) {
	if (image.src.substr(-9, 9) != 'empty.png') {
		if (image.style.opacity == 0.3) {
			image.style.opacity = 1;
			localStorage['itemsChecked'] = parseFloat(localStorage['itemsChecked']) + 1;
		} else {
			image.style.opacity = 0.3;
			localStorage['itemsChecked'] = parseFloat(localStorage['itemsChecked']) - 1;
		}
		localStorage[image.src] = image.style.opacity;
		backbar.innerHTML = '<div id="frontbar"></div><h4>' + Math.ceil(parseFloat(localStorage['itemsChecked']) / 3.65) + '%</h4>';
		bar = document.getElementById("frontbar"); 
		bar.style.width = parseFloat(localStorage['itemsChecked']) / 3.65 + '%';
	}
}

if (!localStorage['itemsChecked']) {
	localStorage['itemsChecked'] = 0;
}

var checklistItems = document.getElementsByClassName("checklistImage");
for (var i = 0; i < checklistItems.length; i++) {
	if (localStorage[checklistItems[i].src] != "../images/empty.png") {
	    checklistItems[i].style.opacity = localStorage[checklistItems[i].src];
	}
}

backbar.innerHTML = '<div id="frontbar"></div><h4>' + Math.ceil(parseFloat(localStorage['itemsChecked']) / 3.65) + '%</h4>'
bar = document.getElementById("frontbar"); 
bar.style.width = parseFloat(localStorage['itemsChecked']) / 3.65 + '%'
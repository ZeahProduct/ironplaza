var checklistDiv = document.getElementById("checklist");
var bar = document.getElementById("frontbar");

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
		bar.style.width = parseFloat(localStorage['itemsChecked']) / 3.65 + '%'
		bar.innerHTML = '<h4>' + Math.ceil(parseFloat(localStorage['itemsChecked']) / 3.65) + '%</h4>' 
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

bar.style.width = parseFloat(localStorage['itemsChecked']) / 3.65 + '%'
bar.innerHTML = '<h4>' + Math.ceil(parseFloat(localStorage['itemsChecked']) / 3.65) + '%</h4>' 
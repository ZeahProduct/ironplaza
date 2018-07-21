var checklistDiv = document.getElementById("checklist");
var bar;
var backbar = document.getElementById("backbar");
var itemRatio = 3.75 // Total Items / 100

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
		backbar.innerHTML = '<div id="frontbar"></div><h4>' + Math.ceil(parseFloat(localStorage['itemsChecked']) / itemRatio) + '%</h4>';
		bar = document.getElementById("frontbar"); 
		bar.style.width = parseFloat(localStorage['itemsChecked']) / itemRatio + '%';
	}
}

//Generate Items
/*checklist.innerHTML = "";
for (var x = 0; x < 19; x++) {
	for (var y = 0; y < 33; y++) {
		checklist.innerHTML += "<span class='checklistItem'><img class='checklistImage' src='../images/checklist" + x + "-" + y + ".png' onerror='imgError(this);' onclick='toggle(this);' style='opacity:0.3;'></span>"
	}
	checklist.innerHTML += "<br/>"
}*/

if (!localStorage['itemsChecked']) {
	localStorage['itemsChecked'] = 0;
}

var checklistItems = document.getElementsByClassName("checklistImage");
for (var i = 0; i < checklistItems.length; i++) {
	if (localStorage[checklistItems[i].src] != "../images/empty.png") {
	    checklistItems[i].style.opacity = localStorage[checklistItems[i].src];
	}
}

backbar.innerHTML = '<div id="frontbar"></div><h4>' + Math.ceil(parseFloat(localStorage['itemsChecked']) / itemRatio) + '%</h4>'
bar = document.getElementById("frontbar"); 
bar.style.width = parseFloat(localStorage['itemsChecked']) / itemRatio + '%'
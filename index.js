var g = {};

// This function preloads all the images into the browser cache. 
function preload(){
	var temp = g.images;
	var img = new Image();
	
	for(var i=0; i <temp.length; i++){
		img.src = temp[i];
	}
}

// Start and stop a slideshow. 
function slideShow(){
	if(g.slideShow){
		clearInterval(g.slideShow);
		g.slideShow = null;
	}
	else {
		g.slideShow = setInterval(changeSlide, 3000);
	}
}

function changeSlide(){
	g.slideCtr++;
	if(g.slideCtr > g.images.length-1){
		g.slideCtr = 0;
	}
	newYearImage.src = g.images[g.slideCtr];
}

function init(){

	// Declaring global variables in the global namespace
	g.images = ["newYear.jpg", "newYear2.jpg", "newYear3.jpg", "newYear4.jpg"]; 
	g.slideShow = 0;
	g.slideCtr = 0;
	
	// Caching the images for the slideshow
	preload();

	// Setup of an onclick event to start or stop a slideshow
	newYearImage.onclick = slideShow;
}

window.onload = init;
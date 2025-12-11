// Get the zoomed img
var zoom = document.getElementById("zoomed");

// Get the image and insert it inside the zoomd div - use its "alt" text as a caption
const img = document.getElementById("weather");
const img2 = document.getElementById("p2");
const img3 = document.getElementById("p3");
const img4 = document.getElementById("p4");
const img5 = document.getElementById("p5");
const img6 = document.getElementById("p6");
const zoomImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
img.onclick = function(){
    zoom.style.display = "block";
    zoomImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img2.onclick = function(){
    zoom.style.display = "block";
    zoomImg.src = this.src;
    captionText.innerHTML = this.alt;         
}
img3.onclick = function(){
    zoom.style.display = "block";
    zoomImg.src = this.src;
    captionText.innerHTML = this.alt;         
}
img4.onclick = function(){
    zoom.style.display = "block";
    zoomImg.src = this.src;
    captionText.innerHTML = this.alt;         
}
img5.onclick = function(){
    zoom.style.display = "block";
    zoomImg.src = this.src;
    captionText.innerHTML = this.alt;         
}
img6.onclick = function(){
    zoom.style.display = "block";
    zoomImg.src = this.src;
    captionText.innerHTML = this.alt;         
}

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the zoomed img
span.onclick = function() {
zoom.style.display = "none";
}
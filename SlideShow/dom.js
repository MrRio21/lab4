var img=document.getElementById("img");
var img1=   document.createElement("img");
var img2=   document.createElement("img");

img1.src="dom.jpg";
img2.src="dom.jpg";
function dom(){
    img.style.opacity="0";

    document.body.appendChild(img1)
    img1.style.position="absolute";
    img1.style.left="10rem";
    img1.style.bottom="10rem";


    document.body.appendChild(img2)
    img2.style.position="absolute";
    img2.style.right="10rem";
    img2.style.top="2rem";
 
}
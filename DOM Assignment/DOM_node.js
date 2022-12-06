let images=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];
let i=0;
let img=document.getElementById("img");

function Next(){
    i++;
    img.src =images[i];
    if(i=images.length-1)
    {
        img.src="6.jpg";
    }
}

function previous(){
    i--;
        img.src= images[i];
    if(i=0)
    {
        img.src="1.jpg";
    }
}
var pic=0;
function About(){
    if(i=images.length-1)
    {i=0;
        pic=setInterval(function(){
        
            img.src= images[i];
            i++;
        },1000)
    }
        else if (i=0)
        {
            clearInterval(pic) ;
        }
    
}
function stop(){
    clearInterval(pic) ;
}
function Contact(){
    i++;
    setTimeout(function(){
        img.src= images[i];
    },1000)
}
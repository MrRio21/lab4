var imge=["marble2.jpg","marble3.jpg"]
var img=document.getElementsByTagName("img");
var i=0;


console.log(img[8])
var flip=0;
function circle(){
    for(let i=0;i<imge.length;i++)
 {
        img[flip].src=imge[i];
        flip++;
    }
}
setInterval(circle,1000)


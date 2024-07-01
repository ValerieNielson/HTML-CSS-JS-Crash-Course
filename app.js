var pics = [
    "imgs/image1.jpg",
    "imgs/image2.jpg",
    "imgs/image3.jpg",
    "imgs/image4.jpg",
    "imgs/image5.jpg",
    "imgs/image6.jpg",
    "imgs/image7.jpg",
    "imgs/image8.jpg",
    "imgs/image9.jpg",
]

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
    if (counter==9){
        counter = 0;
    }
    img.src = pics[counter]
    counter = counter + 1
});
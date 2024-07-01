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
var backgroundColors = [
    "#ff6666",
    "#ffb84d",
    "#ffe680",
    "#00b300",
    "#47d1d1",
    "#d9b3ff",
    "#ffccff",
    "#a3a375",
    "#ecc6d9"
]
var btn = document.querySelector("button");
var img = document.querySelector("img");
var body = document.querySelector("body");
var counter = 1;
var resetCounter = 0;
var imageCounter = 0;

btn.addEventListener("click", function(){
    if (counter==9){
        counter = 0;
        resetCounter = resetCounter + 1
    }
    img.src = pics[counter]
    counter = counter + 1

    if (resetCounter > 3){
        body.style.backgroundColor = backgroundColors[resetCounter];
        btn.style.backgroundColor = backgroundColors[resetCounter];
        if (resetCounter > 9) {
            resetCounter = 0;
        }
    }


});
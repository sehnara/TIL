const body = document.querySelector("body");
const numImage = 3;

function getRandomNum(){
    let number = Math.floor(Math.random()*numImage);
    return number;
}

function getBackGround(number){
   let image = new Image();
   image.src = `my/my${number+1}.jpg`;
   image.classList.add('bg');
   body.prepend(image);
}

function init(){
    let num = getRandomNum();
    getBackGround(num);
}
init();
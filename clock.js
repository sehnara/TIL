const section = document.querySelector(".section");
const time = section.querySelector("#time");

function getTime(){
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();    
    
    time.innerHTML = `${hour%12<10?`0${hour%12}`:hour%12}:${minute<10?`0${minute}`:minute}:${second<10?`0${second}`:second}`;
}

function init(){
    getTime();
    setInterval(getTime,1000);
}
init();
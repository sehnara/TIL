const user = document.querySelector("#user");
const form = user.querySelector("form");
const input = form.querySelector("input");
const welcome = user.querySelector("#welcome");

nameKey = "Name";

form.addEventListener('submit',getName);

function getName(event){
    event.preventDefault();
    const name = input.value;
    saveName(name); 
    showName(name);   
}

function saveName(name){
    localStorage.setItem(nameKey,name);    
}

function showName(name){
    form.classList.add('showing');
    welcome.innerHTML = `${name}'s belly button`;
}

function init(){    
    const userName = localStorage.getItem(nameKey);

    if(userName!==null){
        showName(userName);
    }
}
init();
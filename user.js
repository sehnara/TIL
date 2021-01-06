const form = document.querySelector("form");
const user = document.querySelector("#user");
const input = user.querySelector("input");
const welcome = user.querySelector("#welcome");

Name = "nameKey";

form.addEventListener('submit',getName);

function getName(event){
    event.preventDefault();
    const name = input.value;
    saveName(name); 
    showName(name);   
}

function saveName(name){
    localStorage.setItem(Name,name);    
}

function showName(name){
    input.classList.add('showing');
    welcome.innerHTML = `${name}'s belly button`;
}

function init(){
    const userName = localStorage.getItem(Name);

    if(userName!==null){
        showName(userName);
    }
}
init();
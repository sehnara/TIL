const footer = document.querySelector(".footer");
const foodform  = footer.querySelector('form');
const foodinput = foodform.querySelector('input');
const list = footer.querySelector('.toEatList');
const toEatList = list.querySelector('ul'); 

const foodkey = "Food";
var foodArray = [];

foodform.addEventListener("submit",getFood);

function getFood(event){
    event.preventDefault();
    const foods = foodinput.value;    
    showFood(foods);        
}

function saveFood(food){    
    foodArray.push(food);
    localStorage.setItem(foodkey, JSON.stringify(foodArray));
}

function showFood(food){
    const elem = document.createElement('li');
    const btnRem = document.createElement('button');
    elem.innerHTML = food;
    btnRem.innerHTML = 'X';

    toEatList.appendChild(elem);
    toEatList.appendChild(btnRem);
    
    saveFood(food);
}

function init(){
    const localArray = localStorage.getItem(foodkey);
    
    if(localArray!==null){
        const parsedArray = JSON.parse(localArray);
        for (let i = 0; i < parsedArray.length; i++) {
            showFood(parsedArray[i]);            
        }
    }
}
init();
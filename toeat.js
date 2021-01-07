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
    foodinput.value = "";
}

function saveFood(){        
    localStorage.setItem(foodkey, JSON.stringify(foodArray));
}

function showFood(food){
    const elem = document.createElement('li');
    const content = document.createElement('span');
    const btnRem = document.createElement('button');
    IDNum = foodArray.length+1;

    content.innerHTML = food;
    btnRem.innerHTML = 'X';
    btnRem.addEventListener('click',deleteFood);

    elem.appendChild(content);
    elem.appendChild(btnRem);
    elem.id = IDNum;
    toEatList.appendChild(elem);  
    btnRem.classList.add('btnFix');
    content.classList.add('contentFix');
    elem.classList.add('listOrdering');  
   
    foodObj = {
        food,
        id : IDNum
    };
    foodArray.push(foodObj);
    saveFood();
}

function deleteFood(event){
    const btn = event.target;
    const li = btn.parentNode;
    toEatList.removeChild(li);

    const renewal =  foodArray.filter(function(toEat){
        return toEat.id !== JSON.parse(li.id);
    })  
    foodArray = renewal;
    saveFood();
}

function init(){
    const localArray = localStorage.getItem(foodkey);
    
    if(localArray!==null){
        const parsedArray = JSON.parse(localArray);
        for (let i = 0; i < parsedArray.length; i++) {
            showFood(parsedArray[i].food);            
        }
    }
}
init();
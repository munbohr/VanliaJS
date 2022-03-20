const toDoForm = document.querySelector("#login-form");
const toDoInput = document.querySelector("#login-form input")
const toDoList = document.querySelector(".todo-lists");
const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //JSON parse로 JS가 이해할 수 있는, 실제로 뭔갈 할 수 있는 array로 만들 수 있다.
}
//JSON.stringify(player)는 array든 javascript code건간에 string으로 made.
function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    //list를 만들어 준다.
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    span.style.color = "black"
    span.style.fontFamily = `'Bebas Neue', cursive`;
    span.style.marginRight = "10px";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    //span을 li에 넣어준다.
    li.appendChild(button); 
    toDoList.appendChild(li);
    //append는 늘 마지막에 위치해야 한다.
} 

function handleToDoSubmit(event) {
    event.preventDefault();
    //console.log(toDoInput.value);
    const newTodo = toDoInput.value;
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDoInput.value = "";   
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}



toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    //console.log(parsedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    //parsedToDos.forEach(paintToDo);
    //console.log(parsedToDos);
    //parsedToDos.forEach((item) => console.log("this is the turn of ", item));        
    //각각의 item으로 반응한다.?
}

const arr = [1234,1231,2313,23,123,2314,233,412,5442];
function sexyFuction(num) {return num > 1000 }
arr.filter(sexyFuction);
/*function sayHello(item) {
    console.log("this is the turn of ", item)
}*/
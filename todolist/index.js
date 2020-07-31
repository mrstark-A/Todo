//selectors
const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button'); /* for copy same line use shift +alt+downkey*/
const todoList=document.querySelector('.todo-list');  
// event listener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click",deletecheck);


//function
function addTodo(event){
    event.preventDefault();
 // todo div
 const todoDiv=document.createElement('div');
 todoDiv.classList.add('todo');// class with classname todo
 // li
 const newTodo=document.createElement('li');
 newTodo.innerText=todoInput.value;// creating li with text
 newTodo.classList.add('todo-item');
 todoDiv.appendChild(newTodo);

 //check mark button
 const completedbutton=document.createElement('button');
 completedbutton.innerHTML='<i class="fas fa-check"></i>';
 completedbutton.classList.add("complete-btn");
 todoDiv.appendChild(completedbutton);
 //check trash button
 const trashdbutton=document.createElement('button');
 trashdbutton.innerHTML='<i class="fas fa-trash"></i>';
 trashdbutton.classList.add("trash-btn");
 todoDiv.appendChild(trashdbutton);

 // append to a list
 todoList.append(todoDiv);
 // clear todo input
 todoInput.value="";
}

// function for deletecheck
function  deletecheck(e){
     const item=e.target;
     // Delete the todo
     if(item.classList[0]=== "trash-btn"){
         const todo=item.parentElement;
         // animation
         todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
     }

     //check marks
     if(item.classList[0]==="complete-btn"){
         const todo=item.parentElement;
         todo.classList.toggle("completed");
     }
}
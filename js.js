const todoInput=document.querySelector(".todo-input")
const todoPrint=document.querySelector(".todoprint")
const todosContainer=document.querySelector(".todolist-container")
const body=document.querySelector("body")

todoInput.addEventListener("keydown",function(event){

if(event.key==="Enter"){
    const divv= document.createElement("div")
    divv.innerHTML=`   
    <h2 class="todotext">${todoInput.value} </h2>
    <div>
        <i class="fa fa-trash" aria-hidden="true"></i>
        <i class="fa fa-check" aria-hidden="true"></i>
    </div>
    `
    divv.className="realtodoo"
    todosContainer.appendChild(divv)
    
    todoInput.value=""
}
else{
    console.log(event.key)
}
})
// body.addEventListener("contextmenu",function(){
//        alert("noooo fucking right click")

//     return false
   
// })



todoPrint.addEventListener("click",function(){
    event.preventDefault()
    if(todoInput.value===""){
        alert("fuck no fucking word in the input ")
    }else{
        const divv= document.createElement("div")
divv.innerHTML=`   
<h2 class="todotext">${todoInput.value} </h2>
<div>
    <i class="fa fa-trash" aria-hidden="true"></i>
    <i class="fa fa-check" aria-hidden="true"></i>
</div>
`
divv.className="realtodoo"
todosContainer.appendChild(divv)

todoInput.value=""

    }

})
body.addEventListener("click",function(event){

if(event.target.classList[1]==="fa-trash"){

    event.target.parentElement.parentElement.remove()
}
if(event.target.classList[1]==="fa-check"){
    event.target.parentElement.parentElement.classList.toggle("cheked")
}

})
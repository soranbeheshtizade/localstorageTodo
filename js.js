const todoInput=document.querySelector(".todo-input")
const todoPrint=document.querySelector(".todoprint")
const todosContainer=document.querySelector(".todolist-container")
const body=document.querySelector("body")
let localStorageArrey= [

]

document.addEventListener("DOMContentLoaded",function(){
    const todolocal=JSON.parse(localStorage.getItem("todos"))
todolocal.forEach(todo => {
    localStorageArrey.push(todo)
    const divv= document.createElement("div")
    divv.innerHTML=`   
    <h2 class="todotext">${todo.detail} </h2>
    <div>
        <i class="fa fa-trash" aria-hidden="true"></i>
        <i class="fa fa-check" aria-hidden="true"></i>
    </div>
    `
    divv.setAttribute("id",todo.id)
    divv.className="realtodoo"
    todosContainer.appendChild(divv)

});
})

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
    let todoid= Math.floor(Math.random()*9999)
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
divv.setAttribute("id",todoid)
divv.className="realtodoo"
todosContainer.appendChild(divv)
let newData={detail:todoInput.value,id:todoid}
localStorageArrey.push(newData)
// localStorage.setItem("todo",JSON.stringify({detail:todoInput.value,id:todoid}))

todoInput.value=""

localStorage.setItem("todos",JSON.stringify(localStorageArrey))

    }

})
body.addEventListener("click",function(event){

if(event.target.classList[1]==="fa-trash"){

    const remid=event.target.parentElement.parentElement.id
    const ff =localStorageArrey.find(({id})=>  id==remid )
localStorageArrey.pop(ff)
console.log(localStorageArrey)
localStorage.setItem( "todos",JSON.stringify(localStorageArrey))


    event.target.parentElement.parentElement.remove()
}
if(event.target.classList[1]==="fa-check"){
    event.target.parentElement.parentElement.classList.toggle("cheked")
}

})

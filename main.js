const form = document.querySelector("form")
const todoinput = document.getElementById("todoinput")
const todolist = document.querySelector(".todolist")


let allTodos = []

form.addEventListener("submit", (e) => {
    e.preventDefault()
    addTodo()
})
function addTodo() {
    const todotext = todoinput.value.trim()
    if (todotext.length > 0) {
        allTodos.push(todotext)
        update()
        todoinput.value = ""
    }
}
 function createItem(todo, todoindex) {
    const todoid = "todo-"+todoindex
    const todoli = document.createElement("li")
    todoli.className = "todo"
    todoli.innerHTML = `
    <input type="checkbox" id="${todoid}">
                <label for="${todoid}" class="checkbox">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                </label>
                <label for="${todoid}" class="text">${todo}</label>
                <button class="delet">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                </button>`
                
                const deletbtn = todoli.querySelector(".delet")
                deletbtn.addEventListener("click", () =>{
                    delettodo(todoindex)
                })
    return todoli
}


function update() {
    todolist.innerHTML = ""
    allTodos.forEach((todo, todoindex) => {
        todoitem = createItem(todo, todoindex)
        todolist.append(todoitem)
    })
}



function delettodo(todoindex) {
    allTodos = allTodos.filter((_, i) => i !== todoindex);
    update()
}
console.log('hello')

var todoText = document.getElementById('todo-text')
var todoCheckbox = document.getElementById('todo-checkbox')
var todoAdd = document.getElementById('todo-add')

function createTodo() {
  var todoTextValue = todoText.value
  console.log(todoTextValue)
}

todoText.addEventListener('keyup', function(event){
  event.preventDefault()
  if(event.keyCode === 13) {
    createTodo()
  }
})

/*
todoText.addEventListener('click', function(){
  var text = todoText.value
  if (text == "") {
    return
  }
  var todoItem = document.createElement('p')
  todoItem.className = 'todo-item'
}, false)
*/

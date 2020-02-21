//
const el = selector => {
  return document.querySelector(selector)
}

const formAddTask = el('#add-todo-form')
const tbNewTask = formAddTask['add-todo-input']
const todoList = el('.todo-list')
const tbSearch = el('#search')

todoList.innerHTML = ''

const generateTaskTemplate = task => {
  const item = `
  <li>
    <input type="checkbox">${task}
    <button class="btn-delete-task"></button>
  </li>
  `
  todoList.innerHTML += item
}

const filterTodos = text => {
  Array.from(todoList.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(text))
    .forEach(todo => todo.classList.add('filtered'))

  Array.from(todoList.children)
    .filter(todo => todo.textContent.toLowerCase().includes(text))
    .forEach(todo => todo.classList.remove('filtered'))
}

// add todo
formAddTask.addEventListener('submit', event => {
  event.preventDefault()

  const task = tbNewTask.value.trim()
  formAddTask.reset()

  if(!task) return

  generateTaskTemplate(task)
})

// delete todo
todoList.addEventListener('click', event => {
  if (event.target.classList.contains('btn-delete-task')) {
      event.target.parentElement.remove()
  }
})

// checkbox event
todoList.addEventListener('change', event => {
  if (event.target.checked) {
    event.target.parentElement.classList.add('done')
  } else {
    event.target.parentElement.classList.remove('done')
  }
})

// search
tbSearch.addEventListener('keyup', event => {
  const text = event.target.value.trim().toLowerCase()
  filterTodos(text)
})
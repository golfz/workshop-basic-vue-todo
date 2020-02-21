new Vue({
  el: '#app',
  data: {
    pageHeader: 'Todo List',
    newTask: '',
    filterTask: '',
    todos: [
      { id: 1, text: 'clean a car', done: false },
      { id: 2, text: 'workout', done: false },
      { id: 3, text: 'hangout with my friends', done: false },
    ],
  },
  methods: {
    addTodo: function () {
      const task = this.newTask.trim()
      this.newTask = ''
      if (task) {
        const newId = this.todos.reduce((max, todo) => {
          if (todo.id > max) {
            return (todo.id + 1)
          }
          return max
        }, 0)

        const item = { id: newId, text: task, done: false }
        this.todos = [item, ...this.todos]
      }
    },
    deleteTodo: function (id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    filterTodo: function () {
      const text = this.filterTask.trim()
      console.log(text)
    },
  },
  computed: {
    filteredTodos: function () {
      return this.todos.filter(todo => todo.text
        .toLowerCase()
        .includes(this.filterTask.trim().toLowerCase()))
    }
  }
})
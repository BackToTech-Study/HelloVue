<script>
// give each todo a unique id
let id = 0

export default {
  props: {
    todosParam: Array
  },
  data() {
    return {
      newTodo: '',
      todos: this.todosParam
    }
  },
  methods: {
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo })
      this.newTodo = ''
    },
    removeTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1)
      this.$emit('remove', todo)
    }
  }
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo">
    <button>Add Todo</button>    
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
</template>

<template>
  <div>
    <h1>Todo List</h1>

    <todo-item 
      v-for="todo in todos" 
      :item="todo">
    </todo-item>
  </div>
</template>


<script>
import TodoItem from '@/components/TodoItem'

export default {
  name: 'todo-app',
  components: {
    'todo-item': TodoItem
  },
  data () {
    return {
      todos: [
        { id: 1, name: 'Study Vue' },
        { id: 2, name: 'Make something awesome!' }
      ]
    }
  }
}
</script>


<style scoped>
</style>

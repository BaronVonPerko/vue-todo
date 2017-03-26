<template>
  <div>
    <h1>Todo List</h1>

    <new-item-form 
      :newName="newName" 
      :create="onCreate">
    </new-item-form>

    <todo-item 
      v-for="todo in todos" 
      :item="todo">
    </todo-item>
  </div>
</template>


<script>
import TodoItem from '@/components/TodoItem'
import NewItemForm from '@/components/NewItemForm'

export default {
  name: 'todo-app',
  components: {
    'todo-item': TodoItem,
    'new-item-form': NewItemForm
  },
  data () {
    return {
      todos: [
        { id: 1, name: 'Study Vue' },
        { id: 2, name: 'Make something awesome!' }
      ],
      index: 3,
      newName: ''
    }
  },
  methods: {
    onCreate: function (name) {
      if (!name) return

      this.todos.push({
        id: this.index++, name
      })

      this.newName = ''
    }
  }
}
</script>


<style scoped>
</style>

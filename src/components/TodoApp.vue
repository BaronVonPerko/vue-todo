<template>
  <div>
    <h1>Todo List</h1>

    <new-item-form :create="onCreate"></new-item-form>

    <div class="items">
      <todo-item 
        v-for="todo in itemsToDo" 
        :item="todo"
        :onDone="onDone">
      </todo-item>
    </div>

    <div v-if="itemsToDo.length === 0">
      Nothing to do!
    </div>
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
        { id: 1, name: 'Study Vue', isDone: false },
        { id: 2, name: 'Make something awesome!', isDone: false }
      ],
      index: 3
    }
  },
  methods: {
    onCreate: function (name) {
      if (!name) return

      this.todos.push({
        id: this.index++,
        name,
        isDone: false
      })
    },
    onDone: function (id) {
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].id === id) {
          this.todos[i].isDone = true
        }
      }
    }
  },
  computed: {
    itemsToDo () {
      return this.todos.filter(item => {
        return item.isDone === false
      })
    }
  }
}
</script>


<style scoped>
.items {
  margin: 50px 0 0;
}
</style>

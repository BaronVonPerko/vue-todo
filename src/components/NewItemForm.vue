<template>
  <div class="wrapper">
    <input type="text" v-model="newName" />
    <button v-on:click="createTodo()">Create</button>
  </div>
</template>

<script>
export default {
  name: 'new-item-form',
  props: ['create'],
  data () {
    return {
      newName: ''
    }
  },
  methods: {
    createTodo: function () {
      this.create(this.newName)
      this.newName = ''
    }
  }
}
</script>

<style scoped>
.wrapper {
  margin: 20px 0;
}
</style>

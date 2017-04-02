<template>
  <div class="container">
    <div class="name">{{item.name}}</div>
    <div 
      class="btn btn-remove"
      v-on:click="done()">
      Done
    </div>
  </div>
</template>

<script>
export default {
  name: 'todo-item',
  props: ['item', 'onDone'],
  methods: {
    done () {
      this.onDone(this.item.id)
    }
  }
}
</script>

<style scoped>
.container {
  margin: 8px 0;
  display: flex;
}
.name {
  flex: 5;
  text-align: left;
}
.btn {
  flex: 1;
}
.btn-remove {
}
</style>

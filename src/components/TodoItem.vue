<template>
  <p>{{item.id}}: {{item.name}}</p>
</template>

<script>
export default {
  name: 'todo-item',
  props: ['item']
}
</script>

<style scoped>
</style>

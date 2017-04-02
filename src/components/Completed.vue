<template>
  <div class="container">
    <h1>Completed</h1>

    <div v-for="item in items">
      {{item.name}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'completed',
  data () {
    return {
      items: this.$router.completedItems
    }
  }
}
</script>

<style scoped>
</style>

<template>
  <div class="container">
    <h1>Completed</h1>

    <a href="#todo">Go Back</a>

    <div class="items">
      <div v-for="item in items">
        {{item.name}}
      </div>
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
.items {
  margin: 50px 0;
}
</style>

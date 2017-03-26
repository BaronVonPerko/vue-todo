<template>
  <div class="wrapper">
    <input type="text" v-model="newName" />
    <button v-on:click="create(newName)">Create</button>
  </div>
</template>

<script>
export default {
  name: 'new-item-form',
  props: ['create', 'newName']
}
</script>

<style scoped>
</style>

<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <header>
        <h1>{{title}}</h1>
      <Button @click="$emit('show-addtask-form')" :text="showAddTask ? 'close': 'Add Task'"
       :color="showAddTask ? 'red' : 'green'"/>
    </header>
</template>

<script>
import Button from './Button'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',
  props: {
    title: String,
    showAddTask: Boolean
  },
  components: {
    Button
  }
}
</script>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>

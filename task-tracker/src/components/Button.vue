<template>
  <button @click="onClick" type="button" class="btn" :style="{background: color}">{{ text }}</button>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Button',
  props: {
    text: String,
    color: String
  },
  methods: {
    onClick () {
      this.$emit('btn-click')
    }
  }
}
</script>

<style></style>

<template>
  <div class="contact-us-page">
    <h1 class="center-align">Contact Us</h1>
    <form>
      <label>Name:</label>
      <input type="text" v-model="name">
      <br>
      <label>Email:</label>
      <input type="email" v-model="email">
      <br>
      <label>Message:</label>
      <textarea v-model="message"></textarea>
      <br>
      <button class="center-align" @click="submitForm">Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: ""
    }
  },
  methods: {
    submitForm() {
      // Add code to submit form data to your backend here
    }
  }
}
</script>
<style>
.center-align {
  text-align: center;
}
</style>
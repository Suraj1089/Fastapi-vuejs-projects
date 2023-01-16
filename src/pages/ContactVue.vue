<template>
 <div class="contact-us">
  <h1>Contact Us</h1>
  <label for="name">name</label>
  <input class="input-field" type="text" id="name" v-model="name" />
  <label for="email">email</label>
  <input class="input-field" type="text" id="email" v-model="email" />
  <label for="message">message</label>
  <textarea class="input-field textmessage" id="message" v-model="message"></textarea>
  <button @click="submitForm">Submit</button>


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
  .contact-us {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .input-field {
    width: 300px;
    height: 30px;
    margin: 10px;
  }
  .textmessage {
    height: 100px;
  }

</style>
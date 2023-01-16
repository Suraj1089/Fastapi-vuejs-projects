<template>
  <div class="user-profile" align="center">
    <img class="user-image" src="image.png" alt="user image">
    <h1 class="user-name">John Doe</h1>
    <p class="user-email">johndoe@email.com</p>
    <p class="user-bio">I am a software developer with 5 years of experience. I specialize in front-end development using Vue.js and React.js.</p>
    <p class="resume">Download my resume <a href="resume.pdf">here</a>.</p>
    <div class="contact-info">
      <p>Email: johndoe@email.com</p>
      <p>Phone: 555-555-5555</p>
    </div>
    <div class="social-media-links">
      <a href="https://www.linkedin.com/in/johndoe">LinkedIn</a>
      <a href="https://github.com/johndoe">GitHub</a>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style>
.user-profile {
  text-align: center;
}
.user-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
.user-name {
  font-size: 24px;
  font-weight: bold;
}
.user-email {
  font-size: 18px;
}
.user-bio {
  font-size: 16px;
  margin-bottom: 10px;
}
.resume {
  font-size: 16px;
  margin-bottom: 10px;
}
.contact-info {
  font-size: 16px;
  margin-bottom: 10px;
}
.social-media-links {
  font-size: 16px;
}
</style>
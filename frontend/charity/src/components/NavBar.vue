<template>
  <div class="hello">
      <ul class="nav-text">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li><router-link to="/donate">Donate</router-link></li>
          <!-- user image -->
         <li><img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" class="user-logo" v-on:click="isProfileOpen=true"></li>
      </ul>
      <!--notification-->
      <div class="notification">
          <h3 class="notification-content"><span>{{ notificationContent }}</span></h3>
      </div>
          
  </div>
</template>

<script>

export default {
  name: 'NavBar',
  data() {
    return {
      isProfileOpen: true,
      notificationContent: "Sorry for inconvenicence but we are currently under development"
    }
  },
  methods: {
    
  }
     
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.notification-content {
  color: rgb(0, 0, 0);
  text-align: center;
  background-color: #e5d3d3;
  justify-content: center;
  align-content: center;
  height: 50px;
  margin-top: 10px;
  margin-right: 200px;
  margin-left: 200px;
  border-radius: 5px;

}
.user-logo {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-top: 10px;
  margin-right: 10px;
}

.nav-text {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  display:flex;
  justify-content: center;
}

.hello {
  /*create responsive navbar*/
    width: 100%;
    height: 60px;
    background-color: #2c3e50;
    color: #fff;
    font-size: 1.2em;
    font-weight: 300;
    line-height: 60px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div class="container">
    <img src="../assets/logo.png" alt="Avatar" style="width: 150px" />
    <!-- <span>Change Your Photo</span> -->
    <div class="user-profile-view">
      <h4><b>{{ userName }}</b></h4>
      <p><span style="color:gray"><b>{{ userPosition }}</b></span></p>
      <div class="about-user">
        <p>{{ userAbout }}</p>
      </div>
      <button @click="openProfileForm" v-if="!isProfileFormOpen">Change Details</button><br />
      <button @click="isProfileFormOpen=false" v-if="isProfileFormOpen" >Close Profile Form</button>
      <form v-if="isProfileFormOpen" action="" class="user-details-form">
        <br>
        <input type="text" placeholder="Your Name" name="name"/>
        <br>
        <input type="text" placeholder="Your Position" name="position" />
        <br>
        <input class="user-photo-upload" type="file" placeholder="Change Your Photo" />
        <br>
        <textarea name="user-about" id="about-user" cols="30" rows="10"></textarea>
        <br>
        <button>Submit form</button>

      </form>
    </div>

  </div>
</template>

<script>
export default {
  name: "CardsVue",
  data() {
    return {
      isProfileFormOpen: false,
      isNameOpen: false,
      userName:'Suraj Pisal',
        userPosition:'Web Developer',
        userAbout:'Suraj Pisal is a web developer and designer from New York. He has over 10 years of experience in the industry. He specializes in creating modern, responsive websites that are fast and user-friendly.',
        userImage: '../assets/logo.png'

    };
  },
  methods: {
    openProfileForm() {
      this.isProfileFormOpen = true;
    //   console.log(this.isProf);
    }
    },
    computed: {
        isChangeDetailsButtonShowing() {
        return !this.isPorfileFormOpen;
        }
    },
};
</script>

<style scoped>

.about-user {
    width: 450px;
    /**align to center */
    margin: 0 auto;
    text-align: center;

}
/** adding space from upper side */

.user-photo-upload {

    margin-left: 10px;
    padding-left: 70px;

}
.user-details-form {
  /*align all inputs in vertical line center */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
  margin-top: 40px;
  padding-top: 40px;

  
}

img {
  border-radius: 5px 5px 0 0;
}
</style>
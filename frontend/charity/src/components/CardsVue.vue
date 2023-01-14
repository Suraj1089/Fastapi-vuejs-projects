<template>
  <div class="card">
    <img src="../assets/logo.png" alt="Avatar" style="width: 150px" />
    <!-- <span>Change Your Photo</span> -->
    <div class="container">
      <h4><b>John Doe</b></h4>
      <p>Architect & Engineer</p>
      <button>Change Details</button><br />
      <form action="" class="user-details-form">
        <br>
        <input type="text" placeholder="Your Name" name="name"/>
        <br>
        <input type="text" placeholder="Your Position" name="position" />
        <br>
        <input class="user-photo-upload" type="file" placeholder="Change Your Photo" />

      </form>
    </div>

  </div>
</template>

<script>
export default {
  name: "CardsVue",
  data() {
    return {
      isProfileOpen: false,
      isNameOpen: false,
    };
  },
};
</script>

<style scoped>
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
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  width: 150px;
  display: initial;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}

img {
  border-radius: 5px 5px 0 0;
}
</style>
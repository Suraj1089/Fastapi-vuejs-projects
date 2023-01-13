<template>
  <div class="home-vue">
    <div v-if="carsoulShowing==0" class="carsoul">
      <h1>Helping you give wisely to charity.</h1>
      <div class="cards">
        <img src="../assets/logo.png" alt="cards" />
      </div>
      <link href="https://css.gg/arrow-left-o.css" rel="stylesheet" />

      <div class="carsoul-arrows">
        <a href="#" class="left-arrow" @click="goToPreviousPage"></a>
        <a href="#" class="right-arrow" @click="goToNextPage"></a>
      </div>
    </div>
     <div v-if="carsoulShowing==1" class="carsoul">
      <h1>Another state view</h1>
      <div class="cards">
        <img src="../assets/logo.png" alt="cards" />
      </div>
      <link href="https://css.gg/arrow-left-o.css" rel="stylesheet" />

      <div class="carsoul-arrows">
        <a href="#" class="left-arrow" @click="goToPreviousPage"></a>
        <a href="#" class="right-arrow" @click="goToNextPage"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeVue",
  data () {
    return {
        carsoulShowing: 0
    }
  },
  methods: {
    goToPreviousPage() {
      // code to go to previous page
      this.carsoulShowing = 0;
    },
    goToNextPage() {
      // code to go to next page
      this.carsoulShowing = 1;
    },
  },
};
</script>

<style scoped>
/* add sliding animation */
.carsoul-arrows {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.home-vue {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}
.right-arrow {
  background: url(https://css.gg/arrow-right-o.svg) no-repeat;
  width: 30px;
  height: 30px;
  display: inline-block;
  margin-left: 10px;
}
.left-arrow {
  background: url(https://css.gg/arrow-left-o.svg) no-repeat;
  width: 30px;
  height: 30px;
  display: inline-block;
  margin-right: 10px;
}
.carsoul {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #f5f5f5;
}
</style>

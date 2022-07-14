<template>
 <div id="sidebarleft">
    <header>
      <a href="#">Navigation</a>
    </header>
    <ul class="nav">
    <div class= "products" >
            Booking
          </div>
          <div
            class="products">
            About Movies
          </div>
    </ul>
  </div>
</template>

<script lang="ts">
 import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LeftSideBar',
 
 });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
  font-size: 20px;
  color: white;
}
#sidebarleft {
  z-index: 500;
  position: fixed;
  left: 250px;
  width: 250px;
  height: 100%;
  margin-top: 7px;
  margin-left: -250px;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.7);
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  border-radius: 5px;
    text-align: center;
  
}
.products , .SellYourproducts{
  padding: 10px;
  margin-right: 15px;
  font-family: 'Roboto', sans-serif;
  font-weight:800;
  font-size: 12px;
  color: grey;
  cursor: pointer;
}
</style>

<template>
  <div class="home">
    <h1 class="welcome">Welcome to tonight movies</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WelcomePage',
  components: {
   
  },
});
</script>

<style>
.welcome{
  color: rgb(255, 174, 0);
  text-align: center;
  padding-top: 200px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: x-large;
}
</style>

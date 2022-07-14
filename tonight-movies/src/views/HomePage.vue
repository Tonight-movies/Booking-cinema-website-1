<template>
  <div class="homePage">
   
    <NavBar/>
    <LeftSideBar/>
    <AllCards/>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue'; // @ is an alias to /src
import AllCards from '@/components/AllCards.vue'
import LeftSideBar from '@/components/LeftSideBar.vue'
export default defineComponent({
  name: 'HomePage',
  components: {
    NavBar,
    LeftSideBar,
    AllCards,
    
  },
});
</script>

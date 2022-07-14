<template>
 <div >
    <div>
      
      <div id="sidebar">
        <nav class="nav">
          <div class="Search">
            Search
            <input id="SearchBar" v-model="search" @change="test"/>
          </div>
          <div class="Logout">
           <router-link to="/login">Log Out</router-link> 
          </div>
        </nav>
      </div>
      </div>
    }
  </div>
</template>

<script lang="ts">
 import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBar',
 data(){
    return{
      search:String,
      
    }
  },
  methods:{
    test:(search:any)=>{
      console.log(search)
    }
  }
 });


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#sidebar{
 
  width: 100%;
 background-color: rgba(0, 0, 0, 0.7);
 position: absolute;
 height: 50px;
 margin-top:-25px;
 align-content: center ;
}

.Search{
  text-align: center;
    color: white;
}
.Logout{
    text-align: right;
    color: white;
    width: 100px;
    margin-left: 1200px;
    margin-right: 30px;
    border-radius: 20px;
    background-color: white;
}
</style>

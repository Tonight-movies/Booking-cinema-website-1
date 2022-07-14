<template>
 <div class="Container"  v-for="movie in Movies" :key="movie.id">
    <div  class="MovieContainer">
       
        <img :src="`${movie.image_url}`"
  alt="image"/>
    <h2 class="MovieName">{{movie.name}}</h2>
        <h2 class="Movietime">{{movie.time}}</h2>
       
       <v-btn class="watch"><router-link to="/BookingPage"> Watch </router-link> </v-btn> 
    </div>

 </div>
</template>

<script lang="ts">
 import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AllCards',
  data() {
  return {
    Movies: [{id:1,name:"LIGHTYEAR",image_url:"https://images.mymovies.net/images/film/cin/350x522/fid21013.jpg",description:"Release date 17th Jun 2022 \n The definitive origin story of Buzz Lightyear, the hero who inspired the toy, Lightyear follows the legendary Space Ranger after he is marooned on a hostile planet 4.2 million light-years from Earth alongside his commander and their crew.",time:"17:24"},
    {id:1,name:"LIGHTYEAR",image_url:"https://images.mymovies.net/images/film/cin/350x522/fid21013.jpg",description:"Release date 17th Jun 2022 \n The definitive origin story of Buzz Lightyear, the hero who inspired the toy, Lightyear follows the legendary Space Ranger after he is marooned on a hostile planet 4.2 million light-years from Earth alongside his commander and their crew.",time:"17:24"},
    {id:1,name:"LIGHTYEAR",image_url:"https://images.mymovies.net/images/film/cin/350x522/fid21013.jpg",description:"Release date 17th Jun 2022 \n The definitive origin story of Buzz Lightyear, the hero who inspired the toy, Lightyear follows the legendary Space Ranger after he is marooned on a hostile planet 4.2 million light-years from Earth alongside his commander and their crew.",time:"17:24"},
    {id:1,name:"LIGHTYEAR",image_url:"https://images.mymovies.net/images/film/cin/350x522/fid21013.jpg",description:"Release date 17th Jun 2022 \n The definitive origin story of Buzz Lightyear, the hero who inspired the toy, Lightyear follows the legendary Space Ranger after he is marooned on a hostile planet 4.2 million light-years from Earth alongside his commander and their crew.",time:"17:24"},
    {id:1,name:"LIGHTYEAR",image_url:"https://images.mymovies.net/images/film/cin/350x522/fid21013.jpg",description:"Release date 17th Jun 2022 \n The definitive origin story of Buzz Lightyear, the hero who inspired the toy, Lightyear follows the legendary Space Ranger after he is marooned on a hostile planet 4.2 million light-years from Earth alongside his commander and their crew.",time:"17:24"},
    {id:1,name:"LIGHTYEAR",image_url:"https://images.mymovies.net/images/film/cin/350x522/fid21013.jpg",description:"Release date 17th Jun 2022 \n The definitive origin story of Buzz Lightyear, the hero who inspired the toy, Lightyear follows the legendary Space Ranger after he is marooned on a hostile planet 4.2 million light-years from Earth alongside his commander and their crew.",time:"17:24"},
    {id:1,name:"LIGHTYEAR",image_url:"https://images.mymovies.net/images/film/cin/350x522/fid21013.jpg",description:"Release date 17th Jun 2022 \n The definitive origin story of Buzz Lightyear, the hero who inspired the toy, Lightyear follows the legendary Space Ranger after he is marooned on a hostile planet 4.2 million light-years from Earth alongside his commander and their crew.",time:"17:24"},
    {id:1,name:"LIGHTYEAR",image_url:"https://images.mymovies.net/images/film/cin/350x522/fid21013.jpg",description:"Release date 17th Jun 2022 \n The definitive origin story of Buzz Lightyear, the hero who inspired the toy, Lightyear follows the legendary Space Ranger after he is marooned on a hostile planet 4.2 million light-years from Earth alongside his commander and their crew.",time:"17:24"},
    {id:1,name:"LIGHTYEAR",image_url:"https://images.mymovies.net/images/film/cin/350x522/fid21013.jpg",description:"Release date 17th Jun 2022 \n The definitive origin story of Buzz Lightyear, the hero who inspired the toy, Lightyear follows the legendary Space Ranger after he is marooned on a hostile planet 4.2 million light-years from Earth alongside his commander and their crew.",time:"17:24"}]
  }
}
 });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Container{
display: grid;
}
.MovieContainer{
    text-align: center;
    display: grid;
  height: 600px;
  


  
  width: 280px;
  margin: 20px auto;
  margin-top:20px;
  border-radius:15px;
  box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.3);
 background: white; /* Old browsers */
}
img{
    width:275px ;
    height: 450px;
    border: 2px solid grey  ;
    border-radius: 15px;
    margin: 0px;
    
}
img:hover{
    background-color: rgb(59, 59, 59);
}
.watch{
  width: 280px;
  margin:0px;
  height: 60px;
  background-color: yellow;
  color:black;
  
}
.MovieName{
  font-size: 20px;
  margin: 0px;
}
.Movietime{
font-size: 15px;
  margin: -0px;
}
</style>

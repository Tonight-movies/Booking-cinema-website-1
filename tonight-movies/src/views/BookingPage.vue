<template>
  <div class="top">
    <img :src="`${image_url}`"
  alt="image"/>
    <h2 class="MovieName">{{name}}</h2>
        <h2 class="Movietime">{{time}}</h2>
        <h2 class="MovieDesc">{{description}}</h2>

  </div>
  <div>
        
       
        <div class="chairsContainer">
            
            <div  class="chairs" v-for="chairNumber in chairs" :key="chairNumber">
                <div id={{chairNumber}} class="onechair"> 
                    <v-btn class="buttonNumber">
                        {{chairNumber}}
                    </v-btn>
                </div>
                    
            </div>
            
        </div>
    

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BookingView',
  components: {
      
  },
  data(){
    return{
        chairs:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,48,49,50,51,52,53,54,55,56,57,58,59,60,61],
    id:1,
    name:"LIGHTYEAR",
    image_url:"https://images.mymovies.net/images/film/cin/350x522/fid21013.jpg",
    description:"Release date 17th Jun 2022 \n The definitive origin story of Buzz Lightyear, the hero who inspired the toy, Lightyear follows the legendary Space Ranger after he is marooned on a hostile planet 4.2 million light-years from Earth alongside his commander and their crew.",
    time:"17:24"}

  }
});
</script>
<style scoped>
 img{
    height: 600px;
    width: 400px;
    display:inline-block;
 }
    .MovieName{
        font-size: 30px;
        color: black;
        display:inline-block;
    }
    .Movietime{
color:black;
font-size: 18px;
display:inline-block;
    }
    .MovieDesc{
color:rgb(56, 55, 55);
font-size: 15px;
display:inline-block;
    }
    .chairsContainer{
        width: 70%;
        height: 350px;
        padding:10px;
        border: 3px solid rgb(65, 65, 53);
        border-radius: 10px;
        margin-left: 150px;
    }
    .chairs{

    display:inline-block;
        margin:6px;
        height: 40px;
        background-color: rgb(250, 255, 208);
        
    }
    .onechair{
  width: 40px;

        height: 40px;
        border:3px solid black;
        border-radius: 10px;
        background-color:rgb(249, 255, 162) ;
        text-align: center;
        align-content: center;
        
    }
    .onechair:hover{
      background-color: white;
    }
    
  .banner{
    width: auto;
    height: 200px;
    margin-left: 350px ;
  }
  .buttonNumber{
    color: black;
    font-size: 30px;
    font-family: monospace;
  }
  .top{
    display:inline-block;
  }
</style>
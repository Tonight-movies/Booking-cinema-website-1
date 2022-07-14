<template>
  <form>
    <section>
      <div class="form-group">
        <label>Username</label><br />
        <input class="form-control" placeholder="Enter your name" required v-model="Username" /><br />
        <label>Password</label><br />
        <input class="form-control" type="password" placeholder="password" required v-model="Username" /><br /> <br />
        <router-link to="/HomePage" class="button">Login</router-link>
      </div>
    </section>
  </form>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginForm',
  props: {
    Username: String,
    Password: String,
   
  },
  data() {
    return {
      username: String,
      password: String,
     
      error: String,

    }
  },

  methods: {

  }
})


</script>


<style scoped>
form {
  text-align: center;
  padding-top: 200px;


}


.button {
  font-size: large;
  width: 38.5%;
  background-color: hwb(242 10% 68% / 0.747);
  color: white;
  padding: 14px 20px;

  margin-left: -350px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition-duration: 0.2s;
  position: absolute;
}



.button:hover {
  background-color: rgba(165, 42, 42, 0.733);
  color: white;
}

input {
  width: 40%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

label {
  color: white;
  font-size: large;

  margin-right: auto;

}
</style>

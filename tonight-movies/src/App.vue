<template>

  <nav class="welcomeNavBar">
    <h1 class="logo">TM Cinema</h1>
    <div>
      <router-link to="/" class="navLink">home</router-link> 
      <router-link to="/signup" class="navLink">signup</router-link>
      <router-link to="/login" class="navLink">log in </router-link>
    </div>
  </nav>

  <router-view />
</template>
<script lang="ts">

export default {
  name: 'defineComponent',
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  border: none;
  text-decoration: none;
  transition: .1s linear;

}

html {
  font-size: 80%;
  overflow-x: hidden;
  scroll-behavior: smooth;
  scroll-padding-top: 20rem;
}


body {
  position: relative;
  background-image: url("https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2luZW1hfGVufDB8fDB8fA%3D%3D&w=1000&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  padding: 40px;
  font-family: Arial;
  text-align: center;
  vertical-align: top;
  position: relative;
}

.logo {
  color: rgb(255, 174, 0);
  margin-top: 0;
  display: flex;
  background-size: contain;
  background-position: 35%;
  padding: 20px;
  margin-left: -300px;
  font-family: 'Courier New', Courier, monospace;

}

.welcomeNavBar {
  position: absolute;
  background: #831b1b1e;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  font-size: 2rem;
  color: hsl(0, 0%, 100%);
  padding: 0.5rem 25%;
  top: 0;
  left: 0;
  right: 0;
}

.navLink {
  color: white;
  position: relative;
  cursor: pointer;
  margin-left: 200px;
}

.navLink:hover {
  position: relative;
  color: rgb(255, 174, 0);
}
</style>

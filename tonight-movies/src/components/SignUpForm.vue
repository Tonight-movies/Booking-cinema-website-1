<template>
    <form>
        <div class="form-group">
            <label>Username</label>
            <input class="form-control" placeholder="enter your name" required />
        </div>
        <div class="form-group">
            <label>Email</label>
            <input class="form-control" placeholder="Enter your email" required />
        </div>
        <div class="form-group">
            <label>Password</label>
            <input class="form-control" type="password" placeholder="Password" required />
        </div>
        <button class="btn" type="submit">SignUp</button>
    </form>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SignUpForm',
  props: {
    username : String,
    email: String,
    password: String,
  },
});
</script>
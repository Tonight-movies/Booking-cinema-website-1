<template>
  <div>
    <SignUpForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SignUpForm from '@/components/SignUpForm.vue';

export default defineComponent({
  name: 'SignUpView',
  components: {
    SignUpForm,
  },
});
</script>

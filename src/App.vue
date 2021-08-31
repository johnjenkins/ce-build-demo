<template>
  <ion-app>
    <ion-button size="large" expand="full" @click="handleClick" mode="md">nice!</ion-button>
  </ion-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  methods: {
    handleClick() {
      console.log('nice') 
    }
  }
});
</script>
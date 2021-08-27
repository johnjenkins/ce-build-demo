<template>
  <ion-app>
    <div>
    <ion-datetime></ion-datetime>
    </div>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonDatetime } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonDatetime
  }
});
</script>
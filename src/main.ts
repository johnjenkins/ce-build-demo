import { createApp } from 'vue'
import App from './App.vue'

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

import { initialize } from '@ionic/core/components';
import { IonButton } from '@ionic/core/components/ion-button';
import { IonApp } from '@ionic/core/components/ion-app';

initialize({mode: 'md'})
if (!customElements.get('ion-app')) {
  customElements.define('ion-app', IonApp);
}
if (!customElements.get('ion-button')) {
  customElements.define('ion-button', IonButton);
}

createApp(App)
  .mount('#app');

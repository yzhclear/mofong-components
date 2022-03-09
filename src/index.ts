import { App } from 'vue';

import MText from './components/MText.vue';
import MImage from './components/MImage.vue';

const components = [MText, MImage];

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export { MText, MImage, install };

export default install;

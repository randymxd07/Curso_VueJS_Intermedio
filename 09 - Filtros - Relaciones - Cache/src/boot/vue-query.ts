import { boot } from 'quasar/wrappers';
import { VueQueryPlugin } from '@tanstack/vue-query'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {

  VueQueryPlugin.install(app, {
    // Configuraciones
  });

})

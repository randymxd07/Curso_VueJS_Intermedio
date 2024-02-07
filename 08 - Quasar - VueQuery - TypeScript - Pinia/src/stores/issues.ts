import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useIssuesStore = defineStore('issues', () => {

    // TODO: arreglar tipo de dato
    const state = ref(''); // all = '', open, closed
    const labels = ref<string[]>([]);


    return {
        // State
        state,
        labels,

        // Getters

        // Actions
        toggleLabel( labelName: string ) {

          if ( labels.value.includes( labelName ) ) {
            labels.value = labels.value.filter( label => label !== labelName  );
            return;
          }

          labels.value.push( labelName );

        }

    }
});

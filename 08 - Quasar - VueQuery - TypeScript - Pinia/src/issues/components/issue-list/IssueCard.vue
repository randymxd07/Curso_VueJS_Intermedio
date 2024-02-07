<script setup lang="ts">


</script>


<template>
  <q-card class="text-black col-12 q-mb-md" flat bordered>
    <q-item>
      <q-item-section avatar>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/parallax2.jpg">
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>
          <router-link :to="`/issue/${1}`">Algún título</router-link>
        </q-item-label>
        <q-item-label caption>
          2 days ago
        </q-item-label>
      </q-item-section>

      <q-item-section>
        <q-item-label class="row items-center justify-end">
          <q-item-label class="q-mr-md">
            <q-icon name="question_answer" />
            32
          </q-item-label>
          <q-chip color="positive" text-color="white" icon="check"> Closed </q-chip>
          <q-chip color="negative" text-color="white" icon="bug_report"> Open </q-chip>
        </q-item-label>

      </q-item-section>
    </q-item>

    <q-separator />

    <q-item-section class="q-pa-md">
      Algún código de Markdown
    </q-item-section>

    <q-separator />

    <q-item-section class="q-pa-xs q-gutter-xs">
      <div>
        <q-chip outline clickable color="primary">
          Click
        </q-chip>
      </div>
    </q-item-section>

  </q-card>
</template>


<style scoped>

</style>

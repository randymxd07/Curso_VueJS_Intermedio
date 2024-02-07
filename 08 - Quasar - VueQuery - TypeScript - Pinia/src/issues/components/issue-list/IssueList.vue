<script setup lang="ts">
import IssueCard from './IssueCard.vue';


</script>

<template>
  <div class="row">
    <IssueCard v-for="issue of 20" :key="issue" />
  </div>
</template>


<style scoped>

</style>

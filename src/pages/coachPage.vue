<template>
  <filter-coaches />
  <coaches-list />
</template>
<script>
import filterCoaches from "@/components/coachComponents/filterCoaches.vue";
import CoachesList from "@/components/coachComponents/CoachesList.vue";
export default {
  components: { filterCoaches, CoachesList },
};
</script>
<style scoped>
</style>
<template>
  <base-card>
    <base-button>Refresh</base-button>
    <base-card v-for="coach in list" :key="coach.id">
      <h3>{{ coach.firstName }}</h3>
      <p>{{ coach.hourlyRate }},</p>
      <base-badge :mode="coach.areas[0]" />
    </base-card>
  </base-card>
</template>
<script>
import BaseBadge from "../base/BaseBadge.vue";
export default {
  components: { BaseBadge },
  computed: {
    list() {
      return this.$store.getters.listCoaches;
    },
  },
  beforeCreate() {
    console.log(this.$store.getters.listCoaches);
  },
};
</script>
<style scoped>
ul {
  list-style: none;
}
</style>
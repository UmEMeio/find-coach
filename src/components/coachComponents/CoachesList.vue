<template>
  <base-card>
    <base-button>Refresh</base-button>
    <base-card v-for="coach in list" :key="coach.id">
      <h3>{{ coach.firstName }} {{ coach.lastName }}</h3>
      <p>${{ coach.hourlyRate }}/hour</p>
      <base-badge
        v-for="area in coach.areas"
        :key="area"
        :mode="area"
      ></base-badge>
      <!-- <base-button>Contact</base-button>
      <base-button>See more</base-button> -->
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
};
</script>
<style scoped>
ul {
  list-style: none;
}
</style>
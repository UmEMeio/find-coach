<template>
  <base-card>
    <h2>Find Coaches</h2>
    <span class="filter-option">
      <label for="frontend">frontend</label>
      <input id="frontend" type="checkbox" checked />
    </span>
    <span class="filter-option">
      <label for="backend">backend</label>
      <input id="backend" type="checkbox" />
    </span>
    <span class="filter-option">
      <label for="carrer">carrer</label>
      <input id="carrer" type="checkbox" />
    </span>
  </base-card>
</template>
<script>
export default {};
</script>
<style scoped>
.h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
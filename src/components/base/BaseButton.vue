<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  font: inherit;
  border: 1px solid #360032;

  color: white;
  padding: 0.5rem 2rem;
  cursor: pointer;
}
</style>
<template>
  <button>
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "BaseIconButton",
};
</script>
<style scoped>
button {
  border: 0;
  padding: 0;
  margin: 0;
  background-color: transparent;
  color: inherit;
  cursor: pointer;
}
button :deep(svg) {
  height: 2rem;
  width: 2rem;
}

button:hover :deep(svg) {
  color: var(--color-main);
}
</style>

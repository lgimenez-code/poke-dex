<template>
  <button :class="type" v-bind="$attrs">
    <slot/>
  </button>
</template>


<script setup>
defineProps({
  type: {
    type: String,
    default: 'primary' | 'secondary' | 'tertiary',
  },
});

</script>


<style scoped>
button {
  padding: 0.5rem 2rem;
  transition: background-color 0.3s ease;
  @apply flex text-[var(--white)] rounded-full m-auto font-[1.8rem];
}
.primary {
  @apply bg-[var(--primary)] hover:bg-[var(--hoverprimary)];
}
.secondary {
  @apply bg-[var(--secondary)] hover:bg-[var(--hoversecondary)];
}
.tertiary {
  @apply bg-[var(--lightgray)] hover:bg-[var(--midgray)];
}
</style>
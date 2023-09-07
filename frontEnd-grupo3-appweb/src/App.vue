<script setup>

import Contact from "@/components/Contact.vue";
import Login from "@/components/Login.vue";
</script>

<template>
  <header>
    <div class="wrapper">
    </div>
  </header>

  <main>
    <Contact/>
    <Login/>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

<template>
  <header class="navbar bg-gray">
    <section class="navbar-section">
      <a href="https://griselbrand.com" class="navbar-brand text-bold mr-2">GRISELBRAND.COM</a>
      <a href="https://proxy.griselbrand.com" class="btn btn-link">Proxy</a>
      <a href="https://decklist.griselbrand.com" class="btn btn-link">Decklist</a>
    </section>
    <section class="navbar-section hide-sm">
      <a href="https://twitter.com/haganbmj" target="_blank" class="btn ml-1">Twitter</a>
      <a href="https://github.com/haganbmj/decklist" target="_blank" class="btn btn-primary ml-1">GitHub</a>
    </section>
  </header>
  <div id="content" class="container">
    <MainPage/>
  </div>
</template>

<script setup lang="ts">
import MainPage from './views/MainPage.vue'
</script>

<style>
.navbar {
    padding: .4rem;
}

.navbar-section.floater {
    flex-basis: min-content;
}

.navbar-icon {
    height: 36px;
    width: auto;
}

#content {
  margin: 0 auto;
  margin-top: 0.4rem;
  margin-bottom: 4rem;
  padding: 0 1rem;
  /* max-width: 1400px; */
  max-width: 1000px;
}

</style>

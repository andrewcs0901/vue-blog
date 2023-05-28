<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <RouterLink to="/">
        Andrew's Blog
      </RouterLink>
      <nav>
        <RouterLink to="/">Postagens</RouterLink>
        <RouterLink to="/about">Sobre</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
  <footer>
    <div class="wrapper">
      <p>
        Feito com ❤️ por <router-link to="about">Andrew Costa Silva</router-link>
      </p>
    </div>
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.wrapper {
  display: flex;
}

.logo {
  width: 1ch;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
  }

  nav {
    text-align: left;
    font-size: 1rem;
  }
}
</style>

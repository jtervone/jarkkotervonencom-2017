<template>
  <div class="container">
    <header>
      <div><g-link :to="{ name: 'home' }"><g-image src="~/assets/images/logo-192.png" alt="\0" class="logo" /></g-link></div>
      <div><g-link :to="{ name: 'home' }">
        <component :is="titleTag" class="heading">{{ config.siteName }}</component>
      </g-link></div>
    </header>
    <nav class="navbar">
      <ul class="navbar-list">
        <li class="navbar-item">
          <g-link to="/" class="navbar-link">Etusivu</g-link>
        </li>
        <li class="navbar-item">
          <g-link to="/arkisto" class="navbar-link">Arkisto</g-link>
        </li>
        <li class="navbar-item">
          <g-link to="/kuka" class="navbar-link">Kuka?</g-link>
        </li>
        <li class="navbar-item">
          <g-link to="/muutoshistoria" class="navbar-link">Muutoshistoria</g-link>
        </li>
        <li class="navbar-item">
          <a href="/feed.xml" class="navbar-link">RSS</a>
        </li>
      </ul>
    </nav>
    <slot/>
    <footer>
      Copyright &copy; <a href="https://jarkkotervonen.com/">Jarkko Tervonen</a>
    </footer>
  </div>
</template>

<script>
import config from '~/.temp/config.js';

export default {
  computed: {
    titleTag () {
      return this.$route.name === 'home' ? 'h1' : 'h6'
    },
    config () {
      return config
    }
  }
}
</script>

<style lang="scss">
@import "./scss/normalize.scss";
@import "./scss/skeleton.scss";
@import "./scss/highlight.scss";
@import "./scss/custom.scss";
@import "./scss/native.css";
</style>

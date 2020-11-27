<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
    <Main />
    <Auth />
  </div>
</template>
<script>
import Main from "./pages/Main";
import Auth from "./pages/Auth";

export default {
  components: {
    Main,
    Auth,
  },
};
</script>
<style>
</style>

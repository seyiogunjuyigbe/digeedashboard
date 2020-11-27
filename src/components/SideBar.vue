<template>
  <div class="sidebar">
    <b-list-group>
      <b-list-group-item>Home</b-list-group-item>
      <b-list-group-item
        ><router-link to="/profile">Profile</router-link></b-list-group-item
      >
      <b-list-group-item>Subjects</b-list-group-item>
      <b-list-group-item
        ><router-link to="/result">Result</router-link></b-list-group-item
      >
      <b-list-group-item>Logout</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style>
</style>
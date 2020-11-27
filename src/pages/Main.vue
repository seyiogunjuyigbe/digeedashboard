<template>
  <div class="row">
    <div class="col-lg-3">
      <Sidebar />
    </div>
    <div class="col-lg-9">
      <Content />
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/SideBar";
import Content from "../components/Content";
export default {
  components: {
    Sidebar,
    Content,
  },
};
</script>

<style>
</style>
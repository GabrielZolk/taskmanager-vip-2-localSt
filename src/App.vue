<template>
  <div>
    <Navbar />
    <Tasks />
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Tasks from "./components/Tasks.vue";

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: rgb(65, 65, 65);
}
</style>

<template>
  <div>
    <div class="nav">
      <router-link to="/">money</router-link> |
      <router-link to="/labels">labels</router-link> |
      <router-link to="/statistics">statistics</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav"
};

</script>

<style scoped>
.nav{
  border:1px solid red;
}
</style>

<template>
  <div>
    <div class="nav">
      <router-link to="/"><i class="iconfont icon-money"></i>money</router-link> |
      <router-link to="/labels"><i class="iconfont icon-label"></i>labels</router-link> |
      <router-link to="/statistics"><i class="iconfont icon-statistics"></i>statistics</router-link>
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

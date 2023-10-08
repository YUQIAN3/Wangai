<template>
    <nav>
      <router-link to="/" class="item"><i class="iconfont icon-money"></i>记账</router-link>
      <router-link to="/labels" class="item"><i class="iconfont icon-label"></i>标签</router-link>
      <router-link to="/statistics" class="item"><i class="iconfont icon-statistics"></i>统计</router-link>
    </nav>
</template>

<script>
export default {
  name: "Nav"
};

</script>

<style scoped lang="scss">
nav{
  display: flex;
  box-shadow:0 0 3px rgba(0,0,0,0.5) ;
  > .item{
    padding: 2px 0;
    display: flex;
    width: 33.333%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
     > .iconfont{
     font-size:30px;
    }
  }
}

</style>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import 'https://at.alicdn.com/t/c/font_4275460_we61mp9aogs.css';
*{
  margin:0;
  padding:0;
  box-sizing:border-box ;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

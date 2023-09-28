<template>
  <div>
    <div class="nav-wrapper">
      <div class="content">
       <slot ></slot>
      </div>

      <Nav></Nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout"
};

</script>

<style scoped lang="scss">
.nav-wrapper{
  display: flex;
  flex-direction: column;
  height:100vh;
  border:1px solid black;
}
.content{
  border:1px solid green;
  flex-grow: 1;
  overflow: auto;
}
</style>

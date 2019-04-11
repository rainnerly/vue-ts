<template>
  <div class="head-tail">
    <header>This is the header！</header>
    <slot name="content"></slot>
    <!-- <footer>
      This is the footer!
    </footer>-->
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
.head-tail {
  position: fixed;
  top: 0;
  right: 0;
  width: calc(100% - 250px);
  header {
    height: 50px;
    line-height: 50px;
    color: #fff;
    width: 100%;
    background-color: #333;
  }
  header {
    left: 250px;
  }
  // footer{
  //   bottom: 0;
  // }
}
</style>


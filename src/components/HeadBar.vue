<template>
  <div class="head-tail">
    <header>
      This is the header！
    </header>
    <slot name="content"></slot>
    <!-- <footer>
      This is the footer!
    </footer> -->
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Home extends Vue {
}
</script>
<style lang="scss" scoped>
.head-tail{
  header, footer{
    position: fixed;
    height: 50px;
    line-height: 50px;
    color: #fff;
    width: 100%;
    background-color: #333;
  }
  header{
    top: 0;
  }
  // footer{
  //   bottom: 0;
  // }
}
</style>


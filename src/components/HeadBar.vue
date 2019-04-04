<template>
  <div class="head-tail">
    <header>
      This is the header！
    </header>
    <slot name="content"></slot>
    <footer>
      This is the footer!
    </footer>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Home extends Vue {
}
</script>

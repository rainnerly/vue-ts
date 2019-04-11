<template>
  <div class="home">
    <div class="left">
      <navbar></navbar>
    </div>
    <headbar>
      <template v-slot:content>
        <div class="main-content">
          <div class="content">
            <router-view></router-view>
          </div>
        </div>
      </template>
    </headbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import navbar from '@/components/navBar.vue'; // @ is an alias to /src
import headbar from '@/components/HeadBar.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
    navbar,
    headbar,
  },
})
export default class Home extends Vue {
  private msg: string = 'hmhm';
}
</script>
<style lang="scss" scoped>
.main-content {
  width: 100%;
  height: calc(100% - 100px);
}
.left {
  width: 250px;
  height: 100vh;
  text-align: left;
  background-color: #545c64;
  /deep/ {
    .el-menu {
      border-right: none;
    }
  }
}
</style>


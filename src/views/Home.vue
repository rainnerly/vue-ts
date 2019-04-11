<template>
  <div class="home">
    <headbar>
      <template v-slot:content>
        <div class="main-content">
          <div class="left">
            <navbar></navbar>
          </div>
          <div class="content">
            <router-view></router-view>
          </div>
        </div>
      </template>
    </headbar>
    <!-- <div class="left">
    </div>
    <div class="content"></div>-->
    <!-- <hello-world :msg="msg"></hello-world> -->
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
.main-content{
  width: 100%;
  height: calc(100% - 100px);
}
.left {
  width: 300px;
  height: 100%;
  // background-color: #ccc;
}
</style>


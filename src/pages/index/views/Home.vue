<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld msg="Welcome to Your iShow UI for Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  mounted(){
      (this as any).Trend.login();
      (this as any).Trend.logout();
  },
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>

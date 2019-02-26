<template>
  <div class="home">
    this is page1.html 
    vuex状态state的值：{{this.$store.state.count}}
    vuex状态state的值：{{this.$store.getters.consoleCount}}

    <button @click="test">+</button>
  </div>
</template>

<script>

export default {
  name: 'home',
  methods: {
    test(){
      this.$store.commit("addCount");
      this.$store.dispatch("addCount");
    }
  },
}
</script>

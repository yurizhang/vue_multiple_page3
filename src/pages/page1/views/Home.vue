<template>
  <div class="home">
    this is home page1.html 
    vuex状态state的值：{{this.$store.state.count}}
    vuex状态gett state的值：{{consoleCount}}

    <button @click="test">+</button>

    <div class="componentsA">
      <P class="title">组件A</P>
      <P class="titleName">名称：{{resturantName}}</P>
      <div>
            <!-- 点击修改 为 A 餐馆 -->
          <button class="btn" @click="modifyAName('trendmicro A compoents')">修改为trendmicro A compoents</button>
      </div>

    </div>




  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'home',
  computed: {
      ...mapGetters(['resturantName','consoleCount']) // 动态计算属性，相当于this.$store.getters.resturantName
  },
  methods: {
    ...mapActions( // 语法糖
          ['modifyAName'] // 相当于this.$store.dispatch('modifyName'),提交这个方法
    ),
    test(){
      this.$store.commit("addCount");
      this.$store.dispatch("addCount");
    }
  },
}
</script>

<template>
  <div class="home">
    this is test in page1.html 
    vuex状态state的值：{{count}}
    <button @click="test">+</button>
   <div class="componentsB">
      <P class="title">组件B</P>
      <P class="titleName">名称：{{resturantName}}</P>
      <div>
          <!-- 点击修改 为 B 餐馆 -->
          <button class="btn" @click="modifyBName('trendmicro B compoents')">修改为trendmicro B compoents</button>
      </div>
 
  </div>


  </div>


</template>

<script>

import {mapActions, mapGetters, mapState} from 'vuex'
export default {
  name: 'test',
  computed: {
      ...mapState(['count']), // 相当于 this.$store.state.count
      ...mapGetters(['resturantName']) // 动态计算属性，相当于this.$store.getters.resturantName
  },
  methods: {
    ...mapActions( // 语法糖
          ['modifyBName'] // 相当于this.$store.dispatch('modifyName'),提交这个方法
    ),
    test(){
      this.$store.commit("addCount");
      this.$store.dispatch("addCount");
    }
  },
}
</script>

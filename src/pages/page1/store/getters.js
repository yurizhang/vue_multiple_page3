// 获取最终的状态信息
// 在getters中声明state中变量的计算函数，缓存计算后的数据， 通过 this.$store.getters 调用
// 接受state作为参数，每次 statecount发生变化时 ， 都会被调用

export const resturantName = state => state.resturantName
export const consoleCount=state => {
      // to do...
      return state.count;
}
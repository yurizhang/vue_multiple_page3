/* eslint-disable no-console */
const store = new Vuex.Store({
    //待添加
    // 在state中去声明全局变量，可以通过 this.$store.state 访问
    state: {
      count: 0
    },
    // 在getters中声明state中变量的计算函数，缓存计算后的数据， 通过 this.$store.getters 调用
    getters: {
      // 接受state作为参数，每次 count发生变化时 ， 都会被调用
      consoleCount: state => {
        console.log('the state count : ' + state.count);
      }
    },
    // 只能执行同步方法，不要去执行异步方法 通过 this.$store.commit 方法去调用
    mutations: {
      // 改变state状态的方法，不建议直接通过  
      // this.$store.state.? = ？的方式改变state中的状态
      addCount: state => {
        ++state.count;
      },
      // mutations的第一个参数即为 state对象，并且可以向mutation传入额外的参数
      addNumCount: (state, n) => {
        state.count += n;
      },
    },
    // 借助actions的手去 执行 mutations ， 通过  this.$store.dispatch 的方式调用
    // 可以用来执行异步操作，可以跟踪异步数据状态变化
    actions: {
      addCount: context => {
        // 调用 mutation
        setTimeout(() => {
          context.commit('addCount');
        }, 2000);
        
      },
      addNumCount: (context, n) => {
        context.commit('addNumCount', n);
      }
    }
  
  
  });

  export default store;
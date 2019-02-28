
// 给action注册事件处理函数。当这个函数被触发时候，将状态提交到mutations中处理
// 借助actions的手去 执行 mutations ， 通过  this.$store.dispatch 的方式调用
// 可以用来执行异步操作，可以跟踪异步数据状态变化
// commit 提交；name即为点击后传递过来的参数，此时是 'A餐馆'

export const modifyAName = ({commit},name) => commit('modifyAName', name);
export const modifyBName = ({commit},name) => commit('modifyBName', name);


export const addCount= (context) => {
    // 调用 mutation
    setTimeout(() => {
      context.commit('addCount');
    }, 2000);
    
}
export const addNumCount= (context, n) => {
    context.commit('addNumCount', n);
}
 
// ES6精简写法
// export const modifyAName = ({commit},name) => commit('modifyAName', name)


// 假设 getData() 和 getOtherData() 返回的是 Promise

// actions: {
//     async actionA ({ commit }) {
//       commit('gotData', await getData())
//     },
//     async actionB ({ dispatch, commit }) {
//       await dispatch('actionA') // 等待 actionA 完成
//       commit('gotOtherData', await getOtherData())
//     }
//   }
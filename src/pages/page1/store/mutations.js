// 提交 mutations是更改Vuex状态的唯一合法方法,mutations的第一个参数即为 state对象，并且可以向mutation传入额外的参数
// mutation 必须是同步函数，不要去执行异步方法 通过 this.$store.commit 方法去调用
// 不建议直接通过   this.$store.state.name = ？的方式改变state中的状态

export const modifyAName = (state, name) => { // home组件点击更改resturantName名称为 trendmicro A compoents
    state.resturantName = name // 把方法传递过来的参数，赋值给state中的resturantName
}
export const modifyBName = (state, name) => { // test组件点击更改名称为 trendmicro B compoents
    state.resturantName = name
}

export const addCount=state => {
    ++state.count;
}

export const addNumCount=(state, n) => {
    state.count += n;
}
module.exports = {
    baseUrl: './',
    productionSourceMap: false,
    configureWebpack: () => {
        // 格式 key: value, 左边代表要引入资源包的名字，右边代表该模块在外面使用引用的名字
        return {
            // optimization: {
            //     splitChunks: {
            //     minSize: 50000,
            //     maxSize: 200000
            //     }
            // },
            externals: {
                "vue": 'Vue',
                "vuex": 'Vuex',
                "axios": "axios",
                "vue-router": 'VueRouter',
                //"element-ui": 'Element'
            }
        }
    }, 
    pages: {
        index: {
            // page 的入口
            entry: 'src/pages/index/main.ts',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'iShowUI for Vue',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
        //subpage: 'src/subpage/main.js'
        page1: {
            entry: 'src/pages/page1/main.js',
            template: 'public/page1.html',
            filename: 'page1.html',
            title: 'page1'
        },
        page2: {
            entry: 'src/pages/page2/main.js',
            template: 'public/page2.html',
            filename: 'page2.html',
            title: 'page2'
        }
    }
};

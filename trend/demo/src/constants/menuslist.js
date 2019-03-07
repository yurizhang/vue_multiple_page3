export const menus = [
    { key: '/', title: '首页', icon: 'home', breadcrumb: ['首页', '控制台'] },
    {
        key: '/app/layout', title: '布局组件', icon: 'layout',
        sub: [
            { key: '/app/layout/layout', title: '布局', icon: '', breadcrumb: ['布局组件', '布局'] },
            { key: '/app/layout/grid', title: '栅格', icon: '', breadcrumb: ['布局组件', '栅格'] },
            { key: '/app/layout/iconplus', title: '图标扩展', icon: '', breadcrumb: ['布局组件', '图标扩展'] },
        ],
    },
    {
        key: '/app/ui', title: '常用组件', icon: 'appstore-o',
        sub: [
            { key: '/app/ui/buttons', title: '按钮', icon: '', breadcrumb: ['常用组件', '按钮'] },
            { key: '/app/ui/icons', title: '图标', icon: '', breadcrumb: ['常用组件', '图标'] },
            { key: '/app/ui/colors', title: '颜色', icon: '', breadcrumb: ['常用组件', '颜色'] },
            { key: '/app/ui/loading', title: '加载中', icon: '', breadcrumb: ['常用组件', '加载中'] },
            { key: '/app/ui/message', title: '消息提示框', icon: '', breadcrumb: ['常用组件', '消息提示框'] },
            { key: '/app/ui/notifications', title: '通知弹框', icon: '', breadcrumb: ['常用组件', '通知弹框'] },
            { key: '/app/ui/Dialog', title: '对话框', icon: '', breadcrumb: ['常用组件', '对话框'] },
            { key: '/app/ui/Tooltip', title: '提示框', icon: '', breadcrumb: ['常用组件', '提示框'] },
            //新增二级菜单Card、Collapse、Carousel组件
            { key: '/app/ui/Card', title: '卡片', icon: '', breadcrumb:['常用组件','卡片'] },
            { key: '/app/ui/Collapse', title: '折叠面板', icon: '', breadcrumb:['常用组件','折叠面板'] },
            { key: '/app/ui/Carousel', title: '走马灯', icon: '', breadcrumb:['常用组件','走马灯'] },
			{ key: '/app/ui/Slider', title: '滑块', icon: '', breadcrumb:['常用组件','滑块'] }
            // { key: '/app/ui/banners', title: '轮播图', icon: '', },
            // { key: '/app/ui/wysiwyg', title: '富文本', icon: '', },
            // { key: '/app/ui/drags', title: '拖拽', icon: '', },
            // { key: '/app/ui/gallery', title: '画廊', icon: '', },
        ],
    },
    {
        key: '/app/nav', title: '导航', icon: 'scan',
        sub: [
            { key: '/app/nav/tabs', title: '标签页', icon: '', breadcrumb: ['导航', '标签页'] },
            { key: '/app/nav/menu', title: '菜单', icon: '', breadcrumb: ['导航', '菜单'] },
            { key: '/app/nav/breadcrumb', title: '面包屑', icon: '', breadcrumb: ['导航', '面包屑'] },
            { key: '/app/nav/dropdown', title: '下拉框', icon: '', breadcrumb: ['导航', '下拉框'] },
            { key: '/app/nav/step', title: '步骤', icon: '', breadcrumb: ['导航', '步骤'] },
        ],
    }, 
    {
        key: '/app/animate', title: '动画', icon: 'rocket',
        sub: [
            { key: '/app/animate/animateCss', title: '动画效果', icon: '', breadcrumb: ['动画', '动画效果'] }
        ],
    },
    // {
    //     key: '/app/animation', title: '动画', icon: 'rocket',
    //     sub: [
    //         { key: '/app/ui/testsize', title: '基础动画', icon: '', },
    //         { key: '/app/animation/exampleAnimations', title: '动画案例', icon: '', },
    //     ],
    // },
    {
        key: '/app/data', title: '数据', icon: 'table',
        sub: [
            { key: '/app/data/table', title: '表格', icon: '', breadcrumb: ['数据', '表格'] },
            { key: '/app/data/tag', title: '标签', icon: '', breadcrumb: ['数据', '标签'] },
            { key: '/app/data/progress', title: '进度条', icon: '', breadcrumb: ['数据', '进度条'] },
            { key: '/app/data/pagination', title: '分页', icon: '', breadcrumb: ['数据', '分页'] },
            { key: '/app/data/badge', title: '标记', icon: '', breadcrumb:['数据','标记'] },
            { key: '/app/data/tree', title: '树', icon: '', breadcrumb:['数据','树'] },
        ],
    },
    {
        key: '/app/form', title: '表单', icon: 'form',
        sub: [
            { key: '/app/form/formElements', title: '表单元素', icon: '', breadcrumb: ['表单', '表单元素'] },
            //{ key: '/app/form/basicForm', title: '基础表单', icon: '', },
            { key: '/app/form/cascader', title: '级联选择器', icon: '', breadcrumb: ['表单', '级联选择器'] },
            { key: '/app/form/Transfer', title: '穿梭框', icon: '', breadcrumb:['表单','穿梭框'] },
            { key: '/app/form/Form', title: '表单', icon: '', breadcrumb:['表单','表单'] },
            { key: '/app/form/Rate', title: '评分', icon: '', breadcrumb:['表单','评分']},
        ],
    },
    {
        key: '/app/chart', title: '图表', icon: 'area-chart',
        sub: [
            { key: '/app/chart/barchart', title: '柱状图', icon: '', breadcrumb: ['图表', '柱状图'] },
            { key: '/app/chart/piechart', title: '饼图', icon: '', breadcrumb: ['图表', '饼图'] },
            { key: '/app/chart/linechart', title: '折线图', icon: '', breadcrumb: ['图表', '折线图'] }
            //{ key: '/app/chart/recharts', title: 'recharts', icon: '', },
        ],
    },
    {
        key: '/app/public', title: '业务组件', icon: 'switcher',
        sub: [
            { key: '/app/public/loginForm', title: '登录', icon: '', breadcrumb: ['业务组件', '登录'] },
            // { key: '/reg', title: '注册', icon: '', breadcrumb:['页面','注册'] },
            // { key: '/poplogin', title: '弹出层表单', icon: '', breadcrumb:['页面','弹出层表单'] },
            { key: '/app/public/404', title: '404', icon: '', breadcrumb: ['业务组件', '404'] },
            { key: '/app/public/fuzzySearch', title: 'POI 选择', icon: '', breadcrumb: ['业务组件', 'POI选择'] },
            { key: '/app/public/dynamicTable', title: '动态控制表格', icon: '', breadcrumb: ['业务组件', '动态控制表格'] },
            { key: '/app/public/advancedSearch', title: '高级搜索', icon: '', breadcrumb: ['业务组件', '高级搜索'] },
            { key: '/app/public/RichTextEditor', title: '富文本编辑器', icon: '', breadcrumb: ['业务组件', '富文本编辑器'] },
            { key: '/app/public/CopyUrlAndRefresh', title: '复制URL&刷新', icon: '', breadcrumb: ['业务组件', '复制URL&刷新'] },
            //{ key: '/app/public/NewRichTextEditor', title: '富文本编辑器(粘贴图片)', icon: '', breadcrumb: ['业务组件', '富文本编辑器'] }
            // { key: '/app/public/test3Menu', title: '我是四级菜单',icon: 'table',
            //     sub: {
            //         key: '/app/public/test3Menu/sub',
            //         title: 'SubMenu',
            //         icon: 'table',
            //         sub: {
            //             key: '/app/public/test3Menu/sub/subs',
            //             title: 'SubMenu',
            //             icon: 'table',
            //             sub: [{
            //                 key: '/app/public/test3Menu/sub/subs/child1',
            //                 title: 'child1名字太长了怎么办',
            //                 icon: '',
            //                 breadcrumb: ['我是四级菜单', 'SubMenu', 'SubMenu', 'child1']
            //             }, {
            //                 key: '/app/public/test3Menu/sub/subs/child2',
            //                 title: 'child2',
            //                 icon: '',
            //                 breadcrumb: ['我是四级菜单', 'SubMenu', 'SubMenu', 'child2']
            //             }, {
            //                 key: '/app/public/test3Menu/sub/subs/child3',
            //                 title: 'child3',
            //                 icon: '',
            //                 breadcrumb: ['我是四级菜单', 'SubMenu', 'SubMenu', 'child3']
            //             }]
            //         }
            //     }
            // },// hj test
        ],
    },
    {
        key: '/app/googleMap', title: '谷歌地图', icon: 'environment',
        sub: [
            { key: '/app/googlemap/base', title: '标记', icon: '', breadcrumb: ['谷歌地图', '标记'] },
            { key: '/app/googlemap/drawing', title: '坐标连线', icon: '', breadcrumb: ['谷歌地图', '坐标连线'] },
            { key: '/app/googlemap/route', title: '线路导航', icon: '', breadcrumb: ['谷歌地图', '线路导航'] },
            { key: '/app/googlemap/popup', title: '自定义窗口', icon: '', breadcrumb: ['谷歌地图', '自定义窗口'] },
            { key: '/app/googlemap/h5', title: '移动端优化', icon: '', breadcrumb: ['谷歌地图', '移动端优化'] },
        ],
    },
];

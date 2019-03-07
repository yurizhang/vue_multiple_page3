export const TableList = {
    Tree:{
        Options: [{
            param: "message",
            instruction: "消息文字",
            type: "string/ReactElement",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "type",
            instruction: "主题",
            type: "string",
            optional: "success/warning/info/error",
            defaultvalue: "info"
        },
        {
            param: "iconClass",
            instruction: "自定义图标的类名，会覆盖 type",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "customClass",
            instruction: "自定义类名",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "duration",
            instruction: "显示时间, 毫秒。设为 0 则不会自动关闭",
            type: "number",
            optional: "—",
            defaultvalue: "3000"
        },
        {
            param: "showClose",
            instruction: "是否显示关闭按钮",
            type: "boolean",
            optional: "—",
            defaultvalue: "false"
        },
        {
            param: "onClose",
            instruction: "关闭时的回调函数, 参数为被关闭的 message 实例",
            type: "function",
            optional: "—",
            defaultvalue: "—"
        }
        ],
        List:[
            {
                param: 'data',
                instruction: '展示数据',
                type: 'array',
                optional: '—',
                defaultvalue: '—'
            },
            {			
                param: 'emptyText',
                instruction: '内容为空的时候展示的文本',
                type: 'String',
                optional: '—',
                defaultvalue: '—'
            },
            {				
                param: 'nodeKey',
                instruction: '每个树节点用来作为唯一标识的属性，整颗树应该是唯一的',
                type: 'String',
                optional: '—',
                defaultvalue: '—'
            },
            { 				
                param: 'options',
                instruction: '配置选项，具体看下表',
                type: 'object',
                optional: '—',
                defaultvalue: '—'
            },
            { 				
                param: 'load',
                instruction: '加载子树数据的方法',
                type: 'function(node, resolve)',
                optional: '—',
                defaultvalue: '—'
            },
            {				
                param: 'renderContent',
                instruction: '树节点的内容区的渲染 Function',
                type: '(nodeModel, data, store)=>ReactElement',
                optional: '—',
                defaultvalue: '—'
            },
            {  				
                param: 'highlightCurrent',
                instruction: '是否高亮当前选中节点，默认值是 false。',
                type: 'boolean',
                optional: '—',
                defaultvalue: 'false'
            },
            {				
                param: 'currentNodeKey',
                instruction: '当前选中节点的 key，只写属性',
                type: 'string, number',
                optional: '—',
                defaultvalue: '—'
            },
            {  				
                param: 'defaultExpandAll',
                instruction: '是否默认展开所有节点',
                type: 'boolean',
                optional: '—',
                defaultvalue: 'false'
            },
            {				
                param: 'expandOnClickNode',
                instruction: '是否在点击节点的时候展开或者收缩节点，默认值为true,如果为false，则只有点箭头图标的时候才会展开或者收缩节点。',
                type: 'boolean',
                optional: '—',
                defaultvalue: 'true'
            },
            {				
                param: 'autoExpandParent',
                instruction: '展开子节点的时候是否自动展开父节点',
                type: 'boolean',
                optional: '—',
                defaultvalue: 'true'
            },
            {				
                param: 'defaultExpandedKeys',
                instruction: '默认展开的节点的key的数组',
                type: 'array',
                optional: '—',
                defaultvalue: '—'
            },
            {
                				
                param: 'isShowCheckbox',
                instruction: '节点是否可被选择',
                type: 'boolean',
                optional: '—',
                defaultvalue: 'false'
            },
            {			
                param: 'checkedKeyStrictly',
                instruction: '在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为false',
                type: 'boolean',
                optional: '—',
                defaultvalue: 'false'
            },
            {				
                param: 'defaultCheckedKeys',
                instruction: '默认勾选的节点的key的数组',
                type: 'array',
                optional: '—',
                defaultvalue: '—'
            },
            { 				
                param: 'filterNodeMethod',
                instruction: '对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏',
                type: 'Function(value, data, node)',
                optional: '—',
                defaultvalue: '—'
            },
            {				
                param: 'accordion',
                instruction: '是否每次只打开一个同级树节点展开',
                type: 'boolean',
                optional: '—',
                defaultvalue: 'false'
            },
            {				
                param: 'indent',
                instruction: '相邻级节点间的水平缩进，单位为像素',
                type: 'number',
                optional: '—',
                defaultvalue: '16'
            }  
        ],
    Events: [
        {		
            eventName: "onNodeClicked",
            instruction: "节点被点击时的回调",
            callbackParam: "onNodeClicked(nodeModel.data, node)"
        },
        {	
            eventName: "onCheckChange",
            instruction: "节点选中状态发生变化时的回调",
            callbackParam: "onCheckChange(nodeModel.data, checked, indeterminate)"
        },
        { 		
            eventName: "onCurrentChange",
            instruction: "当前选中节点变化时触发的事件",
            callbackParam: "onCurrentChange(nodeModel.data, node)"
        },
        {		
            eventName: "onNodeExpand",
            instruction: "节点被展开时触发的事件",
            callbackParam: "onNodeExpand(nodeModel.data, nodeModel, node)"
        },
        { 		
            eventName: "onNodeCollapse",
            instruction: "节点被关闭时触发的事件",
            callbackParam: "onNodeCollapse(nodeModel.data, nodeModel, node)"
        }
    ]
    },
    Form: {
        List: [
            {
                param: 'model',
                instruction: '表单数据对象',
                type: 'object',
                optional: '—',
                defaultvalue: '—'
            },
            {
                param: 'rules',
                instruction: '表单验证规则',
                type: 'object',
                optional: '—',
                defaultvalue: '—'
            },
            {
                param: 'inline',
                instruction: '行内表单模式',
                type: 'boolean',
                optional: '—',
                defaultvalue: 'false'
            },
            {
                param: 'labelPosition',
                instruction: '表单域标签的位置',
                type: 'string',
                optional: '—',
                defaultvalue: 'right'
            },
            {
                param: 'labelWidth',
                instruction: '表单域标签的宽度，所有的 form-item 都会继承 form 组件的 labelWidth 的值',
                type: 'string',
                optional: '—',
                defaultvalue: '—'
            },
            {
                param: 'labelSuffix',
                instruction: '表单域标签的后缀',
                type: 'string',
                optional: '—',
                defaultvalue: '—'
            }
        ],
        Method: [{
            methodName: "validate(cb)",
            instruction: "对整个表单进行校验的方法",
            methodParam: "—"
        },
        {
            methodName: "validateField(prop, cb)",
            instruction: "对部分表单字段进行校验的方法",
            methodParam: "—"
        },
        {
            methodName: "resetFields",
            instruction: "对整个表单进行重置，将所有字段值重置为空并移除校验结果",
            methodParam: "—"
        }
        ]
    },
    FormItem: {
        List: [{
            param: 'prop',
            instruction: '表单域 model 字段',
            type: 'string',
            optional: '传入 Form 组件的 model 中的字段',
            defaultvalue: '—'
        },
        {
            param: 'label',
            instruction: '标签文本',
            type: 'string',
            optional: '—',
            defaultvalue: '—'
        },
        {
            param: 'labelWidth',
            instruction: '表单域标签的的宽度，例如`50px`',
            type: 'string',
            optional: '—',
            defaultvalue: '—'
        },
        {
            param: 'required',
            instruction: '是否必填，如不设置，则会根据校验规则自动生成',
            type: 'boolean',
            optional: '—',
            defaultvalue: 'false'
        }
        ]
    },
    Transfer: {
        List: [
            {
                param: 'data',
                instruction: 'Transfer 的数据源',
                type: 'array[{ key, label, disabled }]',
                optional: '—',
                defaultvalue: '[ ]'
            },
            {
                param: 'filterable',
                instruction: '是否可搜索',
                type: 'boolean',
                optional: '—',
                defaultvalue: 'false'
            },
            {
                param: 'filterPlaceholder',
                instruction: '搜索框占位符',
                type: 'string',
                optional: '—',
                defaultvalue: '请输入搜索内容'
            },
            {
                param: 'filterMethod',
                instruction: '自定义搜索方法',
                type: 'function',
                optional: '—',
                defaultvalue: '—'
            },
            {
                param: 'titles',
                instruction: '自定义列表标题',
                type: 'array',
                optional: '—',
                defaultvalue: `['列表 1', '列表 2']`
            },
            {
                param: 'buttonTexts',
                instruction: '自定义按钮文案',
                type: 'array',
                optional: '—',
                defaultvalue: `[]`
            },
            {
                param: 'renderContent',
                instruction: '自定义数据项渲染函数',
                type: 'function(h, option)',
                optional: '—',
                defaultvalue: `—`
            },
            {
                param: 'footerFormat',
                instruction: '列表底部勾选状态文案',
                type: 'object{noChecked, hasChecked}',
                optional: '—',
                defaultvalue: `{ noChecked: '共 ${`total`} 项', hasChecked: '已选 ${`checked`}/${`total`} 项' }`
            },
            {
                param: 'propsAlias',
                instruction: '数据源的字段别名',
                type: 'object{key, label, disabled}',
                optional: '—',
                defaultvalue: `—`
            },
            {
                param: 'leftDefaultChecked',
                instruction: '初始状态下左侧列表的已勾选项的 key 数组',
                type: 'array',
                optional: '—',
                defaultvalue: `[ ]`
            },
            {
                param: 'rightDefaultChecked',
                instruction: '初始状态下右侧列表的已勾选项的 key 数组',
                type: 'array',
                optional: '—',
                defaultvalue: `[ ]`
            },
            {
                param: 'leftFooter',
                instruction: '左侧列表底部的内容',
                type: 'ReactElement',
                optional: '-',
                defaultvalue: `-`
            },
            {
                param: 'rightFooter',
                instruction: '右侧列表底部的内容',
                type: 'ReactElement',
                optional: '—',
                defaultvalue: `-`
            },
            {
                param: 'allCheckVisible',
                instruction: '是否显示全选勾选框',
                type: 'boolean',
                optional: '—',
                defaultvalue: `true`
            },
            {
                param: 'isShowTitle',
                instruction: '是否显示面板头部标题',
                type: 'boolean',
                optional: '—',
                defaultvalue: `true`
            },
            {
                param: 'disabled',
                instruction: '是否禁用选择框',
                type: 'boolean',
                optional: '—',
                defaultvalue: `false`
            }
        ],
        Events: [{
            eventName: "onChange",
            instruction: "右侧列表元素变化时触发",
            callbackParam: "当前值、数据移动的方向（'left' / 'right'）、发生移动的数据 key 数组"
        }]
    },
    Carousel: {
        List: [{
            param: 'height',
            instruction: '走马灯的高度',
            type: 'number',
            optional: '—',
            defaultvalue: '300'
        },
        {
            param: 'initialIndex',
            instruction: '初始状态激活的幻灯片的索引，从 0 开始',
            type: 'number',
            optional: '—',
            defaultvalue: '0'
        },
        {
            param: 'trigger',
            instruction: '指示器的触发方式',
            type: 'string',
            optional: 'click',
            defaultvalue: '—'
        },
        {
            param: 'autoplay',
            instruction: '是否自动切换',
            type: 'boolean',
            optional: '—',
            defaultvalue: 'true'
        },
        {
            param: 'interval',
            instruction: '自动切换的时间间隔，单位为毫秒',
            type: 'number',
            optional: '—',
            defaultvalue: 'true'
        },
        {
            param: 'indicatorPosition',
            instruction: '指示器的位置',
            type: 'string',
            optional: 'outside/none',
            defaultvalue: '—'
        },
        {
            param: 'arrow',
            instruction: '切换箭头的显示时机',
            type: 'string',
            optional: 'always/hover/never',
            defaultvalue: 'hover'
        },
        {
            param: 'type',
            instruction: '走马灯的类型',
            type: 'string',
            optional: 'card/flatcard',
            defaultvalue: '—'
        }
        ]
        ,
        Events: [{
            eventName: "onChange",
            instruction: "幻灯片切换时触发",
            callbackParam: "目前激活的幻灯片的索引，原幻灯片的索引"
        }],
        Method: [{
            methodName: "setActiveItem",
            instruction: "手动切换幻灯片",
            methodParam: "需要切换的幻灯片的索引，从 0 开始；或相应 Carousel.Item 的 name 属性值"
        },
        {
            methodName: "prev",
            instruction: "切换至上一张幻灯片",
            methodParam: "—"
        },
        {
            methodName: "next",
            instruction: "切换至下一张幻灯片",
            methodParam: "—"
        }]
    },
    CarouselItem: {
        List: [{
            param: 'name',
            instruction: '幻灯片的名字，可用作 setActiveItem 的参数',
            type: 'string',
            optional: '—',
            defaultvalue: '—'
        }]
    },
    Collapse: {
        List: [{
            param: 'accordion',
            instruction: '是否为手风琴模式',
            type: 'boolean',
            optional: '-',
            defaultvalue: 'false'
        },
        {
            param: 'value',
            instruction: '当前激活的面板(如果是手风琴模式，绑定值类型需要为string，否则为array)',
            type: 'string/array',
            optional: '-',
            defaultvalue: '-'
        }
        ],
        Events: [{
            eventName: "onChange",
            instruction: "当前激活面板改变时触发(如果是手风琴模式，参数类型为string，否则为array)",
            callbackParam: "(activeNames: array/string)"
        }]
    },
    CollapseItem: {
        List: [{
            param: 'name',
            instruction: '唯一标志符',
            type: 'string/number',
            optional: '-',
            defaultvalue: '-'
        },
        {
            param: 'title',
            instruction: '面板标题',
            type: 'string/node',
            optional: '-',
            defaultvalue: '-'
        }]
    },


    Rate: {
        List: [{
            param: 'max',
            instruction: '最大分值',
            type: 'number',
            optional: '-',
            defaultvalue: '5'
        },
        {
            param: 'disabled',
            instruction: '是否为只读',
            type: 'boolean',
            optional: '-',
            defaultvalue: 'false'
        },
        {
            param: 'allowHalf',
            instruction: '是否允许半选',
            type: 'boolean',
            optional: '-',
            defaultvalue: 'false'
        },
        {
            param: 'lowThreshold',
            instruction: '低分和中等分数的界线值，值本身被划分在低分中',
            type: 'number',
            optional: '-',
            defaultvalue: '2'
        },
        {
            param: 'highThreshold',
            instruction: '高分和中等分数的界线值，值本身被划分在高分中',
            type: 'number',
            optional: '-',
            defaultvalue: '4'
        },
        {
            param: 'colors',
            instruction: 'icon的颜色数组，共有3个元素，为3个分段多对应的颜色',
            type: 'array',
            optional: '-',
            defaultvalue: `['#F7BA2A', '#F7BA2A', '#F7BA2A']`
        },
        {
            param: 'voidColor',
            instruction: '未选中icon的颜色',
            type: 'string',
            optional: '-',
            defaultvalue: '#C6D1DE'
        },
        {
            param: 'disabledVoidColor',
            instruction: '只读时未选中icon的颜色',
            type: 'string',
            optional: '-',
            defaultvalue: '#EFF2F7'
        },
        {
            param: 'iconClasses',
            instruction: 'icon 的类名数组，共有 3 个元素，为 3 个分段所对应的类名',
            type: 'array',
            optional: '-',
            defaultvalue: `['el-icon-star-on', 'el-icon-star-on','el-icon-star-on']`
        },

        {
            param: 'voidconClass',
            instruction: '未选中icon的类名',
            type: 'string',
            optional: '-',
            defaultvalue: 'el-icon-star-off'
        },
        {
            param: 'disabledVoidconClass',
            instruction: '只读时未选中icon的类名',
            type: 'string',
            optional: '-',
            defaultvalue: 'el-icon-star-on'
        },
        {
            param: 'showText',
            instruction: '是否显示辅助文字',
            type: 'boolean',
            optional: '-',
            defaultvalue: 'false'
        },
        {
            param: 'textColor',
            instruction: '辅助文字的颜色',
            type: 'string',
            optional: '-',
            defaultvalue: '1F2D3D'
        },
        {
            param: 'texts',
            instruction: '辅助文字数组',
            type: 'array',
            optional: '-',
            defaultvalue: `['极差', '失望', '一般', '满意', '惊喜']`
        },
        {
            param: 'textTemplate',
            instruction: '只读时的辅助文字模板',
            type: 'string',
            optional: '-',
            defaultvalue: '{value}'
        }
        ],

        Events: [{
            eventName: "onChange",
            instruction: "分值改变时触发",
            callbackParam: "改变后的分值"
        }]
    },




    Card: {
        List: [{
            param: 'header',
            instruction: '设置 header，也可以通过 slot#header 传入 DOM',
            type: 'string',
            optional: '-',
            defaultvalue: '-'
        },
        {
            param: 'bodyStyle',
            instruction: '设置 body 的样式',
            type: 'object',
            optional: '-',
            defaultvalue: `{ padding: '20px' }`
        }
        ]
    },
    Layout: {
        List: [
            {
                param: 'style',
                instruction: '样式',
                type: 'Object',
                optional: '-',
                defaultvalue: '-'
            }
        ]
    },
    Sider: {
        List: [
            {
                param: 'collapsible',
                instruction: '是否可收起',
                type: 'Boolean',
                optional: '—',
                defaultvalue: 'false'
            },
            {
                param: 'defaultCollapsed',
                instruction: '是否默认收起',
                type: 'Boolean',
                optional: '—',
                defaultvalue: 'false'
            },
            {
                param: 'collapsed',
                instruction: '当前收起状态	',
                type: 'Boolean',
                optional: '—',
                defaultvalue: '—'
            },
            {
                param: 'onCollapse',
                instruction: '展开—收起时的回调函数，有点击 trigger 以及响应式反馈两种方式可以触发',
                type: '(collapsed, type) => {}',
                optional: '—',
                defaultvalue: '—'
            },
            {
                param: 'trigger',
                instruction: '自定义 trigger，设置为 null 时隐藏 trigger',
                type: 'string|ReactNode',
                optional: '—',
                defaultvalue: '—'
            },
            {
                param: 'width',
                instruction: '宽度',
                type: 'number|string',
                optional: '—',
                defaultvalue: '200'
            },
            {
                param: 'collapsedWidth',
                instruction: '收缩宽度，设置为 0 会出现特殊 trigger',
                type: 'number',
                optional: '—',
                defaultvalue: '64'
            },
            {
                param: 'breakpoint',
                instruction: '触发响应式布局的断点	',
                type: 'Enum { \'xs\', \'sm\', \'md\', \'lg\', \'xl\' }',
                optional: '—',
                defaultvalue: '—'
            },
            {
                param: 'style',
                instruction: '指定样式',
                type: 'object',
                optional: '—',
                defaultvalue: '—'
            },
            {
                param: 'className',
                instruction: '容器 className',
                type: 'String',
                optional: '—',
                defaultvalue: '—'
            }
        ]
    },
    Slider: {
        List: [
            {
                param: 'min',
                instruction: '最小值',
                type: 'number',
                optional: '-',
                defaultvalue: '0'
            },
            {
                param: 'max',
                instruction: '最大值',
                type: 'numner',
                optional: '-',
                defaultvalue: '100'
            },
            {
                param: 'disabled',
                instruction: '是否禁用',
                type: 'Boolean',
                optional: '-',
                defaultvalue: 'false'
            },
            {
                param: 'step',
                instruction: '步长',
                type: 'number',
                optional: '-',
                defaultvalue: '1'
            },
            {
                param: 'showInput',
                instruction: '是否显示输入框，仅在非范围选择时有效',
                type: 'boolean',
                optional: '-',
                defaultvalue: 'false'
            },
            {
                param: 'showInputControls',
                instruction: '在显示输入框的情况下，是否显示输入框的控制按钮',
                type: 'boolean',
                optional: '-',
                defaultvalue: 'false'
            },
            {
                param: 'showStops',
                instruction: '是否显示间断点',
                type: 'boolean',
                optional: '-',
                defaultvalue: 'false'
            },
            {
                param: 'range',
                instruction: '是否为范围选择',
                type: 'boolean',
                optional: '-',
                defaultvalue: 'false'
            }
        ],
        Events:[{
            eventName: "onChange",
            instruction: "值改变时触发",
            callbackParam: "改变后的值"
        }    
        ]
    },
    Row: {
        List: [
            {
                param: 'gutter',
                instruction: '栅格间隔',
                type: 'Number',
                optional: '-',
                defaultvalue: '0'
            },
            {
                param: 'type',
                instruction: '布局模式，可选 flex，现代浏览器 下有效',
                type: 'String',
                optional: '-',
                defaultvalue: '-'
            },
            {
                param: 'align',
                instruction: 'flex 布局下的垂直对齐方式：top middle bottom',
                type: 'String',
                optional: '-',
                defaultvalue: 'top'
            },
            {
                param: 'justify',
                instruction: 'flex 布局下的水平排列方式：start end center space-around space-between',
                type: 'String',
                optional: '-',
                defaultvalue: 'start'
            }
        ]
    },
    Col: {
        List: [
            {
                param: 'span',
                instruction: '栅格占位格数，为 0 时相当于 display: none',
                type: 'Number',
                optional: '-',
                defaultvalue: '-'
            },
            {
                param: 'order',
                instruction: '栅格顺序，flex 布局模式下有效',
                type: 'Number',
                optional: '-',
                defaultvalue: '0'
            },
            {
                param: 'offset',
                instruction: '栅格左侧的间隔格数，间隔内不可以有栅格',
                type: 'Number',
                optional: '-',
                defaultvalue: '0'
            },
            {
                param: 'push',
                instruction: '栅格向右移动格数',
                type: 'Number',
                optional: '-',
                defaultvalue: '0'
            },
            {
                param: 'pull',
                instruction: '栅格向左移动格数',
                type: 'Number',
                optional: '-',
                defaultvalue: '0'
            },
            {
                param: 'xs',
                instruction: '<768px 响应式栅格，可为栅格数或一个包含其他属性的对象',
                type: 'Number|Object',
                optional: '-',
                defaultvalue: '-'
            },
            {
                param: 'sm',
                instruction: '≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象',
                type: 'Number|Object',
                optional: '-',
                defaultvalue: '-'
            },
            {
                param: 'md',
                instruction: '≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象',
                type: 'Number|Object',
                optional: '-',
                defaultvalue: '-'
            },
            {
                param: 'lg',
                instruction: '≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象',
                type: 'Number|Object',
                optional: '-',
                defaultvalue: '-'
            },
            {
                param: 'xl',
                instruction: '≥1600px 响应式栅格，可为栅格数或一个包含其他属性的对象',
                type: 'Number|Object',
                optional: '-',
                defaultvalue: '-'
            },
        ]
    },
    Button: {
        List: [{
            param: 'size',
            instruction: '尺寸',
            type: 'String',
            optional: 'large,small,mini',
            defaultvalue: '-'
        }, {
            param: 'type',
            instruction: '类型',
            type: 'String',
            optional: 'primary,success,warning,danger,info,text',
            defaultvalue: '-'
        }, {
            param: 'plain',
            instruction: '是否朴素按钮',
            type: 'boolean',
            optional: 'true,false',
            defaultvalue: 'false'
        }, {
            param: 'loading',
            instruction: '是否加载中状态',
            type: 'boolean',
            optional: '—',
            defaultvalue: 'false'
        }, {
            param: 'disabled',
            instruction: '禁用',
            type: 'boolean',
            optional: 'true, false',
            defaultvalue: 'false'
        }, {
            param: 'icon',
            instruction: '图标，已有图标库中的图标名',
            type: 'String',
            optional: '—',
            defaultvalue: '-'
        }, {
            param: 'nativeType',
            instruction: '原声type属性',
            type: 'String',
            optional: 'button,submit,reset',
            defaultvalue: 'button'
        }]
    },
    Radio: {
        List: [{
            param: 'checked',
            instruction: 'Radio是否被选中',
            type: 'boolean',
            optional: '-',
            defaultvalue: 'false'
        }, {
            param: 'value',
            instruction: 'Radio的value',
            type: 'string,number,boolean',
            optional: '-',
            defaultvalue: '-'
        }, {
            param: 'disabled',
            instruction: '是否禁用	',
            type: 'boolean',
            optional: 'true,false',
            defaultvalue: 'false'
        }, {
            param: 'name',
            instruction: '原声name属性',
            type: 'string',
            optional: '—',
            defaultvalue: '-'
        }],
    },
    RadioGroup: {
        List: [{
            param: 'size',
            instruction: 'Radio按钮组尺寸',
            type: 'string',
            optional: 'large，small',
            defaultvalue: '-'
        }, {
            param: 'fill',
            instruction: '按钮激活时的填充色和边框色',
            type: 'string',
            optional: '-',
            defaultvalue: '#20a0ff'
        }, {
            param: 'textColor',
            instruction: '按钮激活时的文本色	',
            type: 'string',
            optional: 'true,false',
            defaultvalue: '#fff'
        }],
        Events: [{
            eventName: "onChange",
            instruction: "绑定值变化时触发的事件",
            callbackParam: "选中的 Radio label 值"
        }]
    },
    RadioButton: {
        List: [{
            param: 'value',
            instruction: 'Radio的value',
            type: 'string，number',
            optional: '-',
            defaultvalue: '-'
        }, {
            param: 'disabled',
            instruction: '是否禁用',
            type: 'boolean',
            optional: '-',
            defaultvalue: 'false'
        }],
    },
    Checkbox: {
        List: [{
            param: 'label',
            instruction: '选中状态的值（只有在Checkbox.Group或者绑定对象类型为array时有效）',
            type: 'string',
            optional: '-',
            defaultvalue: '-'
        }, {
            param: 'trueLabel',
            instruction: '选中时的值',
            type: 'string, number',
            optional: '-',
            defaultvalue: '-'
        }, {
            param: 'falseLabel',
            instruction: '没有选中时的值',
            type: 'string, number',
            optional: '-',
            defaultvalue: '-'
        }, {
            param: 'disabled',
            instruction: '按钮禁用',
            type: 'boolean',
            optional: '-',
            defaultvalue: 'false'
        }, {
            param: 'checked',
            instruction: '当前是否勾选',
            type: 'boolean',
            optional: '-',
            defaultvalue: 'false'
        }],
    },
    Animate: {
        List: [{
            param: 'animation-name',
            instruction: '可以绑定到选择器的 keyframe 名称',
            type: 'string',
            optional: '-',
            defaultvalue: '-'
        }, {
            param: 'animation-duration',
            instruction: '完成动画所花费的时间，以秒或毫秒计',
            type: 'string',
            optional: '-',
            defaultvalue: '-'
        }, {
            param: 'animation-timing-function',
            instruction: '动画的速度曲线',
            type: 'string',
            optional: 'linear,ease,ease-in,ease-out,ease-in-out,cubic-bezier(n,n,n,n)(n为从0到1的值)',
            defaultvalue: 'ease'
        }, {
            param: 'animation-delay',
            instruction: '动画开始之前的延迟',
            type: 'string',
            optional: '-',
            defaultvalue: 'false'
        }, {
            param: 'animation-iteration-count',
            instruction: '动画播放次数',
            type: 'number',
            optional: '-',
            defaultvalue: 'false'
        }, {
            param: 'animation-direction',
            instruction: '是否轮流反向播放动画',
            type: 'boolean',
            optional: '-',
            defaultvalue: 'false'
        }],
    },
    CheckboxGroup: {
        List: [{
            param: 'size',
            instruction: 'Checkbox 按钮组尺寸	',
            type: 'string',
            optional: 'large, small',
            defaultvalue: '-'
        }, {
            param: 'fill',
            instruction: '按钮激活时的填充色和边框色',
            type: 'string',
            optional: '-',
            defaultvalue: '#20a0ff'
        }, {
            param: 'textColor',
            instruction: '按钮激活时的文本颜色	',
            type: 'string',
            optional: '-',
            defaultvalue: '#fff'
        }, {
            param: 'min',
            instruction: '可被勾选的checkbox的最大数量',
            type: 'number',
            optional: '-',
            defaultvalue: '-'
        }, {
            param: 'max',
            instruction: '可被勾选的checkbox的最小数量',
            type: 'number',
            optional: '-',
            defaultvalue: '-'
        }],
        Events: [{
            eventName: "onChange",
            instruction: "绑定值变化时触发的事件",
            callbackParam: "value"
        }]
    },
    Input: {
        List: [{
            param: "type",
            instruction: "类型",
            type: "string",
            optional: "text/textarea",
            defaultvalue: "text"
        },
        {
            param: "value",
            instruction: "绑定值",
            type: "string, number",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "maxLength",
            instruction: "最大输入长度",
            type: "number",
            optional: "—",
            defaultvalue: "—"
        },
        // {
        //     param: "minLength",
        //     instruction: "最小输入长度",
        //     type: "number",
        //     optional: "—",
        //     defaultvalue: "—"
        // },
        {
            param: "placeholder",
            instruction: "输入框占位文本",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "disabled",
            instruction: "禁用",
            type: "boolean",
            optional: "—",
            defaultvalue: "FALSE"
        },
        {
            param: "size",
            instruction: "输入框尺寸，只在 type!=textarea时有效",
            type: "string",
            optional: "large, small, mini",
            defaultvalue: "—"
        },
        {
            param: "icon",
            instruction: "输入框尾部图标",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "rows",
            instruction: "输入框行数，只对 type=textarea有效",
            type: "number",
            optional: "—",
            defaultvalue: "2"
        },
        {
            param: "autosize",
            instruction: "自适应内容高度，只对 type=textarea有效，可传入对象，如，{ minRows: 2, maxRows: 6 }",
            type: "boolean/object",
            optional: "—",
            defaultvalue: "FALSE"
        },
        {
            param: "autoComplete",
            instruction: "原生属性，自动补全",
            type: "string",
            optional: "on, off",
            defaultvalue: "off"
        },
        {
            param: "name",
            instruction: "原生属性",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "readOnly",
            instruction: "原生属性，是否只读",
            type: "boolean",
            optional: "—",
            defaultvalue: "FALSE"
        },
        // {
        //     param: "max",
        //     instruction: "原生属性，设置最大值",
        //     type: "—",
        //     optional: "—",
        //     defaultvalue: "—"
        // },
        // {
        //     param: "min",
        //     instruction: "原生属性，设置最小值",
        //     type: "—",
        //     optional: "—",
        //     defaultvalue: "—"
        // },
        // {
        //     param: "step",
        //     instruction: "原生属性，设置输入字段的合法数字间隔",
        //     type: "—",
        //     optional: "—",
        //     defaultvalue: "—"
        // },
        // {
        //     param: "resize",
        //     instruction: "控制是否能被用户缩放",
        //     type: "string",
        //     optional: "none, both, horizontal, vertical",
        //     defaultvalue: "—"
        // },
        {
            param: "autoFocus",
            instruction: "原生属性，自动获取焦点",
            type: "boolean",
            optional: "true, false",
            defaultvalue: "FALSE"
        },
        {
            param: "onIconClick",
            instruction: "点击 Input 内的图标的钩子函数",
            type: "function",
            optional: "—",
            defaultvalue: "—"
        },

        ]
    },
    Autocomplete: {
        List: [{
            param: "placeholder",
            instruction: "输入框占位文本",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "disabled",
            instruction: "禁用",
            type: "boolean",
            optional: "—",
            defaultvalue: "false"
        },
        {
            param: "value",
            instruction: "必填值输入绑定值",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "customItem",
            instruction: "通过该参数指定自定义的输入建议列表项的组件名",
            type: "Element",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "fetchSuggestions",
            instruction: "返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它",
            type: "Function(queryString, callback)",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "popperClass",
            instruction: "Autocomplete 下拉列表的类名",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "triggerOnFocus",
            instruction: "是否在输入框 focus 时显示建议列表",
            type: "boolean",
            optional: "—",
            defaultvalue: "true"
        },
        {
            param: "onIconClick",
            instruction: "点击图标的回调函数",
            type: "function",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "icon",
            instruction: "输入框尾部图标",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        ],
        Events: [{
            eventName: "onSelect",
            instruction: "点击选中建议项时触发",
            callbackParam: "选中建议项"
        }]
    },
    Select: {
        List: [{
            param: "multiple",
            instruction: "是否多选",
            type: "boolean",
            optional: "—",
            defaultvalue: "false"
        },
        {
            param: "disabled",
            instruction: "是否禁用",
            type: "boolean",
            optional: "—",
            defaultvalue: "false"
        },
        {
            param: "clearable",
            instruction: "单选时是否可以清空选项",
            type: "boolean",
            optional: "—",
            defaultvalue: "false"
        },
        {
            param: "name",
            instruction: "select input的name属性",
            type: "string",
            optional: "—",
            defaultvalue: "-"
        },
        {
            param: "placeholder",
            instruction: "占位符",
            type: "string",
            optional: "—",
            defaultvalue: "请选择"
        },
        {
            param: "filterable",
            instruction: "是否可搜索",
            type: "boolean",
            optional: "—",
            defaultvalue: "false"
        },
        {
            param: "filterMethod",
            instruction: "自定义过滤方法",
            type: "function",
            optional: "—",
            defaultvalue: "-"
        },
        {
            param: "remote",
            instruction: "是否为远程搜索",
            type: "boolean",
            optional: "—",
            defaultvalue: "false"
        },
        {
            param: "remoteMethod",
            instruction: "远程搜索方法",
            type: "function",
            optional: "—",
            defaultvalue: "-"
        },
        {
            param: "loading",
            instruction: "是否正在从远程获取数据",
            type: "boolean",
            optional: "—",
            defaultvalue: "false"
        }
        ],
        Events: [{
            eventName: "onChange",
            instruction: "选中值发生变化时触发",
            callbackParam: "目前的选中值"
        },
        {
            eventName: "onVisibleChange",
            instruction: "下拉框出现/隐藏时触发",
            callbackParam: "出现则为 true，隐藏则为 false"
        },
        {
            eventName: "onRemoveTag",
            instruction: "多选模式下移除tag时触发",
            callbackParam: "移除的tag值"
        },
        {
            eventName: "onClear",
            instruction: "可清空的单选模式下用户点击清空按钮时触发",
            callbackParam: "-"
        }
        ],
    },
    Option: {
        List: [{
            param: "value",
            instruction: "选项的值",
            type: "string/number/object",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "label",
            instruction: "选项的标签，若不设置则默认与 value 相同",
            type: "string/number",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "disabled",
            instruction: "是否禁用该选项",
            type: "boolean",
            optional: "—",
            defaultvalue: "false"
        },
        ]
    },
    OptionGroup: {
        List: [{
            param: "label",
            instruction: "分组的组名",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "disabled",
            instruction: "是否将该分组下所有选项置为禁用",
            type: "boolean",
            optional: "—",
            defaultvalue: "false"
        },
        ]
    },
    Switch: {
        List: [{
            param: "disabled",
            instruction: "是否禁用",
            type: "boolean",
            optional: "—",
            defaultvalue: "false"
        },
        {
            param: "width",
            instruction: "switch 的宽度（像素）",
            type: "number",
            optional: "—",
            defaultvalue: "58（有文字）/ 46（无文字）"
        },
        {
            param: "onIconClass",
            instruction: "switch 打开时所显示图标的类名，",
            type: "—",
            optional: "—",
            defaultvalue: "-"
        },
        {
            param: "设置此项会忽略 onText",
            instruction: "string",
            type: "—",
            optional: "—",
            defaultvalue: "-"
        },
        {
            param: "offIconClass",
            instruction: "switch 关闭时所显示图标的类名，",
            type: "—",
            optional: "—",
            defaultvalue: "-"
        },
        {
            param: "设置此项会忽略 offText",
            instruction: "string",
            type: "—",
            optional: "—",
            defaultvalue: "-"
        },
        {
            param: "onText",
            instruction: "switch 打开时的文字",
            type: "string",
            optional: "—",
            defaultvalue: "ON"
        },
        {
            param: "offText",
            instruction: "switch 关闭时的文字",
            type: "string",
            optional: "—",
            defaultvalue: "OFF"
        },
        {
            param: "onValue",
            instruction: "switch 打开时的值",
            type: "boolean / string / number",
            optional: "—",
            defaultvalue: "true"
        },
        {
            param: "offValue",
            instruction: "switch 关闭时的值",
            type: "boolean / string / number",
            optional: "—",
            defaultvalue: "false"
        },
        {
            param: "onColor",
            instruction: "switch 打开时的背景色",
            type: "string",
            optional: "—",
            defaultvalue: "#20A0FF"
        },
        {
            param: "offColor",
            instruction: "switch 关闭时的背景色",
            type: "string",
            optional: "—",
            defaultvalue: "#C0CCDA"
        },
        {
            param: "name",
            instruction: "switch 对应的 name 属性",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "allowFocus",
            instruction: "允许 switch 触发 focus 和 blur 事件",
            type: "boolean",
            optional: "boolean",
            defaultvalue: "—"
        },

        ],
        Events: [{
            eventName: "onChange",
            instruction: "switch 状态发生变化时的回调函数",
            callbackParam: "value"
        },
        {
            eventName: "onBlur",
            instruction: "switch 失去焦点时触发，仅当 allow-focus 为 true 时生效",
            callbackParam: "event: Event"
        },
        {
            eventName: "onFocus",
            instruction: "switch 获得焦点时触发，仅当 allow-focus 为 true 时生效",
            callbackParam: "event: Event"
        }
        ]
    },
    DateTimePickerCommon: {
        List: [{
            param: "disabled",
            instruction: "是否禁用",
            type: "boolean",
            optional: "—",
            defaultvalue: "false"
        },
        {
            param: "width",
            instruction: "switch 的宽度（像素）",
            type: "number",
            optional: "—",
            defaultvalue: "58（有文字）/ 46（无文字）"
        },
        {
            param: "onIconClass",
            instruction: "switch 打开时所显示图标的类名，",
            type: "—",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "设置此项会忽略 onText",
            instruction: "string",
            type: "—",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "offIconClass",
            instruction: "switch 关闭时所显示图标的类名，",
            type: "—",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "设置此项会忽略 offText",
            instruction: "string",
            type: "—",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "placeholder",
            instruction: "占位内容",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "format",
            instruction: "时间日期格式化",
            type: "string",
            optional: "年 yyyy，月 MM，日 dd，小时 HH，分 mm，秒 ss",
            defaultvalue: "yyyy-MM-dd"
        },
        {
            param: "align",
            instruction: "对齐方式",
            type: "string",
            optional: "left, center, right",
            defaultvalue: "left"
        },
        {
            param: "isShowTrigger",
            instruction: "是否显示图标",
            type: "boolean",
            optional: "-",
            defaultvalue: "true"
        },
        {
            param: "isReadOnly",
            instruction: "是否是只读",
            type: "boolean",
            optional: "-",
            defaultvalue: "false"
        },
        {
            param: "isDisabled",
            instruction: "是否是禁用",
            type: "boolean",
            optional: "-",
            defaultvalue: "false"
        },
        {
            param: "isShowTime",
            instruction: "是否显示时间",
            type: "boolean",
            optional: "-",
            defaultvalue: "false"
        },
        {
            param: "firstDayOfWeek",
            instruction: "周起始日",
            type: "Number",
            optional: "0 到 6",
            defaultvalue: "0"
        },
        {
            param: "onFocus",
            instruction: "focus 事件触发",
            type: "(SyntheticEvent)=>()",
            optional: "-",
            defaultvalue: "-"
        },
        {
            param: "onBlur",
            instruction: "blur 事件触发",
            type: "(SyntheticEvent)=>()",
            optional: "-",
            defaultvalue: "-"
        },

        ]
    },
    DatePicker: {
        List: [{
            param: "value",
            instruction: "-",
            type: "Date/null",
            optional: "—",
            defaultvalue: "-"
        },
        {
            param: "shortcuts",
            instruction: "快捷选项",
            type: "{text: string, onClick: ()=>()}[]",
            optional: "-",
            defaultvalue: "-"
        },
        {
            param: "selectionMode",
            instruction: "日期类型",
            type: "string, one of ['year', 'month', 'week', 'day']",
            optional: "-",
            defaultvalue: "'day'"
        },
        {
            param: "disabledDate",
            instruction: "是否禁用日期",
            type: "(Date, selectionMode)=>boolean",
            optional: "-",
            defaultvalue: "-"
        },
        {
            param: "showWeekNumber",
            instruction: "是否展示周数",
            type: "boolean",
            optional: "-",
            defaultvalue: "false"
        },

        ],
    },
    DateRangePanel: {
        List: [{
            param: "value",
            instruction: "-",
            type: "Date[]/null",
            optional: "—",
            defaultvalue: "-"
        },
        {
            param: "shortcuts",
            instruction: "快捷选项",
            type: "{text: string, onClick: ()=>()}[]",
            optional: "-",
            defaultvalue: "-"
        },
        {
            param: "showWeekNumber",
            instruction: "是否展示周数",
            type: "boolean",
            optional: "-",
            defaultvalue: "false"
        },
        {
            param: "rangeSeparator",
            instruction: "选择范围时的分隔符",
            type: "string",
            optional: "-",
            defaultvalue: " - "
        }
        ]
    },
    TimeSelect: {
        List: [{
            param: "value",
            instruction: "值",
            type: "date/null",
            optional: "—",
            defaultvalue: "-"
        },
        {
            param: "start",
            instruction: "开始时间",
            type: "string",
            optional: "—",
            defaultvalue: "09:00"
        },
        {
            param: "end",
            instruction: "结束时间",
            type: "string",
            optional: "—",
            defaultvalue: "18:00"
        },
        {
            param: "step",
            instruction: "间隔时间",
            type: "string",
            optional: "—",
            defaultvalue: "00:30"
        },
        {
            param: "minTime",
            instruction: "最小时间",
            type: "date",
            optional: "—",
            defaultvalue: "-"
        },
        {
            param: "maxTime",
            instruction: "最大时间",
            type: "date",
            optional: "—",
            defaultvalue: "-"
        }
        ]
    },
    TimePicker: {
        List: [{
            param: "value",
            instruction: "值",
            type: "date/null",
            optional: "—",
            defaultvalue: "-"
        },
        {
            param: "selectableRange",
            instruction: "可选时间段，例如'18:30:00 - 20:30:00'或者传入数组['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']",
            type: "string/string[]",
            optional: "—",
            defaultvalue: "—"
        }
        ]
    },
    TimeRangePicker: {
        List: [{
            param: "value",
            instruction: "值",
            type: "date[]/null",
            optional: "—",
            defaultvalue: "-"
        },
        {
            param: "selectableRange",
            instruction: "可选时间段，例如'18:30:00 - 20:30:00'或者传入数组['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']",
            type: "string/string[]",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "rangeSeparator",
            instruction: "选择范围时的分隔符",
            type: "string",
            optional: "-",
            defaultvalue: "'- "
        }
        ]
    },
    Upload: {
        List: [{
            param: "action",
            instruction: "必选参数, 上传的地址",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "headers",
            instruction: "可选参数, 设置上传的请求头部",
            type: "object",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "multiple",
            instruction: "可选参数, 是否支持多选文件",
            type: "boolean",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "data",
            instruction: "可选参数, 上传时附带的额外参数",
            type: "object",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "name",
            instruction: "可选参数, 上传的文件字段名",
            type: "string",
            optional: "—",
            defaultvalue: "file"
        },
        {
            param: "withCredentials",
            instruction: "支持发送 cookie 凭证信息",
            type: "boolean",
            optional: "—",
            defaultvalue: "false"
        },
        {
            param: "showFileList",
            instruction: "是否显示已上传文件列表",
            type: "boolean",
            optional: "—",
            defaultvalue: "true"
        },
        {
            param: "drag",
            instruction: "可选参数，是否支持拖拽",
            type: "boolean",
            optional: "-",
            defaultvalue: "-"
        },
        {
            param: "accept",
            instruction: "可选参数, 接受上传的文件类型（thumbnailMode 模式下此参数无效）",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "onPreview",
            instruction: "可选参数, 点击已上传的文件链接时的钩子, 可以通过 file.response 拿到服务端返回数据",
            type: "function(file)",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "onRemove",
            instruction: "可选参数, 文件列表移除文件时的钩子",
            type: "function(file, fileList)",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "onSuccess",
            instruction: "可选参数, 文件上传成功时的钩子",
            type: "function(response, file, fileList)",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "onError",
            instruction: "可选参数, 文件上传失败时的钩子",
            type: "function(err, file, fileList)",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "onProgress",
            instruction: "可选参数, 文件上传时的钩子",
            type: "function(event, file, fileList)",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "onChange",
            instruction: "可选参数, 文件状态改变时的钩子，上传成功或者失败时都会被调用",
            type: "function(file, fileList)",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "beforeUpload",
            instruction: "可选参数, 上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传。",
            type: "function(file)",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "listType",
            instruction: "文件列表的类型",
            type: "string",
            optional: "text/picture/picture-card",
            defaultvalue: "text"
        },
        {
            param: "autoUpload",
            instruction: "是否在选取文件后立即进行上传",
            type: "boolean",
            optional: "—",
            defaultvalue: "true"
        },
        {
            param: "fileList",
            instruction: "上传的文件列表, 例如: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg'}]",
            type: "array",
            optional: "—",
            defaultvalue: "[]"
        }
        ],
        Method: [{
            methodName: "clearFiles",
            instruction: "清空已上传的文件列表",
            methodParam: "—"
        }]
    },
    Table: {
        List: [{
            param: "data",
            instruction: "显示的数据",
            type: "array",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "height",
            instruction: "table 的高度，默认高度为空，即自动高度，单位 px",
            type: "string, number",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "maxHeight",
            instruction: "Table 的最大高度",
            type: "string/number",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "stripe",
            instruction: "是否为斑马纹 table",
            type: "boolean",
            optional: "—",
            defaultvalue: "false"
        },
        {
            param: "border",
            instruction: "是否带有纵向边框",
            type: "boolean",
            optional: "—",
            defaultvalue: "false"
        },
        {
            param: "fit",
            instruction: "列的宽度是否自撑开",
            type: "boolean",
            optional: "—",
            defaultvalue: "true"
        },
        {
            param: "showHeader",
            instruction: "是否显示表头",
            type: "boolean",
            optional: "—",
            defaultvalue: "true"
        },
        {
            param: "highlightCurrentRow",
            instruction: "是否要高亮当前行",
            type: "boolean",
            optional: "—",
            defaultvalue: "false"
        },
        {
            param: "currentRowKey",
            instruction: "当前行的 key，只写属性",
            type: "String,Number",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "rowClassName",
            instruction: "行的 className 的回调。",
            type: "Function(row, index)",
            optional: "-",
            defaultvalue: "-"
        },
        {
            param: "rowStyle",
            instruction: "行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。",
            type: "Function(row, index)/Object",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "rowKey",
            instruction: "行数据的 Key，用来优化 Table 的渲染；在使用 reserveSelection 功能的情况下，该属性是必填的。类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 Function。",
            type: "Function(row)/String",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "emptyText",
            instruction: "空数据时显示的文本内容",
            type: "String",
            optional: "-",
            defaultvalue: "-"
        },
        {
            param: "defaultExpandAll",
            instruction: "是否默认展开所有行，当 Table 中存在 type=expand 的 Column 的时候有效",
            type: "Boolean",
            optional: "—",
            defaultvalue: "false"
        },
        {
            param: "expandRowKeys",
            instruction: "可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。",
            type: "Array",
            optional: "—",
            defaultvalue: "-"
        },
        {
            param: "defaultSort",
            instruction: "默认的排序列的prop和顺序。它的prop属性指定默认的排序的列，order指定默认排序的顺序",
            type: "Object",
            optional: "order: ascending, descending",
            defaultvalue: "如果只指定了prop, 没有指定order, 则默认顺序是ascending"
        },
        {
            param: "showSummary",
            instruction: "是否在表尾显示合计行",
            type: "Boolean",
            optional: "-",
            defaultvalue: "false"
        },
        {
            param: "sumText",
            instruction: "合计行第一列的文本",
            type: "String",
            optional: "-",
            defaultvalue: "合计"
        },
        {
            param: "summeryMethod",
            instruction: "自定义的合计计算方法",
            type: "Function({ columns, data })",
            optional: "-",
            defaultvalue: "-"
        }
        ],
        Events: [{
            eventName: "onSelect",
            instruction: "当用户手动勾选数据行的 Checkbox 时触发的事件",
            callbackParam: "selection, row"
        },
        {
            eventName: "onSelectAll",
            instruction: "当用户手动勾选全选 Checkbox 时触发的事件",
            callbackParam: "selection"
        },
        {
            eventName: "onSelectChange",
            instruction: "当选择项发生变化时会触发该事件",
            callbackParam: "selection"
        },
        {
            eventName: "onCellMouseEnter",
            instruction: "当单元格 hover 进入时会触发该事件",
            callbackParam: "row, column, cell, event"
        },
        {
            eventName: "onCellMouseLeave",
            instruction: "当单元格 hover 退出时会触发该事件",
            callbackParam: "row, column, cell, event"
        },
        {
            eventName: "onCellClick",
            instruction: "当某个单元格被点击时会触发该事件",
            callbackParam: "row, column, cell, event"
        },
        {
            eventName: "onCellDbClick",
            instruction: "当某个单元格被双击击时会触发该事件",
            callbackParam: "row, column, cell, event"
        },
        {
            eventName: "onRowClick",
            instruction: "当某一行被点击时会触发该事件",
            callbackParam: "row, event, column"
        },
        {
            eventName: "onRowContextMenu",
            instruction: "当某一行被鼠标右键点击时会触发该事件",
            callbackParam: "row, event"
        },
        {
            eventName: "onRowDbClick",
            instruction: "当某一行被双击时会触发该事件",
            callbackParam: "row, event"
        },
        {
            eventName: "onHeaderClick",
            instruction: "当某一列的表头被点击时会触发该事件",
            callbackParam: "column, event"
        },
        {
            eventName: "onSortChange",
            instruction: "当表格的排序条件发生变化的时候会触发该事件",
            callbackParam: "{ column, prop, order }"
        },
        {
            eventName: "onFilterChange",
            instruction: "当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。",
            callbackParam: "filters"
        },
        {
            eventName: "onCurrentChange",
            instruction: "当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性",
            callbackParam: "currentRow, oldCurrentRow"
        },
        {
            eventName: "onHeaderDragEnd",
            instruction: "当拖动表头改变了列的宽度的时候会触发该事件",
            callbackParam: "newWidth, oldWidth, column, event"
        },
        {
            eventName: "onExpand",
            instruction: "当用户对某一行展开或者关闭的上会触发该事件",
            callbackParam: "row, expanded"
        },

        ],
        Method: [{
            methodName: "clearSelection",
            instruction: "清空用户的选择，当使用 reserve-selection 功能的时候，可能会需要使用此方法",
            methodParam: "selection"
        },
        {
            methodName: "toggleRowSelection",
            instruction: "用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）",
            methodParam: "row, selected"
        },
        {
            methodName: "setCurrentRow",
            instruction: "用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。",
            methodParam: "row"
        }
        ]
    },
    TableColumn: {
        List: [{
            param: "type",
            instruction: "对应列的类型。如果设置了 selection 则显示多选框；如果设置了 index 则显示该行的索引（从 1 开始计算）；如果设置了 expand 则显示为一个可展开的按钮",
            type: "string",
            optional: "selection/index/expand",
            defaultvalue: "—"
        },
        {
            param: "columnKey",
            instruction: "column 的 key，如果需要使用 oFilterChange 事件，则需要此属性标识是哪个 column 的筛选条件",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "label",
            instruction: "显示的标题",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "prop",
            instruction: "对应列内容的字段名，也可以使用 property 属性",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "width",
            instruction: "对应列的宽度",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "minWidth",
            instruction: "对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "fixed",
            instruction: "列是否固定在左侧或者右侧，true 表示固定在左侧",
            type: "string, boolean",
            optional: "true, left, right",
            defaultvalue: "-"
        },
        {
            param: "render",
            instruction: "自定义渲染使用的 Function",
            type: "Function(row, column, index)",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "renderHeader",
            instruction: "列标题 Label 区域渲染使用的 Function",
            type: "Function(column)",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "sortable",
            instruction: "对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件",
            type: "boolean, string",
            optional: "true, false, 'custom'",
            defaultvalue: "false"
        },
        {
            param: "sortMethod",
            instruction: "对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效",
            type: "Function(a, b)",
            optional: "-",
            defaultvalue: "-"
        },
        {
            param: "resizable",
            instruction: "对应列是否可以通过拖动改变宽度（如果需要在 el-table 上设置 border 属性为真）",
            type: "boolean",
            optional: "—",
            defaultvalue: "true"
        },
        {
            param: "align",
            instruction: "对齐方式",
            type: "String",
            optional: "left, center, right",
            defaultvalue: "left"
        },
        {
            param: "headerAlign",
            instruction: "表头对齐方式，若不设置该项，则使用表格的对齐方式",
            type: "String",
            optional: "left/center/right",
            defaultvalue: "—"
        },
        {
            param: "className",
            instruction: "列的 className",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "labelClassName",
            instruction: "当前列标题的自定义类名",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "selectable",
            instruction: "仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选",
            type: "Function(row, index)",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "reserveSelection",
            instruction: "仅对 type=selection 的列有效，类型为 Boolean，为 true 则代表会保留之前数据的选项，需要配合 Table 的 clearSelection 方法使用。",
            type: "Boolean",
            optional: "—",
            defaultvalue: "false"
        },
        {
            param: "filters",
            instruction: "数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。",
            type: "Array[{ text, value }]",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "filterPlacement",
            instruction: "过滤弹出框的定位",
            type: "String",
            optional: "与 Tooltip 的 placement 属性相同",
            defaultvalue: "—"
        },
        {
            param: "filterMultiple",
            instruction: "数据过滤的选项是否多选",
            type: "Boolean",
            optional: "—",
            defaultvalue: "true"
        },
        {
            param: "filterMethod",
            instruction: "数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。",
            type: "Function(value, row)",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "filteredValue",
            instruction: "选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。",
            type: "Array",
            optional: "—",
            defaultvalue: "—"
        }
        ]
    },
    Tag: {
        List: [{
            param: "type",
            instruction: "主题",
            type: "string",
            optional: "'primary', 'gray', 'success', 'warning', 'danger'",
            defaultvalue: "—"
        },
        {
            param: "closable",
            instruction: "是否可关闭",
            type: "boolean",
            optional: "—",
            defaultvalue: "false"
        },
        {
            param: "closeTransition",
            instruction: "是否禁用关闭时的渐变动画",
            type: "boolean",
            optional: "—",
            defaultvalue: "false"
        },
        {
            param: "hit",
            instruction: "是否有边框描边",
            type: "boolean",
            optional: "—",
            defaultvalue: "false"
        },
        {
            param: "color",
            instruction: "背景色",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        }
        ],
        Events: [{
            eventName: "onClose",
            instruction: "关闭tag时触发的事件",
            callbackParam: "—"
        }]
    },
    Progress: {
        List: [{
            param: "percentage",
            instruction: "百分比（必填）",
            type: "number",
            optional: "0-100",
            defaultvalue: "0"
        },
        {
            param: "type",
            instruction: "进度条类型",
            type: "string",
            optional: "line/circle",
            defaultvalue: "line"
        },
        {
            param: "strokeWidth",
            instruction: "进度条的宽度，单位 px",
            type: "number",
            optional: "—",
            defaultvalue: "6"
        },
        {
            param: "textInside",
            instruction: "进度条显示文字内置在进度条内（只在 type=line 时可用）",
            type: "Boolean",
            optional: "—",
            defaultvalue: "false"
        },
        {
            param: "status",
            instruction: "进度条当前状态",
            type: "string",
            optional: "success/exception",
            defaultvalue: "—"
        },
        {
            param: "width",
            instruction: "环形进度条画布宽度（只在 type=circle 时可用）",
            type: "number",
            optional: '-',
            defaultvalue: "126"
        },
        {
            param: "showText",
            instruction: "是否显示进度条文字内容",
            type: "boolean",
            optional: "—",
            defaultvalue: "true"
        }
        ]
    },
    Pagination: {
        List: [{
            param: "small",
            instruction: "是否使用小型分页样式",
            type: "Boolean",
            optional: "—",
            defaultvalue: "false"
        },
        {
            param: "pageSize",
            instruction: "每页显示条目个数",
            type: "Number",
            optional: "—",
            defaultvalue: "10"
        },
        {
            param: "total",
            instruction: "总条目数",
            type: "Number",
            optional: "—",
            defaultvalue: "-"
        },
        {
            param: "pageCount",
            instruction: "总页数，total 和 pageCount 设置任意一个就可以达到显示页码的功能；如果要支持 pageSizes 的更改，则需要使用 total 属性",
            type: "Number",
            optional: "—",
            defaultvalue: "-"
        },
        {
            param: "currentPage",
            instruction: "当前页数",
            type: "Number",
            optional: "—",
            defaultvalue: "1"
        },
        {
            param: "layout",
            instruction: "组件布局，子组件名用逗号分隔",
            type: "String",
            optional: "sizes, prev, pager, next, jumper, ->, total",
            defaultvalue: "'prev, pager, next, jumper, ->, total'"
        },
        {
            param: "pageSizes",
            instruction: "每页显示个数选择器的选项设置",
            type: "Number[]",
            optional: "—",
            defaultvalue: "[10, 20, 30, 40, 50, 100]"
        }
        ],
        Events: [{
            eventName: "onSizeChange",
            instruction: "pageSize 改变时会触发",
            callbackParam: "每页条数size"
        },
        {
            eventName: "onCurrentChange",
            instruction: "currentPage 改变时会触发",
            callbackParam: "当前页currentPage"
        }
        ]
    },
    Loading: {
        List: [{
            param: "fullscreen",
            instruction: "是否全屏显示",
            type: "bool",
            optional: "-",
            defaultvalue: "false"
        },
        {
            param: "text",
            instruction: "自定义加载文案",
            type: "string",
            optional: "-",
            defaultvalue: "-"
        },
        {
            param: "loading",
            instruction: "控制加载页显示",
            type: "bool",
            optional: "-",
            defaultvalue: "true"
        }
        ]
    },
    Message: {
        Options: [{
            param: "message",
            instruction: "消息文字",
            type: "string/ReactElement",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "type",
            instruction: "主题",
            type: "string",
            optional: "success/warning/info/error",
            defaultvalue: "info"
        },
        {
            param: "iconClass",
            instruction: "自定义图标的类名，会覆盖 type",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "customClass",
            instruction: "自定义类名",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "duration",
            instruction: "显示时间, 毫秒。设为 0 则不会自动关闭",
            type: "number",
            optional: "—",
            defaultvalue: "3000"
        },
        {
            param: "showClose",
            instruction: "是否显示关闭按钮",
            type: "boolean",
            optional: "—",
            defaultvalue: "false"
        },
        {
            param: "onClose",
            instruction: "关闭时的回调函数, 参数为被关闭的 message 实例",
            type: "function",
            optional: "—",
            defaultvalue: "—"
        }
        ]
    },
    MessageBox: {
        Options: [{
            param: "title",
            instruction: "MessageBox 标题",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "message",
            instruction: "MessageBox 消息正文内容",
            type: "string/ReactElement",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "type",
            instruction: "消息类型，用于显示图标",
            type: "string",
            optional: "success/info/"
        },
        {
            param: "warning/error",
            instruction: "—"
        },
        {
            param: "lockScroll",
            instruction: "是否在 MessageBox 出现时将 body 滚动锁定",
            type: "boolean",
            optional: "—",
            defaultvalue: "true"
        },
        {
            param: "showCancelButton",
            instruction: "是否显示取消按钮",
            type: "boolean",
            optional: "—",
            defaultvalue: "false（以 confirm 和 prompt 方式调用时为 true）"
        },
        {
            param: "showConfirmButton",
            instruction: "是否显示确定按钮",
            type: "boolean",
            optional: "—",
            defaultvalue: "true"
        },
        {
            param: "cancelButtonText",
            instruction: "取消按钮的文本内容",
            type: "string",
            optional: "—",
            defaultvalue: "取消"
        },
        {
            param: "confirmButtonText",
            instruction: "确定按钮的文本内容",
            type: "string",
            optional: "—",
            defaultvalue: "确定"
        },
        {
            param: "cancelButtonClass",
            instruction: "取消按钮的自定义类名",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "confirmButtonClass",
            instruction: "确定按钮的自定义类名",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "showInput",
            instruction: "是否显示输入框",
            type: "boolean",
            optional: "—",
            defaultvalue: "false（以 prompt 方式调用时为 true）"
        },
        {
            param: "inputPlaceholder",
            instruction: "输入框的占位符",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "inputType",
            instruction: "输入框的类型",
            type: "string",
            optional: "—",
            defaultvalue: "text"
        },
        {
            param: "inputValue",
            instruction: "输入框的初始文本",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "inputPattern",
            instruction: "输入框的校验表达式",
            type: "regexp",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "inputValidator",
            instruction: "输入框的校验函数。可以返回布尔值或字符串，若返回一个字符串, 则返回结果会被赋值给 inputErrorMessage",
            type: "function",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "inputErrorMessage",
            instruction: "校验未通过时的提示文本",
            type: "string",
            optional: "—",
            defaultvalue: "输入的数据不合法!"
        }
        ]
    },
    Notification: {
        Options: [{
            param: "title",
            instruction: "标题",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "message",
            instruction: "说明文字",
            type: "string/ReactElement",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "type",
            instruction: "主题样式，如果不在可选值内将被忽略，与iconClass必选其一",
            type: "string",
            optional: "success/warning/info/error",
            defaultvalue: "—"
        },
        {
            param: "iconClass",
            instruction: "自定义图标的类名。可与type同时设置，同时设置默认为iconClass的图标，两者必选其一",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "duration",
            instruction: "显示时间, 毫秒。设为 0 则不会自动关闭",
            type: "number",
            optional: "—",
            defaultvalue: "4500"
        },
        {
            param: "onClose",
            instruction: "关闭时的回调函数",
            type: "function",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "onClick",
            instruction: "点击 Notification 时的回调函数",
            type: "function",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "offset",
            instruction: "偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量",
            type: "number",
            optional: "—",
            defaultvalue: "0"
        }
        ]
    },
    Menu: {
        List: [{
            param: "mode",
            instruction: "模式",
            type: "string",
            optional: "horizontal,vertical",
            defaultvalue: "vertical"
        },
        {
            param: "theme",
            instruction: "主题色",
            type: "string",
            optional: "light,dark",
            defaultvalue: "light"
        },
        {
            param: "defaultActive",
            instruction: "当前激活菜单的 index",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "defaultOpeneds",
            instruction: "当前打开的submenu的 key 数组",
            type: "Array",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "uniqueOpened",
            instruction: "是否只保持一个子菜单的展开",
            type: "boolean",
            optional: "—",
            defaultvalue: "false"
        },
        {
            param: "menuTrigger",
            instruction: "子菜单打开的触发方式(只在 mode 为 horizontal 时有效)",
            type: "string",
            optional: "—",
            defaultvalue: "hover"
        }
        ],
        Events: [{
            eventName: "onSelect",
            instruction: "菜单激活回调",
            callbackParam: "index: 选中菜单项的 indexPath: 选中菜单项的 index path"
        },
        {
            eventName: "onOpen",
            instruction: "SubMenu 展开的回调",
            callbackParam: "index: 打开的 subMenu 的 index， indexPath: 打开的 subMenu 的 index path"
        },
        {
            eventName: "onClose",
            instruction: "SubMenu 收起的回调",
            callbackParam: "index: 收起的 subMenu 的 index， indexPath: 收起的 subMenu 的 index path"
        }
        ]
    },
    SubMenu: {
        List: [{
            param: "index",
            instruction: "唯一标志",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        }]
    },
    MenuGroup: {
        List: [{
            param: "title",
            instruction: "分组标题",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        }]
    },
    MenuItem: {
        List: [{
            param: "index",
            instruction: "唯一标志",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        }]
    },
    Tab: {
        List: [{
            param: "type",
            instruction: "风格类型",
            type: "string",
            optional: "card, border-card",
            defaultvalue: "—"
        },
        {
            param: "closable",
            instruction: "标签是否可关闭",
            type: "boolean",
            optional: "-",
            defaultvalue: "false"
        },
        {
            param: "addable",
            instruction: "标签是否可增加",
            type: "boolean",
            optional: "-",
            defaultvalue: "false"
        },
        {
            param: "editable",
            instruction: "标签是否同时可增加和关闭",
            type: "boolean",
            optional: "-",
            defaultvalue: "false"
        },
        {
            param: "activeName",
            instruction: "选中选项卡的 name",
            type: "string",
            optional: "—",
            defaultvalue: "第一个选项卡的 name"
        },
        {
            param: "value",
            instruction: "绑定值，选中选项卡的name",
            type: "string",
            optional: "—",
            defaultvalue: "第一个选项卡的 name"
        }
        ],
        Events: [{
            eventName: "onTabClick",
            instruction: "tab 被选中时触发",
            callbackParam: "被选中的标签 tab 实例"
        },
        {
            eventName: "onTabRemove",
            instruction: "点击 tab 移除按钮后触发",
            callbackParam: "被删除的标签的 name"
        },
        {
            eventName: "onTabAdd",
            instruction: "点击 tabs 的新增按钮后触发",
            callbackParam: "-"
        },
        {
            eventName: "onTabEdit",
            instruction: "点击 tabs 的新增按钮或 tab 被关闭后触发",
            callbackParam: "(targetName, action)"
        }
        ]
    },
    TabPane: {
        List: [{
            param: "label",
            instruction: "选项卡标题",
            type: "string,node",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "disabled",
            instruction: "是否禁用",
            type: "boolean",
            optional: "—",
            defaultvalue: "false"
        },
        {
            param: "name",
            instruction: "与选项卡 activeName 对应的标识符，表示选项卡别名",
            type: "string",
            optional: "—",
            defaultvalue: "该选项卡在选项卡列表中的顺序值，如第一个选项卡则为'1'"
        },
        {
            param: "closable",
            instruction: "标签是否可关闭",
            type: "boolean",
            optional: "—",
            defaultvalue: "false"
        },
        {
            param: "customClass",
            instruction: "自定义样式class名",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        }
        ]
    },
    Breadcrumb: {
        List: [{
            param: "separator",
            instruction: "分隔符",
            type: "string",
            optional: "—",
            defaultvalue: "斜杠'/'"
        },

        ]
    },
    Dropdown: {
        List: [{
            param: "type",
            instruction: "菜单按钮类型，同 Button 组件(只在splitButton为 true 的情况下有效)",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "size",
            instruction: "菜单按钮尺寸，同 Button 组件(只在splitButton为 true 的情况下有效)",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "splitButton",
            instruction: "下拉触发元素呈现为按钮组，不可单独使用，必须增设onClick属性，否则会报错",
            type: "boolean",
            optional: "—",
            defaultvalue: "false"
        },
        {
            param: "menuAlign",
            instruction: "菜单水平对齐方向",
            type: "string",
            optional: "start, end",
            defaultvalue: "end"
        },
        {
            param: "trigger",
            instruction: "触发下拉的行为",
            type: "string",
            optional: "hover, click",
            defaultvalue: "hover"
        },
        {
            param: "hideOnClick",
            instruction: "是否在点击菜单项后隐藏菜单",
            type: "boolean",
            optional: "—",
            defaultvalue: "true"
        }
        ],
        Events: [{
            eventName: "onClick",
            instruction: "splitButton 为 true 时，点击左侧按钮的回调",
            callbackParam: "—"
        },
        {
            eventName: "onCommand",
            instruction: "点击菜单项触发的事件回调",
            callbackParam: "Dropdown.Item 的指令"
        },
        {
            eventName: "onVisibleChange",
            instruction: "下拉框出现/隐藏时触发",
            callbackParam: "出现则为 true，隐藏则为 false"
        }
        ]
    },
    DropdownMenuItem: {
        List: [{
            param: "command",
            instruction: "指令",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "disabled",
            instruction: "禁用",
            type: "boolean",
            optional: "—",
            defaultvalue: "false"
        },
        {
            param: "divided",
            instruction: "显示分割线",
            type: "boolean",
            optional: "—",
            defaultvalue: "false"
        }
        ]
    },
    Steps: {
        List: [{
            param: "space",
            instruction: "每个 step 的间距，不填写将自适应间距",
            type: "Number",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "direction",
            instruction: "显示方向",
            type: "string",
            optional: "vertical/horizontal",
            defaultvalue: "horizontal"
        },
        {
            param: "active",
            instruction: "设置当前激活步骤",
            type: "number",
            optional: "—",
            defaultvalue: "0"
        },
        {
            param: "processStatus",
            instruction: "设置当前步骤的状态",
            type: "string",
            optional: "wait/process/finish/error/success",
            defaultvalue: "process"
        },
        {
            param: "finishStatus",
            instruction: "设置结束步骤的状态",
            type: "string",
            optional: "wait/process/finish/error/success",
            defaultvalue: "finish"
        }
        ]
    },
    Step: {
        List: [{
            param: "title",
            instruction: "标题",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "description",
            instruction: "描述性文字",
            type: "string/ReactElement",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "icon",
            instruction: "图标",
            type: "Element Icon 提供的图标，如果要使用自定义图标可以通过自定义element的方式写入",
            optional: "string",
            defaultvalue: "—"
        }
        ]
    },
    Dialog: {
        List: [{
            param: "title",
            instruction: "Dialog 的标题",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "size",
            instruction: "Dialog 的大小",
            type: "string",
            optional: "tiny/small/large/full",
            defaultvalue: "small"
        },
        {
            param: "top",
            instruction: "Dialog CSS 中的 top 值（仅在 size 不为 full 时有效）",
            type: "string",
            optional: "—",
            defaultvalue: "15%"
        },
        {
            param: "modal",
            instruction: "是否需要遮罩层",
            type: "boolean",
            optional: "—",
            defaultvalue: "true"
        },
        {
            param: "lockScroll",
            instruction: "是否在 Dialog 出现时将 body 滚动锁定",
            type: "boolean",
            optional: "—",
            defaultvalue: "true"
        },
        {
            param: "customClass",
            instruction: "Dialog 的自定义类名",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "closeOnClickModal",
            instruction: "是否可以通过点击 modal 关闭 Dialog",
            type: "boolean",
            optional: "—",
            defaultvalue: "true"
        },
        {
            param: "closeOnPressEscape",
            instruction: "是否可以通过按下 ESC 关闭 Dialog",
            type: "boolean",
            optional: "—",
            defaultvalue: "true"
        }
        ],
        Events: [
            // {
            //     eventName: "onClose",
            //     instruction: "Dialog 关闭的回调",
            //     callbackParam: "—"
            // },
            {
                eventName: "onOpen",
                instruction: "Dialog 打开的回调",
                callbackParam: "—"
            }
        ]
    },
    Tooltip: {
        List: [{
            param: "effect",
            instruction: "默认提供的主题",
            type: "String",
            optional: "dark, light",
            defaultvalue: "dark"
        },
        {
            param: "content",
            instruction: "显示的内容",
            type: "String/Node",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "placement",
            instruction: "Tooltip 的出现位置",
            type: "String",
            optional: "top, top-start, top-end, bottom, bottom-start, bottom-end, left, left-start, left-end, right, right-start, right-end",
            defaultvalue: "bottom"
        },
        {
            param: "visible",
            instruction: "状态是否可见",
            type: "Boolean",
            optional: "—",
            defaultvalue: "false"
        },
        {
            param: "disabled",
            instruction: "Tooltip 是否可用",
            type: "Boolean",
            optional: "—",
            defaultvalue: "false"
        },
        {
            param: "transition",
            instruction: "定义渐变动画",
            type: "String",
            optional: "—",
            defaultvalue: "fade-in-linear"
        },
        {
            param: "visibleArrow",
            instruction: "是否显示 Tooltip 箭头",
            type: "Boolean",
            optional: "—",
            defaultvalue: "true"
        },
        {
            param: "openDelay",
            instruction: "延迟出现，单位毫秒",
            type: "Number",
            optional: "—",
            defaultvalue: "0"
        },
        {
            param: "manual",
            instruction: "手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效",
            type: "Boolean",
            optional: "true,false",
            defaultvalue: "false"
        }
        ]
    },
    Popover: {
        List: [{
            param: "trigger",
            instruction: "触发方式",
            type: "String",
            optional: "click/focus/hover",
            defaultvalue: "click"
        },
        {
            param: "title",
            instruction: "标题",
            type: "String",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "content",
            instruction: "显示的内容，也可以通过 slot 传入 DOM",
            type: "String",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "width",
            instruction: "宽度",
            type: "String, Number",
            optional: "—",
            defaultvalue: "最小宽度 150px"
        },
        {
            param: "placement",
            instruction: "出现位置",
            type: "String",
            optional: "top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end",
            defaultvalue: "bottom"
        },
        {
            param: "visible",
            instruction: "状态是否可见",
            type: "Boolean",
            optional: "—",
            defaultvalue: "false"
        },
        {
            param: "transition",
            instruction: "定义渐变动画",
            type: "String",
            optional: "—",
            defaultvalue: "fade-in-linear"
        },
        {
            param: "visibleArrow",
            instruction: "是否显示 Tooltip 箭头",
            type: "Boolean",
            optional: "—",
            defaultvalue: "true"
        },
        {
            param: "popperClass",
            instruction: "为 popper 添加类名",
            type: "String",
            optional: "-",
            defaultvalue: "-"
        }
        ]
    },
    BarChart: {
        List: [
            {
                param: "option",
                instruction: "图表的配置(详见echarts文档)",
                type: "function",
                optional: "-",
                defaultvalue: "-"
            },
            {
                param: "style",
                instruction: "图表样式",
                type: "object",
                optional: "-",
                defaultvalue: "-"
            },
            {
                param: "className",
                instruction: "图表类名",
                type: "String",
                optional: "-",
                defaultvalue: "react_for_echarts"
            }
        ]
    },
    PieChart: {
        List: [
            {
                param: "option",
                instruction: "图表的配置(详见echarts文档)",
                type: "function",
                optional: "-",
                defaultvalue: "-"
            },
            {
                param: "style",
                instruction: "图表样式",
                type: "object",
                optional: "-",
                defaultvalue: "-"
            },
            {
                param: "className",
                instruction: "图表类名",
                type: "String",
                optional: "-",
                defaultvalue: "react_for_echarts"
            }
        ]
    },
    LineChart: {
        List: [
            {
                param: "option",
                instruction: "图表的配置(详见echarts文档)",
                type: "function",
                optional: "-",
                defaultvalue: "-"
            },
            {
                param: "style",
                instruction: "图表样式",
                type: "object",
                optional: "-",
                defaultvalue: "-"
            },
            {
                param: "className",
                instruction: "图表类名",
                type: "String",
                optional: "-",
                defaultvalue: "react_for_echarts"
            }
        ]
    },
    Cascader: {
        List: [
            {
                param: "options",
                instruction: "可选项数据源，键名可通过 props 属性配置",
                type: "array",
                optional: "—",
                defaultvalue: "—"
            },
            {
                param: "props",
                instruction: "配置选项，具体见下表",
                type: "object",
                optional: "—",
                defaultvalue: "—"
            },
            {
                param: "value",
                instruction: "选中项绑定值",
                type: "array",
                optional: "—",
                defaultvalue: "—"
            },
            {
                param: "popperClass",
                instruction: "自定义浮层类名",
                type: "string",
                optional: "—",
                defaultvalue: "—"
            },
            {
                param: "placeholder",
                instruction: "输入框占位文本",
                type: "string",
                optional: "—",
                defaultvalue: "请选择"
            },
            {
                param: "disabled",
                instruction: "是否禁用",
                type: "boolean",
                optional: "—",
                defaultvalue: "false"
            },
            {
                param: "clearable",
                instruction: "是否支持清空选项",
                type: "boolean",
                optional: "—",
                defaultvalue: "false"
            },
            {
                param: "expandTrigger",
                instruction: "次级菜单的展开方式",
                type: "string",
                optional: "click / hover",
                defaultvalue: "click"
            },
            {
                param: "showAllLevels",
                instruction: "输入框中是否显示选中值的完整路径",
                type: "boolean",
                optional: "—",
                defaultvalue: "true"
            },
            {
                param: "filterable",
                instruction: "是否可搜索选项",
                type: "boolean",
                optional: "—",
                defaultvalue: "—"
            },
            {
                param: "debounce",
                instruction: "搜索关键词输入的去抖延迟，毫秒",
                type: "number",
                optional: "—",
                defaultvalue: "300"
            },
            {
                param: "changeOnSelect",
                instruction: "是否允许选择任意一级的选项",
                type: "boolean",
                optional: "—",
                defaultvalue: "false"
            },
            {
                param: "size",
                instruction: "尺寸",
                type: "string",
                optional: "large / small / mini",
                defaultvalue: "—"
            },
            {
                param: "beforeFilter",
                instruction: "可选参数, 筛选之前的钩子，参数为输入的值，若返回 false 或者返回 Promise 且被 reject，则停止筛选。",
                type: "function(value)",
                optional: "—",
                defaultvalue: "—"
            },
        ],
        Options: [{
            param: "value",
            instruction: "指定选项的值为选项对象的某个属性值",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "label",
            instruction: "指定选项标签为选项对象的某个属性值",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "children",
            instruction: "指定选项的子选项为选项对象的某个属性值",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        {
            param: "disabled",
            instruction: "指定选项的禁用为选项对象的某个属性值",
            type: "string",
            optional: "—",
            defaultvalue: "—"
        },
        ],
        Events: [
            {
                eventName: "onChange",
                instruction: "当绑定值变化时触发的事件",
                callbackParam: "当前值"
            },
            {
                eventName: "activeItemChange",
                instruction: "当父级选项变化时触发的事件，仅在 change-on-select 为 false 时可用",
                callbackParam: "各父级选项组成的数组"
            }
        ]
    },
    Badge: {
        List: [
            {
                param: "value",
                instruction: "显示值",
                type: "string, number",
                optional: "—",
                defaultvalue: "—"
            },
            {
                param: "max",
                instruction: "最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型",
                type: "number",
                optional: "—",
                defaultvalue: "—"
            },
            {
                param: "isDot",
                instruction: "小圆点",
                type: "boolean",
                optional: "—",
                defaultvalue: "false"
            },
        ]
    }
}
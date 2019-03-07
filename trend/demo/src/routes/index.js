/**
 * Created by Yuri Zhang  2017/8/13.
 */
import React, { Component } from 'react';
// import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { Route, Redirect, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import notFound from '../components/pages/NotFound.jsx'

//import BasicForm from '../components/forms/BasicForm';

//import Icons from '../components/ui/Icons';
//import Buttons from '../components/ui/Buttons';
//import Spins from '../components/ui/Spins';
//import Modals from '../components/ui/Modals';
//import Notifications from '../components/ui/Notifications';
//import Tabs from '../components/ui/Tabs';
//import Banners from '../components/ui/banners';
//import Drags from '../components/ui/Draggable';

//import Gallery from '../components/ui/Gallery';


//import AuthBasic from '../components/auth/Basic';
//import RouterEnter from '../components/auth/RouterEnter';
//import Wysiwyg from 'bundle-loader?lazy!../components/ui/Wysiwyg';  // 按需加载富文本配置
//import Bundle from '../components/widget/BundlePro';
//import asyncComponent from '../components/widget/BundlePro2';
//import Cssmodule from '../components/cssmodule';


// 按需加载Button配置老方式
// const ButtonsBundle = (props) => (
//     <Bundle load={() => import('../components/ui/Buttons')}>
//         {(ButtonsBundle) => <ButtonsBundle {...props} />}
//     </Bundle>
// );

// 按需加载Button配置新方式
//const ButtonsBundle2 = asyncComponent(() => import("../components/ui/Buttons"));
//const IconsBundle2 = asyncComponent(() => import("../components/ui/Icons"));


// 按路由拆分代码
//react-loadable
/* package.json中
   "plugins": [
      ["import", [{"libraryName": "antd", "style": "css" }]],
      ["syntax-dynamic-import"]
    ]
*/
const MyLoadingComponent = ({ isLoading, error }) => {
    // Handle the loading state
    if (isLoading) {
        return <div>Loading...</div>;
    }
    // Handle the error state
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    }
    else {
        return null;
    }
};
const ReadMe = Loadable({
    loader: () => import('../components/ui/ReadMe'),
    loading: MyLoadingComponent
});
const Layout = Loadable({
    loader: () => import('../components/ui/Layout'),
    loading: MyLoadingComponent
});
const Grid = Loadable({
    loader: () => import('../components/ui/Grid'),
    loading: MyLoadingComponent
});
const IconPlus = Loadable({
    loader: () => import('../components/ui/IconPlus'),
    loading: MyLoadingComponent
});
const Buttons = Loadable({
    loader: () => import('../components/ui/Buttons'),
    loading: MyLoadingComponent
});

const Icons = Loadable({
    loader: () => import('../components/ui/Icons'),
    loading: MyLoadingComponent
});

const Color = Loadable({
    loader: () => import('../components/ui/Colors'),
    loading: MyLoadingComponent
});
const FormElement = Loadable({
    loader: () => import('../components/ui/FormElement'),
    loading: MyLoadingComponent
});
const AnimateCss = Loadable({
    loader: () => import('../components/ui/AnimateCss'),
    loading: MyLoadingComponent
});
const Dialog = Loadable({
    loader: () => import('../components/ui/Dialog'),
    loading: MyLoadingComponent
});

const Tabs = Loadable({
    loader: () => import('../components/ui/Tabs'),
    loading: MyLoadingComponent
});

// const BasicForm = Loadable({
//     loader: () => import('../components/forms/BasicForm'),
//     loading: MyLoadingComponent
// });

const Table = Loadable({
    loader: () => import('../components/ui/Table'),
    loading: MyLoadingComponent
});

const Tag = Loadable({
    loader: () => import('../components/ui/Tag'),
    loading: MyLoadingComponent
});
const Progress = Loadable({
    loader: () => import('../components/ui/Progress'),
    loading: MyLoadingComponent
});
const Pagination = Loadable({
    loader: () => import('../components/ui/Pagination'),
    loading: MyLoadingComponent
});
const Loading = Loadable({
    loader: () => import('../components/ui/Loading'),
    loading: MyLoadingComponent
});
const Message = Loadable({
    loader: () => import('../components/ui/Message'),
    loading: MyLoadingComponent
});
const Notifications = Loadable({
    loader: () => import('../components/ui/Notifications'),
    loading: MyLoadingComponent
});
const Breadcrumb = Loadable({
    loader: () => import('../components/ui/Breadcrumb'),
    loading: MyLoadingComponent
});
const Step = Loadable({
    loader: () => import('../components/ui/Step'),
    loading: MyLoadingComponent
});
const Menu = Loadable({
    loader: () => import('../components/ui/Menu'),
    loading: MyLoadingComponent
});
const Dropdown = Loadable({
    loader: () => import('../components/ui/Dropdown'),
    loading: MyLoadingComponent
});
const LoginForm = Loadable({
    loader: () => import('../components/ui/LoginForm'),
    loading: MyLoadingComponent
});
const NotFound = Loadable({
    loader: () => import('../components/ui/NotFound'),
    loading: MyLoadingComponent
});
const PieChart = Loadable({
    loader: () => import('../components/ui/PieChart'),
    loading: MyLoadingComponent
});
const LineChart = Loadable({
    loader: () => import('../components/ui/LineChart'),
    loading: MyLoadingComponent
});
const BarChart = Loadable({
    loader: () => import('../components/ui/BarChart'),
    loading: MyLoadingComponent
});
const FuzzySearch = Loadable({
    loader: () => import('../components/ui/FuzzySearch'),
    loading: MyLoadingComponent
});
const Tooltip = Loadable({
    loader: () => import('../components/ui/Tooltip'),
    loading: MyLoadingComponent
});
const DynamicTable = Loadable({
    loader: () => import('../components/ui/DynamicTable'),
    loading: MyLoadingComponent
});
const advancedSearch = Loadable({
    loader: () => import('../components/ui/QueryCriteriaModule'),
    loading: MyLoadingComponent
});

//新增Card组件
const Card = Loadable({
    loader: () => import('../components/ui/Card'),
    loading: MyLoadingComponent
});
//新增折叠面板组件
const Collapse = Loadable({
    loader: () => import('../components/ui/Collapse'),
    loading: MyLoadingComponent
});
const Carousel = Loadable({
    loader: () => import('../components/ui/Carousel'),
    loading: MyLoadingComponent
});
const Slider = Loadable({
    loader: () => import('../components/ui/Slider'),
    loading: MyLoadingComponent
});
const Transfer = Loadable({
    loader: () => import('../components/ui/Transfer'),
    loading: MyLoadingComponent
});
const Cascader = Loadable({
    loader: () => import('../components/ui/Cascader'),
    loading: MyLoadingComponent
});
const Form = Loadable({
    loader: () => import('../components/ui/Form'),
    loading: MyLoadingComponent
});
//新增组件 评分
const Rate = Loadable({
    loader: () => import ('../components/ui/Rate'),
    loading: MyLoadingComponent
}); 

const Badge = Loadable({
    loader: () => import('../components/ui/Badge'),
    loading: MyLoadingComponent
});

const RichTextEditor = Loadable({
    loader: () => import('../components/ui/RichTextEditor'),
    loading: MyLoadingComponent
});

const Tree = Loadable({
    loader: () => import('../components/ui/Tree'),
    loading: MyLoadingComponent
});

const Copy = Loadable({
    loader: () => import('../components/ui/CopyUrlAndRefresh'),
    loading: MyLoadingComponent
});
// GoogleMap example
const GoogleMapBase = Loadable({
    loader: () => import('../components/ui/GoogleMapBase'),
    loading: MyLoadingComponent
});

const GoogleMapDrawing = Loadable({
    loader: () => import('../components/ui/GoogleMapDrawing'),
    loading: MyLoadingComponent
});

const GoogleMapRoute = Loadable({
    loader: () => import('../components/ui/GoogleMapRoute'),
    loading: MyLoadingComponent
});

const GoogleMapPopups = Loadable({
    loader: () => import('../components/ui/GoogleMapPopups'),
    loading: MyLoadingComponent
});

const GoogleMapH5 = Loadable({
    loader: () => import('../components/ui/GoogleMapH5'),
    loading: MyLoadingComponent
});


// const NewRichTextEditor = Loadable({
//     loader: () => import('../components/ui/NewRichTextEditor'),
//     loading: MyLoadingComponent
// });

// class ButtonsBundle3 extends React.Component {
//     render() {
//       return <ButtonsBundle33 />;
//     }
// }
// class IconsBundle3 extends React.Component {
//     render() {
//       return <IconsBundle33 />;
//     }
// }


export default class CRouter extends Component {
    requireAuth = (permission, component) => {
        const { auth } = this.props;
        const { permissions } = auth.data;
        // const { auth } = store.getState().httpData;
        if (!permissions || !permissions.includes(permission)) return <Redirect to={'404'} />;
        return component;
    };
    render() {
        //let changeBread=this.props.changeBread; 这个从admin.jsx传来
        //console.log("CRouter");
        //console.log(changeBread);
        //可以把任意的组件渲染到这里来，withRouter（组件名）一下就可以。如果不使用withRouter，那组件必须包括在hashRouter或是borwserouter里面
        return (

            <Switch>
                <Route exact path="/" component={ReadMe} />
                <Route exact path="/app/layout/layout" component={Layout} />
                <Route exact path="/app/layout/grid" component={Grid} />
                <Route exact path="/app/layout/iconplus" component={IconPlus} />
                {/* <Route exact path="/app/form/basicForm" component={BasicForm} /> */}
                <Route exact path="/app/ui/colors" component={Color} />
                <Route exact path="/app/form/formElements" component={FormElement} />
                <Route exact path="/app/animate/animateCss" component={AnimateCss} />                
                <Route exact path="/app/form/cascader" component={Cascader} />
                <Route exact path="/app/form/Transfer" component={Transfer} />
                <Route exact path="/app/form/Form" component={Form} />
                <Route exact path="/app/form/Rate" component={Rate} />                
                <Route exact path="/app/ui/icons" component={Icons} />
                <Route exact path="/app/ui/buttons" component={Buttons} />
                {/* 这个从admin.jsx传来，注意这里是render */}
                {/* <Route exact path="/app/ui/spins" component={Spins} /> */}
                <Route exact path="/app/ui/Dialog" component={Dialog} />


                <Route exact path="/app/ui/loading" component={Loading} />
                <Route exact path="/app/ui/message" component={Message} />

                <Route exact path="/app/ui/notifications" component={Notifications} />
                <Route exact path="/app/nav/tabs" component={Tabs} />

               

                <Route exact path="/app/nav/menu" component={Menu} />
                <Route exact path="/app/nav/breadcrumb" component={Breadcrumb} />
                <Route exact path="/app/nav/dropdown" component={Dropdown} />
                <Route exact path="/app/nav/step" component={Step} />

                <Route exact path="/app/data/table" component={Table} />

                <Route exact path="/app/data/tag" component={Tag} />

                <Route exact path="/app/data/progress" component={Progress} />

                <Route exact path="/app/data/pagination" component={Pagination} />
                
                <Route exact path="/app/data/tree"  component={Tree}/>

                <Route exact path="/app/data/badge"  component={Badge}/>

                <Route exact path="/app/public/LoginForm" component={LoginForm} />

                <Route exact path="/app/public/404" component={NotFound} />
                <Route exact path="/app/public/fuzzySearch" component={FuzzySearch} />
                <Route exact path="/app/public/dynamicTable" component={DynamicTable} />
                <Route exact path="/app/public/advancedSearch" component={advancedSearch} />
                <Route exact path="/app/public/RichTextEditor" component={RichTextEditor} />
                <Route exact path="/app/chart/piechart" component={PieChart} />
                <Route exact path="/app/public/CopyUrlAndRefresh" component={Copy} />

                <Route exact path="/app/chart/barchart" component={BarChart} />
                <Route exact path="/app/chart/linechart" component={LineChart} />

                 {/* <Route exact path="/app/ui/rate" component={Rate} /> */}

                <Route exact path="/app/ui/Card" component={Card} />
                <Route exact path="/app/ui/Collapse" component={Collapse} />
                <Route exact path="/app/ui/Carousel" component={Carousel} />
                <Route exact path="/app/ui/Slider" component={Slider} />
                <Route exact path="/app/ui/Transfer" component={Transfer} />
                <Route exact path="/app/ui/Tooltip" component={Tooltip} />

                <Route exact path="/app/googlemap/base" component={GoogleMapBase} />
                <Route exact path="/app/googlemap/drawing" component={GoogleMapDrawing} />
                <Route exact path="/app/googlemap/route" component={GoogleMapRoute} />
                <Route exact path="/app/googlemap/popup" component={GoogleMapPopups} />
                <Route exact path="/app/googlemap/H5" component={GoogleMapH5} />

                {/* <Route exact path="/app/ui/banners" component={Banners} /> */}

                {/* <Route exact path="/app/ui/drags" component={Drags} /> */}
                {/* <Route exact path="/app/ui/gallery" component={Gallery} /> */}
                <Route exact path="/app/public/test3Menu" render={(props) => (<div>四级菜单</div>)} />
                <Route exact path="/app/public/test3Menu/sub/subs/child1" render={(props) => (<div>我是child1</div>)} />
                <Route exact path="/app/public/test3Menu/sub/subs/child2" render={(props) => (<div>我是child2</div>)} />
                <Route exact path="/app/public/test3Menu/sub/subs/child3" render={(props) => (<div>我是child3</div>)} />

                {/* <Route exact path="/app/auth/basic" component={AuthBasic} />
                <Route exact path="/app/auth/routerEnter" component={(props) => this.requireAuth('auth/testPage', <RouterEnter {...props} />)} />

                <Route exact path="/app/cssModule" component={Cssmodule} /> */}
                <Route exact path="/404" component={notFound} />


                <Route render={() => <Redirect to="/404" />} />


            </Switch>
        )
    }
}

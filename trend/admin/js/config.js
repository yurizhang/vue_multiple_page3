var env = "sit";
var configObj = {
    //sit环境的配置
    sit: {
        complaintsSysId: 143,                                     //投诉系统的菜单的系统Id
        ausArr: [144,145,147,149],                                            //外部系统介入的   系统ID数组
        SERVER_URL: "http://fed-mcs.api.tuniu-sit.org/",           //服务器调用的地址
        FRONT_URL: "http://static.tuniu-sit.org/FED/MCS/build/#",  //投诉菜单初始化的基本地址
        ADM_URL: "http://static.tuniu-sit.org/FED/ADM/admin",     //当前ADM的地址 
    },
    //线上的环境
    prd: {
        complaintsSysId: 104,                                     //投诉系统的菜单的系统Id
        ausArr: [144,145,146,147,149],                                             //外部系统介入的   系统ID数组
        SERVER_URL: "http://fed-mcs.api.tuniu.org/",           //服务器调用的地址
        FRONT_URL: "http://static.tuniu.org/FED/MCS/build/#",  //投诉菜单初始化的基本地址
        ADM_URL: "http://static.tuniu.org/FED/ADM/admin",     //当前ADM的地址      
    }
    
}

/*
{
    146: 'Jupiter系统',    //owner: wangqingqing3
}
*/


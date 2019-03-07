
$(function() {
    //初始化调取接口
    var token =getQueryString('token') || '';
    if(token) {
      setCookie('token',token,1);
      getInfo();
    }else{
        getAus();
    }
    $('#userName').html(getCookie('realName')); 
    $("#loginout").on('click',function(event) {
        event.stopPropagation();       
        loginout();
    });
})



//点击退出
function loginout() {
    CommondeleteCookie();
    loginOutTSP();
}

//具体的退出的实现
function loginOutTSP (){
    if(window.location.host.indexOf('tuniu.org') !== -1){
      window.location.href = "http://fed-mcs.api.tuniu.org/api/loginoutprd1"+"?redirectUrl="+window.location.protocol+'//' + window.location.host+window.location.pathname;
    }else{
        axios({
            url: configObj[env].SERVER_URL +'api/loginout',
            method:"GET",
            withCredentials: true,
        }).then((response) => {
            if(response.data && response.data.success) {
                var  url = response.data.data.url +"?redirectUrl="+window.location.protocol+'//' + window.location.host+window.location.pathname;;
                window.location.href = url;
            }
        })
    }
}


//信息失效产生的退出
function commonLoginOut(response) {
    CommondeleteCookie();
    if(window.location.host.indexOf('tuniu.org') !== -1){
        window.location.href = "http://fed-mcs.api.tuniu.org/api/loginoutprd2"+"?redirectUrl="+window.location.protocol+'//' + window.location.host+window.location.pathname;
      }else{
        window.location.href = response.data.data.url + "?redirectUrl="+window.location.protocol+'//' + window.location.host+window.location.pathname;
      }
}

//   获取OA信息
function getInfo() {
    var that = this;
    axios({
        url: configObj[env].SERVER_URL+"api/getinfo",
        method:"POST",
        data: {
            token: getCookie('token')
        },
        withCredentials: true,
    }).then((response) => {
        if(response.data && response.data.success) {
            var data = response.data.data;
            setCookie('userId',data.userId,1);
            setCookie('userName',data.userName,1);
            setCookie('realName',data.realName,1); 
            $('#userName').html(data.realName);
            getAus();
        }else if(!response.data.success && response.data.errorCode === "00021721") {
            //公用的退出的方法
            commonLoginOut(response)
        }else if(!response.data.success && response.data.errorCode === "00022579") {
            //跳转到我们自己的登录页面
            commonLoginHtml(response)
        }
    })
  }

  //获取菜单权限列表
function getAus() {
    var userId =  Number(getCookie('userId'));
    var token = getCookie('token');
    axios({
        url: configObj[env].SERVER_URL+"api/queryaus",
        method:"POST",
        withCredentials: true,
        data: {
            userId: userId,
            sysId: configObj[env].complaintsSysId,
            token: token,
        },
    }).then((response) => {
        if(response.data.success) {
         var menus = response.data.data.menus;            
            var content = '';
            var addContent = function (menus) {
               menus.map((item,index) => {                   
                 if(item.children && item.children.length > 0) {
                     content += '<li> ';
                     content += ' <a href="javascript:;">';
                     content+= '<cite>'+item.title+'</cite>';
                     content+= '<i class="iconfont nav_right">&#58925;</i></a>';
                     content+= '<ul class="sub-menu">';
                     addContent(item.children);
                     content+= '</ul>';
                     content+= ' </li >';
                 }else{
                     content += '<li> ';
                     content += '<a _href='+ configObj[env].FRONT_URL+ item.key +'>';
                     content+= '<cite>'+item.title+'</cite></a>';
                     content+= ' </li >';
                 }

               })
            }
            addContent(menus);
           $('#MCS').html(content);
        }else if(!response.data.success && response.data.errorCode === "00021721") {
            commonLoginOut(response)
        }else if(!response.data.success && response.data.errorCode === "00022579") {
            commonLoginHtml(response)
        }
    })
}

function commonLoginHtml() {
    CommondeleteCookie();
    window.location.href = window.location.protocol+'//' + window.location.host+ '/FED/ADM/admin/login.html'
}

function CommondeleteCookie() {
    deleteCookie("userId");
    deleteCookie("userName");
    deleteCookie("realName");
    deleteCookie("token");
    thirdPart.deleteCookieByEnv('adm_common_token');
}
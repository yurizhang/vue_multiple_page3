
var Base=new Base64();
//公用的第三方的系统介入
var thirdPart = {
    
    //通用的调取菜单权限的配置
    getAusCommon: function(ausArr) {
        var userIdParams = Number(getCookie('userId'));
        thirdPart.getMessage(userIdParams);
        var menuDiv="";
        if(ausArr.length > 0 && userIdParams != 0) {
            //在调去权限之前生成在菜单栏固定顺序的位置的div
            ausArr.forEach(element => {
                menuDiv+="<li id='"+element+"'></li>"
            });
            $('#nav').append(menuDiv);
            for(var aus_index in ausArr){
                //调取菜单权限的数据
                this.axiosAus(ausArr[aus_index],userIdParams);
            }
        }
        
    },
      //解析第三方地址  解码
    getBaseUrlString: function(url,name) {
        //原始的url 格式
        // http://oap-portal.tuniu-sit.org/admin/gateway/#/fusing 
        if(!url || url.indexOf(name) == -1) {
            return url;
        }
        //按照ADM格式配置的url
        // http://static.tuniu.org/FED/ADM/admin/?redirectUrl=aHR0cDovL29hcC1wb3J0YWwudHVuaXUtc2l0Lm9yZy9hZG1pbi9nYXRld2F5LyMvZnVzaW5n   
        if(!url || url.indexOf("?") == -1) {
            return ''; 
        }
        url=url.split("?");
        url ="?" + url[1];
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
        var r = url.substr(1).match(reg); 
        if (r != null) {
            return Base.decode(unescape(r[2]));
        }else {
            return ''; 
        }   
    },

    //调取aus的axios操作
    axiosAus: function(sysId,userId) {
        axios({
            method:'post',
            url: configObj[env].SERVER_URL +'adm/auscommon',
            withCredentials: true,
            data: {
                userId: userId,
                sysId: sysId,
            }
        }).then(response => {
            if(response && response.data && response.data.success&&response.data.data)  {
                //根据菜单权限的数据进行渲染
                this.commonAusDrawing(response.data.data,sysId)
            }  
        })
    },

    
    //渲染菜单权限操作
    commonAusDrawing: function(ausData,sysId) {
        //首先，判断是否渲染头部
        var addHtml = '';
        var liAddHtml = '';  
        if(ausData && ausData.children && ausData.children.length > 0) {
            //渲染头部ul
            addHtml += '<ul>';
            addHtml += '<li>';
            addHtml += '<a href="javascript:;">';
            addHtml += '<i class="iconfont icon-table"></i>';
            addHtml += '<cite>'+ausData.name+'</cite>';
            addHtml += '<i class="iconfont nav_right">&#58925;</i>';
            addHtml += '</a>';
            addHtml += '<ul class="sub-menu">';
            //在这里进行ul里面添加具体的子项，使用递归的方法
            //递归渲染 菜单子项
             function recursiveDrawingAus(ausArr) {
                ausArr.map(function(item, index) {
                    if(item.children && item.children.length > 0) {
                        liAddHtml += '<li> ';
                        liAddHtml += ' <a href="javascript:;">';
                        liAddHtml += '<cite>'+item.name+'</cite>';
                        liAddHtml += '<i class="iconfont nav_right">&#58925;</i></a>';
                        liAddHtml += '<ul class="sub-menu">';
                        recursiveDrawingAus(item.children);
                        liAddHtml += '</ul>';
                        liAddHtml += ' </li >';
                    }else{
                        liAddHtml += '<li>';
                        liAddHtml += '<a _href="'+ thirdPart.getBaseUrlString(item.url,"redirectUrl") +'">';
                        liAddHtml += '<cite>'+item.name+'</cite></a>';
                        liAddHtml += ' </li >';
                    }
                })
            }
            //手动调用递归操作
            recursiveDrawingAus(ausData.children);
            addHtml += liAddHtml;
            liAddHtml = '';
            addHtml += '</ul>';
            addHtml += '</li>';
            //将生成的菜单列表进行添加
            // $('#nav').append(addHtml);
            $('#'+sysId).append(addHtml);
            //手动将addHtml置空
            addHtml = '';
        }
    },

    //设置写在 类似tuniu.org公用域下面的cookie
   setTuniuCookie: function(NameOfCookie, value, expiredays, domain){ 
        var ExpireDate = new Date (); 
        ExpireDate.setTime(ExpireDate.getTime() + (expiredays * 24 * 3600 * 1000)); 
       document.cookie = NameOfCookie + "=" + escape(value) +  ((expiredays == null) ? "" : "; expires=" + ExpireDate.toGMTString()+"; path=/; domain="+domain); 
    },

    deleteTuniuCookie: function(name,domain){
        var exp = new Date();
        exp.setTime(exp.getTime() - 24 * 3600*1000);
        var cval=getCookie(name);
        if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString()+"; path=/; domain="+domain;
    },

    //根据不同环境设置cookie 
    setCookieByEnv: function(NameOfCookie,value,expiredays) {
        //本地开发环境
        if(window.location.hostname.indexOf('localhost') != -1) {
            this.setTuniuCookie(NameOfCookie, value, expiredays, 'localhost');
        }else{
            var hostName = window.location.hostname;
            hostName = hostName.split(".").splice(1).join('.');
            this.setTuniuCookie(NameOfCookie, value, expiredays, hostName);
        }
    },

    //根据不同环境删除cookie 
    deleteCookieByEnv: function(NameOfCookie) {
        //本地开发环境
        if(window.location.hostname.indexOf('localhost') != -1) {
            this.deleteTuniuCookie(NameOfCookie, 'localhost');
        }else{
            var hostName = window.location.hostname;
            hostName = hostName.split(".").splice(1).join('.');
            this.deleteTuniuCookie(NameOfCookie, hostName);
        }
    },

    //获取消息数目
    getMessage:function(userIdParams){
        var date1 = new Date(),
        time1=date1.getFullYear()+"-"+(date1.getMonth()+1)+"-"+date1.getDate(); //当前时间


        var date2 = new Date(date1);
        date2.setDate(date1.getDate()-7);  //7天前的时间
        var time2 = date2.getFullYear()+"-"+(date2.getMonth()+1)+"-"+date2.getDate();
        var uc_id=userIdParams;
        if(uc_id){     
            var request={
                uc_id:uc_id,
                boxReadFlag:0,
                startTime:time2+' 00:00:00',
                endTime:time1+' 23:59:59'
            };
            $.getJSON("http://tns-ms.tuniu.com/ms-web/msgManage/getMsgNum.htm",request,function(response){
                if(response.success && response.msgNum>0){
                    $("#fed_msg_num").html(response.msgNum).show();
                }
            });
        }
    },
}


$(function() { 
    //初始化 添加 一个 bankInfo为 false 的cookie
    setCookie('bankFlag', false);
     //调取通用的aus菜单权限接口
     var token =getQueryString('token') || '';
     if(token) {
       thirdPart.setCookieByEnv('adm_common_token',token,1);
       getAUsInfo();
     }else{
         //调取通用的aus菜单权限接口
         configObj && configObj[env].ausArr && thirdPart.getAusCommon(configObj[env].ausArr);
     }

     //   获取OA信息
function getAUsInfo() {
    var that = this;
    axios({
        url: configObj[env].SERVER_URL+"api/getinfo",
        method:"POST",
        data: {
            token: token
        },
        withCredentials: true,
    }).then((response) => {
        if(response.data && response.data.success) {
            var data = response.data.data;
            setCookie('userId',data.userId,1);
            configObj && configObj[env].ausArr && thirdPart.getAusCommon(configObj[env].ausArr);
        }
    })
  }  
})




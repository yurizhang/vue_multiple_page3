$(function () {

    //加载弹出层
    layui.use(['form','element'],
    function() {
        layer = layui.layer;
        element = layui.element;
    });

    //触发事件
    //暴给window对象可以让内部使用
  //window.element=layui.element;
  window.tab = {
        tabAdd: function(title,url,id){
          //新增一个Tab项
          element.tabAdd('xbs_tab', {
            title: '<span id="message_'+id+'"></span>'+title
            ,content: '<iframe tab-id="'+id+'" frameborder="0" src="'+url+'" scrolling="yes" class="x-iframe"></iframe>'
            ,id: id
          })
        },
        tabDelete: function(id){
          //删除指定Tab项
          element.tabDelete('xbs_tab', id); //删除：“商品管理”
          
          
         // othis.addClass('layui-btn-disabled');
        },
        tabChange: function(id){
          //切换到指定Tab项
          element.tabChange('xbs_tab', id); //切换到：用户管理
        }
      };


    // tableCheck = {
    //     init:function  () {
    //         $(".layui-form-checkbox").click(function(event) {
    //             if($(this).hasClass('layui-form-checked')){
    //                 $(this).removeClass('layui-form-checked');
    //                 if($(this).hasClass('header')){
    //                     $(".layui-form-checkbox").removeClass('layui-form-checked');
    //                 }
    //             }else{
    //                 $(this).addClass('layui-form-checked');
    //                 if($(this).hasClass('header')){
    //                     $(".layui-form-checkbox").addClass('layui-form-checked');
    //                 }
    //             }
                
    //         });
    //     },
    //     getData:function  () {
    //         var obj = $(".layui-form-checked").not('.header');
    //         var arr=[];
    //         obj.each(function(index, el) {
    //             arr.push(obj.eq(index).attr('data-id'));
    //         });
    //         return arr;
    //     }
    // }

    //开启表格多选
    // tableCheck.init();
      

    $('.left_open').click(function(event) {
        if($('.left-nav').css('left')=='0px'){
            
            $('.left-nav').animate({left: '-221px'}, 100);
            $('.x-slide_left').animate({left: '0px'},100).addClass("x-slide_left_zoomin"); 
                        
            $('.page-content').animate({left: '0px'}, 100);
            
           // $('.page-content-bg').hide();
           //


        }else{
            $('.left-nav').animate({left: '0px'}, 100);
            $('.x-slide_left').animate({left: '221px'}, 100).removeClass("x-slide_left_zoomin");                  
           
            $('.page-content').animate({left: '221px'}, 100);
            // if($(window).width()<768){
            //     $('.page-content-bg').show();
            // }
        }

    });

    // $('.page-content-bg').click(function(event) {
    //     $('.left-nav').animate({left: '-221px'}, 100);
    //     $('.page-content').animate({left: '0px'}, 100);
    //     $(this).hide();
    // });

    $('.layui-tab-close').click(function(event) {
        $('.layui-tab-title li').eq(0).find('i').remove();
    });

//    $("tbody.x-cate tr[fid!='0']").hide();
    // 栏目多级显示效果
    // $('.x-show').click(function () {
    //     if($(this).attr('status')=='true'){
    //         $(this).html('&#xe625;'); 
    //         $(this).attr('status','false');
    //         cateId = $(this).parents('tr').attr('cate-id');
    //         $("tbody tr[fid="+cateId+"]").show();
    //    }else{
    //         cateIds = [];
    //         $(this).html('&#xe623;');
    //         $(this).attr('status','true');
    //         cateId = $(this).parents('tr').attr('cate-id');
    //         getCateId(cateId);
    //         for (var i in cateIds) {
    //             $("tbody tr[cate-id="+cateIds[i]+"]").hide().find('.x-show').html('&#xe623;').attr('status','true');
    //         }
    //    }
    // })

    //左侧菜单效果
    // $('#content').bind("click",function(event){
    $(document).on("click",".left-nav #nav li", function (event) {    
    // $('.left-nav #nav li').click(function (event) {

        if($(this).children('.sub-menu').length){
            if($(this).hasClass('open')){
                $(this).removeClass('open');
                $(this).find('.nav_right').html('&#58925;');//&#xe697;
                $(this).children('.sub-menu').stop().slideUp();
                $(this).siblings().children('.sub-menu').slideUp();
            }else{
                $(this).addClass('open');
                $(this).children('a').find('.nav_right').html('&#58924;');//&#xe6a6;
                $(this).children('.sub-menu').stop().slideDown();
                $(this).siblings().children('.sub-menu').stop().slideUp();
                $(this).siblings().find('.nav_right').html('&#58925;');//&#xe697;
                $(this).siblings().removeClass('open');
            }
        }else{

            var url = $(this).children('a').attr('_href');
            var title = $(this).find('cite').html();
            var index  = $('.left-nav #nav li').index($(this));

            
            $(".left-nav #nav li").removeClass("liselected");
            $(this).addClass("liselected");

            for (var i = 0; i <$('.x-iframe').length; i++) {
                if($('.x-iframe').eq(i).attr('tab-id')==index+1){
                    tab.tabChange(index+1);
                     event.stopPropagation();
                    return;
                }
            };
            
            tab.tabAdd(title,url,index+1);
            tab.tabChange(index+1);
        }
        
         event.stopPropagation();
         
    })
    
});


// var cateIds = [];
// function getCateId(cateId) {
    
//     $("tbody tr[fid="+cateId+"]").each(function(index, el) {
//         id = $(el).attr('cate-id');
//         cateIds.push(id);
//         getCateId(id);
//     });
// }



/*弹出层*/
/*
    参数解释：
    title   标题
    url     请求的url
    id      需要操作的数据id
    w       弹出层宽度（缺省调默认值）
    h       弹出层高度（缺省调默认值）
*/
function x_admin_show(title,url,w,h){
    if (title == null || title == '') {
        title=false;
    };
    if (url == null || url == '') {
        url="404.html";
    };
    if (w == null || w == '') {
        w=($(window).width()*0.9);
    };
    if (h == null || h == '') {
        h=($(window).height() - 50);
    };
    layer.open({
        type: 2,
        area: [w+'px', h +'px'],
        fix: false, //不固定
        maxmin: true,
        shadeClose: true,
        shade:0.4,
        title: title,
        content: url
    });

    //tab.tabAdd("test","http://www.baidu.com",999);
    //tab.tabDelete(999)
}

/*关闭弹出框口*/
function x_admin_close(){
    var index = parent.layer.getFrameIndex(window.name);
    parent.layer.close(index);

    
}


//标题,URI，序号
window.openParentIframe=function(title,url,index){
    //var index=index;
    if(!index || index==0 || index==""){
        index= $('.x-iframe').length + 1;   //如果没有传第三个参数自己加1
        tab.tabAdd(title,url,index);
        tab.tabChange(index);
    }else{
        for (var i = 0; i <$('.x-iframe').length; i++) {
            if($('.x-iframe').eq(i).attr('tab-id')==index){
                tab.tabChange(index);           
                return;
            }
        };
    }

}
window.messageAlert=function(id,num){
    if(num==0 || num ==undefined || num == null || num ==''){
        $("#message_"+id).hide();
    }else{
        $("#message_"+id).addClass("messageIcon").html(num)
    }
}
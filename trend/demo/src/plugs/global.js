/*
SMALL_BLACK_CONFIG为window全局变量在html以script接入防止被webpack打包
By Yuri Zhang   2017-7-14
 */
//console.log(window['SMALL_BLACK_CONFIG']);
import TrendFun from "./function";
export let URILIST=[],_URILIST=[];
//let DomainName='http://10.10.30.117:21001/tnp';  // SST
//let DomainName="http://public-api.tnp.pdl.tuniu-sit.org/tnp"; //SIT
//let DomainName="http://public-api.tnp.pdl.tuniu.org/tnp"; //product

let DomainName=window["SMALL_BLACK_CONFIG"]._DomainName;
export let _DEBUG=window["SMALL_BLACK_CONFIG"]._DEBUG;
export let _PRODUCT=window["SMALL_BLACK_CONFIG"]._PRODUCT;  //DEV or PRD   //开发环境或是生产环境

const trendFun=new TrendFun();
let token=trendFun.getUrlParam('token');
//trendFun.setCookie('token',token, 1);


URILIST[0]=DomainName+'/api/index/main';  //首页 post
_URILIST[0]='../static/data/_index.json';

URILIST[1]=DomainName+'/api/bill/list';  //帐单 post querytype=传参数
_URILIST[1]='/api/list/';

URILIST[2]=DomainName+'/api/bill/detail';  //帐单详情 post ?id=传参数
_URILIST[2]='/api/detail/';

URILIST[3]=DomainName+'/api/coupon/list';  //优惠卷 post
_URILIST[3]='/api/coupon/';

URILIST[4]=DomainName+'/api/card/list';  //我的银行卡列表post
_URILIST[4]='/api/bankCardList/';

URILIST[5]=DomainName+'/m/card/ajax/unbind';  //解决绑定银行卡列表 delete post
_URILIST[5]='/api/bankCardDel/';

URILIST[6]=DomainName+'/app/bankCardAdd';  //添加银行卡列表 Add post
_URILIST[6]='/api/common/';

URILIST[7]=DomainName+'/app/bankCardAdd';  //添加银行卡列表 验证银行卡和实名
_URILIST[7]='/api/common/';

URILIST[8]=DomainName+'/app/bankCardAdd';  //手机验证码
_URILIST[8]='/api/common/';

URILIST[9]=DomainName+'/m/card/ajax/supportAutoPayList';  //支付代扣的银行卡列表
_URILIST[9]='/api/common/';

URILIST[10]=DomainName+'/api/contract/status/0/0';  //查询协议列表更新状态 
_URILIST[10]='../static/data/common.json';

URILIST[11]=DomainName+'/api/contract/resign';  //重签认协议
_URILIST[11]='/api/common/';

URILIST[12]=DomainName+'/m/card/ajax/unbindBiztype';  //解除途年宝
_URILIST[12]='/api/common/';

URILIST[13]=DomainName+'/api/card/realinfo';   //取得实名信息
_URILIST[13]='/api/common/';


URILIST[14]=DomainName+'/api/card/checkCardNo';   //验证银行卡
_URILIST[14]='/api/common/';
	
URILIST[15]=DomainName+'/api/card/add';   //添加银行卡
_URILIST[15]='/api/common/';

URILIST[16]=DomainName+'/api/card/sendMessage';   //添加银行卡发送验证码
_URILIST[16]='/api/common/';


URILIST[17]=DomainName+'/api/quota/sendMessage';   //确定提额验证码
_URILIST[17]='/api/common/';


URILIST[18]=DomainName+'/api/quota/hasQualification';   //查询可提升的额度
_URILIST[18]='/api/common/';


URILIST[19]=DomainName+'/api/quota/raiseQuota';   //确认提额
_URILIST[19]='/api/common/';

URILIST[20]=DomainName+'/api/quota/submitFiles';   //确认申请提额的照片材料
_URILIST[20]='/api/common/';


URILIST[21]=DomainName+'/api/quota/apply';   //确认(查询)申请提额的照片材料
_URILIST[21]='../static/data/quota_apply.json';


URILIST[22]=DomainName+'/api/quota/submitFiles';   //确认(查询)申请提额的照片材料
_URILIST[22]='/api/common/';

URILIST[23]=DomainName+'/api/bill/createMultiRepayOrder'; //创建还款帐单 post 返回订单号
_URILIST[23]='/api/common/';

URILIST[24]=DomainName+'/api/bill/createMultiRepayOrder';     //去还款
_URILIST[24]='/api/common/';

URILIST[25]=DomainName+'/api/contract/contractAuth';     //信用信息查询授权书
_URILIST[25]='/api/common/';

URILIST[26]=DomainName+'/api/contract/contractLoan';     //消费信贷业务服务协议
_URILIST[26]='/api/common/';

URILIST[27]=DomainName+'/api/card/supportAutoPayList';     //代扣银行卡列表 get
_URILIST[27]='/api/common/';

URILIST[28]=DomainName+'/api/card/supportAuthList';     //开通实名银行卡 
_URILIST[28]='/api/common/';

if(_PRODUCT=='DEV'){
	URILIST=_URILIST;
}
// export default  URILIST;
//console.log(token);
URILIST.forEach((e,i)=>{
	
	URILIST[i]+='?token='+token;
	//console.log(i,URILIST[i]);
});
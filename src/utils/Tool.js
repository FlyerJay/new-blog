/**
 * @author flyerjay
 */
import Indicator from '../components/Indicator';
const Tool = {};
const target = 'http://www.flyerjay.date/snowblog/';//默认的远程服务器地址
const CLOSE_NETWORK = false;//在本地调试时关闭网络，只调整静态页面

var requestPool = [];//请求池

Tool.ajax = function(mySetting){
    var setting = {
        url:window.location.pathname,
        async:true,
        type:'GET',
        data:{},
        dataType:'json',
        mask:true,
        timeout:30000,
        success:function (data) {},
        error:function (error) {},
    }

    var aData = [];
    var sData = '';

    for(var attr in mySetting){
        setting[attr] = mySetting[attr];
    }
    for(var attr in setting.data){
        aData.push(attr + '=' + filter(setting.data[attr]));
    }
    sData = aData.join('&');
    setting.type = setting.type.toUpperCase();
    if(CLOSE_NETWORK){
        return false;
    }
    var xhr = new XMLHttpRequest();
    if(setting.mask){
        Indicator.open();
    }
    try{
        if ( setting.type === 'GET' || setting === 'get') {
            sData = setting.url + '?' + sData;
            xhr.open(setting.type, sData + '&_t=' + new Date().getTime(), setting.async);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8");
            xhr.timeout = setting.timeout;
            xhr.ontimeout  = () => {
                xhr.explain = 'timeout'
            }
            setTimeout(()=>{
                xhr.explain = 'timeout'
            },setting.timeout)
            xhr.onabort = () => {
                xhr.explain = 'abort'
            }
            xhr.send()
        } else {
            xhr.open(setting.type, setting.url, setting.async);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8");
            xhr.timeout = setting.timeout;
            xhr.ontimeout  = ()=>{
                this.explain = 'timeout'
            }
            setTimeout(()=>{
                xhr.explain = 'timeout'
            },setting.timeout)
            xhr.onabort = () => {
                xhr.explain = 'abort'
            }
            xhr.send(sData);
        }
        requestPool.push(xhr);
        xhr.explain = '';
        xhr.index = requestPool.length - 1;
    }catch(e){
        return httpEnd();
    }

    if (setting.async) {
        xhr.addEventListener('readystatechange', httpEnd, false);
    } else {
        httpEnd();
    }

    function httpEnd(){
        if(xhr.readyState == 4){
            var head = xhr.getAllResponseHeaders();
            var response = xhr.responseText;

            if (/application\/json/.test(head) || setting.dataType === 'json' && /^(\{|\[)([\s\S])*?(\]|\})$/.test(response)) {
                response = JSON.parse(response);
            }
            requestPool.splice( xhr.index, xhr.index + 1 );
            for(var i=0;i<requestPool.length;i++){
                requestPool[i].index = i;//更新剩余请求的标志位
            }
            if (xhr.status == 200) {
                setting.success(response, setting, xhr);
            } else {
                setTimeout(()=>{//异步错误处理，，保证请求状态在错误处理逻辑之前改变，否则无法保证正确处理错误状态
                    if(xhr.status === 0){
                        if(xhr.explain == 'abort'){
                            //取消ajax不报提示
                        }else if(xhr.explain == 'timeout'){
                            // Toast({
                            //     message:'网路请求超时',
                            //     duration:1000,
                            // });
                        }else{
                            // Toast({
                            //     message:'网络连接失败，请检查您的网络',
                            //     duration:1000,
                            // });
                        }
                    }else{
                        // Toast({
                        //     message:'网络错误，错误代码:'+ xhr.status,
                        //     duration:1000,
                        // });
                    }
                    setting.error(xhr);
                    xhr.end();
                },50);
            }
        }
        if(requestPool.length < 1){//当所有发出的请求都完成的时候才取消遮罩层
            setTimeout(()=>{Indicator.close()},1000);
        }
    }

    xhr.end = function () {
        xhr.removeEventListener('readystatechange', httpEnd, false);
    }

    function filter(str) { //特殊字符转义
        str += ''; //隐式转换
        str = str.replace(/%/g, '%25');
        str = str.replace(/\+/g, '%2B');
        str = str.replace(/ /g, '%20');
        str = str.replace(/\//g, '%2F');
        str = str.replace(/\?/g, '%3F');
        str = str.replace(/&/g, '%26');
        str = str.replace(/\=/g, '%3D');
        str = str.replace(/#/g, '%23');
        return str;
    }
    return xhr;
}

/**
 * 封装ajax post请求
 * @param {string} pathname 服务器请求地址
 * @param {object} data     发送给服务器的数据
 * @param {function} success  请求成功执行方法
 * @param {function} error    请求失败执行方法
 */
Tool.post = function (pathname, data, success, error) {
    var setting = {
        url: target + pathname, //默认ajax请求地址
        type: 'POST', //请求的方式
        data: data, //发给服务器的数据
        success: success,
        error: error
    };
    return Tool.ajax(setting);
};
/**
 * 封装ajax get请求
 * @param {string} pathname 服务器请求地址
 * @param {object} data     发送给服务器的数据
 * @param {function} success  请求成功执行方法
 * @param {function} error    请求失败执行方法
 */
Tool.get = function (pathname, data, success,setting,error) {
    var setting = {
        url: target + pathname, //默认ajax请求地址
        type: 'GET', //请求的方式
        data: data, //发给服务器的数据
        success: success || function () { }, //请求成功执行方法
        error: error || function () { }, //请求失败执行方法
        ...setting
    };
    return Tool.ajax(setting);
};
/**
 * 地名转换为位置信息
 * @param {string} address 当前位置名称
 */
Tool.getLocation = function(address,success,error){
    var setting = {
        url:'http://api.map.baidu.com/geocoder/v2/',
        type:'GET',
        data:{ak:'V5qLiGqxsGZZpRt8nqUERSpA2A18MLjk',output:'json',address:address},
        success: success || function () { }, //请求成功执行方法
        error: error || function () { } //请求失败执行方法
    }
    return Tool.ajax(setting);
}
/**
 * 清空请求池中的所有请求
 */
Tool.clearRequestPool =function(){
    for(var i = 0; i < requestPool.length; i++){
        requestPool[i].explain = 'abort';
        requestPool[i].abort();//中断请求;
    }
    requestPool.splice(0,requestPool.length);
    return requestPool;
}


/**
 * 时间格式化 支持date、time、onlytime三种格式，传入的日期可以是时间戳也可以是时间字符串;
 * @param {str} String,Date,timeTemp
 * @param type String 'date,tiem,onlytime' 
 */
Tool.formatDate = function(str,type='date'){
    var date = new Date(str);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ( "0" + m ) : m;
    var d = date.getDate();
    d = d < 10 ? ( "0" + d ) : d;
    var h = date.getHours();
    var min = date.getMinutes();
    min = min < 10 ? ( "0" + min ) : min;
    switch(type){
        case 'date':
            return y + '-' + m + '-' + d;
            break;
        case 'time':
            return y + '-' + m + '-' + d + ' ' + h + ':' + min;
        case 'onlytime':
            return h + ':' + min;
    }   
}
/**
 * 获取今天的日期 XXXX-XX-XX;
 * @param {type} String 'date,time,onlytime'
 */
Tool.getCurrentDate = function(type='date'){
    var now = new Date();
    return this.formatDate(now,type);
}


/**
 * 本地存储
 */
Tool.localItem = function(key, value){
    if(arguments.length == 1){
        return localStorage.getItem(key);
    }else{
        if(typeof value == 'object'){
            return localStorage.setItem(key,JSON.stringify(value));
        }else{
            return localStorage.setItem(key,value);
        }
    }
}

Tool.removeLocalItem = function(key){
    if(key){
        return localStorage.removeItem(key);
    }
    return localStorage.removeItem();
}
/**
 * @param {Object} obj 需要清空的对象
 * 本方法是枚举对象中的属性并逐一置为空
 */
Tool.removeObject = function(obj){
    var self = this;
    if(typeof obj === 'object'){
        var arr = Object.keys(obj);
        for(var i = 0; i < arr.length; i++){
            if(typeof obj[arr[i]] == 'object' && !(obj[arr[i]] instanceof Array)){
                self.removeObject(obj[arr[i]]);
            }else if(obj[arr[i]] instanceof Array){
                obj[arr[i]] = [];
            }else{
                obj[arr[i]] = '';
            }
        }
    }else{
        obj = '';
    }
    return ;
}

Tool.getUserInfo = function(key){
    var user = localStorage.getItem('userInfo');
    if(user){
        return JSON.parse(user)[key];
    }else{
        return false;
    }
}

Tool.routerEnter = function(to,from,next){//确定用户是否已经登陆
    if(Tool.localItem('userInfo') && Tool.getUserInfo('userId')){
        next();
    }else{
        //next();
        next({name:'login'});
    }
}

export default Tool;
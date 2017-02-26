import config from './config';

const Tool = {}

Tool.fetch = function(params,callback){
    const req = new Request(config.server + params.url,params);
    fetch(req).then((res) =>{
        return res.json();
    }).then((json) => {
        callback && callback(json);
    })
}

export default Tool;

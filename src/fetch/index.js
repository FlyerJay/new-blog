import config from './config';
import Indicator from '../components/Indicator';

const Tool = {}

Tool.fetch = function(params,callback){
    const req = new Request(config.server + params.url,params);
    Indicator.open();
    fetch(req).then((res) =>{
        return res.json();
    }).then((json) => {
        callback && callback(json);
        Indicator.close();
    })
}

export default Tool;

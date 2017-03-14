import Vue from 'vue';

var Indicator = Vue.extend(require('./Indicator.vue'));
var instance;

export default {
    open(options = {}){
        if(!instance){
            instance = new Indicator({
                el:document.createElement('div'),
            });
        }
        if(instance.visible) return;
        if(document.getElementsByClassName('page-container').length>0){
            document.getElementsByClassName('page-container')[0].appendChild(instance.$el);
        }else{
            return;
        }
        
        Vue.nextTick(()=>{
            instance.visible = true;
        })
    },

    close(){
        if(instance){
            instance.visible = false;
        }
    }
}
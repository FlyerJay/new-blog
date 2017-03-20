<template>
    <div class="page catalog-page" flex="dir:top">
        <nav-bar
            title='博客'
            :onExpand="onExpand.bind(this)"
        />
        <div class="page-content" @click="closeShow">
            <div class="page-header"></div>
            <div class="catalog-list">
                <div class="catalog-item" v-for="(item,index) in catalogList" flex="dir:left cross:center main:center">
                    {{item.catalogName}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import NavBar from '../components/NavBar';
    import Tool from '../utils/Tool';
    export default{
        data () {
            return {
                catalogList:[],
            }
        },
        components:{
            NavBar,
        },
        methods:{
            closeShow:function(){
                this.$parent.show = false;
            },
            onExpand:function(){
                this.$parent.show = !this.$parent.show
            },
        },
        created:function(){
            Tool.get('catalog',{},(data)=>{
                this.catalogList = data.data.list;
            })
        }
    }
</script>
<style lang="less" scoped>
    .page{
        width:100%;
        height:100%;
        overflow:auto;
        .page-content{
            height:100%;
            overflow:auto;
            .page-header{
                height:200px;
                background-image:url('../assets/catalog.jpg');
                background-repeat:no-repeat;
                background-position:center;
                background-size:cover;
            }
            .catalog-list{
                padding: 0 20px;
                min-width: 320px;
                max-width:720px;
                margin:0 auto;
                margin-bottom:20px;
                overflow:hidden;
                .catalog-item{
                    width:300px;
                    height:200px;
                    font-size:32px;
                    color:#fff;
                    background-color:#00cc66;
                    margin-top:20px;
                    float:left;
                    margin-left:20px;
                    border-radius:10px;
                    cursor:pointer;
                    &:nth-child(2n){
                        background-color:#3399ff;
                    }
                    &:nth-child(3n){
                        background-color:#ff9900;
                    }
                    &:nth-child(4n){
                        background-color:#464c5b;
                    }
                    @media screen and (max-width:818px){
                        float:none;
                        margin:5% auto;
                        width:100%;
                        height:200px;
                    }
                }
            }
        }
    }
</style>
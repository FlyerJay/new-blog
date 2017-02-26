<template>
    <div class="item">
        <div class="title">{{item.title}}</div>
        <div class="time">{{item.time}}</div>
        <p>
            {{item.summary}}
        </p>
        <div class="bottom-aside">
            <div class="catalog">{{item.Catalog.catalogName}}</div>
            <div class="hit">{{item.hit}}</div>
            <div class="comment">{{item.comment}}</div>
        </div>
    </div>
</template>
<script>
    export default{
        data () {
            return {

            }
        },
        props:{
            item:{
                type:Object,
                default:{}
            }
        }
    }
</script>
<style lang="less" scoped>
    
</style>
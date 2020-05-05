<template>
    <div>
        儿子2 {{$attrs}}  {{$listeners}}
        <!-- $attrs:表示上级传下来的属性 属性集合 -->
        <!-- $listeners:表示上级传下来的事件 事件集合-->

        <!-- <Grandson2 v-bind="$attrs" v-on="$listeners"></Grandson2> -->
        <Grandson2 v-bind="{name: '汤梦成'}" v-on="$listeners"></Grandson2>
    </div>
</template>

<script>
import Grandson2 from './Grandson2';
export default {
    // inheritAttrs: 表示父亲继承过来的属性不显示在当前组件上
    inheritAttrs: false,
    components: {
        Grandson2
    },
    mounted() {
        this.$bus.$on('有人找到我了', () => {
            console.log('呵呵呵')
        })
    },
}
</script>
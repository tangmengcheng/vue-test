<template>
    <div>
        父组件钱数： {{money}}
        <!-- <Son1 :val="money" @input="change"></Son1> -->
        <!-- <Son1 :val="money" @update:val="change"></Son1> -->
        <!-- <Son1 :val="money" @update:val="(val) => this.money = val"></Son1> -->
        <!-- <Son1 :val.sync="money"></Son1> -->
        <!-- <Son1 v-model="money"></Son1> -->
        <!-- ref 可以用到dom元素上， 获取的是dom节点 -->
        <Son1 :val="money" @input="money => this.money = money" ref="son1"></Son1>
        <!-- 同步数据有两种方式：一个是.sync一个是v-model -->
        <!-- v-model和.sync的区别：v-model绑定的值只能是value，.sync都可以 -->



        <Son2 name="汤梦成" age="25" @son="son"></Son2>
    </div>
    <!-- 多层级如何传递数据：$parent -->
</template>

<script>
// eventBus 定义到了全局上（防止充满）
import Son1 from './Son1';
import Son2 from './Son2';
export default {
    mounted() {
        this.$refs.son1.say() // 父调用子组件
    },
    provide() {
        return {
            parent: this
        }
    },
    data() {
        return {
            money: 100,
            isSmoke: '是否抽烟'
        }
    },
    methods: {
        // change(val) {
        //     this.money = val;
        // },
        son() {
            console.log('有人点我')
        }
    },
    components: {
        Son1,
        Son2
    }
}
</script>
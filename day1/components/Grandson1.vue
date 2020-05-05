<template>
    <div>
        孙子：{{val}} {{parent.isSmoke}}
        <button @click="changeParent">修改父亲</button>
    </div>
</template>
<script>
export default {
    inject: [
        'parent'
    ],
    props: {
        val: {
            type: Number,
            default: 0
        }
    },
    mounted() {
        // 当页面都渲染完成好了后再执行该方法
        this.$nextTick(() => {
            this.$bus.$emit('有人找到我了')
        })
        // 此时要注意组件的挂载顺序：孙子先挂载了再挂载父组件
    },
    methods: {
        changeParent() {
            // $dispatch 只会通知自己的父亲；eventBus会通知所有的父亲和儿子
            // this.$parent.$emit('input', 4000)
            this.$dispatch('input', 4000)
        }
    },
}
</script>
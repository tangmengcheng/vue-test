<template>
    <div>
        儿子1： {{val}}
        <button @click="change">点击修改</button>
        <GranSon1 :val="val" @say="say"></GranSon1>
    </div>
</template>

<script>
import GranSon1 from './Grandson1';
export default {
    props: {
        val: {
            type: Number,
            default: 0
        }
    },
    components: {
        GranSon1
    },
    methods: {
        say() {
            console.log('我很帅')
        },
        change() {
            // this.$emit('input', 200)
            this.$emit('update:val', 200)
            this.$emit('input', 300)
        }
    },
}
</script>
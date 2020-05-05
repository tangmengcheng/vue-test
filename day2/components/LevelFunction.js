export default {
    props: {
        t: {
            type: Number,
            default: 1
        }
    },
    render() { // createElement
        let tag = 'h' + this.t;
        return <tag>{this.$slots.default}</tag>
        // <h1 on-click={() => {alert(1)}} style={{color: 'red'}}>你好1</h1>
        // h('h1', {
        //     on: { // 添加事件
        //         click() {
        //             alert(1)
        //         }
        //     },
        //     attrs: { // 添加属性
        //         a: 1
        //     }
        // }, '你好')
    }
}
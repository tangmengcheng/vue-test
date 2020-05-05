<template>
    <div>
        App
        <Level :t="1">标题</Level>
        <Level :t="2">标题</Level>
        <Level :t="3">标题</Level>
        <Level :t="4">标题</Level>
        <Level :t="5">标题</Level>

        <!-- 提供render      element-ui  => tree -->
        <List :data="['香蕉','苹果']" :render="render"></List>
        
        <List1 :data="['香蕉','苹果']">
            <!-- <template v-slot:default="{item,a}">
                <li>{{item}}{{a}}</li>
            </template> -->
            <template v-slot:a="{item,a}">
                <li>{{item}}{{a}}</li>
            </template>
        </List1>
    </div>
</template>

<script>
// 函数式组件  没有模板  必须要有一个render函数
// import Level from './components/Level';
import Level from './components/LevelFunction.js';
import List from './components/List';
import List1 from './components/List1';
export default {
    components: {
        Level,
        List,
        List1
    },
    methods: {
        render(h, data) {
            return <span>{data}</span>
        }
    },
}
</script>
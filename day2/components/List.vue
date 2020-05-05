<template>
    <div>
        <!-- 注意：key不能加到template上 -->
        <template v-for="(item, index) in data">
            <li :key="index" v-if="!render">{{item}}</li>
            <ListItem v-else :key="`a${index}`" :render="render" :item="item"></ListItem>
        </template>
    </div>
</template>

<script>
import ListItem from './ListItem'
export default {
    props: {
        render: {
            type: Function
        },
        data: {
            type: Array,
            default: () => []
        }
    },
    components: {
        ListItem
    }
}
</script>
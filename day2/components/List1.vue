<template>
    <div>
        <!-- 注意：key不能加到template上 -->
        <template v-for="(item, index) in data">
            <div :key="index">
                <slot name="a" :item="item" :a="1"></slot>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            default: () => []
        }
    }
}
</script>
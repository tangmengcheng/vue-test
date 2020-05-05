<template>
    <h1 v-if="t === 1">
        <slot></slot>
    </h1>
</template>

<script>
export default {
    props: {
        t: {
            type: Number
        }
    }
}
</script>
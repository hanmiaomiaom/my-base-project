<template>
    <!-- 页面包装器 -->
    <transition appear :leave-active-class="LeaveActive" :enter-active-class="EnterActive">
        <section class="page-wrapper" :style="{'z-index':zIndexC}">
            <slot></slot>
        </section>
    </transition>
</template>

<script>
export default {
    name: 'page-wrapper',
    props: {
        LeavAction: {
            type: String,
            default: 'animated fadeOutRight' // 右 → 左
        },
        EnterActive: {
            type: String,
            default: 'animated fadeOutRight' // 右 → 左
        },
        zIndexC: {
             // 多个可能的类型
            type: [String, Number],
            default: 2
        }
    },
    data() {
        return {}
    },
    filters: {},
    computed: {},
    mounted() { },
    methods: {}
}
</script>

<style lang="scss" scoped>
    .page-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>

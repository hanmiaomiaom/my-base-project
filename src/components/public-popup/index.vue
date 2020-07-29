<template>
    <!-- 遮罩层 -->
    <div :style="{background:'rgba(0,0,0,'+ opacity +')', 'z-index': zIndex}"
         :class="{popup:isPopup,left:isLeft,top:isTop,right:isRight,bottom:isBottom}">
        <span class="close"
              @click.stop="openPopup"></span>
        <slot></slot>
    </div>

</template>

<script>
export default {
    name: '',
    props: {
        opacity: {
            type: Number,
            default: () => {  // 组件透明度
                return 0.3;
            }
        },
        zIndex: {// 组件层级
            type: [Number, String],
            default: () => {
                return 100;
            }
        },
        isLeft: {
            type: Boolean,
            default: false
        },
        isTop: {
            type: Boolean,
            default: false
        },
        isRight: {
            type: Boolean,
            default: false
        },
        isBottom: {
            type: Boolean,
            default: false
        },
        isPopup: {
            type: Boolean,
            default: false
        },

    },
    data() {
        return {

        };
    },
    filters: {},
    computed: {},
    mounted() { },
    methods: {
        openPopup() {
            this.$emit('openPopup');
        }
    }
};
</script>

<style type='text/scss' lang='scss' scoped>
.close {
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    // width: 20px;
    // height: 20px;
    background:transparent;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.popup {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
.left {
    position: fixed;
    width: 40%;
    height: 100%;
    top: 0;
    left: 0;
}
.top {
    position: fixed;
    width: 100%;
    height: 25%;
    top: 0;
    left: 0;
}
.right {
    position: fixed;
    width: 40%;
    height: 100%;
    top: 0;
    right: 0;
}
.bottom {
    position: fixed;
    width: 100%;
    height: 25%;
    bottom: 0;
    right: 0;
}
</style>

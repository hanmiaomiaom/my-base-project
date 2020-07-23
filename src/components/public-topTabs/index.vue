<template>
    <div class="toptab">
        <div class="tab-nav">
            <div class="left"
                 @click="toTab(0)"
                 :class="{'selected':tab===0}">
                <span>{{leftText}}</span>
                <div class="line"></div>
            </div>

            <div class="right"
                 @click="toTab(1)"
                 :class="{'selected':tab===1}">
                <span>{{rightText}}</span>
                <div class="line"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    props: {
        defaultIndex: {
            type: Number,
            default: 0
        },
        leftText: {
            type: String,
            default: ''
        },
        rightText: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            tab: '',
        };
    },
    filters: {},
    computed: {},
    mounted() {
        this.tab = this.defaultIndex;
    },
    methods: {
        toTab(idx) {
            this.tab = idx;
            this.$emit('clickTabs', this.tab);

        }
    }
};
</script>

<style type='text/scss' lang='scss' scoped>
.toptab {
    .tab-nav {
        height: 44px;
        background: #fff;
        display: flex;
        border-bottom: 1px solid #ccc;
        .left,
        .right {
            position: relative;
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .selected {
        span {
            color: #005de2;
        }
        .line {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            border-bottom: 1px solid #005de2;
            width: 100%;
        }
    }
}
</style>

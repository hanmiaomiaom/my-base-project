<template lang="html">
    <div  class="sub-tab-ul">
        <div  class="sub-tab-wrap">
            <div class="sub-tab-li" :class="{selectCla:idx===selectIdx}" @click.stop="onClick(el,idx)" v-for="(el,idx) in cDataTitle" :key="idx">
                    <i v-if="idx===selectIdx" :class="{selectClaI:idx===selectIdx}"></i>
                {{el.title}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'multi-tabs',
    props: {
        cDataTitle: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    data() {
        return {
            selectIdx: 0,
        };
    },
    mounted() { },
    methods: {
        onClick(el, val) {
            this.selectIdx = val;
            this.$emit('onClick', el, val);
        },
        onLoad() {

        },
    },
};
</script>

<style lang="scss" type="text/scss" scoped>
.selectCla {
    color: #1e79ff;
}
.selectClaI {
    border-bottom: 2px solid #1e79ff;
}
.sub-tab-ul::-webkit-scrollbar {
    display: none;
}
.sub-tab-ul {
    position: relative;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
    overflow-x: scroll;
    > .sub-tab-wrap {
        position: absolute;
        white-space: nowrap;
        padding: 0 9px;
        > div:last-child {
            margin-right: 0px;
        }
        > .sub-tab-li {
            position: relative;
            display: inline-block;
            margin-right: 10px;
            > i {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 1px;
            }
        }
    }
}
</style>

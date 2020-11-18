<template>
    <!-- 固定第一列第一行table表格 -->
    <div class="pages">
        <div class="tables">
            <div class="tits">
                <div class="titsLeft">
                    <p>序号</p>
                </div>
                <div class="titsRight" ref="titsRight">
                    <div>
                        <p :style="`min-width:${item.width}px;`" v-for="(item, i) in headData" :key="i">
                            {{item.label}}</p>
                    </div>
                </div>
            </div>

            <div class="tbody">
                <div class="tbodyLeft" ref="tbodyLeft">
                    <div v-for="(itemTable, i) in bodyData" :key="i">
                        <p>{{ i + 1 }}</p>
                    </div>
                </div>
                <div class="tbodyRight" @scroll="scrollEvent($event)" ref="tbodyRight">
                    <div v-for="(itemTable, i) in bodyData" :key="i" class="row">
                        <p :style="`min-width:${item.width}px;`" v-for="(item,index) in headData" :key="index">
                            {{itemTable[item.data]}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'tables',
    data() {
        return {};
    },
    props: {
        headData: { // 固定表头
            type: Array,
            default: () => {
                return [];
            }
        },
        bodyData: { // tbody中的数据--即随滚定而变动的数据
            type: Array,
            default: () => {
                return [];
            }
        }
    },
    methods: {
        scrollEvent(e) {
            let tbodyRightScrollLeft = e.target.scrollLeft;
            let tbodyRightScrollTop = e.target.scrollTop;

            this.$refs.titsRight.scrollLeft = tbodyRightScrollLeft;
            this.$refs.tbodyLeft.scrollTop = tbodyRightScrollTop;
        }
    }
};
</script>
<style scoped lang="scss">
.pages {
    width: 100%;
    height: 100%;
}
p {
    padding: 0 10px;
    width: 60px;
    overflow: hidden;
    white-space: nowrap;
    overflow-x: scroll;
    // text-overflow: ellipsis;
    height: 40px;
    text-align: center;
    line-height: 40px;
    flex-shrink: 0;
    border-right: 1px solid #999;
    border-bottom: 1px solid #999;
}
.tables {
    width: 100%; //自定义表格整体宽度
    height: 100%;
    font-size: 14px;
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;
    .tbody {
        //自定义表格内容高度和宽度
        width: calc(100% - 60px); //减去第一列的宽度
        height: calc(100% - 40px); //减去第一行的高度
    }
    > div {
        display: flex;
    }
    div {
        flex-shrink: 0;
    }
    .tits {
        height: 40px;
        padding-left: 60px;
    }
    .titsLeft,
    .tbodyLeft {
        width: 60px;
        height: 100%;
    }
    .titsRight,
    .tbodyRight {
        width: 100%; //自定义表头表体内容宽度
        height: 100%;
    }
    .titsLeft {
        position: fixed;
        top: 0;
        left: 0;
        p {
            width: 60px;
            // background-color: orange;
        }
    }
    .titsRight {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        // background-color: pink;
        div {
            width: 100%;
            height: 400px;
            display: flex;
        }
    }
    .tbodyLeft {
        overflow: hidden;
        white-space: nowrap;
        // background-color: pink;
        div {
            width: 50px;
        }
    }
    .tbodyRight {
        overflow: hidden;
        overflow: auto;
        white-space: nowrap;
        background-color: none;
        display: flex;
        flex-direction: column;
        .row {
            display: flex;
        }
        > :nth-child(2n + 1) {
            p {
                // background-color:#ccc;
            }
        }
    }
}
</style>


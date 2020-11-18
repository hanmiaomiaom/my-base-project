<template>
    <div class="table-scroll-mod">
        <div class="table-scroll-box">
            <div class="fixed-head" ref="tableFixedHead" @touchmove='moveHead'>
                <table>
                    <thead>
                        <tr>
                            <th class="fixed-table-head">序号</th>
                            <th @click="item.order&&orderClick(item)"
                                :class="['fixed-table-head',{'order-th':item.order}]" v-for="item in headData"
                                :key="item.label">
                                {{item.label}}
                                <span v-if="item.order" :class="['order',{active:item.type!='desc'}]"></span>
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div class="fixed-left" ref="tableFixedLeft" @touchstart='startMove' @touchmove='moveLeft'>
                <table>
                    <thead>
                        <tr>
                            <th>序号</th>
                            <th @click="it.order&&orderClick(it)" :class="{'order-th':it.order}" v-for="it in headData"
                                :key="it.COLUMN_NAME" v-if="it.IFCOLUMN==1">
                                {{it.label}}<span v-if="it.order" :class="['order',{active:it.type!='desc'}]"></span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(it,index) in bodyData" :key="index">
                            <td>{{index+1}}</td>
                            <td :style="`max-width:${item.width}px;`" v-for="item in headData" :key="item.label"
                                v-if='item.IFCOLUMN==1'>{{it[item.data]}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="fixedTopLeft">
                <table>
                    <thead>
                        <tr>
                            <th class="fixed-top-left">序号</th>
                            <th @click="it.order&&orderClick(it)" :class="['fixed-top-left',{'order-th':it.order}]"
                                v-for="it in headData" :key="it.COLUMN_NAME" v-if='it.IFCOLUMN==1'>
                                {{it.label}}<span v-if="it.order" :class="['order',{active:it.type!='desc'}]"></span>
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div class="table" ref="tableScrollBox" @touchstart='startMove' @touchmove='moveBody'>
                <table class="scroll-tbody-box">
                    <thead>
                        <tr>
                            <th class="table-head">序号</th>
                            <th class="table-head" v-for="it in headData" :key="it.COLUMN_NAME" v-if='it.IFCOLUMN==1'>
                                {{it.label}}
                            </th>
                            <th class="table-head" v-for="it in headData" :key="it.COLUMN_NAME" v-if='it.IFCOLUMN==0'>
                                {{it.label}}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="scroll-tbody" v-for="(it,index) in bodyData" :key="index">
                            <td>{{index+1}}</td>
                            <td :style="`max-width:${item.width}px;`" v-for="item in headData" :key="item.label"
                                v-if='item.IFCOLUMN==1'>{{it[item.data]}}
                            </td>
                            <!-- // eslint-disable-next-line vue/no-use-v-if-with-v-for -->
                            <td :style="`max-width:${item.width}px;`" v-for="(item,index) in headData" :key="index"
                                v-if='item.IFCOLUMN==0'>{{it[item.data]}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        headData: {
            type: Array
        },
        bodyData: {
            type: Array
        },
    },
    data() {
        return {
        };
    },
    mounted() {
        this.getHeadWidth();
    },
    updated() {
        this.getHeadWidth();
    },
    activated() {
    },
    methods: {
        orderClick(item) {
            this.$emit('orderClick', item.data, item.type);
        },
        startMove() {
            const {
                scrollTop
            } = this.$refs.tableScrollBox;
            this.initialHeight = scrollTop;
        },
        moveBody() {
            this.$refs.tableFixedHead.removeEventListener('scroll', this.headScroll, false);
            this.$refs.tableFixedLeft.removeEventListener('scroll', this.leftScroll, false);
            this.box = this.$refs.tableScrollBox;
            this.box.addEventListener('scroll', this.bodyScroll, false);
        },
        bodyScroll() {
            const {
                scrollLeft
            } = this.box;
            const {
                scrollTop
            } = this.box;
            const fixedHead = this.$refs.tableFixedHead;
            fixedHead.scrollLeft = scrollLeft;
            const fixedLeft = this.$refs.tableFixedLeft;
            fixedLeft.scrollTop = scrollTop;
        },
        moveLeft() {
            this.$refs.tableScrollBox.removeEventListener('scroll', this.bodyScroll, false);
            this.$refs.tableFixedHead.removeEventListener('scroll', this.headScroll, false);
            this.left = this.$refs.tableFixedLeft;
            this.left.addEventListener('scroll', this.leftScroll, false);
        },
        leftScroll() {
            const {
                scrollTop
            } = this.left;
            this.$refs.tableScrollBox.scrollTop = scrollTop;
        },
        moveHead() {
            this.$refs.tableScrollBox.removeEventListener('scroll', this.bodyScroll, false);
            this.$refs.tableFixedLeft.removeEventListener('scroll', this.leftScroll, false);
            this.head = this.$refs.tableFixedHead;
            this.head.addEventListener('scroll', this.headScroll, false);
        },
        headScroll() {
            const {
                scrollLeft
            } = this.head;
            this.$refs.tableScrollBox.scrollLeft = scrollLeft;
        },
        getHeadWidth() {
            const tableHead = Array.from(document.getElementsByClassName('table-head'));
            const fixedTableHead = Array.from(document.getElementsByClassName('fixed-table-head'));
            const fixedTopLeft = Array.from(document.getElementsByClassName('fixed-top-left'));
            for (let i = 0; i < tableHead.length; i++) {
                fixedTableHead[i].style.width = `${tableHead[i].offsetWidth}px`;
            }
            for (let i = 0; i < fixedTopLeft.length; i++) {
                fixedTopLeft[i].style.width = `${tableHead[i].offsetWidth}px`;
            }
        }
    }
};
</script>

<style lang="scss" scope='scoped'>
.loading-text {
    height: 99px;
}
[data-min="true"] {
    td {
        max-width: 170px;
        text-overflow: ellipsis;
    }
}

th,
td,
.fixedTopLeft > span {
    font-size: 14px;
    padding: 4px 8px;
    text-align: center;
    overflow: auto;
    line-height: 34px;
    border-bottom: 0.5px solid #cac6c6;
    border-right: 0.5px solid #cac6c6;
    box-sizing: border-box;
}

td {
    height: 40px;
}

th {
    color: #000;
    background: #d7e7fc;
}

.table-scroll-mod {
    position: relative;
    height: 100%;
    overflow: hidden;
}

.table-scroll-box {
    white-space: nowrap;
    overflow: scroll;
    height: 100%;
    z-index: 52;
}

.table-scroll-box::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

.table-scroll-box > table {
    overflow-x: scroll;
}

.table-scroll-box > table tr {
    display: -webkit-flex;
}

.table-scroll-box .fixed-head {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 50;
    background: #d7e7fc;
    width: 100%;
    // overflow-y: scroll;
    overflow-x: scroll;
}

.fixed-head > thead {
}

.table-scroll-box .fixed-head::-webkit-scrollbar {
    width: 0px;
    height: 0px;
}

.table-scroll-box .fixed-head > table {
    // overflow-x: auto;
}

.table-scroll-box .fixed-head > table tr {
    display: -webkit-flex;
}

.fixed-left {
    width: auto;
    height: 100%;
    overflow-y: scroll;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    z-index: 49;
}

.fixedTopLeft {
    background-color: #d7e7fc;
    // height: 50px;
    width: auto;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 50;
    font-weight: bold;
    line-height: 22px;
}

.table {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
}
tr:nth-child(2n + 1) {
    background: rgb(244, 247, 250);
}
.order-th {
    text-align: left !important;
    padding: 4px 12px 4px 4px !important;
    position: relative;
}
.order {
    position: absolute;
    width: 10px;
    height: 22px;
    right: 2px;
    top: 50%;
    transform: translateY(-50%);
    &.active::after {
        content: "";
        position: absolute;
        border-top: 5px solid #aaa;
        border-bottom: 5px solid transparent;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        right: 0;
        top: 50%;
        transform: translateY(calc(-50% + 6px));
    }
    &::after {
        content: "";
        position: absolute;
        border-top: 5px solid #196fe1;
        border-bottom: 5px solid transparent;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        right: 0;
        top: 50%;
        transform: translateY(calc(-50% + 6px));
    }
    &.active::before {
        content: "";
        position: absolute;
        border-top: 5px solid transparent;
        border-bottom: 5px solid #196fe1;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        right: 0;
        top: 50%;
        transform: translateY(calc(-50% - 6px));
    }
    &::before {
        content: "";
        position: absolute;
        border-top: 5px solid transparent;
        border-bottom: 5px solid #aaa;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        right: 0;
        top: 50%;
        transform: translateY(calc(-50% - 6px));
    }
}
</style>

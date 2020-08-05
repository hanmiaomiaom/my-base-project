<template>
    <div class="pages-tables"
         id="pages-tables">
        <!-- <div class="waterMask"
             id="watermark"></div> -->
        <div class="rolling-table meal-table"
             ref="tableBox"
             :style="{height: maxHeight + 'px'}">
            <table class="table"
                   id="table"
                   cellpadding="0"
                   cellspacing="0"
                   ref="rollingTable">
                <tr v-for="(x,i) in xList"
                    :key="i">
                    <th class="rows "
                        :class="{'cross': index === 0 && i === 0}"
                        v-for="(l,index) in x"
                        :key="index"
                        :colspan="l.colspan"
                        :rowspan="l.rowspan">{{l.name}}</th>
                </tr>
                <tr v-for="(l,i) in yList"
                    :key="i + 'a'">
                    <template v-for="(x, xKey) in xField">
                        <template v-for="(ll,yKey) in l">
                            <td :key="xKey+yKey"
                                v-if="x === yKey"
                                :class="{'cols': yKey == xField[0]}">
                                {{ yList[i][yKey]}}
                            </td>
                        </template>
                    </template>
                </tr>
                <tr></tr>
            </table>
        </div>
    </div>
</template>
<script>
//demo中没有用到refreshScroller，当需要刷新回到页面顶部时调用
import { createIScroller, refreshScroller, destroyScroller } from "../../utils/iscrollTable";
export default {
    data() {
        return {
            maxHeight: '100%',
            scroll: {
                scroller: null
            },
            xList: [
                [
                    {
                        field_name: "statis_date",
                        name: "第一行合并3行1列",
                        colspan: 1, //指定单元格 横向 跨越的 列数
                        rowspan: 3, //指定单元格 纵向 跨越的 行数
                    },
                    {
                        field_name: "custom_field",
                        name: "第一行合并2列",
                        colspan: 2,
                        rowspan: 1,
                    },
                    {
                        field_name: "custom_field",
                        name: "第一行合并2列",
                        colspan: 2,
                        rowspan: 1,
                    },
                    {
                        field_name: "custom_field",
                        name: "第一行合并3列",
                        colspan: 3,
                        rowspan: 1,
                    },
                ],
                [
                    {
                        field_name: "custom_field",
                        name: "第二行日期",
                        colspan: 1, //指定单元格 横向 跨越的 列数
                        rowspan: 1, //指定单元格 纵向 跨越的 行数
                    },
                    {
                        field_name: "custom_field",
                        name: "第二行日期合并2列",
                        colspan: 2,
                        rowspan: 1,
                    },
                    {
                        field_name: "custom_field",
                        name: "第二行日期合并2列",
                        colspan: 2,
                        rowspan: 1,
                    },
                    {
                        field_name: "custom_field",
                        name: "第二行日期合并3列",
                        colspan: 3,
                        rowspan: 1,
                    },
                ],
                [
                    {
                        field_name: "area_name",
                        name: "第三行当月新增",
                        colspan: 1,  //指定单元格 横向 跨越的 列数
                        rowspan: 1, //指定单元格 纵向 跨越的 行数
                    },
                    {
                        field_name: "area_name1",
                        name: "第三行当月新增1",
                        colspan: 1,
                        rowspan: 1,
                    },
                    {
                        field_name: "area_name2",
                        name: "第三行当月新增2",
                        colspan: 1,
                        rowspan: 1,
                    },
                    {
                        field_name: "area_name3",
                        name: "第三行当月新增3",
                        colspan: 1,
                        rowspan: 1,
                    },
                    {
                        field_name: "area_name4",
                        name: "第三行当月新增4",
                        colspan: 1,
                        rowspan: 1,
                    },
                    {
                        field_name: "area_name5",
                        name: "第三行当月新增5",
                        colspan: 1,
                        rowspan: 1,
                    },
                    {
                        field_name: "area_name6",
                        name: "第三行当月新增6",
                        colspan: 1,
                        rowspan: 1,
                    },
                ],
            ],
            xField: ['statis_date', 'area_name', "area_name1", "area_name2", "area_name3", "area_name4", "area_name5", "area_name6",],
            yList: [
                {
                    area_name: "新增数据开始",
                    area_name1: "新增数据开始1",
                    area_name2: "新增数据开始2",
                    area_name3: "新增数据开始3",
                    area_name4: "新增数据开始4",
                    area_name5: "新增数据开始5",
                    area_name6: "新增数据开始6",
                    statis_date: 100007,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据",
                    area_name1: "新增数据1",
                    area_name2: "新增数据2",
                    area_name3: "新增数据3",
                    area_name4: "新增数据4",
                    area_name5: "新增数据5",
                    area_name6: "新增数据6",
                    statis_date: 201807,
                },
                {
                    area_name: "新增数据最后",
                    area_name1: "新增数据最后1",
                    area_name2: "新增数据最后2",
                    area_name3: "新增数据最后3",
                    area_name4: "新增数据最后4",
                    area_name5: "新增数据最后5",
                    area_name6: "新增数据最后6",
                    statis_date: 222222,
                }
            ]
        };
    },
    mounted() {
        this.maxHeight = window.screen.height - 55;
        this.scroll.scroller = createIScroller(".meal-table");
    },
    beforeDestroy() {
        destroyScroller();
    },
};

</script>
<style lang="scss" scoped>
.pages-tables {
    -webkit-overflow-scrolling: touch; // ios滑动顺畅
    position: relative;
}
.rolling-table {
    height: 100%;
    width: 100%;
    font-size: 28px;
    color: #86939a;
    background-color: #fff;
    -webkit-overflow-scrolling: touch;
    position: relative;
    top: 0;
    overflow: hidden;
}
.rows {
    position: relative;
    z-index: 3;
}
.cross {
    position: relative;
    // border: 1px solid #ccc;
    z-index: 5;

}
table td {
    font-size: 14px;
    background: #fff;
}
::-webkit-scrollbar {
    display: none;
}
.table {
    color: #86939e;
    font-size: 16px;
    min-height: 100%;
    text-align: center;
    td {
        white-space: nowrap;
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
    }
    th {
        color: #43484d;
        white-space: nowrap;
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        background-color: #f3f4f6;
        font-weight: normal;

        box-sizing: border-box;
    }
}
tr {
    position: relative;
    background-color: #fff;
    &:nth-of-type(odd) {
        td {
            // background-color: pink;
        }
    }
}
</style>

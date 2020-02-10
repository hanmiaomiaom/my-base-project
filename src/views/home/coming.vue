<template>
    <div class="being">
        <!-- time -->
        <div class="timeDate">2020-01-18&nbsp;<span>明天</span></div>
        <!-- 影片 -->
        <div class="wrapper">
            <div class="wrapper-list">
                <div class="wrapper-list-left">
                    <img src="../../assets/TB1FczKhkvoK1RjSZFDXXXY3pXa_.jpg_160x160Q30s100.jpg_.webp" alt="">
                </div>
                <div class="wrapper-list-right">
                    <div class="title">
                        <span>灭绝</span>
                        <!-- <span>3D</span>&nbsp; -->
                        <!-- <span>IMAX</span> -->
                    </div>
                    <div class="item">
                        <span>1.6万</span>&nbsp;人想看
                    </div>
                    <div class="item"> 导演：本·扬 </div>
                    <div class="item"> 主演：迈克尔·佩纳 丽兹·卡潘 </div>
                    <div class="ticket">预售</div>
                </div>
            </div>
        </div>

        <div class="timeDate">2020-01-20&nbsp;<span>周一</span></div>
        <div class="wrapper">
            <div class="wrapper-list">
                <div class="wrapper-list-left">
                    <img src="../../assets/TB1rHXvKXXXXXbyXpXXXXXXXXXX_.jpg_160x160Q30s100.jpg_.webp" alt="">
                </div>
                <div class="wrapper-list-right">
                    <div class="title">
                        <span>红月亮森林</span>
                        <!-- <span>3D</span>&nbsp; -->
                        <!-- <span>IMAX</span> -->
                    </div>
                    <div class="item">
                        <span>577</span>&nbsp;人想看
                    </div>
                    <div class="item"> 导演：熊浪 王茂久 曾兵 </div>
                    <div class="item"> 主演：赵熙元 孙悠然 袁伟龙 </div>
                    <!-- <div class="ticket">预售</div> -->
                </div>
            </div>
        </div>

        <div class="timeDate">2020-01-25 &nbsp;<span>周六</span></div>
        <div class="wrapper">
            <div class="wrapper-list">
                <div class="wrapper-list-left">
                    <img src="../../assets/TB1.6ZCq1L2gK0jSZPhXXahvXXa_.jpg_160x160Q30s100.jpg_.webp" alt="">
                </div>
                <div class="wrapper-list-right">
                    <div class="title">
                        <span>唐人街探案3</span>
                        <span>2D</span>&nbsp;
                        <span>IMAX</span>
                    </div>
                    <div class="item">
                        <span>358.8万</span>&nbsp;人想看
                    </div>
                    <div class="item"> 导演：陈思诚 </div>
                    <div class="item"> 主演：王宝强 刘昊然 妻夫木聪 </div>
                    <!-- <div class="ticket">预售</div> -->
                </div>
            </div>
            <div class="wrapper-list">
                <div class="wrapper-list-left">
                    <img src="../../assets/TB1ALmyFxGYBuNjy0FnXXX5lpXa_.jpg_160x160Q30s100.jpg_.webp" alt="">
                </div>
                <div class="wrapper-list-right">
                    <div class="title">
                        <span>中国女排</span>
                        <!-- <span>2D</span>&nbsp;
                        <span>IMAX</span> -->
                    </div>
                    <div class="item">
                        <span>152.2万</span>&nbsp;人想看
                    </div>
                    <div class="item"> 导演：陈可辛 </div>
                    <div class="item"> 主演：巩俐 黄渤 吴刚 彭昱畅 </div>
                    <!-- <div class="ticket">预售</div> -->
                </div>
            </div>
            <div class="wrapper-list">
                <div class="wrapper-list-left">
                    <img src="../../assets/TB1sZo4bVT7gK0jSZFpXXaTkpXa_.jpg_160x160Q30s100.jpg_.webp" alt="">
                </div>
                <div class="wrapper-list-right">
                    <div class="title">
                        <span>囧妈</span>
                        <!-- <span>2D</span>&nbsp;
                        <span>IMAX</span> -->
                    </div>
                    <div class="item">
                        <span>103.2万</span>&nbsp;人想看
                    </div>
                    <div class="item"> 导演：徐峥 </div>
                    <div class="item"> 主演：徐峥 黄梅莹 袁泉 贾冰 </div>
                    <!-- <div class="ticket">预售</div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {

        }
    },
    filters: {},
    computed: {},
    mounted() { },
    methods: {}
}
</script>

<style type='text/scss' lang='scss' scoped>
.being {
    .timeDate {
        font-size: 13px;
        padding: 10px 20px;
        background: #f1f1f1;
        height: 39px;
        line-height: 19px;
    }
    .wrapper {
        padding: 0 0 0 15px;
        .wrapper-list {
            padding: 15px 15px 15px 0;
            height: 141.88px;
            display: flex;
            position: relative;
            .wrapper-list-left {
                > img {
                    width: 64.875px;
                    height: 94.875px;
                    border-radius: 2px;
                    display: block;
                    background-repeat: no-repeat;
                    background-position: 50%;
                    background-size: cover;
                }
            }
            .wrapper-list-right {
                padding: 0 10.125px;
                .title {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    > span:nth-child(1) {
                        display: inline-block;
                        height: 24px;
                        line-height: 24px;
                        max-width: 100px;
                        font-size: 16px;
                        font-weight: 500;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                    > span:nth-child(2),
                    span:nth-child(3) {
                        font-size: 12px;
                        padding: 0 3px;
                    }
                    > span:nth-child(2) {
                        display: inline-block;
                        background: #afafaf;
                        color: #fff;
                        padding: 1px;
                        margin: 0 3px;
                    }
                    > span:nth-child(3) {
                        box-sizing: border-box;
                        border: 1px solid #afafaf;
                        color: #afafaf;
                    }
                }
                .item {
                    margin: 3px 0 0;
                    height: 21px;
                    line-height: 21px;
                    font-size: 13px;
                    color: #666;
                    > span {
                        color: #ff9c1c;
                    }
                }
                .ticket {
                    font-size: 12px;
                    padding: 0 13px;
                    color: #fff;
                    background-image: linear-gradient(45deg, #1ab4ff, #1394f3);
                    box-sizing: border-box;
                    width: 50px;
                    height: 28px;
                    line-height: 28px;
                    border-radius: 120px;
                    position: absolute;
                    right: 15px;
                    // left: 50%;
                    top: 50%;
                    transform: translate(-0%, -50%);
                }
            }
        }
    }
}
</style>

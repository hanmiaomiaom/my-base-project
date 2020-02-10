<template>
    <div class="being">
        <!-- 轮播图 -->
        <div class="banner">
        </div>
        <!-- 超值抢购 -->
        <div class="ball">
            <div class="ball-list">
                <img src="../../assets/TB1ryECrVY7gK0jSZKzXXaikpXa-120-120.png_.webp" alt="">
                <div>超值抢购</div>
            </div>
            <div class="ball-list">
                <img src="../../assets/TB1.RemckT2gK0jSZPcXXcKkpXa-240-240.png_.webp" alt="">
                <div>超值抢购</div>
            </div>
            <div class="ball-list">
                <img src="../../assets/TB1s84dtYH1gK0jSZFwXXc7aXXa-240-240.gif" alt="">
                <div>超值抢购</div>

            </div>

        </div>
        <div class="line"></div>
        <div class="wrapper">
            <div class="wrapper-list">
                <div class="wrapper-list-left">
                    <img src="../../assets/TB1.a8lpLb2gK0jSZK9XXaEgFXa_.jpg_160x160Q30s100.jpg_.webp" alt="">
                </div>
                <div class="wrapper-list-right">
                    <div class="title">
                        <span>误杀误杀误杀误杀误杀误杀误杀误杀误杀</span>
                        <span>2D</span>&nbsp;
                        <span>IMAX</span>
                    </div>
                    <div class="item">
                        淘票票评分&nbsp;<span>9.2</span>
                    </div>
                    <div class="item"> 导演：柯汶利 </div>
                    <div class="item"> 主演：肖央 谭卓 陈冲 姜皓文 </div>
                    <div class="ticket">购票</div>
                </div>
            </div>
            <div class="wrapper-list">
                <div class="wrapper-list-left">
                    <img src="../../assets/TB1ycZLqpT7gK0jSZFpXXaTkpXa_.jpg_160x160Q30s100.jpg_.webp" alt="">
                </div>
                <div class="wrapper-list-right">
                    <div class="title">
                        <span>宠爱</span>
                        <span>CINITY</span>&nbsp;
                        <!-- <span>IMAX</span> -->
                    </div>
                    <div class="item">
                        淘票票评分&nbsp;<span>8.8</span>
                    </div>
                    <div class="item"> 导演：杨子 </div>
                    <div class="item"> 主演：于和伟 吴磊 张子枫 </div>
                    <div class="ticket">购票</div>
                </div>
            </div>
            <div class="wrapper-list">
                <div class="wrapper-list-left">
                    <img src="../../assets/TB1hEqQq4n1gK0jSZKPXXXvUXXa_.jpg_160x160Q30s100.jpg_.webp" alt="">
                </div>
                <div class="wrapper-list-right">
                    <div class="title">
                        <span>叶问4：完结篇</span>
                        <span>2D</span>&nbsp;
                        <span>中国巨幕</span>
                    </div>
                    <div class="item">
                        淘票票评分&nbsp;<span>9.2</span>
                    </div>
                    <div class="item"> 导演：叶伟信 </div>
                    <div class="item"> 主演：甄子丹 吴樾 吴建豪 </div>
                    <div class="ticket">购票</div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import lunbo1 from '../../assets/1 (1).jpg';
import lunbo2 from '../../assets/2.png';
import lunbo3 from '../../assets/3.jpg';
export default {
    name: '',
    data() {
        return {
            lunbo1,
            lunbo2,
            lunbo3
        }
    },
    filters: {},
    computed: {},
    mounted() {

    },
    methods: {
        init() {

        }

    }
}
</script>

<style type='text/scss' lang='scss' scoped>
.being {
    .banner {
        height: 135px;
        background: #1394f3;

    }
    .ball {
        width: 100%;
        height: 102px;
        display: flex;
        justify-content: space-between;
        padding: 0 15px;

        .ball-list {
            padding: 17px 0;
            > img {
                width: 44px;
                height: 44px;
            }
            > div {
                font-size: 12px;
                padding: 6px 0 0;
            }
        }
    }
    .line {
        width: 94%;
        height: 1px;
        background: #f1f1f1;
        margin: 0 auto;
        //  margin-bottom: 15px;
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
                        max-width: 120px;
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
                    background-image: linear-gradient(45deg, #ff47a8, #ff2e62);
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

<template>
    <div class="home">
        <div class="header">
            <div class="header-left">
                <img src="../../assets/TB1s84dtYH1gK0jSZFwXXc7aXXa-240-240.gif" alt="">
                <div class="city-name">北京</div>
                <div class="kailong"></div>
            </div>
            <div class="header-right">
                <div class="tab-bar-item" :class="{
                            'tab-bar-item-active':activeTabIndex===index,
                        }" @click="onTabBarItemClick(index)" v-for="(item,index) in tabBarArr" :key='item'>
                    {{item}}
                </div>
            </div>
        </div>

        <!-- 影片 -->
        <div class="wrapper">
            <nowBeing v-if="activeTabIndex===0"></nowBeing>
            <comingDY v-if="activeTabIndex===1"></comingDY>
        </div>

        <!-- 底部导航 -->
        <div class="footer-box">
            <div class="footer">
                <div class="navBar">
                    <img :src="reYing" alt="">
                    <p>热映</p>
                </div>
                <div class="navBar">
                    <img :src="yingYuan" alt="">
                    <p>影院</p>
                </div>
                <div class="navBar">
                    <img :src="my" alt="">
                    <p>我的</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import nowBeing from './nowBeing.vue';
import comingDY from './coming.vue'
import my from '../../assets/my.png';
import yingYuan from '../../assets/yingyuan.png';
import reYing from '../../assets/reying.png';

export default {
    name: '',
    data() {
        return {
            my,
            yingYuan,
            reYing,
            activeTabIndex: 0,
            tabBarArr: ['正在热映', '即将上映']
        };
    },
    components: {
        nowBeing,
        comingDY
    },
    filters: {},
    computed: {},
    mounted() { },
    methods: {
        onTabBarItemClick(index) {
            this.activeTabIndex = index; // 将当前点击元素的index复制给activeTabIndex
        }
    }
};
</script>

<style type='text/scss' lang='scss' scoped>
.home {
    width: 100%;
    height: 100%;
    background: #fff;
    .header {
        height: 49.875px;
        // background-color: #ccc;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .header-left {
            width: 157.5px;
            display: flex;
            align-items: center;
            padding-left: 15px;
            > img {
                width: 25px;
                height: 25px;
            }
            .city-name {
                padding-left: 10px;
                padding-right: 3px;
            }
            .kailong {
                width: 0;
                height: 0;
                border-left: 4px solid transparent;
                border-right: 4px solid transparent;
                border-top: 4px solid #333;
            }
        }
        .header-right {
            display: flex;
            flex: 1;
            justify-content: space-around;
            .tab-bar-item {
                position: relative;
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #333;
            }
            .tab-bar-item-active {
                font-weight: 700;
    color: #ff2e62;
                &:after {
                    position: absolute;
                    content: " ";
                    width: 15px;
                    height: 2px;
                    background-color: #d4180d;
                    bottom: -13px;
                    left: 0;
                    right: 0;
                    margin: 0 auto;
                }
            }
        }
    }
    .wrapper {
      margin-bottom: 48px;
    }
    .footer-box {
        .footer {
            padding-top: 7.125px;
            width: 100%;
            height: 47px;
            background: #fff;
            display: flex;
            justify-content: space-between;
            // align-items: center;
            position: fixed;
            bottom: 0px;
            .navBar {
                width: 33.3%;
                text-align: center;
                > img {
                    width: 23px;
                    height: 23px;
                }
                > p {
                    font-size: 12px;
                }
            }
        }
    }
}
</style>

<template>
    <div class="work">

        <bulletinBoard :headText="headText"
                       :swipeTextArr="swipeTextArr"
                       @clickDetail="clickDetail"></bulletinBoard>
        <!-- <cube-scroll ref="scroll"
                     :refreshDelay="700">
            <button @click.stop="isShowPopup=!isShowPopup">open</button>
            <div class="box">用于测试滚动时候穿透问题</div>

        </cube-scroll>

        <popup v-if="isShowPopup"
               :opacity="0.4"
               :zIndex="111"
               :isPopup="true"
               @openPopup="openPopup">
            <div class="pop-content">
                <h1>你好。。。</h1>
            </div>
        </popup> -->

    </div>
</template>

<script>
import popup from '../../components/public-popup/index';
import bulletinBoard from '../../components/bulletin-board/index';
import { log } from 'util';
export default {
    name: '',
    data() {
        return {
            isShowPopup: false,
            headText: '公告栏',
            swipeTextArr: [
                {
                    id: 1,
                    text: '1、这是第一条公告'
                },
                {
                    id: 2,
                    text: '2、这是第二条公告-这是第二条公告'
                },
                {
                    id: 3,
                    text: '3、这是第三条公告-这是第三条公告--这是第三条公告'
                },
                {
                    id: 4,
                    text: '4、这是第四条公告-这是第四条公告--这是第四条公告-这是第四条公告'
                }
            ]
        };
    },
    components: { bulletinBoard },
    filters: {},
    computed: {},
    mounted() {

    },
    methods: {
        clickDetail(val) {
            // 将当前id传给详细信息页
            console.log(val + '点击查看详细信息');
        }
        // openPopup() {
        //     this.isShowPopup = !this.isShowPopup;
        // }
    }
};
</script>

<style type='text/scss' lang='scss' scoped>
.work {
    width: 100%;
    height: 100%;
    // background: rgb(228, 208, 223);
    .box {
        width: 100%;
        padding: 20px 15px;
    }
    button {
        width: 100%;
        height: 24px;
        background: #ccc;
    }
    .pop-content {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        h1 {
            background: #fff;
            width: 50%;
            height: 20%;
            padding: 10px;
            display: flex;
            justify-content: flex-start;
        }
    }
}
</style>

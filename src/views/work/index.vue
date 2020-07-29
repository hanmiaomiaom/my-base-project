<template>
    <div class="work">
        <cube-scroll ref="scroll"
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
        </popup>

    </div>
</template>

<script>
import popup from '../../components/public-popup/index';
import { log } from 'util';
export default {
    name: '',
    data() {
        return {
            isShowPopup: false,
        };
    },
    components: { popup },
    filters: {},
    computed: {},
    mounted() {

    },
    methods: {
        openPopup() {
            this.isShowPopup = !this.isShowPopup;
        }
    }
};
</script>

<style type='text/scss' lang='scss' scoped>
.work {
    width: 100%;
    height: 100%;
    background: rgb(228, 208, 223);
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

<template>
    <div class="help">
        <!-- 搜索框 -->
        <publicSearch :placeholdertext="placeholdertext" :isShowClearIcon="isShowClearIcon" @clearValue="clearValue"
            @onSearchInput="onSearchInput" :userInput="userInput" class="search-box">
        </publicSearch>

    </div>
</template>

<script>
import publicSearch from '../../components/public-search/index';
// import
export default {
    name: '',
    data() {
        return {
            userInput: '', //用户输入数据
            placeholdertext: '请输入用户姓名/拼写',
            isShowClearIcon: false //是否显示清除的icon
        };
    },
    components: { publicSearch },
    filters: {},
    computed: {},
    mounted() {
    },
    methods: {
        //获取用户输入的数据
        onSearchInput(val) {
            this.userInput = val.replace(/\s*/g, ""); //// 去除 空格
            console.log(this.userInput.length, 'this.userInput.length');
            if (this.userInput.length) {
                this.isShowClearIcon = true;
            }
        },
        //清除输入框内内容
        clearValue() {
            this.isShowClearIcon = !this.isShowClearIcon;
            this.userInput = '';
        }
    }
};
</script>

<style type='text/scss' lang='scss' scoped>
.help {
    width: 100%;
    height: 100%;
    background: #666;
    font-family: "PingFangSC-Medium";

    .search-box {
        background: #0571b1;
        // background: linear-gradient(to right, #0571b1, #6ea6cc); //渐变
        align-items: center;
        height: 44px;
    }
    .bottomTabs {
        position: fixed;
        bottom: 0px;
        width: 100%;
    }
}
</style>

<template>
    <div class="help">
        <!-- 搜索框 -->
        <publicSearch :placeholdertext="placeholdertext"
                      :isShowClearIcon="isShowClearIcon"
                      @clearValue="clearValue"
                      @onSearchInput="onSearchInput"
                      :userInput="userInput"
                      class="search-box">
        </publicSearch>

        <div class="tab-nav">
            <!-- tabnav切换 -->
            <publicTopTab :defaultIndex="defaultIndex"
                          :leftText="tabArr[0]"
                          :rightText="tabArr[1]"
                          @clickTabs="clickTabs"></publicTopTab>
            <todo v-if="defaultIndex===1"></todo>
            <done v-if="defaultIndex===0"></done>
        </div>

    </div>
</template>

<script>
import todo from './todo';
import done from './done';
import publicSearch from '../../components/public-search/index';
import publicTopTab from '../../components/public-topTabs/index';
// import
export default {
    name: '',
    data() {
        return {
            userInput: '', //用户输入数据
            placeholdertext: '请输入用户姓名/拼写',
            isShowClearIcon: false,//是否显示清除的icon
            tabArr: ['待完成', '已完成'], //头部导航栏
            defaultIndex: 1,//默认展示哪个列表
        };
    },
    components: { todo, done, publicSearch, publicTopTab },
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
        },
        // 展示当前点击列表
        clickTabs(val) {
            this.defaultIndex = val;
        }
    }
};
</script>

<style type='text/scss' lang='scss' scoped>
.help {
    width: 100%;
    height: 100%;
    // background: #666;
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

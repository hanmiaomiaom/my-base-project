<template>
    <!-- 搜索组件 -->
    <div class="search">
        <div class="search-box">
            <span class="search-icon">
                <img src="../../assets/sousou.png" alt="">
            </span>
            <input type="text" :placeholder="placeholdertext" @input="onSearchInput" v-model.trim="value">
            <span class="clear-icon">
                <img src="../../assets/close.png" alt="" v-show='isShowClearIcon' @click="clearValue">
            </span>
        </div>

    </div>

</template>

<script>
export default {
    name: 'search',
    data() {
        return {
            value: ''
        }
    },
    props: {
        placeholdertext: {
            type: String,
            default: '请输入关键字' // 搜索框默认要显示的内容
        },
        userInput: { //用户输入数据
            type: [String, Number],
            default: ''
        },
        isShowClearIcon: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        userInput(newVal, oldVal) {
            this.value = newVal
        }
    },
    filters: {},
    computed: {},
    mounted() {
    },
    methods: {
        onSearchInput() {
            this.$emit('onSearchInput', this.value)
        },
        // 清除输入框的内容
        clearValue() {
            this.$emit('clearValue')
        }
    }
}
</script>

<style type='text/scss' lang='scss' scoped>
.search {
    width: 100%;
    display: flex;
    .search-box {
        width: 90%;
        height: 28px;
        margin: 0 auto;
        border-radius: 50px;
        background: #fff;
        display: flex;
        > .search-icon {
            height: 100%;
            padding-left: 6px;
            > img {
                height: 20px;
                margin-top: 4px;
            }
        }
        > input {
            width: 100%;
            height: 100%;
            padding-left: 5px;
            padding-right: 5px;
            border-radius: 50px;
            color: #000;
            text-overflow: ellipsis;
            > ::placeholder {
                color: chocolate;
            }
        }
        > .clear-icon {
            height: 100%;
            padding-right: 6px;

            > img {
                height: 20px;
                margin-top: 4px;
            }
        }
    }
}
</style>

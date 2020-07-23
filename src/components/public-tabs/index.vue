<template>
    <div class="tabs">
        <router-link v-for="item in tabListData" :key="item.path" class="item" :class="{'active':item.active}" tag="div"
            :to="item.path">
            <!-- <img :src="item.img"> -->
            <i class="iconfont">{{item.code}}</i>
            <span>{{item.text}}</span>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'c-tabs',
    components: {},
    props: {
        tabListData: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    data() {
        return {};
    },
    filters: {},
    computed: {},
    mounted() {},
    methods: {},
};
</script>

<style scoped lang="scss">
.tabs {
    height: 55px;
    background: #fff;
    display: flex;
    .item {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #666;
        > img {
            width: 20px;
            height: 20px;
        }
        > i {
            font-size: 18px;
            font-weight: bold;
        }
        > span {
            font-size: 12px;
            margin-top: 4px;
        }
    }
    .active {
        color: #0571b0;
    }
}
</style>

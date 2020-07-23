<template>
  <div class="tabs" >
    <router-link
            v-for="item in tabListData" :key="item.path"
            class="item"
            :class="{'active':item.active}"
            tag="div"
            :to="item.path"
        >
            <!-- <img :src="item.img"> -->
            <i class="iconfont">{{item.code}}</i>
            <span>{{item.text}}</span>
        </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import tabImgs from '../../assets/tabs';

export default {
    name: 'c-tabs',
    components: {},
    data() {
        return {
            tabList: [
                {
                    path: '/home',
                    text: '首页',
                    imgs: tabImgs.home,
                    code: '\ue606'
                },
                {
                    path: '/work',
                    text: '工作',
                    imgs: tabImgs.home,
                    code: '\ue750'
                },
                {
                    path: '/statistic',
                    text: '统计',
                    imgs: tabImgs.statistic,
                    code: '\ue688'
                },
                {
                    path: '/search',
                    text: '搜索',
                    imgs: tabImgs.search,
                    code: '\ue616'
                },
                {
                    path: '/my',
                    text: '我的',
                    imgs: tabImgs.my,
                    code: '\ue645'
                },
            ],
        };
    },
    filters: {},
    computed: {
        tabListData() {
            return this.tabList.map(({ imgs, ...item }) => {
                const active = this.$route.path.indexOf(item.path) === 0;
                return { img: active ? imgs[1] : imgs[0], active, ...item };
            });
        },
    },
    mounted() {},
    methods: {},
};
</script>

<style scoped lang="scss">
  .tabs{
    height: 55px;
    background: #fff;
    display: flex;
    .item{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #666;
        >img{
            width: 20px;
            height: 20px;
        }
        >i {
            font-size: 18px;
            font-weight: bold;
        }
        >span{
            font-size: 12px;
            margin-top: 4px;
        }
    }
    .active{
        color: #0571B0;
    }
}
</style>

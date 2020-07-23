<template>
    <transition appear
                leave-active-class="animated fadeOutRight"
                enter-active-class="animated fadeInRight">
        <section class="tab">
            <div class="main">
                <!-- include - 字符串或正则表达式。只有名称匹配的组件会被缓存。 -->
                <!-- <keep-alive include="work"> -->
                <router-view />
                <!-- </keep-alive> -->
            </div>
            <!-- 底部导航 -->
            <publicTabs :tabListData="tabListData"
                        class="bottomTabs"></publicTabs>
        </section>
    </transition>
</template>
<script>
import publicTabs from '../../components/public-tabs/index';
import tabImgs from '../../assets/tabs';
export default {
    components: { publicTabs },
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
    computed: {
        tabListData() {
            return this.tabList.map(({ imgs, ...item }) => {
                const active = this.$route.path.indexOf(item.path) === 0;
                return { img: active ? imgs[1] : imgs[0], active, ...item };
            });
        },
    }
};
</script>
<style lang="scss" scoped>
.tab {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .main {
        flex: 1;
        padding: 0 0 55px 0;
        overflow: hidden;
    }
    .bottomTabs {
        position: fixed;
        bottom: 0px;
        width: 100%;
    }
}
</style>

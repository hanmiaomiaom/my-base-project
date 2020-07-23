<template>
    <transition appear leave-active-class="animated fadeOutRight" enter-active-class="animated fadeInRight">
        <section class="tab">
            <div class="main">
                <!-- include - 字符串或正则表达式。只有名称匹配的组件会被缓存。 -->
                <!-- <keep-alive include="work"> -->
                <router-view />
                <!-- </keep-alive> -->
            </div>
            <!-- 底部导航 -->
            <Tabs class="bottomTabs"></Tabs>
        </section>
    </transition>
</template>
<script>
import Tabs from '../../components/tabs/index'
export default {
    components: { Tabs },
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

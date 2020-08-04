<template>
    <div class="statistic">
        <multiTabs :cDataTitle="list" @onClick="onClick"></multiTabs>
    </div>
</template>

<script>
import multiTabs from '../../components/multi-tabs/index';
export default {
    name: '',
    data() {
        return {
            list: [
                { title: '原料加工进厂' },
                { title: '成品油产量' },
                { title: '主要产品出厂及库存' },
                { title: '主要产品出厂及库存' },
            ],
        };
    },
    components:{multiTabs},
    filters: {},
    computed: {},
    mounted() { },
    methods: {
        onClick(val){
            console.log(val);
        }
    }
};
</script>

<style type='text/scss' lang='scss' scoped>
.statistic {
    width: 100%;
    height: 100%;
}
</style>

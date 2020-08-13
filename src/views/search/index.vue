<template>
    <div class="search">
        <!-- <cTable class="tables"></cTable> -->
        <swiper :imgList="banners" style=" width:100%;height: 200px;"></swiper>
    </div>
</template>

<script>
// import cTable from './table';
// import swiper from '../../components/swiper/index';
import swiper from '../../components/swiper/lunbo';
export default {
    name: '',
    data() {
        return {
            // imgList: [
            //     {
            //         imgURI:require('../../assets/1.png'),
            //         commodityId: 40
            //     },
            //     {
            //         imgURI: require('../../assets/3.png'),
            //         commodityId: 16
            //     },
            //     {
            //         imgURI: require('../../assets/4.png'),
            //         commodityId: 35
            //     },
            // ],
            banners: [
                { image: require('../../assets/1.png') },
                { image: require('../../assets/3.png') },
                { image: require('../../assets/4.png') },
            ]
        };
    },
    components: { swiper },
    filters: {},
    computed: {},
    mounted() { },
    methods: {}
};
</script>

<style type='text/scss' lang='scss' scoped>
.search {
    width: 100%;
    height: 100%;
    // .tables {
    //     height: 100%;
    //     padding: 0 5px;
    // }
}
</style>

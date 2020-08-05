<template>
    <div class="search">
        <cTable class="tables"></cTable>
    </div>
</template>

<script>
import cTable from './table';
export default {
    name: '',
    data() {
        return {
        };
    },
    components: { cTable },
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
    .tables {
        height: 100%;
        padding: 0 5px;
    }
}
</style>

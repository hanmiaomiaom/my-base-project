<template>
    <div class="help">
        <div class="header">
            <div>帮助热线</div>
            <div>
                <img src="../../assets/tel@3x.png" alt="">
                <a :href="'tel:' + '4008800114-6-4'">4008800114-6-4</a>
            </div>
        </div>
        <div class="container">
            <p>热点问题</p>
            <div>
                <p>注册后登录不进去怎么办</p>
                <p>请确定后输入的数据正确请确定后输入的数据正确输
                    入的数据正确请确定后输入的数据正确</p>
            </div>
            <div>
                <p>注册后登录不进去怎么办</p>
                <p>请确定后输入的数据正确请确定后输入的数据正确输
                    入的数据正确请确定后输入的数据正确</p>
            </div>
            <div>
                <p>注册后登录不进去怎么办</p>
                <p>请确定后输入的数据正确请确定后输入的数据正确输
                    入</p>
            </div>
        </div>
        <div class="footer">
            技术支持:中国石油管道公司信息中心
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {

        }
    },
    filters: {},
    computed: {},
    mounted() { },
    methods: {}
}
</script>

<style type='text/scss' lang='scss' scoped>
.help {
    width: 100%;
    height: 100%;
    background: #f6f6f6;
    font-family: "PingFangSC-Medium";
    position: relative;
    .header {
        width: 100%;
        height: 47px;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 24px 0 19px;

        > div:nth-child(1) {
            font-size: 17px;
            color: #333333;
            letter-spacing: -0.58px;
        }
        > div:nth-child(2) {
            display: flex;
            > img {
                width: 21px;
                height: 21px;
                margin-right: 10px;
            }
            > a {
                height: 21px;
                line-height: 21px;
                font-size: 16px;
                color: #0859b5;
                letter-spacing: -0.55px;
                text-align: center;
            }
        }
    }
    .container {
        width: 100%;
        background: #fafafa;
        > p {
            font-size: 13px;
            color: #757575;
            letter-spacing: -0.44px;
            line-height: 18px;
            padding-top: 16px;
            padding-left: 18.5px;
            margin-bottom: 10px;
        }
        > div {
            > p:nth-child(1) {
                padding: 0 21px;
                margin-bottom: 6px;
                line-height: 22px;
                font-size: 16px;
                color: #333333;
                letter-spacing: -0.55px;
                font-weight: 600;
            }
            > p:nth-child(2) {
                line-height: 21px;
                padding: 0 21px 0 20px;
                font-size: 15px;
                color: #666666;
                letter-spacing: -0.51px;
                padding-bottom: 29px;
            }
        }
    }
    .footer {
        width: 220px;
        height: 20px;
        font-size: 14px;
        color: #757575;
        letter-spacing: -0.48px;
        line-height: 20px;
        // text-align: center;
        position: absolute;
        bottom: 20px;
        left: 50%;
        margin-left: -110px;
    }
}
</style>

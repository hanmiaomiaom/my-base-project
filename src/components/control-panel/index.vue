<template>
    <div class="disc-box">
        <div class="yuan">
            <div class="lottery">
                <div class="block" @touchstart="touchstart('up')" @touchend="touchend"
                    :class="{ selected: tab === 'up' }">
                    <div class="content">
                        <img style="transform: rotate(-4deg) skewY(6deg);" src="../../assets/shang@3x.png" alt="" />
                    </div>
                </div>
                <div class="block" @touchstart="touchstart('upright')" @touchend="touchend"
                    :class="{ selected: tab === 'upright' }">
                    <div class="content">
                        <img style="transform:rotate(-38deg) skewY(-3deg);" src="../../assets/youshang@3x.png" alt="" />
                    </div>
                </div>
                <div class="block" @touchstart="touchstart('right')" @touchend="touchend"
                    :class="{ selected: tab === 'right' }">
                    <div class="content">
                        <img style="transform:rotate(-86deg) skewY(-8deg);" src="../../assets/you@3x.png" alt="" />
                    </div>
                </div>
                <div class="block" @touchstart="touchstart('downright')" @touchend="touchend"
                    :class="{ selected: tab === 'downright' }">
                    <div class="content">
                        <img style="transform:rotate(-129deg) skewY(-3deg);" src="../../assets/youxia@3x.png" alt="" />
                    </div>
                </div>
                <div class="block" @touchstart="touchstart('down')" @touchend="touchend"
                    :class="{ selected: tab === 'down' }">
                    <div class="content">
                        <img style="transform:rotate(-184deg) skewY(6deg);" src="../../assets/xia@3x.png" alt="" />
                    </div>
                </div>
                <div class="block" @touchstart="touchstart('downleft')" @touchend="touchend"
                    :class="{ selected: tab === 'downleft' }">
                    <div class="content">
                        <img style="transform:rotate(-225deg) skewY(-3deg);" src="../../assets/zuoxia@3x.png" alt="" />
                    </div>
                </div>
                <div class="block" @touchstart="touchstart('left')" @touchend="touchend"
                    :class="{ selected: tab === 'left' }">
                    <div class="content">
                        <img style="transform:rotate(-266deg) skewY(-8deg);" src="../../assets/zuo@3x.png" alt="" />
                    </div>
                </div>
                <div class="block" @touchstart="touchstart('upleft')" @touchend="touchend"
                    :class="{ selected: tab === 'upleft' }">
                    <div class="content">
                        <img style="transform:rotate(-324deg) skewY(3deg);" src="../../assets/zuoshang@3x.png" alt="" />
                    </div>
                </div>
                 <div class="btn"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'c-disc',
    data() {
        return {
            tab: ''
        };
    },
    props: {
        defaultIndex: {
            type: Number,
            default: 0
        }
    },
    filters: {},
    computed: {},
    mounted() {
        // this.tab = this.defaultIndex;
    },
    methods: {
        toTab(idx) {
            this.tab = idx;
            this.$emit('clickTabs', this.tab);
        },
        touchstart(dir) {
            this.tab = dir;
            this.$emit('touchstart', dir);
        },
        touchend() {
            this.tab = '';
            this.$emit('touchend');
        }
    }
};
</script>

<style type="text/scss" lang="scss" scoped>
.disc-box {
    .yuan {
        position: relative;
        display: flex;
        .lottery {
            width: 151px;
            height: 151px;
            margin: 0 11px;
            position: relative;
            background: #a4c3eb;
            border: 1px solid #9a9a9a;
            border-radius: 50%;
            overflow: hidden;
            position: relative;
            .btn {
                width: 65px;
                height: 65px;
                border-radius: 50%;
                background: #2f94e1;
                border: 1px solid #2c7e97;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
            .block {
                width: 75.5px;
                height: 75.5px;
                position: absolute;
                box-shadow: 0 0 2px #7b98bc inset;
                transform-origin: right bottom 0;
                .content {
                    transform: skewY(-49deg) rotate(-20.5deg) translateX(1px)
                        translateY(-5px);
                    position: absolute;
                    right: 6px;
                    bottom: 9px;
                    img {
                        width: 30px;
                        height: 30px;
                    }
                    img:nth-child(1) {
                        transform: rotate(-1deg) skewY(6deg);
                    }
                    img:nth-child(2) {
                        transform: rotate(-1deg) skewY(6deg);
                    }
                }
            }
            .block:active {
                background: #005de2;
            }
            .block:nth-of-type(1) {
                transform: rotate(23deg) skewY(45deg);
            }

            .block:nth-of-type(2) {
                transform: rotate(68deg) skewY(45deg);
            }

            .block:nth-of-type(3) {
                transform: rotate(113deg) skewY(45deg);
            }

            .block:nth-of-type(4) {
                transform: rotate(158deg) skewY(45deg);
            }

            .block:nth-of-type(5) {
                transform: rotate(203deg) skewY(45deg);
            }

            .block:nth-of-type(6) {
                transform: rotate(248deg) skewY(45deg);
            }

            .block:nth-of-type(7) {
                transform: rotate(293deg) skewY(45deg);
            }

            .block:nth-of-type(8) {
                transform: rotate(338deg) skewY(45deg);
            }
            .selected {
                background: #005de2;
            }
        }
    }
}
</style>

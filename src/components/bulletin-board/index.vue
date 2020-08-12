<template>
    <div>
        <h2>{{headText}}</h2>
        <div class="textBox">
            <!-- @mouseenter="Stop()"
                   @mouseleave="Up()" -->
            <transition name="slide">
                <p ref='contlist'
                   class="text"
                   :key="swipeText.id"
                   @click="clickDetail(swipeText.id)">{{swipeText.val}}</p>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name: 'scroll',
    data() {
        return {
            number: 0,
            timer: null,
        };
    },
    props: {
        headText: {
            type: String,
            default: ''
        },
        swipeTextArr: {
            type: Array,
            default: () => {
                return [];
            }
        }
    },
    computed: {
        swipeText() {
            return {
                // id: this.number,
                id:this.swipeTextArr[this.number].id,
                val: this.swipeTextArr[this.number].text
            };
        }
    },
    mounted() {
        this.startMove();
    },
    methods: {
        startMove() {
            // eslint-disable-next-line
            this.timer = setTimeout(() => {
                if (this.swipeTextArr.length > 0) {
                    if (this.number === this.swipeTextArr.length - 1) {
                        this.number = 0;
                    } else {
                        this.number += 1;
                    }
                    this.startMove();
                }
            }, 2000); // 滚动不需要停顿则将2000改成动画持续时间
        },
        clickDetail(val) {
            this.$emit('clickDetail', val);
        },
        // 鼠标移上去停止
        // Stop() {
        //     console.log(  '鼠标移上去停止');
        //     clearInterval(this.timer);
        // },
        // //鼠标移开 ，接着滚动
        // Up() {
        //     console.log(  '鼠标移开 ，接着滚动');
        //     this.startMove();
        //     // this.move();
        // },
    }

};
</script>

<style lang="scss" scoped>
h2 {
    padding: 10px 10px;
}
.textBox {
    width: 100%;
    height: 40px;
    overflow: hidden;
    position: relative;
    text-align: left;
    background-color: #ccc;
}
.text {
    width: 100%;
    padding: 0 10px;
    position: absolute;
    bottom: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.slide-enter-active,
.slide-leave-active {
    transition: all 0.5s linear;
}
.slide-enter {
    transform: translateY(20px) scale(1);
    opacity: 1;
}
.slide-leave-to {
    transform: translateY(-20px) scale(0.8);
    opacity: 0;
}
</style>

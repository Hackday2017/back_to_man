<template>
    <div v-on:click="this.cat_move" class="full_width full_height page1 background">
        <img src="../pictures/home.png" class="full_width full_height home" v-if="this.start">
        <div class="start" v-on:click="this.start_game" v-if="this.start">开始游戏</div>
        <img v-bind:class="{ bounce: move}" src="../pictures/cat.png" class="cat inline_block vertical_align">
        <div class="dialog inline_block vertical_align">
            <div class="dialog1" v-if="this.word == 0">
                <div class="name">【starry】</div>
                <div class="word">我为什么会在这</div>
            </div>
            <div class="dialog1" v-else-if="this.word == 1">
                <div class="name">【starry】</div>
                <div class="word">喵喵喵</div>
            </div>
            <div class="next" v-on:click="this.next"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                move: false,
                word: 0,
                start: true
            };
        },
        components: {
    
        },
        methods: {
            cat_move() {
                if (this.start == false) {
                    this.move = true
                }
            },
            next() {
                this.word++;
            },
            start_game (){
                this.start = false
            }
        }
    }
</script>

<style lang="scss">
    .home {
        position: absolute;
        top: 0;
        left: 0;
    }
    .start {
        position: absolute;
        color: #fff;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .background {
        background-repeat: no-repeat;
        background-size: 120%;
        background-position: center;
        min-width: 1000px;
    }
    
    .page1 {
        background-image: url('../pictures/background1.png');
    }
    
    .cat {
        height: 200px;
        margin-top: 32%;
        // margin-top: 420px;
    }
    
    .bounce {
        transform: translateX(300px);
        transition-duration: 3s;
    }
    
    .dialog {
        color: #ffffff;
        font-size: 16px;
        background-color: #000000;
        border-radius: 10px;
        height: 100px;
        width: 50%;
        margin-left: 24%;
        padding: 20px;
    }
    
    .word {
        height: 60px;
    }
    
    .next {
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid #ffffff;
        margin-left: 90%;
    }
</style>

<template>
    <div v-on:click="this.cat_move" class="full_width full_height page1">
        <img v-bind:class="{ bounce: move}" src="../pictures/cat.png" class="cat inline_block vertical_align">
        <div class="dialog inline_block vertical_align">
            <div class="dialog1" v-if="this.word == 0">
                <div class="name">starry</div>
                <div class="word">我为什么会在这</div>
            </div>
            <div class="dialog1" v-else-if="this.word == 1">
                <div class="name">starry</div>
                <div class="word">喵喵喵</div>
            </div>
            <div class="next" v-on:click = "this.next"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                move: false,
                word: 0
            };
        },
        components: {
    
        },
        methods: {
            cat_move() {
                this.move = true
            },
            next() {
                this.word++;
            }
        }
    }
</script>

<style lang="scss">
    .page1 {
        background-image: url('../pictures/background1.png');
        background-repeat: no-repeat;
        background-size: 120%;
        background-position: center;
    }
    
    .cat {
        height: 200px;
        // margin-top: 76%;
        margin-top: 420px;
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
        width: 600px;
        // position: absolute;
        // margin-top: 500px;
        margin-left: 300px;
        padding: 20px;
    }
    
    .next {
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid #ffffff;
        margin-left: 550px;
        margin-top: 40px;
    }
</style>

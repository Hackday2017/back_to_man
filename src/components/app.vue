<template>
    <div class="full_width full_height page1 background">
        <img src="../pictures/home.png" class="full_width full_height home" v-if="this.start">
        <img src="../pictures/start.png" class="start" v-on:click="this.start_game" v-if="this.start">
        <div class="line" v-if="this.start"></div>
        <div class="black full_width full_height" v-if="this.black" v-on:click="this.cat_move">
            <div class="start">怎么感觉晕乎乎的...</div>
        </div>
       
        <img src="../pictures/go.png" class="go" v-on:click="this.go" v-if="this.word == 3">
        <img v-bind:class="{ bounce: move}" src="../pictures/cat.png" class="cat inline_block vertical_align">
        <div class="dialog inline_block vertical_align">
            <div v-if="this.word == 0">
                <div class="name">【小猫】</div>
                <div class="word">我怎么在这...?什么也记不起来了...</div>
            </div>
            <div v-else-if="this.word == 1">
                <div class="name">【小猫】</div>
                <div class="word">咦？？？</div>
            </div>
            <div v-else-if="this.word == 2">
                <div class="name">【小猫】</div>
                <div class="word">我...我怎么变成了猫？！！这到底是怎么回事？？</div>
            </div>
             <div v-else-if="this.word == 3">
                <div class="name">【小猫】</div>
                <div class="word">这里有一个房间，进去看看吧</div>
            </div>
            <div class="next" v-on:click="this.next" v-if ="this.word != 3"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                move: false,
                word: 0,
                start: true,
                balck: false,
                username: "",
                name: []
            }
        },
        methods: {
            cat_move() {
                    this.move = true;
                    this.black = false
            },
            next() {
                this.word++;
            },
            start_game () {
                this.start = false,
                this.black = true
            },
            go() {
                window.location.href = '/second'
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
        display: block;
        width: 200px;
        cursor: pointer;
    }
    .black {
        background-color: #000000;
        color: #ffffff;
        position: absolute;
        top: 0;
        left: 0;
    }
    .page1 {
        background-image: url('../pictures/background1.png');
    }
    .line {
        background-color: #fff;
        width: 200px;
        height: 2px;
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
    .go {
        top: 40%;
        right: 18%;
        position: absolute;
        display: block;
        cursor: pointer;
    }
    
</style>

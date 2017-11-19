<template>
  <div class="page2 full_width full_height" v-on:click="this.cat_move">
    <img src="../pictures/go.png" class="go" v-on:click="this.show" v-if="!this.dialog">
    <img v-bind:class="{ bounce: move}" src="../pictures/cat.png" class="cat inline_block vertical_align">
    <div class="be_dialog inline_block vertical_align" v-show="this.dialog">
        <div>【医生】</div>
        <div>嗯？这不是我们上次遗漏的实验体吗？这下终于找到了。
           得赶快处理掉，可不能让外界知道。</div>
      <div class="next" v-on:click="this.be"></div>
    </div>
    <div v-if="this.ending" class="ending full_width full_height" v-on:click="this.back">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        move: false,
        word: 0,
        dialog: false,
        ending: false
      }
    },
    methods: {
      cat_move() {
        this.move = true
      },
      be() {
        this.ending = true
      },
      show() {
        this.dialog = true;
      },
      back() {
        window.location.href = '/'
      }
  
    }
  }
</script>

<style lang="scss">
  .page2 {
    background-image: url('../pictures/background4.png');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    min-width: 1000px;
  }
  
  .go {
    top: 40%;
    right: 10%;
    position: absolute;
    display: block;
    cursor: pointer;
  }

  .ending {
    background-image: url('../pictures/be.png');
    position: absolute;
    top: 0;
    left: 0;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
  }
 .be_dialog {
   position: absolute;
    top: 20%;
    left: 40%;
 }
</style>

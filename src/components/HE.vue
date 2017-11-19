<template>
  <div class="page2 full_width full_height" v-on:click="this.cat_move">
    <img src="../pictures/go.png" class="go" v-on:click="this.show" v-if="this.word == 0">
    <img src="../pictures/box.png" class="box" v-if="this.word == 0">
    <img v-bind:class="{ bounce: move}" src="../pictures/cat.png" class="cat inline_block vertical_align">
    <div class="dialog inline_block vertical_align" v-show="this.word == 1">
      <div>
        <div>【得到解药】</div>
        <img src="../pictures/medicine.png" class="medicine">
      </div>
      <div class="next" v-on:click="this.he"></div>
    </div>
    <div v-if="this.man" class="man full_width full_height" v-on:click="this.back">
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
        man: false
      }
    },
    methods: {
      cat_move() {
        this.move = true
      },
      he() {
        this.man = true
      },
      show() {
        this.word++;
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
    background-image: url('../pictures/background3.png');
  }
  
  .go {
    top: 40%;
    right: 40%;
    position: absolute;
    display: block;
    cursor: pointer;
  }
  
  .box {
    top: 60%;
    right: 40%;
    position: absolute;
    display: block;
  }
  
  .medicine {
    margin-left: 10px;
    margin-top: 10px;
    width: 50px;
  }
  
  .man {
    background-image: url('../pictures/he.png');
    color: #ffffff;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>

<template>
  <div class="page2 background full_width full_height" v-on:click="this.cat_move">
    <img src="../pictures/go.png" class="go" v-on:click="this.go" v-if="this.word == 0">
    <img v-bind:class="{ bounce: move}" src="../pictures/cat.png" class="cat inline_block vertical_align">
    <div class="dialog inline_block vertical_align" v-if="this.dialog">
      <div v-if="this.word == 0">
        <div class="name">【病人】</div>
        <div class="word">诶？！为什么会有只猫？</div>
      </div>
      <div v-else-if="this.word == 1">
        <div class="name">【小猫】</div>
        <div class="word">我本来是人，醒来不知道为什么变成了猫，我不记得发生了什么。
       你是谁？你为什么会在这里？</div>
      </div>
      <div v-else-if="this.word == 2">
        <div class="name">【病人】</div>
        <div class="word">真是神奇...这里是精神病院，我被当成病人抓到这里了，其实我并没有什么精神病。</div>
      </div>
      <div v-else-if="this.word == 3">
        <div class="name">【小猫】</div>
        <div class="word">你没有病？那你为什么会被抓到这里</div>
      </div>
      <div v-else-if="this.word == 4">
        <div class="name">【病人】</div>
        <div class="word">我本来是这家医院的医生。 他们在研发新药，用人体做活体实验，我发现了他们的机密上报给公关机构，却被医院用「妄想症」诊断书驳回。
        </div>
      </div>
      <div v-else-if="this.word == 5">
        <div class="name">【小猫】</div>
        <div class="word">他们在研制什么药？</div>
      </div>
      <div v-else-if="this.word == 6">
        <div class="name">【病人】</div>
        <div class="word">我也不太清楚</div>
      </div>
      <div v-else-if="this.word == 7">
        <div class="name">【小猫】</div>
        <div class="word">这会是我变成猫的原因吗...?</div>
      </div>
      <div v-else-if="this.word == 8">
        <div class="name">【病人】</div>
        <div class="word">我想是的。希望你相信我的话。</div>
      </div>
      <div v-else-if="this.word == 9">
        <div class="choice">
          <div class="arrow inline_block"></div>
          <div class="yes inline_block" v-on:click="next">【相信】</div>
        </div>
        <div class="choice">
          <div class="arrow inline_block"></div>
          <div class="no inline_block" v-on:click="not_believe">【不相信】</div>
        </div>
      </div>
      <div v-else-if="this.word == 10">
        <div class="name">【小猫】</div>
        <div class="word">我相信你</div>
      </div>
      <div v-else-if="this.word == 11">
        <div class="name">【病人】</div>
        <div class="word">太好了。他们有研发成功的药，那些药藏在制药基地，用箱子锁了起来。
            被抓走前我把钥匙偷走了。希望能给你带来帮助。</div>
      </div>
      <div v-else-if="this.word == 12">
        <div>【获得钥匙】</div>
        <img src="../pictures/key.png" class="key">
      </div>
      <div v-else-if="this.word == 13">
        <div class="name">【小猫】</div>
        <div class="word">我想你病的不轻</div>
      </div>
      <div class="next" v-on:click="this.next" v-if="this.word != 9 && this.word != 14"></div>
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
        key: false
      }
    },
    methods: {
      cat_move() {
        this.move = true
      },
      next() {
        this.word++;
        if (this.word == 12) {
          this.key = true;
        }
          else if (this.word == 13) {
          this.he()
          }
        else if (this.word == 14) {
          this.be()
        }
      },
      go() {
        this.dialog = true
      },
      believe() {
        this.word++
      },
      he() {
        window.location.href = '/HE'
      },
      not_believe() {
        this.word = 14
      },
      be() {
        window.location.href = '/BE'
      }
    }
  }
</script>

<style lang="scss">
  .page2 {
    background-image: url('../pictures/background2.png');
  }
  
  .go {
    top: 20%;
    right: 40%;
    position: absolute;
    display: block;
    cursor: pointer;
  }
  .arrow {
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 8px solid #ffffff;
  }
  .choice {
    margin: 20px;
    cursor: pointer;
  }
  .key {
    margin-top: 10px;
    margin-left: 30px;
  }
</style>

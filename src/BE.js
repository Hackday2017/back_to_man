import Vue from 'vue'
import BEapp from './components/BE.vue'
import style from './main.scss'

new Vue({
    el: "#BE",
    render: h => h(BEapp)
})
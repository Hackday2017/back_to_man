import Vue from 'vue'
import Second from './components/second.vue'
import style from './main.scss'

new Vue({
    el: "#second",
    render: h => h(Second)
})
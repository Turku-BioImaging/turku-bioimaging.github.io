import Vue from 'vue'
// import HelloWorld from './components/HelloWorld'
// Vue.component('helloWorld', HelloWorld)

import NavigationBar from './components/NavigationBar'

Vue.component('navigationBar', NavigationBar)

const app = new Vue({
    el: '#idat',
})
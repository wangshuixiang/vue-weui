<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                name: '',
            }
        },
        components: {},

        mounted() {
            let desW = 750, docEl = document.documentElement || document.body;
            let resize = "orientationchange" in window ? 'orientationchange' : 'resize';
            let setRem = function () {
                let screenWidth = docEl.clientWidth || window.screen.width;
                let fontS = screenWidth < 750 ? 100 * screenWidth / desW : 100;
                docEl.style.fontSize = fontS + 'px';
            };
            setRem();
            window.addEventListener(resize, setRem, false);
        },

        methods: {}
    }
</script>

<style lang="less">
    @import "assets/style/base.css";
    @import "assets/style/weui.css";

    #app {
        font-family: -apple-system-font, Helvetica Neue, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #333;
        width: 7.5rem;
        min-height: 100vh;
        margin: 0 auto;
        font-size: 0.5rem;
        background-color: #ededed;
    }
</style>

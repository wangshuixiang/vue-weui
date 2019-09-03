<template>
    <div class="enter">
        <div class="tit">tit</div>
        <div class="tit1"></div>
        <div class="tit2"></div>
        <div class="button-sp-area" style="margin-top: 0.3rem">
            <a href="javascript:;"
               @click="actionSheetHandler()"
               class="weui-btn weui-btn_plain-primary">按钮</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "enter",
        data() {
            return {
                showDialog: true,
                title: ''
            }
        },
        mounted() {

        },
        methods: {
            //actionSheet
            actionSheetHandler() {
                this.$weui.actionSheet(
                    [{
                        label: '拍照',
                        onClick: function () {
                            console.log('拍照');
                        }
                    }, {
                        label: '从相册选择',
                        onClick: function () {
                            console.log('从相册选择');
                        }
                    }, {
                        label: '其他',
                        onClick: function () {
                            console.log('其他');
                        }
                    }],
                    [{
                        label: '取消',
                        onClick: function () {
                            console.log('取消');
                        }
                    }],
                    {
                        className: 'custom-classname',
                        onClose: function () {
                            console.log('关闭');
                        }
                    }
                );
            },
        }
    }
</script>

<style scoped lang="less">
    /*var @scale = 100;*/
    .enter {
        width: 100%;
        height: 100%;

        .tit {
            width: 100%;
            height: 1rem;
            background-color: #10aeff;
        }

        .tit1 {
            width: 7.5rem;
            height: 1rem;
            background-color: #ccc;
        }

        .tit2 {
            width: 3.75rem;
            height: 1rem;
            background-color: #10aeff;
        }

        .tit3 {
            width: 750rem;
            height: 1rem;
            margin: 0 auto;
            background-color: #ccc;
        }
    }
</style>

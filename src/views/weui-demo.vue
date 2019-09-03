<template>
    <div class="">

    </div>
</template>

<script>
    export default {
        name: "weui-demo",
        data() {
            return {
                showDialog: true,
                title: ''
            }
        },
        mounted() {
            this.cascadePickerHandler();
        },
        methods: {
            //alert
            alertHandler() {
                this.$weui.alert('请上传图片');
            },
            //confirm
            confirmHandler() {
                this.$weui.confirm('是否删除？', () => {
                    console.log('yes');
                }, () => {
                    console.log('no');
                }, {
                    title: '提示'
                });
            },

            //toast
            toastHandler() {
                this.$weui.toast('操作成功', {
                    duration: 3000,
                    className: "bears"
                });
            },

            //loading
            loadingHandler() {
                let loading = this.$weui.loading('loading');
                setTimeout(function () {
                    loading.hide();
                }, 3000);
            },

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

            //topTips
            topTipsHandler() {
                this.$weui.topTips('请填写正确的字段', {
                    duration: 3000,
                    className: "custom-classname",
                    callback: function callback() {
                        console.log('close');
                    }
                });
            },

            //picker
            pickerHandler() {
                this.$weui.picker(
                    [{
                        label: '飞机票',
                        value: 0
                    }, {
                        label: '火车票(disabled)',
                        disabled: true,
                        value: 1
                    }, {
                        label: '的士票',
                        value: 2
                    }, {
                        label: '住宿费',
                        value: 3
                    }, {
                        label: '礼品费(disabled)',
                        value: 4,
                        disabled: true
                    }, {
                        label: '活动费',
                        value: 5
                    }, {
                        label: '通讯费',
                        value: 6
                    }, {
                        label: '补助',
                        value: 7
                    }, {
                        label: '通讯费',
                        value: 8
                    }, {
                        label: '其他',
                        value: 9
                    }], {
                        defaultValue: [2],
                        className: 'custom-classname',
                        onChange: function onChange(result) {
                            console.log(result);
                        },
                        onConfirm: function onConfirm(result) {
                            console.log('confirm');
                            console.log(result);
                        },
                        id: 'picker',
                        title: '单列选择器'
                    });
            },

            //dataPicker
            dataPickHandler() {
                this.$weui.datePicker({
                    start: '2016-12-29',
                    end: '2030-12-29',
                    cron: '* */2 0',
                    defaultValue: [2017, 7, 9],
                    onChange: function onChange(result) {
                        console.log(result);
                    },
                    onConfirm: function onConfirm(result) {
                        console.log(result);
                    },
                    id: 'datePicker',
                    title: '日期选择器'
                });
            },

            //multi-Picker
            multiPickerHandler() {
                this.$weui.picker(
                    [{
                        label: '1',
                        value: '1'
                    }, {
                        label: '2',
                        value: '2'
                    }, {
                        label: '3',
                        value: '3'
                    }],
                    [{
                        label: 'A',
                        value: 'A'
                    }, {
                        label: 'B',
                        value: 'B'
                    }, {
                        label: 'C',
                        value: 'C'
                    }],
                    {
                        defaultValue: ['3', 'A'],
                        onChange: function onChange(result) {
                            console.log(result);
                        },
                        onConfirm: function onConfirm(result) {
                            console.log(result);
                        },
                        id: 'multiPickerBtn',
                        onClose: function onClose() {
                            console.log('onClose');
                        },
                        title: '多列选择器'
                    });
            },

            //cascade-Picker
            cascadePickerHandler() {
                this.$weui.picker([{
                    label: '广东',
                    value: 0,
                    children: [{
                        label: '广州',
                        value: 0,
                        children: [{
                            label: '海珠',
                            value: 0
                        }, {
                            label: '番禺',
                            value: 1
                        }]
                    }, {
                        label: '佛山',
                        value: 1,
                        children: [{
                            label: '禅城',
                            value: 0
                        }, {
                            label: '南海',
                            value: 1
                        }]
                    }]
                }, {
                    label: '广西',
                    value: 1,
                    children: [{
                        label: '南宁',
                        value: 0,
                        children: [{
                            label: '青秀',
                            value: 0
                        }, {
                            label: '兴宁',
                            value: 1
                        }]
                    }, {
                        label: '桂林',
                        value: 1,
                        children: [{
                            label: '象山',
                            value: 0
                        }, {
                            label: '秀峰',
                            value: 1
                        }]
                    }]
                }], {
                    depth: 3,
                    defaultValue: [0, 1, 1],
                    onChange: function onChange(result) {
                        console.log(result);
                    },
                    onConfirm: function onConfirm(result) {
                        console.log(result);
                    },
                    id: 'cascadePicker',
                    title: '嵌套选择器'
                });
            },
        }
    }
</script>

<style scoped>

</style>

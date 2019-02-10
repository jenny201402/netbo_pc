var $$ = {
    copyLine: function () {
            var clipboard = new Clipboard('.btn_share');
            clipboard.on('success', function (e) {
                parent.layer.msg("链接复制成功!", {
                    // icon : 1,
                    time: 1500
                })
            })
    },
    selectDatePersonnal: function () {
        layui.use('laydate', function () {
            var laydate = layui.laydate;

            //执行一个laydate实例
            laydate.render({
                elem: '#dateModule' //指定元素
            });
        });
    },
    selectDatePersonnalIcon: function () {
        layui.use('laydate', function () {
            var laydate = layui.laydate;

            //执行一个laydate实例
            laydate.render({
                elem: '#dateModule1' //指定元素
            });
        });
    },
    addFreeDate2: function () {
        layui.use('laydate', function () {
            var laydate = layui.laydate;

            //执行一个laydate实例
            laydate.render({
                elem: '#dateModule2' //指定元素
            });
        });
    },
    addFreeDate3: function () {
        layui.use('laydate', function () {
            var laydate = layui.laydate;

            //执行一个laydate实例
            laydate.render({
                elem: '#dateModule3' //指定元素
            });
        });
    },
    addFreeDate4: function () {
        layui.use('laydate', function () {
            var laydate = layui.laydate;

            //执行一个laydate实例
            laydate.render({
                elem: '#dateModule4' //指定元素
            });
        });
    },
    loadLogo: function () {
        layui.use('upload', function () {
            var upload = layui.upload;

            //执行实例
            var uploadInst = upload.render({
                elem: '#test1' //绑定元素
                , url: '/upload/' //上传接口
                , done: function (res) {
                    //上传完毕回调
                }
                , error: function () {
                    //请求异常回调
                }
            });
        });
    },
    nebNav: function () {
        layui.use('element', function () {
            var element = layui.element;
        });
    },
    autoComplete: function () {
        $("#autocomplete").autocomplete({
            minLength: 0,
            source: function (request, response) {
                var results = $.ui.autocomplete.filter($.cookie('localHistory') ? $.cookie('localHistory').split(',') : [], request.term);
                response(results.slice(0, 7));
            }
        }).focus(function () {
            $(this).autocomplete("search");
        });
    },
    getCookie: function () {
        $("#search").on('click', function () {
            var content = $('#autocomplete').val();
            var historyArray = $.cookie('localHistory') ? $.cookie('localHistory').split(',') : [];
            historyArray.push(content);
            $.unique(historyArray);
            var historyString = historyArray.join(",");
            $.cookie('localHistory', historyString);
            location.reload();
        })
    },
    login: function () {
        $("#login").on('click', function () {
            layer.open({
                title: '登录',
                type: 2,
                // skin: 'layui-layer-lan', //样式类名
                closeBtn: 1, //不显示关闭按钮
                // anim: 2,
                offset: '570',
                area: ['639px', '450px'],
                shadeClose: true, //开启遮罩关闭
                content: ['login.html', 'no']
            });
        })
    },
    rateValue1: function () {
        layui.use('element', function () {
            var element = layui.element;
            layui.use('rate', function () {
                var rate = layui.rate;

                //渲染
                var ins1 = rate.render({
                    elem: '#test1', //绑定元素
                    value: 4,//初始值
                    // text: true
                    half: true
                });
            });
        });
    },
    rateValue2: function () {
        layui.use('element', function () {
            var element = layui.element;
            layui.use('rate', function () {
                var rate = layui.rate;

                //渲染
                var ins1 = rate.render({
                    elem: '#test2', //绑定元素
                    value: 4,//初始值
                    // text: true
                    half: true
                });
            });
        });
    },
    rateValue3: function () {
        layui.use('element', function () {
            var element = layui.element;
            layui.use('rate', function () {
                var rate = layui.rate;

                //渲染
                var ins1 = rate.render({
                    elem: '#test3', //绑定元素
                    value: 4,//初始值
                    // text: true
                    half: true
                });
            });
        });
    },
    rateValue4: function () {
        layui.use('element', function () {
            var element = layui.element;
            layui.use('rate', function () {
                var rate = layui.rate;

                //渲染
                var ins1 = rate.render({
                    elem: '#test4', //绑定元素
                    value: 4,//初始值
                    // text: true
                    half: true
                });
            });
        });
    },
    rateValue5: function () {
        layui.use('element', function () {
            var element = layui.element;
            layui.use('rate', function () {
                var rate = layui.rate;

                //渲染
                var ins1 = rate.render({
                    elem: '#test5', //绑定元素
                    value: 4,//初始值
                    // text: true
                    half: true
                });
            });
        });
    },
    rateValue6: function () {
        layui.use('element', function () {
            var element = layui.element;
            layui.use('rate', function () {
                var rate = layui.rate;

                //渲染
                var ins1 = rate.render({
                    elem: '#test6', //绑定元素
                    value: 4,//初始值
                    // text: true
                    half: true
                });
            });
        });
    },
    rateValue7: function () {
        layui.use('element', function () {
            var element = layui.element;
            layui.use('rate', function () {
                var rate = layui.rate;

                //渲染
                var ins1 = rate.render({
                    elem: '#test7', //绑定元素
                    value: 4,//初始值
                    // text: true
                    half: true
                });
            });
        });
    },
    rateValue8: function () {
        layui.use('element', function () {
            var element = layui.element;
            layui.use('rate', function () {
                var rate = layui.rate;

                //渲染
                var ins1 = rate.render({
                    elem: '#test8', //绑定元素
                    value: 4,//初始值
                    // text: true
                    half: true
                });
            });
        });
    },
    rateValue9: function () {
        layui.use('element', function () {
            var element = layui.element;
            layui.use('rate', function () {
                var rate = layui.rate;

                //渲染
                var ins1 = rate.render({
                    elem: '#test9', //绑定元素
                    value: 4,//初始值
                    // text: true
                    half: true
                });
            });
        });
    },
    rateValue10: function () {
        layui.use('element', function () {
            var element = layui.element;
            layui.use('rate', function () {
                var rate = layui.rate;

                //渲染
                var ins1 = rate.render({
                    elem: '#test10', //绑定元素
                    value: 4,//初始值
                    // text: true
                    half: true
                });
            });
        });
    },
}

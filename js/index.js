$(function () {
    layer.ready(function(){
        layer.open({
            type: 1,
            title: false,
            skin: 'layui-layer-demo',
            closeBtn: false,
            shadeClose: true,
            area: '700px;',
            shade: 0.3,
            id: 'LAY_layuipro',
            btnAlign: 'c',
            moveType: 1,
            content: $(".indexNameModal"),
            success: function(layero){

            }
        });
    });

    layui.use(['form'], function() {
        var form = layui.form;
        form.on('submit(loginForm)', function(data)
        {
            layer.alert(JSON.stringify(data.field), {
                title: '最终的提交信息'
            });
            return false;
        });
    });
    $(".videoNavItem").on("mouseover", function () {
        var imgShowItem = $(this).parents(".videoBanner").children(".videoNavImg").eq($(this).index());
        $(this).addClass("hoverItem");
        $(this).siblings().removeClass("hoverItem");
        imgShowItem.addClass("imgShowItem");
        imgShowItem.siblings().removeClass("imgShowItem");
    });
});

window.onload(function () {

})

function handleChangeServiceTab(ele)
{
    $(ele).parents(".asideRightTab").toggleClass("asideShow");
    $(ele).parents(".asideRightTab").siblings(".asideRightTab").toggleClass("asideShow");
}
function handleShowLoginModal()
{
    layer.open({
        type: 1,
        title: false, //不显示标题栏
        skin: 'layui-layer-demo',
        closeBtn: false,
        shadeClose: true,
        area: '540px;',
        shade: 0.8,
        id: 'LAY_layuipro', //设定一个id，防止重复弹出
        btnAlign: 'c',
        moveType: 1, //拖拽模式，0或者1
        content: $(".loginWrapper"),
        success: function(layero){

        }
    });
}
function handleShowRegisterModal()
{
    layer.open({
        type: 1,
        title: false,
        skin: 'layui-layer-demo',
        closeBtn: false,
        shadeClose: true,
        area: '600px;',
        shade: 0.8,
        id: 'LAY_layuipro',
        btnAlign: 'c',
        moveType: 1,
        content: $(".registerWrapper"),
        success: function(layero){

        }
    });
}

function handleCloseRegisterModal() {
    layer.closeAll()
}
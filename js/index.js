$(() =>
{
    //初始化项
    getAutomaticLayer();
    handleUploadFile();
    handleLoginUser();
    $(".videoNavItem").on("mouseover", toggleVideoAds);
});

function getAutomaticLayer()
{
    layer.ready(() =>
    {
        getSignUpNameModal();

        let fiveMinInterval = setInterval(() =>
        {
            getFiveMinModal();
            clearInterval(fiveMinInterval)
        }, 300000)
    });
}

function handleUploadFile() {
    layui.use('upload', function(){
        let upload = layui.upload,
            uploadInst = upload.render({
            elem: '#uploadPic'
            ,url: '/upload/' //上传接口
            ,done: function(res){

            }
            ,error: function(){

            }
        });
        //uploadInst.upload(); 可重新上传 可全局
    });
}

function getFiveMinModal()
{
    layer.open({
        type: 1,
        title: false,
        skin: 'layui-layer-demo',
        shadeClose: true,
        area: '700px;',
        id: 'LAY_fiveMin',
        btnAlign: 'c',
        moveType: 1,
        content: $(".fiveMinutesWrapper"),
        cancel: function(index, layero){
            layer.close(index)
        }
    });
}

function toggleVideoAds()
{
    let imgShowItem = $(this).parents(".videoBanner").children(".videoNavImg").eq($(this).index());
    $(this).addClass("hoverItem");
    $(this).siblings().removeClass("hoverItem");
    imgShowItem.addClass("imgShowItem");
    imgShowItem.siblings().removeClass("imgShowItem");
}

function handleLoginUser()
{
    layui.use(['form'],() =>
    {
        let form = layui.form;
        form.on('submit(loginForm)', data =>
        {
            layer.alert(JSON.stringify(data.field), {
                title: '最终的提交信息'
            });
            return false;
        });
    });
}

function getSignUpNameModal()
{
    layer.ready(() =>
    {
        layer.open({
            type: 1,
            title: false,
            skin: 'layui-layer-demo',
            shadeClose: true,
            area: '700px;',
            shade: 0.3,
            id: 'LAY_signUp',
            btnAlign: 'c',
            moveType: 1,
            content: $(".indexNameModal"),
            cancel: function(index, layero){
                layer.close(index)
            }
        });
    })
}

function handleChangeServiceTab(ele)
{
    $(ele).parents(".asideRightTab").toggleClass("asideShow");
    $(ele).parents(".asideRightTab").siblings(".asideRightTab").toggleClass("asideShow");
}

function handleShowLoginModal()
{
    layer.open({
        type: 1,
        title: false,
        skin: 'layui-layer-demo',
        closeBtn: false,
        shadeClose: true,
        area: '540px;',
        shade: 0.8,
        id: 'LAY_login',
        btnAlign: 'c',
        moveType: 1, //拖拽模式，0或者1
        content: $(".loginWrapper")
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
        id: 'LAY_register',
        btnAlign: 'c',
        moveType: 1,
        content: $(".registerWrapper")
    });
}

function handleCloseModal()
{
    layer.close(layer.index);
}

function handleScroll(ele)
{
    let currentEle = $(ele).children(".recordIcon"),
        currentCls = currentEle.attr("class"),
        isChecked = currentCls.includes("checkedStatus"),
        toggleCls = isChecked ? "recordIcon unCheckedStatus" : "recordIcon checkedStatus";

        currentEle.attr("class", toggleCls)
}
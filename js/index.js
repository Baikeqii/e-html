$(() =>
{
    //初始化项
    timeCountdown('timeCountdown');
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
    layui.use('upload', () =>
    {
        let upload = layui.upload,
            uploadInst = upload.render({
            elem: '#uploadPic'
            ,url: '/upload/' //上传接口
            ,done: res =>
            {

            }
            ,error: () =>
            {

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
        cancel: (index, layero) => layer.close(index)
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
            // layer.close(layer.index);
            return false;
        });
    });
}

let signUpIndex;

function getSignUpNameModal()
{
    layer.ready(() =>
    {
        signUpIndex = layer.open({
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
            cancel: (index, layero) => layer.close(index)
        });
    })
}

function handleCloseSignUpModal() {
    layer.close(signUpIndex)
}

function getRandomName()
{
    let nameArr = ["小q", "小w", "小e", "小r", "小t"],
        index =  Math.floor((Math.random() * nameArr.length));

    $(".nameIpt").val(nameArr[index]);
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
        moveType: 1,
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

//时分秒倒计时方法
function timeCountdown(eleId)
{
    let element = document.getElementById(eleId);

    if(element)
    {
        let endTimer=element.getAttribute('data-timer'),
            endTime=new Date(
                parseInt(endTimer.substr(0, 4), 10),
                parseInt(endTimer.substr(4, 2), 10),
                parseInt(endTimer.substr(6, 2), 10),
                parseInt(endTimer.substr(8, 2), 10),
                parseInt(endTimer.substr(10, 2), 10),
                parseInt(endTimer.substr(12, 2), 10)
            ),
            endTimeMonth=endTime.getMonth()-1;

        endTime.setMonth(endTimeMonth);

        let ts = endTime - new Date();

        if( ts > 0 )
        {
            let dd = parseInt(ts / 1000 / 60 / 60 / 24, 10),
                hh = parseInt(ts / 1000 / 60 / 60 % 24, 10),
                mm = parseInt(ts / 1000 / 60 % 60, 10),
                ss = parseInt(ts / 1000 % 60, 10);

            dd = dd < 10 ? ("0" + dd) : dd;   //天
            hh = hh < 10 ? ("0" + hh) : hh;   //时
            mm = mm < 10 ? ("0" + mm) : mm;   //分
            ss = ss < 10 ? ("0" + ss) : ss;   //秒

            document.getElementById("timer_d").innerHTML = dd;
            document.getElementById("timer_h").innerHTML = hh;
            document.getElementById("timer_m").innerHTML = mm;
            document.getElementById("timer_s").innerHTML = ss;

            setTimeout(() => timeCountdown(eleId), 1000);

        }
        else
        {
            document.getElementById("timer_d").innerHTML = 0;
            document.getElementById("timer_h").innerHTML = 0;
            document.getElementById("timer_m").innerHTML = 0;
            document.getElementById("timer_s").innerHTML = 0;
        }
    }
}
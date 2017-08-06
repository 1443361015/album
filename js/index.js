//window.$ = require("jquery/dist/jquery.min");
//优先加载图片
imgMake();
//生成图片
function imgMake() {
    var imgea = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];
    var str = '';
    for(var i = 0, imgea_leng = imgea.length; i < imgea_leng; i++){
        str += '<figure class = "figure col-lg-2 col-md-3 col-sm-4 col-xs-12"><div><img src="img/'+imgea[i]+'"></div></figure>';
    }
    $("main>article").html(str);
}
//获取figure的宽度并赋值给高
function figure(){
    var figW = $("figure").width();
    $("figure").css({
        height:figW
    });
}
//监听浏览器宽度的改变
window.onresize = function(){
    figure();
};
window.onload = function () {
    //获取figure的宽度并赋值给高
    figure();
    imgBtn();
    /*图片长宽优先判断*/
    $("figure img").each(function (idx,ele) {
        var img_w = ele.width;
        var img_h = ele.height;
        if (img_w > img_h){
            ele.style.height = '100%',
                ele.style.marginLeft = -(img_w/img_h - 1)/2*100+'%'
        }else {
            ele.style.width = '100%'
            ele.style.marginTop = -(img_h/img_w - 1)/2*100+'%'
        }
    });
}
//给图片添加点击事件
function imgBtn() {
    $("figure img").on("click",function () {
        var src = $(this).attr("src");
        //图片宽高比例
        var w_h = $(this).width() / $(this).height();
        //浏览器窗口宽高比
        var WIN_w_h = window.innerWidth / window.innerHeight;
        var size = '';
        if (w_h > WIN_w_h){
            size = '100% auto'
        }else {
            size = 'auto 100%'
        }
        console.log(WIN_w_h)
        $(".imgShow_layer").css({
            background: '#000 url('+src+') no-repeat',
            backgroundSize: size,
            backgroundPosition: 'center'
        });
        $(".imgShow_layer").addClass("img_show");
    })
    $(".imgShow_layer").on('click',function () {
        $(".imgShow_layer").removeClass("img_show");
    })
}
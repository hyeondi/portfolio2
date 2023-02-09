$(document).ready(function () {

    let design_img = [
        "images/Group 18.jpg"
    ]

    $(".content .content-wrap .title img").click(function(e){
        e.preventDefault()
        let i =$(this).index()
        console.log(i)
        $(".window").show();
        $(".window-content").fadeIn()
        $(".window-content img").attr("src", design_img[i]);
    })

    $(".window, .window-content a").click(function(){
        $(".window").hide();
        $(".window-content").fadeOut()
    })
    // $(".header .header-wrap .nav ul li").mouseover(function(){
    //     let list =$(this).index()
    //     $(".header .header-wrap .nav ul li").removeClass("on").eq(list).addClass("on")
    // }).mouseout(function(){
    //     $(".header .header-wrap .nav ul li").removeClass("on")
    // })

    
});
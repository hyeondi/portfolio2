$(document).ready(function () {
    $(".header .nav ul li").eq(2).addClass("on")

    const work_img = [
        "images/logoimg.jpg",
        "images/packageimg.jpg",
        "images/detailpage.jpg"
    ]

    $(".design .design-wrap .design-content .work-wrap .work-content").click(function(e){
        e.preventDefault()
        let i = $(this).index()
        $(".window").fadeIn()
        $(".window-content").show()
        $(".window-content img").attr("src", work_img[i])
        $("html,body").css("overflow","hidden")

    })
    $(".window-content i, .window").click(function(){
        // $(".window,.window-content").fadeOut()
        // $(".window-content").scrollTop(0);
        // $("html,body").css("overflow","scroll")

        $(".window").fadeOut()
        $(".window-content").scrollTop(0).hide()
        $("html, body").css("overflow","")
        $("html, body").css("overflow","visible")
    })
});
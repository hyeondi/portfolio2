$(document).ready(function () {
    AOS.init({
        duration: 1200,
    })

    $(".header .nav ul li").eq(0).addClass("on")
    
    let bar = new ProgressBar.Line(".html",{
        strokeWidth : 7,
        color: "#e87203",
        trailWidth: 7,
        trailColor: "#fff",
        step: function(state, circle){
            circle.setText(Math.round(circle.value()*100)+"%")
        }
        
    })
    bar.animate(0.75)

    let bar2 = new ProgressBar.Line(".ps",{
        strokeWidth : 7,
        color: "#24bcef",
        trailWidth: 7,
        trailColor: "#fff",
        step: function(state, circle){
            circle.setText(Math.round(circle.value()*100)+"%")
        }
        
    })
    bar2.animate(0.75)


    let bar3 = new ProgressBar.Line(".li",{
        strokeWidth : 7,
        color: "#027fc1",
        trailWidth: 7,
        trailColor: "#fff",
        step: function(state, circle){
            circle.setText(Math.round(circle.value()*100)+"%")
        }
        
    })
    bar3.animate(0.6)
});
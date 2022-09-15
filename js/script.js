
// close side-bar
$(".closeBtn").click(function () {
    let sideBarWidth = $(".side-bar").innerWidth();
    if ($(".side-bar").css("left") == "0px") {
        $(".side-bar").animate({ left: `-${sideBarWidth}` }, 500);
        $(".openBtn").animate({ left: "0px" }, 500);
        $(".home-content ").animate({ marginLeft: "0px" }, 500);

    }

    //open side-bar
$(".openBtn").click(function(){
    let sideBarWidth = $(".side-bar").innerWidth();
    if ($(".side-bar").css("left") != "0px"){
        $(".side-bar").animate({ left: "0px" }, 500);
        $(".openBtn").animate({ left: `${sideBarWidth}px` }, 500);
        $(".home-content ").animate({ marginLeft: `${sideBarWidth}px` }, 500);
    }
})

})

//smooth scroll
$("a").click(function (e) {
    let aHref = $(e.target).attr("href");
    let sectionOffset = $(aHref).offset().top;
    $("html, body").animate({ scrollTop: sectionOffset }, 1000);
});



//section2
$(".info h3").click(function(){
    $(this).next().slideToggle(500);
    $(".info div").not($(this).next()).slideUp(500);   //هات كل الديفات غير اللى واخدين ال زيس دوت نيكست يعنى غير اللى واقف عليها
    
})

//count down

function countdown(){
    var now = new Date();
    var eventDate = new Date(2018, 12, 17);

    var currentTiime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTiime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24)-30;

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("dayes").innerHTML = "<h3>"+  d + " D"+"</h3>";
    document.getElementById("houers").innerHTML ="<h3>"+  h + " h"+"</h3>";
    document.getElementById("minutes").innerHTML = "<h3>"+  m + " m"+"</h3>";
    document.getElementById("seconds").innerHTML = "<h3>"+  s + " s"+"</h3>";

    setTimeout(countdown, 1000);
}

countdown();


// text area


    let max =100;
    
    $("textarea").keyup(function(){
        
        let length=$(this).val().length;
        let character = max - length;
        
        console.log(character);
        
        if(character<=0)
            {
                 $("#char").text("your available character finished");
                
            }
        else{
        
        $("#char").text(character);
        }
        
    });

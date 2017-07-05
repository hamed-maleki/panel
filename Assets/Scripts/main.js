var position = 0
function slideDown(){
    
    if(position == 0){
        $(".left-side").animate({width: "94%"},1000);
        $(".right-side").animate({width: "5.2%"},1000);
        $(".side").delay(1200).animate({ height: '91.5vh' }, 1000);
        position = 1;
    }
    else{
        $(".side").animate({ height: '0vh' }, 1000);
        $(".right-side").css("height","0")
        $(".left-side").delay(1200).animate({width: "100%"},1000);
        $(".right-side").delay(1200).animate({width: "0%"},1000);
        position = 0;
    }
    
}
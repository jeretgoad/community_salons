function slideShowAuto()
{
    var countdownDate = new Date().getTime();
    var time = 2000;  //60 mins in milliseconds
    var x = setInterval(function() {
        time = time - 1000;
        $(".slideView").mouseover(function() {
           time = time + 1000;
        });
        $(".slideView").mouseout(function() {
           if(time > 2000)
               {
                   time = 2000;
               }
        });
        if (time <= 0)
            {
                time = 2000; document.getElementsByClassName("see_next_ad")[0].click();
            }
    }, 1000);
}
$(slideShowAuto);
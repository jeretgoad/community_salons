function tabActive()
{
    $(".navbtn").click(function () {
        console.log("here");
    $(".navbtn").removeClass('active')
    // $(".tab").addClass("active"); // instead of this do the below 
    $(this).addClass('active');   
    });
}

$(tabActive);
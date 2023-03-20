window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

document.getElementById("getThisYear").innerHTML = new Date().getFullYear();

$(document).ready(function () {

    $("#OmnichannelButton").click(function(e){
        $("#OmnichannelDropdown").click();
        e.stopPropagation();
    });

    if(!$("#OmnichannelContent").hasClass("show"))
    {
        $('#OmnichannelButton').removeClass('active');
    }
    else {
        $('#OmnichannelButton').addClass('active');
    }


    // let position = $(window).scrollTop();
    // $(window).scroll(function(e) {
    //     let scroll = $(window).scrollTop();
    //     if(scroll > position)
    //     {
    //         $('.navbar-kudasai').addClass('opacity-1').addClass('fixed-top');
    //     }
    //     else
    //     {
    //         $('.navbar-kudasai').removeClass('opacity-1').removeClass('fixed-top');
    //     }
    //     position = scroll;
    //     if (position == 0)
    //     {
    //         $('.navbar-kudasai').removeClass('opacity-1').removeClass('fixed-top');
    //     }
    //     else
    //     {
    //         $('.navbar-kudasai').addClass('opacity-1').addClass('fixed-top');
    //     }
    //     e.stopPropagation();
    // });
});
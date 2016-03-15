//Javascript

//call to jQuery ready function
//make sure html and css is loaded

$(document).ready(function () {
    $(document).ready(function () {
        $('#fullpage').fullpage({
            verticalCentered: false,
            anchors: ['firstPage', 'secondPage', '3rdPage'],
            css3: true,
            scrollingSpeed: 1000

        });
    });

});
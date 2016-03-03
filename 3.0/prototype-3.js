//Javascript

//call to jQuery ready function
//make sure html and css is loaded

$(document).ready(function () {
    console.log('ready');

    $('form').hide();


    //---------------click on categories-----------------------

    $('h4.area').click(function () {

        $('form.area').slideToggle();

        return false;
    });

    $('h4.rooms').click(function () {

        $('form.rooms').slideToggle();

        return false;
    });

    $('h4.amenities').click(function () {

        $('form.amenities').slideToggle();

        return false;
    });

    $('h4.prices').click(function () {

        $('form.prices').slideToggle();

        return false;
    });



})
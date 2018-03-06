$(document).ready(function () {
    addScrolledClass();
    addSlider();
    smoothScroll();
    smoothDropDown();
});

$(window).scroll(function () {
    addScrolledClass();
});

function smoothScroll() {
    var scrollLink = $('.scroll');

    // smooth scrolling
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    // active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 20;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            };
        });
    });
};


//Responsive menu smooth drop down
function smoothDropDown() {
    $(".container").click(function () {
        $(".drop-down").slideDown(function () {
            $(this).css('display', '');
        });
    });
};




//hamburger icon animation
function myFunction(x) {
    x.classList.toggle("change");
}

//addScrolledClass function
function addScrolledClass() {
    var navHeight = $('#navbar').outerHeight();
    var actualPos = $(window).scrollTop();
    if (actualPos >= navHeight) {
        $('#navbar').addClass('scrolled');
    } else {
        $('#navbar').removeClass('scrolled');
    }
}

//slider function
function addSlider() {
    $('.slider').bxSlider();
}



//geolocation google maps api with marker
function initMap() {
    var map, infoWindow;
    map = new google.maps.Map(document.getElementById('map'), {

        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 11,
    });
    infoWindow = new google.maps.InfoWindow;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                //variable add marker 
                var marker = new google.maps.Marker({
                    position: pos,
                    map: map,
                });
                map.setCenter(pos);


            },
            function () {
                handleLocationError(true, infoWindow, map.getCenter());
            });
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

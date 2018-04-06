/* ********* Script para movimentação vertical da página ***************/

$("nav li:nth-child(1)").click(function (e) {
    $("html,body").animate({ scrollTop: $("#sobre").offset().top }, 1000);
});

$("nav li:nth-child(2)").click(function (e) {
    $("html,body").animate({ scrollTop: $("#conhecimentos").offset().top }, 1000);
});

$("nav li:nth-child(3)").click(function (e) {
    $("html,body").animate({ scrollTop: $("#experiencia").offset().top }, 1000);
});

$("nav li:nth-child(4)").click(function (e) {
    $("html,body").animate({ scrollTop: $("#contato").offset().top }, 1000);
});


/* ******* Navbar Collapse hide after click event ********/

$(document).ready(function () {
    $(".navbar-nav li a").click(function (event) {
        $(".navbar-collapse").collapse('hide');
    });
});


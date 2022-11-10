/**/

var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
  $(".header__ .mobile-header .navbar").slideToggle();
  $("body").toggleClass("disable-body-temp-scrol");
});


$(".wrapper .content .context .orc .picker-borad .select-cst button").click( function() {
    $(".wrapper .content .context .orc .picker-borad .select-cst button").removeClass("active");
    $(this).toggleClass("active");
    /* $(".wrapper .content .context .orc .bag-tool .page").removeClass("active"); */
    /* $(`.wrapper .content .context .orc .bag-tool .page[data-page="${$(this).data("num")}"]`).addClass("active"); */
    $(".wrapper .content .context .orc .picker-borad .select-cst").attr("data-selected", $(this).data("num"));
});

$(".wrapper .content .context .orc .bag-tool .page .block-ui .sub .selects-cst .selected-s").click( function() {
    if(!$(this).closest(".selects-cst").hasClass("active-pc")) {
        $(`.wrapper .content .context .orc .bag-tool .page .block-ui .sub .selects-cst`).removeClass("active-pc");
        $(`.wrapper .content .context .orc .bag-tool .page .block-ui-s .sub .selects-cst`).removeClass("active-pc");
        $(this).closest(".selects-cst").addClass("active-pc");
    }
    else {
        $(this).closest(".selects-cst").removeClass("active-pc");
    }
});

$(".wrapper .content .context .orc .bag-tool .page .block-ui .sub .selects-cst .picker-s ul li button").click( function() {
    $(".wrapper .content .context .orc .bag-tool .page .block-ui .sub .selects-cst .picker-s ul li").removeClass("active-btn-c");
    $(this).parent("li").addClass("active-btn-c");
    $(".wrapper .content .context .orc .bag-tool .page .block-ui .sub .selects-cst .selected-s span").text($(this).text());
    $(".wrapper .content .context .orc .bag-tool .page .block-ui .sub .selects-cst").toggleClass("active-pc");
    $(".wrapper .content .context .orc .bag-tool .page .block-ui .sub .selects-cst .selected-s").attr("data-selected",$(this).data("pnum"));
});

/**/
$(".wrapper .content .context .orc .bag-tool .page .block-ui-s .sub .selects-cst .selected-s .clc").click( function() {
    if(!$(this).closest(".selects-cst").hasClass("active-pc")) {
        $(`.wrapper .content .context .orc .bag-tool .page .block-ui .sub .selects-cst`).removeClass("active-pc");
        $(`.wrapper .content .context .orc .bag-tool .page .block-ui-s .sub .selects-cst`).removeClass("active-pc");
        $(this).closest(".selects-cst").addClass("active-pc");
    }
    else {
        $(this).closest(".selects-cst").removeClass("active-pc");
    }
});

$(".wrapper .content .context .orc .bag-tool .page .block-ui-s .sub .selects-cst .picker-s ul li button").click( function() {
    $(this).parent("li").addClass("active-btn-c");
    $(this).closest(".selects-cst").find("span").text($(this).text());
    $(this).closest(".selects-cst").toggleClass("active-pc");
    $(this).closest(".selects-cst").find(".selected-s").attr("data-selected",$(this).data("pnum"));
});

/**/
$(".wrapper .content .section-tar .orc .picker-borad .select-cst button").click( function() {
    $(".wrapper .content .section-tar .orc .picker-borad .select-cst button").removeClass("active");
    $(this).toggleClass("active");
    $(".wrapper .content .section-tar .orc .bag-tool .page").removeClass("active");
    $(`.wrapper .content .section-tar .orc .bag-tool .page[data-page="${$(this).data("num")}"]`).addClass("active");
});

$(".wrapper .content .section-faq .is .sub ul li .icn").click( function() {
    if(!$(this).parent("li").hasClass("active-sss")) {
        $(".wrapper .content .section-faq .is .sub ul li").removeClass("active-sss");
        $(this).parent("li").addClass("active-sss");
    }
    else {
        $(this).parent("li").removeClass("active-sss");
    }
});
$(".wrapper .content .section-faq .is .sub ul li .label-of .txt").click( function() {
    console.log("kl");
    if(!$(this).parent().parent().hasClass("active-sss")) {
        $(".wrapper .content .section-faq .is .sub ul li").removeClass("active-sss");
        $(this).parent().parent().addClass("active-sss");
    }
    else {
        $(this).parent().parent().removeClass("active-sss");
    }
});

$('#news-slider').owlCarousel({
    loop: true,
    margin: 18,
    autoWidth: true,
    dots: true,
    dotsEach: true,
    responsiveClass: true,
    responsive:{
        0:{
            items: 1,
            dots: true,
            dotsEach: true,
            margin: 10
        },
        600:{
            items: 2,
            dots: false,
            dotsEach: false
        }
    }
});

$(".wrapper .content .col-three-cs .block-rl .go-top button").click( function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

function ShowPsw() {
    const password = document.querySelector('#pswd__');
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
}

$('.auth-cs-mdl').click( function() {
    $("body").removeClass("disable-body-temp-scrol");
    $('.auth-cs-mdl').hide();
  });
  
  $('.auth-cs-mdl .body').children().click( function(e) {
    return false;
  });

$(".auth__ .log button, .auth .log button").click( function() {
    location.replace("/login.html");
});
$(".auth__ .reg button, .auth .reg button").click( function() {
    location.replace("/register.html");
});
$(".auth-cs-mdl .body .board .page-out .reg-me button").click( function() {
    $(".auth-cs-mdl .body .board .slim-shady .selectors-cs ul li").removeClass("active");
    $(".auth-cs-mdl .body .board .slim-shady").toggleClass("switch");
    $(".auth-cs-mdl .body .board .slim-shady .selectors-cs ul li:last-child").addClass("active");
    $(".auth-cs-mdl .body .board .page-out").removeClass("active-page");
    $('.auth-cs-mdl .body .board .page-out[data-id="2"').addClass("active-page");
});
$(".auth-cs-mdl .body .sh-nav .bnv-ui .close button").click( function() {
    $($(this).data("page")).fadeOut(100);
    $("body").removeClass("disable-body-temp-scrol");
});
$(".auth-cs-mdl .body .board .slim-shady .selectors-cs ul li button").click( function () {
    $(".auth-cs-mdl .body .board .slim-shady .selectors-cs ul li").removeClass("active");
    $(".auth-cs-mdl .body .board .slim-shady").toggleClass("switch");
    $(this).parent("li").addClass("active");
    $(".auth-cs-mdl .body .board .page-out").removeClass("active-page");
    $('.auth-cs-mdl .body .board .page-out[data-id="' + $(this).data("page") + '"').addClass("active-page");
});

$(".auth-cs-mdl .body .board .page-out .input-form-cs .tw-input-box .selects-cst .selected-s .clc").click( function() {
    $(this).closest(".selects-cst").toggleClass("active-pc");
});

$(".auth-cs-mdl .body .board .page-out .input-form-cs .tw-input-box .selects-cst .picker-s ul li button").click( function() {
    $(".auth-cs-mdl .body .board .page-out .input-form-cs .tw-input-box .selects-cst .picker-s ul li").removeClass("active-btn-c");
    $(this).parent("li").addClass("active-btn-c");
    $(this).closest(".selects-cst").find("span").text($(this).text());
    $(this).closest(".selects-cst").toggleClass("active-pc");
    $(this).closest(".selected-s").attr("data-selected",$(this).data("pnum"));
});
$(".auth-cs-mdl .body .input-form-cs .forgot-password a, .forgot_password a").click( function() {
    $(".auth-cs-mdl").fadeOut(100);
    $(".forgot-password-board").fadeIn(100);
    $("body").addClass("disable-body-temp-scrol");
});
$(".auth-cs-mdl .body .board .register__clc a").click( function() {
    $(".login-board").fadeOut(100);
    $(".register-board").fadeIn(100);
});

$(".auth-cs-mdl .body .board .page-out .offers .checkbox a").click( function() {
    $(".auth-tou").fadeIn(100);
});
$(".auth-tou .body .close-btn").click( function() {
    $(".auth-tou").fadeOut(100);
});
$(".auth-tou .body .approve-btn button").click( function() {
    $(".auth-cs-mdl .body .board .page-out .offers .checkbox:last-child input").prop( "checked", true );
    $(".auth-tou").fadeOut(100);
})
/*



*/


function unitFormatter(num) {
    var masst =  Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + ' kq.' : Math.sign(num)*Math.abs(num) + ' qr.';
    $("#RealrangeValue").text(masst);
}

/* LOGIN PAGE */
$(".wrapper .register_form_pg .input-fields-pg .input-field-cs .selects-cst .selected-s .clc").click( function() {
    $(this).closest(".selects-cst").toggleClass("active-pc");
    console.log("kl");
});

$(".wrapper .register_form_pg .input-fields-pg .input-field-cs .selects-cst .picker-s ul li button").click( function() {
    $(".wrapper .register_form_pg .input-fields-pg .input-field-cs .selects-cst .picker-s ul li").removeClass("active-btn-c");
    $(this).parent("li").addClass("active-btn-c");
    $(this).closest(".selects-cst").find("span").text($(this).text());
    $(this).closest(".selects-cst").toggleClass("active-pc");
    $(this).closest(".selected-s").attr("data-selected",$(this).data("pnum"));
    var nbr__ = $(this).data("pnum");
    $(this).parents(':eq(2)').siblings("select").find("option").removeAttr("selected");
    $(this).parents(':eq(2)').siblings("select").val(nbr__).trigger('change');
    $(this).parents(':eq(2)').siblings("select").find(`option[value="${nbr__}`).attr("selected", "");
});

$(document).click(function(e) {
    $('.selects-cst').not($('.selects-cst').has($(e.target))).removeClass('active-pc');
    $('.selects-cst').not($('.selects-cst').has($(e.target))).parents(".input").removeClass("active-pc");
});
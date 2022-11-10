$(".dashboard .wrapper .nav-list .icons li button").click( function() {
    if($(this).hasClass("active")) {
      $(".dashboard .wrapper .nav-list .pop-up-cs .inside-cs").fadeOut();
      $(".dashboard .wrapper .nav-list .pop-up-cs").removeClass("active-pop-cs");
      $(".dashboard .wrapper .nav-list .icons li button").removeClass("active");
    }
    else {
      if($(this).hasClass("no-pop")) {
        $(".dashboard .wrapper .nav-list .pop-up-cs .inside-cs").hide();
        $(".dashboard .wrapper .nav-list .icons li button").removeClass("active");
        $(this).addClass("active");
        $(".dashboard .wrapper .content .block-l-c .lg-menu-c ul li").removeClass("active");
        $(`.dashboard .wrapper .content .main-block`).hide();
        $(`.dashboard .wrapper .content .main-block[data-page="${$(this).data("pop")}"]`).css("display", "flex");
      }
      else {
        $(".dashboard .wrapper .nav-list .pop-up-cs .inside-cs").hide();
        $(".dashboard .wrapper .nav-list .icons li button").removeClass("active");
        $(this).addClass("active");
        $(".dashboard .wrapper .nav-list .pop-up-cs").addClass("active-pop-cs");
        var getTY = $(this).data("pop");
        $(`.dashboard .wrapper .nav-list .pop-up-cs [data-page="${getTY}"] `).fadeToggle();
      }
    }
});
$(".dashboard .wrapper .mobile-header .user-pref .cs .btn-pr").click( function() {
  $(".dashboard .wrapper .mobile-header .user-pref .cs button").removeClass("active");
  $(".dashboard .wrapper .nav-list .pop-up-cs .inside-cs").hide();
  $(".dashboard .wrapper .nav-list .icons li button").removeClass("active");
  $(".dashboard .wrapper .content .block-l-c .lg-menu-c ul li").removeClass("active");
  $(`.dashboard .wrapper .content .main-block`).hide();
  $(`.dashboard .wrapper .content .main-block[data-page="${$(this).data("pop")}"]`).css("display", "flex");
  $(this).addClass("active");
  $(".dashboard .wrapper .mobile-navbar").slideUp();
  $(".dashboard .wrapper .mobile-header .menu button").removeClass("is-active");
});


var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
  $(".dashboard .wrapper .mobile-navbar").slideToggle();
});

/* DESKTOP CALCULATOR */
$(".dashboard .wrapper .content .orc .picker-borad .select-cst button").click( function() {
  $(".dashboard .wrapper .content .orc .picker-borad .select-cst button").removeClass("active");
  $(this).addClass("active");
  $(this).parent().attr("data-selected", $(this).data("num"));
});

$(".dashboard .wrapper .content .orc .bag-tool .page .block-ui .selects-cst .selected-s-wth").click( function() {
  if(!$(this).parent().hasClass("active-pc")) {
    $(".dashboard .wrapper .content .orc .bag-tool .page .block-ui .selects-cst").removeClass("active-pc");
    $(this).parent().toggleClass("active-pc");
  }
  else {
    $(this).parent().removeClass("active-pc");
  }
});

$(".dashboard .wrapper .content .orc .bag-tool .page .block-ui .selects-cst .selected-s .clc").click( function() {
  if(!$(this).parent().parent().hasClass("active-pc")) {
    $(".dashboard .wrapper .content .orc .bag-tool .page .block-ui .selects-cst").removeClass("active-pc");
    $(this).parent().parent().toggleClass("active-pc");
  }
  else {
    $(this).parent().parent().removeClass("active-pc");
  }
});

$(".dashboard .wrapper .content .orc .bag-tool .page .block-ui .selects-cst .picker-s ul li button").click( function() {
  $(this).parent().siblings().removeClass("active-btn");
  $(this).parent("li").addClass("active-btn");
  var nbr = $(this).data("value");
  $(this).parents(':eq(2)').siblings("select").find("option").removeAttr("selected");
  $(this).parents(':eq(2)').siblings("select").val(nbr).trigger('change');
  $(this).parents(':eq(2)').siblings("select").find(`option[value="${nbr}`).attr("selected", "");
  $(this).closest(".selects-cst").find("span").text($(this).text());
  $(this).parent().closest(".selects-cst").toggleClass("active-pc");
});

/* ORDERS PAGE */
$(".order-history .in-field-c .picker-c").click( function() {
    $(".order-history .in-field-c .picker-c .choice").fadeToggle(100);
});
$(".order-history .in-field-c .picker-c .choice ul li button").click( function() {
    var getTXT = $(this).text();
    $(".order-history .in-field-c .picker-c .choice ul li button").removeClass("active");
    $(this).addClass("active");
    $(".content .block-c-c .order-history .in-field-c .picker-c .origin span").text(getTXT);
    var nbr = $(this).data("value");
    $(".in-field-c select option").removeAttr("selected"); //remove old filter option select
    $(".in-field-c select").val(nbr).trigger('change');
    $(`.in-field-c select option[value="${nbr}"]`).attr("selected", "");
});
$(`.dashboard .wrapper .content .block-l-c .lg-menu-c ul li button[data-page="main"]`).parent("li").addClass("active");
$(`.dashboard .wrapper .content .main-block[data-page="main"]`).css("display", "flex");

$('.dashboard .wrapper .content .block-c-c .slider-c .owl-carousel').owlCarousel({
    loop: true,
    items : 2,
    margin: 20,
    dots: true,
    dotsEach: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            margin: 14
        },
        600:{
            items:2
        }
    }
});

$('.dashboard .wrapper .content .main-block .sides .right .slider-c .owl-carousel').owlCarousel({
  loop: false,
  items : 2,
  margin: 10,
  dots: true,
  dotsEach: true,
  responsiveClass: true,
  responsive:{
      0:{
        items: 1
      },
      700:{
        items: 2
      },
      1100:{
        items: 1
      }
  }
});

$(`.dashboard .wrapper .content .main-block[data-page="parcels"] .router ul li .selects-cst`).click( function() {
  $(this).closest(".selects-cst").toggleClass("active-pc");
});

$(`.dashboard .wrapper .content .main-block[data-page="parcels"] .router ul li .selects-cst .picker-s button`).click( function() {
  $(`.dashboard .wrapper .content .main-block[data-page="parcels"] .router ul li .selects-cst .picker-s ul li`).removeClass("active-btn-c");
  $(this).parent("li").addClass("active-btn-c");
  var nbr = $(this).data("value");
  $(`.dashboard .wrapper .content .main-block[data-page="parcels"] .router ul li .selects-cst select option`).removeAttr("selected"); //remove old filter option select
  $(`.dashboard .wrapper .content .main-block[data-page="parcels"] .router ul li .selects-cst select`).val(nbr).trigger('change');
  $(`.dashboard .wrapper .content .main-block[data-page="parcels"] .router ul li .selects-cst select option[value="${nbr}"]`).attr("selected", "");
  $(this).closest(".selects-cst").find("span").text($(this).text());
});

function unitFormatter(num) {
  var masst =  Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + ' kq.' : Math.sign(num)*Math.abs(num) + ' qr.';
  $("#RealrangeValue").text(masst);
};

$(".dashboard .wrapper .content .block-c-c .order-history .in-field-c-m .picker-c").click( function() {
  $(this).toggleClass("active");
});
$(".dashboard .wrapper .content .block-c-c .order-history .in-field-c-m .picker-c .choice ul li button").click( function() {
  $(".dashboard .wrapper .content .block-c-c .order-history .in-field-c-m .picker-c .choice ul li button").parent("li").removeClass("active-cs");
  $(this).parent("li").addClass("active-cs");
  var nbr = $(this).data("value");
  $(".in-field-c-m select option").removeAttr("selected"); //remove old filter option select
  $(".in-field-c-m select").val(nbr).trigger('change');
  $(`.in-field-c-m select option[value="${nbr}"]`).attr("selected", "");
});

$(".wrapper .content .col-three-cs .block-rl .go-top button").click( function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

$(".dashboard .wrapper .list ul li button").click( function() {
  $(".dashboard .wrapper .content .block-l-c .lg-menu-c ul li").removeClass("active");
  $(`.dashboard .wrapper .content .main-block[data-page="notify-new"] .sides .right`).css("opacity", "0");
  $(this).parent("li").addClass("active");
  $(".dashboard .wrapper .nav-list .pop-up-cs .inside-cs").fadeOut();
  $(".dashboard .wrapper .nav-list .icons li button").removeClass("active");
  $(`.dashboard .wrapper .content .main-block`).hide();
  $(`.dashboard .wrapper .content .main-block[data-page="${$(this).data("page")}"]`).css("display", "flex");
  $(`.dashboard .wrapper .content .main-block[data-page="notify-new"] .sides .left .select-country-cs ul li button`).removeClass("active");
  $(`.dashboard .wrapper .content .main-block[data-page="notify-new"] .sides .left .diver .no-slct`).css("display", "flex");
  $(`.dashboard .wrapper .content .main-block[data-page="notify-new"] .sides .left .diver .country-page`).css("display", "none");

});

$(".dashboard .wrapper .mobile-navbar .block-ui .order-pref button").click( function() {
  $(".dashboard .wrapper .content .block-l-c .lg-menu-c ul li").removeClass("active");
  $(this).parent("li").addClass("active");
  $(".dashboard .wrapper .nav-list .pop-up-cs .inside-cs").fadeOut();
  $(".dashboard .wrapper .nav-list .icons li button").removeClass("active");
  $(`.dashboard .wrapper .content .main-block`).hide();
  $(`.dashboard .wrapper .content .main-block[data-page="${$(this).data("page")}"]`).css("display", "flex");
  $(".dashboard .wrapper .mobile-navbar").slideUp();
  $(".dashboard .wrapper .mobile-header .menu button").removeClass("is-active");
});

$(".dashboard .wrapper .content .block-l-c .lg-menu-c ul li button").click( function() {
  $(".dashboard .wrapper .content .block-l-c .lg-menu-c ul li").removeClass("active");
  $(this).parent("li").addClass("active");
  $(".dashboard .wrapper .nav-list .pop-up-cs .inside-cs").fadeOut();
  $(".dashboard .wrapper .nav-list .icons li button").removeClass("active");
  $(`.dashboard .wrapper .content .main-block`).hide();
  $(`.dashboard .wrapper .content .main-block[data-page="${$(this).data("page")}"]`).css("display", "flex");
});

$(".dashboard .wrapper .mobile-navbar .block-ui ul li button").click( function() {
  if(!$(this).hasClass("no-page")) {
    $(".dashboard .wrapper .content .block-l-c .lg-menu-c ul li").removeClass("active");
    $(".dashboard .wrapper .mobile-header .user-pref .cs button").removeClass("active");
    $(this).parent("li").addClass("active");
    $(".dashboard .wrapper .nav-list .pop-up-cs .inside-cs").fadeOut();
    $(".dashboard .wrapper .nav-list .icons li button").removeClass("active");
    $(`.dashboard .wrapper .content .main-block`).hide();
    $(`.dashboard .wrapper .content .main-block[data-page="${$(this).data("page")}"]`).css("display", "flex");
    $(".dashboard .wrapper .mobile-navbar").slideToggle();
    $(".dashboard .wrapper .mobile-header .menu button").toggleClass("is-active");
    $(`.dashboard .wrapper .content .main-block[data-page="parcels"] .router ul li .selects-cst .picker-s ul li`).removeClass("active-btn-c");
    $("html, body").animate({ scrollTop: 0 }, "slow");
  }
});

$(".dashboard .wrapper .nav-list .pop-up-cs .inside-cs .block-ui ul li button").click( function() {
  if(!$(this).hasClass("no-page")) {
    $(".dashboard .wrapper .content .block-l-c .lg-menu-c ul li").removeClass("active");
    $(this).parent("li").addClass("active");
    $(".dashboard .wrapper .nav-list .pop-up-cs .inside-cs").fadeOut();
    $(".dashboard .wrapper .nav-list .icons li button").removeClass("active");
    $(`.dashboard .wrapper .content .main-block`).hide();
    $(`.dashboard .wrapper .content .main-block[data-page="${$(this).data("page")}"]`).css("display", "flex");
  }
});

$(`.dashboard .wrapper .content .main-block[data-page="parcels"] .blockes-ui .card-cs .body .details ul li span[data-invoice]`).click( function() {
  $(".invoice-board").fadeIn(100);
  $("body").addClass("disable-body-temp-scrol");
  $(".wrapper .dashboard-mdl .body .sh-nav .txt__").text($(this).data("invoice"));
});

$(".wrapper .dashboard-mdl .body .sh-nav .close button, .wrapper .dashboard-mdl .body .mobile-sh-nav .close button").click( function() {
  $($(this).data("page")).fadeOut(100);
  $("body").removeClass("disable-body-temp-scrol");
});

$(`.dashboard .wrapper .content .main-block[data-page="parcels"] .blockes-ui .card-cs .body .warning button`).click( function() {
  $(".incompleted-invoice-board").fadeIn(100);
  $("body").addClass("disable-body-temp-scrol");
});

$("#fileInputCs").change( function() {
  console.log("ll");
  var fs = $('input[type=file]').val().replace(/C:\\fakepath\\/i, '')
  $(".wrapper .dashboard-mdl .input-field-cs label").text("Seçilən fayl: " + fs);
});

$(`.dashboard .wrapper .content .main-block[data-page="orders"] .router ul li .selects-cst`).click( function() {
  $(this).closest(".selects-cst").toggleClass("active-pc");
});

$(`.dashboard .wrapper .content .main-block[data-page="orders"] .router ul li .selects-cst .picker-s button`).click( function() {
  $(`.dashboard .wrapper .content .main-block[data-page="orders"] .router ul li .selects-cst .picker-s ul li`).removeClass("active-btn-c");
  $(this).parent("li").addClass("active-btn-c");
  var nbr = $(this).data("value");
  $(`.dashboard .wrapper .content .main-block[data-page="orders"] .router ul li .selects-cst select option`).removeAttr("selected");
  $(`.dashboard .wrapper .content .main-block[data-page="orders"] .router ul li .selects-cst select`).val(nbr).trigger('change');
  $(`.dashboard .wrapper .content .main-block[data-page="orders"] .router ul li .selects-cst select option[value="${nbr}"]`).attr("selected", "");
  $(this).closest(".selects-cst").find("span").text($(this).text());
});

$(`.dashboard .wrapper .content .main-block[data-page="orders"] .blockes-ui .card-cs .checker .cancelled`).click( function() {
  $(".canceled-board").fadeIn(100);
  $("body").addClass("disable-body-temp-scrol");
});
$(`.dashboard .wrapper .content .main-block[data-page="orders"] .blockes-ui .card-cs .checker .pay`).click( function() {
  $(".pay-board").fadeIn(100);
  $("body").addClass("disable-body-temp-scrol");
});
function EmptyOrder(state) {
  if (state == false) {
    $(`.dashboard .wrapper .content .main-block[data-page="orders"] .blockes-ui`).css("display", "flex");
    $(`.dashboard .wrapper .content .main-block[data-page="orders"] .empty-order`).hide();
  }
  else {
    $(`.dashboard .wrapper .content .main-block[data-page="orders"] .blockes-ui`).hide();
    $(`.dashboard .wrapper .content .main-block[data-page="orders"] .empty-order`).css("display", "flex");
  }
}
$(`.dashboard .wrapper .content .main-block[data-page="parcels"] .blockes-ui .card-cs .checker .pay`).click( function() {
  $(".pay-board").fadeIn(100);
  $("body").addClass("disable-body-temp-scrol");
});

$(".wrapper .dashboard-mdl .body .look-detailed button").click( function() {
  $(this).parent().siblings(".transport-status").find("ul").toggleClass("expanded");
});


//addresses
$(`.dashboard .wrapper .content .main-block[data-page="addresses"] .orc-addresses .picker-borad .select-cst button`).click( function() {
  $(`.dashboard .wrapper .content .main-block[data-page="addresses"] .orc-addresses .picker-borad .select-cst button`).removeClass("active");
  $(this).toggleClass("active");
  $(`.dashboard .wrapper .content .main-block[data-page="addresses"] .orc-addresses .bag-tool .page`).removeClass("active");
  $(`.dashboard .wrapper .content .main-block[data-page="addresses"] .orc-addresses .bag-tool .page[data-page="${$(this).data("num")}"]`).addClass("active");
  $(`.dashboard .wrapper .content .main-block[data-page="addresses"] .orc-addresses .picker-borad .select-cst`).attr("data-selected", $(this).data("num"));
});

$(`.dashboard .wrapper .content .main-block[data-page="addresses"] .address-list button`).click( function() {
  if($(this).hasClass("active")) {
    $(this).removeClass("active");
    $(this).text("Ətraflı");
  }
  else {
    $(this).addClass("active");
    $(this).text("Bağla");
  }
  $(this).parent().siblings(".informations").toggleClass("active-info");
});
$(`.dashboard .wrapper .content .main-block[data-page="addresses"] .address-list .informations .info-sm .copy-icon`).click( function() {
  console.log($(this).siblings().closest(".txt"));
});
$(`.dashboard .wrapper .content .main-block[data-page="cart"] .sides .right .order-type .order-btn-cs button`).click( function() {
  $(`.dashboard .wrapper .content .main-block[data-page="cart"] .sides .right .order-type .order-btn-cs button`).removeClass("active");
  $(this).addClass("active");
});

$(`.fake-board .checkbox input[type="checkbox"], .radio input[type="radio"]`).click( function() {
  var checkBoxes = $(`.list-box-cs .checkbox input[type="checkbox"], .radio input[type="radio"]`);
  $(this).is(":checked") ? checkBoxes.prop("checked", true) : checkBoxes.prop( "checked", false );
});

$(`.dashboard .wrapper .content .main-block[data-page="cart"] .sides .right .promo-code-field .inside-cs .front`).click( function() {
  $(this).hide();
  $(this).siblings(".back").css("display", "flex");
});
$(`.dashboard .wrapper .content .main-block[data-page="cart"] .sides .right .promo-code-field .inside-cs .back .close-btn-cs`).click( function() {
  $(this).parent().closest(".back").hide();
  $(this).parent().siblings(".front").css("display", "flex");
});

/* CALCULATOR SECTION */
/* 1 */
$(`.dashboard .wrapper .content .main-block[data-page="calculator"] .mobile-calculator .selects-cst .selected-s`).click( function() {
  $(this).parent().closest(".selects-cst").toggleClass("active-pc");
});

$(`.dashboard .wrapper .content .main-block[data-page="calculator"] .mobile-calculator .selects-cst .picker-s ul li button`).click( function() {
  $(this).parent().siblings().removeClass("active-cs");
  $(this).parent("li").addClass("active-cs");
  var nbr = $(this).data("value");
  $(this).parents(':eq(2)').siblings("select").find("option").removeAttr("selected");
  $(this).parents(':eq(2)').siblings("select").val(nbr).trigger('change');
  $(this).parents(':eq(2)').siblings("select").find(`option[value="${nbr}`).attr("selected", "");
  $(this).closest(".selects-cst").find("span").text($(this).text());
  $(this).parent().closest(".selects-cst").toggleClass("active-pc");
});
/* 2 */
$(`.dashboard .wrapper .content .main-block[data-page="calculator"] .mobile-calculator .input-tv .selects-cst-in .selected-s .rdf`).click( function() {
  $(this).parent().closest(".selects-cst-in").toggleClass("active-pc");
});

$(`.dashboard .wrapper .content .main-block[data-page="calculator"] .mobile-calculator .input-tv .selects-cst-in .picker-s ul li button`).click( function() {
  $(this).parent().siblings().removeClass("active-cs");
  $(this).parent("li").addClass("active-cs");
  var nbr = $(this).data("value");
  $(this).parents(':eq(2)').siblings("select").find("option").removeAttr("selected");
  $(this).parents(':eq(2)').siblings("select").val(nbr).trigger('change');
  $(this).parents(':eq(2)').siblings("select").find(`option[value="${nbr}`).attr("selected", "");
  $(this).closest(".selects-cst-in").find("span").text($(this).text());
  $(this).parent().closest(".selects-cst-in").toggleClass("active-pc");
});

$(`.dashboard .wrapper .content .main-block[data-page="calculator"] .mobile-calculator .calculate-btn button`).click( function() {
  $(".calculate-board").fadeIn(100);
});

/* KURYER */
$(`.dashboard .wrapper .content .main-block[data-page="delivery"] .blockes-ui .card-cs .checker .pay`).click( function() {
  $(".pay-board").fadeIn(100);
  $("body").addClass("disable-body-temp-scrol");
});
/* PAGE 1X */
function detectOrderC() {
  var size__ = $(`.dashboard .wrapper .content .main-block[data-page="delivery-1x"] .sides .right .total-order-list .card-cs`).length;
  if(size__ > 1) {
    $(`.dashboard .wrapper .content .main-block[data-page="delivery-1x"] .sides .right .total-order-list`).addClass("card-cs-more");
  }
  else {
    $(`.dashboard .wrapper .content .main-block[data-page="delivery-1x"] .sides .right .total-order-list`).removeAttr("card-cs-more");
  }
}
$(`.dashboard .wrapper .content .main-block[data-page="delivery"] .router ul li .kurye-btn`).click( function() {
  $(".dashboard .wrapper .content .block-l-c .lg-menu-c ul li").removeClass("active");
  $(".dashboard .wrapper .nav-list .pop-up-cs .inside-cs").fadeOut();
  $(".dashboard .wrapper .nav-list .icons li button").removeClass("active");
  $(`.dashboard .wrapper .content .main-block`).hide();
  $(`.dashboard .wrapper .content .main-block[data-page="delivery-1x"]`).css("display", "flex");
  detectOrderC();
});

/* SİFARİŞ ET */

$(`.dashboard .wrapper .content .main-block[data-page="order-new"] .sides .left .diver .input-field .input-rw-select .selects-cst .selected-s`).click( function() {
  if(!$(this).parents(".input").hasClass("active-pc")) {
    $(`.dashboard .wrapper .content .main-block[data-page="order-new"] .sides .left .diver .input-field .input-rw .selects-cst`).parents(".input").removeClass("active-pc");
    $(this).parents(".input").toggleClass("active-pc");
  }
  else {
    $(this).parents(".input").removeClass("active-pc");
  }
});
$(`.dashboard .wrapper .content .main-block[data-page="order-new"] .sides .left .diver .input-field .input-rw .selects-cst .picker-s ul li button`).click( function() {
  $(this).parent().siblings().removeClass("active-btn");
  $(this).parent("li").addClass("active-btn");
  var nbr = $(this).data("value");
  $(this).parents(':eq(2)').siblings("select").find("option").removeAttr("selected");
  $(this).parents(':eq(2)').siblings("select").val(nbr).trigger('change');
  $(this).parents(':eq(2)').siblings("select").find(`option[value="${nbr}`).attr("selected", "");
  $(this).closest(".selects-cst").find("span").text($(this).text());
  $(this).parent().closest(".input").toggleClass("active-pc");
});

$(document).on("click",`.input-rw-mc .count .arrow`, function() {
  let count_div = $(this).parent().find(".mc");
  let count_size = Number($(count_div).text());
  if ($(this).hasClass("arrow-left")) {
      if(count_size >= 2) {
          count_size--;
      }
  }
  else {
      count_size++;
  }
  $(count_div).text(count_size);
});

/* BƏYAN ET */
$(`.dashboard .wrapper .content .main-block[data-page="notify-new"] .sides .left .select-country-cs ul li button`).click( function() {
  $(`.dashboard .wrapper .content .main-block[data-page="notify-new"] .sides .left .select-country-cs ul li button`).removeClass("active");
  $(this).addClass("active");
  $(`.dashboard .wrapper .content .main-block[data-page="notify-new"] .sides .right`).css("opacity", "1");
  console.log($(this).data("c"));
  $(`.dashboard .wrapper .content .main-block[data-page="notify-new"] .sides .left .diver .no-slct`).hide();
  $(`.dashboard .wrapper .content .main-block[data-page="notify-new"] .sides .left .diver .country-page[data-c="${$(this).data("c")}"]`).css("display", "flex");
});

$(`.dashboard .wrapper .content .main-block[data-page="notify-new"] .sides .left .diver .country-page .input-field .input-rw-select .selects-cst .selected-s`).click( function() {
  $(this).parents(".input").toggleClass("active-pc");
});
$(`.dashboard .wrapper .content .main-block[data-page="notify-new"] .sides .left .diver .country-page .input-field .input-rw .selects-cst .picker-s ul li button`).click( function() {
  $(this).parent().siblings().removeClass("active-btn");
  $(this).parent("li").addClass("active-btn");
  var nbr = $(this).data("value");
  $(this).parents(':eq(2)').siblings("select").find("option").removeAttr("selected");
  $(this).parents(':eq(2)').siblings("select").val(nbr).trigger('change');
  $(this).parents(':eq(2)').siblings("select").find(`option[value="${nbr}`).attr("selected", "");
  $(this).closest(".selects-cst").find("span").text($(this).text());
  $(this).parent().closest(".input").toggleClass("active-pc");
});
$("#main_cat .picker-s ul li button").click( function() {
  var cat_real_id = $(this).parents(':eq(2)').siblings("select").find(":selected").attr("data-id");
  console.log(cat_real_id);
});

/* FAYL Yükləmə */
$("#DragfileInputCs").change( function() {
  var fs__22 = $('input[type=file]').val().replace(/C:\\fakepath\\/i, '')
  $(".invoice-upload label").html(`<span>Seçilən fayl: ${fs__22.replace(/ /g,'')}</span>`);
});

;( function ( document, window, index )
	{
		// feature detection for drag&drop upload
		var isAdvancedUpload = function()
			{
				var div = document.createElement( 'div' );
				return ( ( 'draggable' in div ) || ( 'ondragstart' in div && 'ondrop' in div ) ) && 'FormData' in window && 'FileReader' in window;
			}();

		// applying the effect for every form
		var forms = document.querySelectorAll( '.invoice-upload' );
		Array.prototype.forEach.call( forms, function( form )
		{
			var input		 = form.querySelector( 'input[type="file"]' ),
				label		 = form.querySelector( 'label' ),
				droppedFiles = false,
				showFiles	 = function( files )
				{
					label.innerHTML = `<span>Seçilən fayl: ${files[ 0 ].name.replace(/ /g,'')}</span>`;
				},
				triggerFormSubmit = function()
				{
					var event = document.createEvent( 'HTMLEvents' );
					event.initEvent( 'submit', true, false );
					form.dispatchEvent( event );
				};

			// drag&drop files if the feature is available
			if( isAdvancedUpload )
			{
				form.classList.add( 'has-advanced-upload' ); // letting the CSS part to know drag&drop is supported by the browser

				[ 'drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop' ].forEach( function( event )
				{
					form.addEventListener( event, function( e )
					{
						// preventing the unwanted behaviours
						e.preventDefault();
						e.stopPropagation();
					});
				});
				[ 'dragover', 'dragenter' ].forEach( function( event )
				{
					form.addEventListener( event, function()
					{
						form.classList.add( 'is-dragover' );
					});
				});
				[ 'dragleave', 'dragend', 'drop' ].forEach( function( event )
				{
					form.addEventListener( event, function()
					{
						form.classList.remove( 'is-dragover' );
					});
				});
				form.addEventListener( 'drop', function( e )
				{
					droppedFiles = e.dataTransfer.files; // the files that were dropped
					showFiles( droppedFiles );
          
          triggerFormSubmit();
        });
			}
		});
	}( document, window, 0 ));

$(document).click(function(e) {
  $('.selects-cst').not($('.selects-cst').has($(e.target))).removeClass('active-pc');
  $('.selects-cst').not($('.selects-cst').has($(e.target))).parents(".input").removeClass("active-pc");

});

$('.dashboard-mdl').click( function() {
  $("body").removeClass("disable-body-temp-scrol");
  $('.dashboard-mdl').hide();
});

$('.dashboard-mdl .body').children().click( function(e) {
  return false;
});

/* STORY */
var stories = new Zuck('stories', {
  backNative: true,
  previousTap: true,
  skin: "Snapssenger",
  autoFullScreen: false,
  avatars: false,
  paginationArrows: false,
  list: false,
  cubeEffect: false,
  localStorage: true,
  stories: [ 
    Zuck.buildTimelineItem(
      "Yeniliklər", 
      "",
      "Yeniliklər",
      "https://karqo.tld",
      timestamp(),
      [
        ["yenililer-1", "photo", 3, "assets/img/story_1.png", "assets/img/story_prev.png", '', false, false, timestamp()],
        ["yenilikler-2", "photo", 0, "assets/img/story_1.png", "assets/img/story_prev.png", '', false, false, timestamp()],
        ["yenilikler-3", "photo", 0, "assets/img/story_1.png", "assets/img/story_prev.png", '', false, false, timestamp()],
        ["yenilikler-4", "photo", 0, "assets/img/story_1.png", "assets/img/story_prev.png", '', false, false, timestamp()]
      ]
    ),
    Zuck.buildTimelineItem(
      "Kampaniyalar",
      "",
      "Kampaniyalar",
      "https://karqo.tld",
      timestamp(),
      [
        ["kampaniyalar-1", "photo", 3, "assets/img/story_1.png", "assets/img/story_prev.png", '', false, false, timestamp()]
      ]
    ),
    Zuck.buildTimelineItem(
      "Loyallıq",
      "",
      "Loyallıq",
      "https://karqo.tld",
      timestamp(),
      [
        ["loyalliq-1", "photo", 3, "assets/img/story_1.png", "assets/img/story_prev.png", 'http://karqo.tld', false, false, timestamp()]
      ]
    ),
    Zuck.buildTimelineItem(
      "Hədiyyələr",
      "",
      "Hədiyyələr",
      "https://karqo.tld",
      timestamp(),
      [
        ["hediyyeler-1", "photo", 10, "assets/img/story_1.png", "assets/img/story_prev.png", '', false, false, timestamp()]
      ]
    ),
    Zuck.buildTimelineItem(
      "Üstünlüklər",
      "",
      "Üstünlüklər",
      "https://karqo.tld",
      timestamp(),
      [
        ["ustunlukler-1", "photo", 10, "assets/img/story_1.png", "assets/img/story_prev.png", '', false, false, timestamp()]
      ]
    ),
    Zuck.buildTimelineItem(
      "BOS",
      "",
      "BOS",
      "https://karqo.tld",
      timestamp(),
      [
        ["BOS-1", "photo", 10, "assets/img/story_1.png", "assets/img/story_prev.png", '', false, false, timestamp()]
      ]
    )
  ]
});

$(document).on("click", ".story-pl .move-elem-c", function() {
  $("#stories").animate({ scrollLeft: 400 }, 500);
})
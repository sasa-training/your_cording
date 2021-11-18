$(function() {
  ///お問い合わせ
  $('.contact input[name="check"]').change(function() {
    if ( $(this).is(':checked') )
      $('#btnSend').prop('disabled',false);
    else
      $('#btnSend').prop('disabled',true);
    $('#is').text(
      $(this).is(':checked') ? "" : "プライバシポリシーの同意は必須です"
    );
  });
  ///ヘッダー追従
  // リロード時
  const $header = $('header');
  const $window = $(window);
  const $nav = $('.gNavi');
  const open_toggle = 'open_toggle';
  /// ナビ 
  $(".toggle-btn").click(function() {
    const $this = $(this);
    $this.toggleClass(open_toggle);
    if ($this.hasClass(open_toggle)) {
      $nav.addClass(open_toggle);
    } else {
      $nav.removeClass(open_toggle);
    } 
  });
  /// ナビクリック
  // リロード時
    $('.gNavi__inner a[href]').on('click',function() {
      $('.toggle-btn').removeClass('open_toggle');
      $('nav').removeClass('open_toggle');
    });
  let $windowWidth = $window.width();
  let $breakpoints = 768;
  // リロード時
  // ウィンドウサイズ768px以下の場合、クラスを削除
  if (window.matchMedia( "(max-width: 768px)" ).matches) {
    $(function(){
      $nav.removeClass(open_toggle);
      $('button').removeClass(open_toggle);
    });
  };
  // リサイズ時
  $window.resize(function(){
    if ($windowWidth > $breakpoints) {
      $nav.removeClass(open_toggle);
      $('button').removeClass(open_toggle);
    }
  });

  /// FAQ 
  $('.faq__inner dt').click(function(){
    $(this).next('.faq__inner dd').slideToggle();
    $(this).toggleClass('open');
  });

  // スライダー
  let mySwiper = new Swiper ('.swiper', {
    slideToClickedSlide: true,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    navigation: { 
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev', 
    },
    breakpoints: {
        1280: { 
            slidesPerView: 4.5,
            spaceBetween: 56,
        },
        980: { 
            slidesPerView: 3.5,
            spaceBetween: 56,
        },
        768: {  
            slidesPerView: 3.5,
            spaceBetween: 32,
        },
        600: { 
            slidesPerView: 1.5,
            spaceBetween: 24,
        },
        0: { 
            slidesPerView: 1.5,
            spaceBetween: 24,
        },
      },
  });
});

$(document).ready(function () {
  const hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button_next',
      prevEl: '.hotel-slider__button_prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
  });

const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button_next',
    prevEl: '.reviews-slider__button_prev',
  },
  keyboard: {
      enabled: true,
      onlyInViewport: false,
  },
});

var menuButton = $('.menu-button');
menuButton.on('click', function () {
  $('.navbar-bottom').toggleClass('navbar-bottom_visible');
});

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);
    
  function openModal() {
    var modalOwerLay = $('.modal__owerlay');
    var modalDialog = $('.modal__dialog');
    modalOwerLay.addClass('modal__owerlay_visible');
    modalDialog.addClass('modal__dialog_visible');
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOwerLay = $('.modal__owerlay');
    var modalDialog = $('.modal__dialog');
    modalOwerLay.removeClass('modal__owerlay_visible');
    modalDialog.removeClass('modal__dialog_visible');
  }
});
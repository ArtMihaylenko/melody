$(document).ready(function () {
  var currentFloor = 2;
  var floorPath = $(".home-image path");
  var counterUp = $(".counter-up");
  var counterDown = $(".counter-down");
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var currentFlat = 1;
  var flatsPath = $(".flats path");
  var viewFlatsButton = $(".view-flats");
  var flatsPathItem = $(".flat-item a"); // характеристики квартир


  floorPath.on('mouseover', function () {
    currentFloor = $(this).attr("data-floor");
    floorPath.removeClass("current-floor");
    $(".counter").text(currentFloor);
  });

  floorPath.on('click', toggleModal);
  modalCloseButton.on('click', toggleModal);
  viewFlatsButton.on('click', toggleModal);


  counterUp.on('click', function () {
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString('en-Us', { minimumIntegerDigits: 2, useGrouping:false });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
  counterDown.on('click', function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString('en-Us', { minimumIntegerDigits: 2, useGrouping:false });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
  //   flatPath.on('mouseover', function () {
  //   currentFlat = $(this).attr("data-flat");
  //   flatPath.removeClass("current-flat");
  //   $(".modal-counter").text(currentFlat);
  // });

  flatsPath.on('mouseover', function () {
    currentFlat = $(this).attr("data-flat"); // записываем текущее значение в переменную с квартирами
    flatsPath.removeClass("current-flat"); // удаляем класс квартир
    flatsPathItem.removeClass("current-flats-item"); // удаляем класс характеристик квартиры
    $(`[data-flat=${currentFlat}]`).toggleClass("current-flat"); // добавляем класс квартиры
    $(`[data-item=${currentFlat}]`).toggleClass("current-flats-item"); // добавляем класс характеристик квартиры
  });

  flatsPathItem.on('mouseover', function () {
    currentFlat = $(this).attr("data-item"); // записываем текущее значение в переменную с квартирами
    flatsPath.removeClass("current-flat"); // удаляем класс квартир
    flatsPathItem.removeClass("current-flats-item"); // удаляем класс характеристик квартиры
    $(`[data-flat=${currentFlat}]`).toggleClass("current-flat"); // добавляем класс квартиры
    $(`[data-item=${currentFlat}]`).toggleClass("current-flats-item"); // добавляем класс характеристик квартиры
    //  $(".flat-counter").text(currentFlat);
    })

  function toggleModal() {
    modal.toggleClass("is-open");    
  }
});
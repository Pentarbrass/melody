$(document).ready(function () {
    let currentFloor = 2;
    let floorPath = $('.home-image path');
    let counterUp = $('.counter-up');
    let counterDown = $('.counter-down');
    let modal = $('.modal');
    let modalCloseButton = $('.modal-close-button');
    let viewFlatsButton = $('.view-flats');
    let clearFloor = function () {
        floorPath.removeClass('current-floor');
    };
    let toggleModal = function () {
        modal.toggleClass('is-open');
    };
    floorPath.on('mouseover', function () {
        clearFloor();
        currentFloor = $(this).attr('data-floor');
        $('.counter').text(currentFloor);
    });
    counterUp.on('click', function () {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $('.counter').text(usCurrentFloor);
            clearFloor();
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });
    counterDown.on('click', function () {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $('.counter').text(usCurrentFloor);
            clearFloor();
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });
    floorPath.on('click', toggleModal);
    modalCloseButton.on('click', toggleModal);
    viewFlatsButton.on('click', toggleModal);
});
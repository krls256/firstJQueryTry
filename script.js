 $(document).ready(() => {
    // Modal
    const overlay = $('.overlay');
    const modal = $('.modal');
    const chooseTour = $('.col-sm-3:eq(1)');
    const getConsultation = $('.col-sm-3:eq(2)');
    const close = $('.close');

    chooseTour.on('click', () => {
        modal.slideDown();
         overlay.fadeIn('slow');
    })
    getConsultation.on('click', () => {
        modal.slideDown();
        overlay.fadeIn('slow');
    })
    close.on('click', () => {
        modal.slideUp();
        overlay.fadeOut('slow')
    })
})
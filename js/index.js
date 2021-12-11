$(function() {

    function magic(containerCh, ar) {
        if(containerCh.css('display') == 'block') {
            containerCh.hide();
            ar.css('transform', 'rotate(-90deg)');
        } else {
            containerCh.show();
            ar.css('transform', 'rotate(90deg)');
        }
    }

    $('.text').on('click', function() {
        let ar = $($(this)[0].children[0].children[1]);
        let containerCh = $($(this)[0].children[1]);

        magic(containerCh, ar);
    });
});
    


/*
    click
    this
    $(this)

    transform: rotate(90deg)
*/

$( document ).ready(function() {

    $('#usi-toggle').on('click', function (e) {
        e.preventDefault();
        let current = $('.user-info');


        if (current.hasClass( "usi-open" )) {
        	current.removeClass('usi-open');
        	current.addClass('usi-close');
        } else {
        	current.removeClass('usi-close');
        	current.addClass('usi-open');
        }
    });


    $('.toggle-hidden-menu').on('click', function (e) {
        e.preventDefault();
        let current = $(this).find('+ .menu-hidden');
        let menu_hidden = $(".menu-hidden");
        let act_a = $(".active-hidden-a");
        let current_a = $(this);

        act_a.each(function(i, elem) {
            if (elem !== current_a[0]) {
                $(this).removeClass("active-hidden-a")
            }
        });

        menu_hidden.each(function(i, elem) {
            if (elem !== current[0]) {
                $(this).removeClass("menu-hidden-open")
            }
        });

        $(this).toggleClass('active-hidden-a');
        current.toggleClass("menu-hidden-open");
    });


    $(document).mouseup(function (e) {
    // **** клік поза межами #usi-toggle та .user-info
        let usi = $(".user-info");
        let usi_toggle = $('#usi-toggle');

        if (usi.has(e.target).length === 0 && usi_toggle.has(e.target).length === 0 && e.target.id !== 'usi-toggle'){
            usi.removeClass('usi-open');
            usi.addClass('usi-close');
        }
     // **** клік поза межами #usi-toggle та .user-info


        // **** клік поза межами #menu-hidden
        let menu_hidden = $(".menu-hidden");
        let act_a = $('.toggle-hidden-menu');

        let tar_a = e.target.classList.contains("toggle-hidden-menu");
        let tar_a_parrent = e.target.parentElement.classList.contains("toggle-hidden-menu")

        let missed = tar_a_parrent || tar_a;

        if (menu_hidden.has(e.target).length === 0 && !e.target.classList.contains('menu-hidden') && !missed){
            menu_hidden.removeClass('menu-hidden-open');
            act_a.removeClass("active-hidden-a");

        }
        // **** клік поза межами #menu-hidden

    });
});
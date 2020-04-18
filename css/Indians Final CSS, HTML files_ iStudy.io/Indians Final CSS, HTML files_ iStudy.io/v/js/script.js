$(function(){
    var includes = $('[data-include]');
    jQuery.each(includes, function(){
        var file = '' + $(this).data('include') + '.html';
        $(this).load(file);
    });

    var inputs = document.querySelectorAll('input, [type="text"], input[type="datepicker"], input[type="file"], input[type="textarea"], input[type="password"], input[type="email"], input[type="number"]');
    infoTooltip = document.querySelectorAll('.info-tooltip'), body = document.querySelector('body');

//Inputs underline animation
    if (inputs) {
        for (var i = 0; i < inputs.length; i++) {
            if(!inputs[i].previousElementSibling) continue;
            inputs[i].previousElementSibling.classList.add('floating-label');
            inputs[i].addEventListener('focusin', function () {
                this.previousElementSibling.classList.add('label-active');
            })
            inputs[i].addEventListener('focusout', function () {
                if (!(this.value == '')) {
                    this.classList.add('input-active');
                }
                else if (this.value == '') {
                    this.classList.remove('input-active');
                    this.previousElementSibling.classList.remove('label-active');
                }
                else {
                    this.previousElementSibling.classList.remove('label-active');
                }
            })
        }
    }

//Required inputs
    if (inputs) {
        for (var m = 0; m < inputs.length; m++) {
            if (inputs[m].hasAttribute('required')) {
                inputs[m].previousElementSibling.classList.add('label-required');
            }
        }
    }

    if( $('#modal-id').length ) {
        $('#modal-id').modal('show');
    }

    if( $("#owl-demo").length ) {
        $("#owl-demo").owlCarousel({

            navigation: true, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,

            navigationText: ["<i class='fa fa-angle-left'>", "<i class='fa fa-angle-right'>"]

            // "singleItem:true" is a shortcut for:
            // items : 1,
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false

        });
    }

    if( $('[repeat]').length ) {
        var r = $('[repeat]');
        var r_c = r.attr('repeat');

        for( i = 0 ; i < (r_c  * 1) - 1 ; i++ ) {
            var html = r[0].outerHTML;
            html = html.replace(/{id}/g, (i+2));
            r.parent().append(html);
        }

        r[0].outerHTML = r[0].outerHTML.replace(/{id}/g, 1);

    }

    if( $('[data-repeat]').length ) {
        var r = $('[data-repeat]');
        var r_c = r.attr('data-repeat');

        for( i = 0 ; i < (r_c  * 1) - 1 ; i++ ) {
            var html = r[0].outerHTML;
            html = html.replace(/{id}/g, (i+2));
            r.parent().append(html);
        }

        r[0].outerHTML = r[0].outerHTML.replace(/{id}/g, 1);

    }

    if( $('[id^="go-user-"]').length ) {
        $('[id^="go-user-"]').click(function() {

            var id = $(this).find('a').attr("href");

            $('html, body').animate({
                scrollTop: $(id).offset().top
            }, 2000);
            return false;
        });
    }

});
function showCustomTooltip(){
    setTimeout(function(){
        if ($('html').hasClass('slideout-open')) {
            showCustomTooltip();
        } else {
            var $toggle = $('#custom-menu .toggle');
            if ($toggle.attr('data-toggle') !== undefined) {
                $toggle.foundation('show');
            }
        }
    }, 3000);
}

function changePositions() {
    var params = '',
        $sortBlock = $("#custom-menu .sortable"),
        url = $sortBlock.attr('data-url');
    
    $sortBlock.find('input').each(function() {
        var $parent = $(this).closest('.sortable-item'),
            isVisible = ($parent.hasClass('sortable-invisible')) ? '0' : '1';
        params = params + '|' + $(this).val() + '-' + isVisible;
    });
    url = url.replace('positions=', 'positions=' + params);
    window.location.href = url;
    applyChange();
}

$(document).ready(function(){
    if ($("#custom-menu").length > 0) {
        showCustomTooltip();
        
        var $customMenu = $('#custom-menu'),
            $tooltip = $('.tooltip-fixed'),
            BxPanel,
            customCalc = function(){
                var panelTop = 0, // отступ "Настройки решения" от верхней границы. Граница = край окна || панель управления Bitrix || шапка сайта на мобиле || закрепленное меню
                    offsetTop = 0, // расстояние, равное высоте панели управления Bitrix || высота шапки сайта на мобиле || высота закрепленного меню
                    bxPanelHeight = 0,
                    pageYOffset = window.pageYOffset,
                    headerHeight = $('header').innerHeight(),
                    foundationScreen = Foundation.MediaQuery.current;

                if (BxPanel !== undefined) {
                    bxPanelHeight = BxPanel.DIV.clientHeight;
                    offsetTop += bxPanelHeight;

                    if (pageYOffset >= offsetTop && BxPanel.isFixed() === false) {
                        panelTop += 0;
                    } else if (BxPanel.isFixed() === true) {
                        panelTop += bxPanelHeight;
                    } else {
                        panelTop = panelTop + bxPanelHeight - pageYOffset;
                    }
                }
                if ($.inArray(foundationScreen, ['small', 'medium', 'large']) !== -1) {
                    if (window.var.isMenuFixed) {
                        panelTop += headerHeight;
                    } else {
                        offsetTop += headerHeight;
                        if (offsetTop >= pageYOffset) {
                            panelTop = offsetTop - pageYOffset;
                        }
                    }
                }
                if (window.var.isMenuFixed) {
                    if ($.inArray(foundationScreen, ['xlarge', 'xxlarge']) !== -1) {
                        if (pageYOffset > window.var.menuPositionTop) {
                            panelTop += window.var.menuHeight;
                        }
                    }
                }
                $customMenu.css({
                    top: panelTop,
                    height: window.innerHeight - panelTop
                });
                $tooltip.css({top: panelTop + 5.5});
            };
        window.onscroll = customCalc;
        window.onresize = customCalc;
        if (window.BX !== undefined) {
            BX.ready(function(){
                BxPanel = BX.admin.panel;
                BX.addCustomEvent('onTopPanelCollapse',BX.delegate(customCalc,this));
                BX.addCustomEvent('onTopPanelFix',BX.delegate(customCalc,this));
            });
        }
        setTimeout(customCalc, 100);
    }

    $(document).on('click', '#custom-menu .toggle', function(){
        var $self = $(this);
        if ($self.attr('data-toggle') !== undefined) {
            $(this).foundation('hide');
        }
        $('#custom-menu').toggleClass('active').promise().done(function(){
            if (window.customCalc !== undefined) {
                customCalc();
            }
        });
    });
    
    $('#custom-menu .toggle').on('hide.zf.tooltip', function(){
        $(this).foundation('destroy');
    });

    $(document).on('change', '.custom-option:not(.jq-selectbox)', function(){
        window.location.href = $(this).val();
        applyChange();
    });
    
    var $colorpicker = $('#colorpicker'),
        $colorpickers = $('.colorpicker-element'),
        colorpickerParams = {
            format: 'hex',
            align: 'left',
            inline: true,
            sliders: {
                saturation: {
                    maxLeft: 150,
                    maxTop: 150
                },
                hue: {maxTop: 150}
            },
            container: '#custom-menu'
        };
    
    if ($colorpickers.length) {
        $colorpickers.each(function(){
            var $self = $(this);

            colorpickerParams['container'] = $self.attr('data-wrap');
            $self.colorpicker(colorpickerParams);
        });
        $colorpickers.on('changeColor', function(e){
            var $self = $(e.target),
                color = e.color.toHex().slice(1);

            $($self.attr('data-hex')).val(color);
            $self.addClass('change');
        });
        $('.colorpicker-input').mask('ffffff', {translation:{'f':{pattern:/[0-9a-fA-F]/}}});
        $(document).on('change', '.colorpicker-input', function(){
            var $self = $(this);

            $('.colorpicker-element[data-hex="#' + $self.attr('id') + '"]').colorpicker('setValue', '#' + $self.val());
        });
        $colorpicker.on('show.zf.dropdown', function(){
            $('.colorpicker-icon').removeClass('checked');
        });
        $colorpicker.on('hide.zf.dropdown', function(){
            if ($colorpickers.filter('.change').length > 0) {
                $('.colorpicker-icon').addClass('checked');
                $('.radio-color input[type="radio"]').prop('checked', false);
                var url = $('.colorpicker-icon').attr('data-url') + '&primary=' + $('#hex-color-primary').val() + '&secondary=' + $('#hex-color-secondary').val();
                window.location.href = url;
                applyChange();
            }
        });
    }
    
    $('#custom-menu .body').on('scroll', function(){
        if ($colorpicker.length && $colorpicker.hasClass('is-open')) {
            $colorpicker.foundation('close');
        }
    });
    $('#custom-menu-accordion').on('up.zf.accordion', function(){
        var $self = $(this);

        $self.children('.accordion-item:first-child').appendTo($self);
    });
    $("#custom-menu .sortable").sortable({
        items: '.sortable-item:not(.sortable-disabled)',
        placeholder: 'sortable-placeholder',
        cancel: '.sortable-invisible',
        forcePlaceholderSize: true,
        update: function(e, ui){
            changePositions();
        }
    });
    $('.sortable-grid').sortable({
        containment: '#page',
        placeholder: 'sortable-placeholder',
        start: function(e, ui){
            var item  = ui.item;

            ui.placeholder.addClass(ui.item.attr('class')).removeClass('ui-sortable-handle');
            if (item.hasClass('main-banner-item')) {
                item.removeClass('main-banner-item');
                item.data('class', 'main-banner-item');
            }
            if (item.hasClass('isotope-item')) {
                item.removeClass('isotope-item');
                item.data('class', 'isotope-item');
            }
            ui.placeholder.css({
                top: ui.originalPosition.top,
                left: ui.originalPosition.left
            });
            $(e.target).isotope('reloadItems');
        },
        change: function(e, ui){
            $(e.target).isotope('reloadItems').isotope({sortBy: 'original-order'});
        },
        stop: function(e, ui){
            var item  = ui.item;

            item.addClass(item.data('class')).css('zIndex','');
            $(e.target).isotope('reloadItems').isotope({sortBy: 'original-order'});
        }
    });
    
    $('.sortable-banner').sortable({
        items: '.owl-item',
        placeholder: 'sortable-placeholder owl-item',
        start: function(e, ui){
            ui.placeholder.css({
                width: ui.item.width(),
                height: ui.item.height(),
                marginRight: 20,
            });
        },
        update: function(e, ui){
            var params = '',
                $sortBlock = $('.main-banner.sortable-banner'),
                url = $sortBlock.attr('data-url');
            
            $sortBlock.find('input').each(function() {
                params = params + '|' + $(this).val();
            });
            url = url.replace('bannerpositions=', 'bannerpositions=' + params);
            window.location.href = url;
            applyChange();
        }
    });
    
    $(document).on('click', '.sortable .hide-block', function(e){
        var $self = $(this),
            $parent = $self.closest('.sortable-item'),
            $sortBlock = $("#custom-menu .sortable");
            selfText = ($parent.hasClass('sortable-invisible')) ? $sortBlock.attr('data-invisible-text') : $sortBlock.attr('data-visible-text');

        $parent.toggleClass('sortable-invisible');
        $self.children('span').text(selfText);
        changePositions();
        e.preventDefault();
    });
});
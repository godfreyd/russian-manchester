var productGridOptions = {
    // options
    itemSelector: '.products-flex-item',
    masonry: {
        columnWidth: 240
    },
    animationOptions: {
        duration: 0,
        easing: 'linear',
        queue: false
    }
};

var profileGridOptions = {
    itemSelector: '.profile-column-item',
    animationOptions: {
        duration: 0,
        easing: 'linear',
        queue: false
    },
    getSortData: {
        order: '[data-order]'
    },
    sortBy : 'order'
}

var breakpoints = {
    small: 0,
    medium: 518,
    large: 758,
    xlarge: 998,
    xxlarge: 1238,
}

function initOwl() {
    var $mainSlider      = $('.main-slider'),
        $mainBanner      = $('.main-banner'),
        $mainNews        = $('.main-news-carousel'),
        $mainBrand       = $('.main-brand-carousel'),
        $productPreview  = $('.product-slider'),
        $productPack     = $('.product-pack-carousel'),
        $productCompare  = $('.product-compare-carousel'),
        $productSeeIt    = $('.product-carousel'),
        $innerGallery    = $('.inner-carousel'),
        $innerTeam       = $('.inner-team');

    if ($mainSlider.length) {
        var itemLength = $mainSlider.find('.item').length,
            $itemParallax = $mainSlider.find('.parallax-item'),
            itemParallaxLength = $itemParallax.length,
            $itemVideo = $mainSlider.find('.video-item'),
            $svgDots = $('#owl-dots-svg'),
            params = {
                items: 1,
                center: true,
                navText: [],
                dotsContainer: '#owl-dots-svg'
            },
            small = $mainSlider.parent().hasClass('small'),
            timeout = 70,
            timer = timeout,
            timerId = null,
            players = [],
            initOwlTimer = function(){
                timer--;
                return setInterval(function(){
                    timer--;
                    if (!timer) {
                        $mainSlider.trigger('next.owl.carousel');
                    }
                }, 100);
            };

        if (itemLength > 1) {
            params['loop'] = true;
            params['nav'] = (small) ? false : true;
        } else {
            params['loop'] = false;
            params['dots'] = false;
        }
        $mainSlider.on('initialized.owl.carousel', function(){
            $svgDots.removeClass('hide').appendTo($mainSlider);
            $svgDots.children('.owl-dot').click(function(){
                $mainSlider.trigger('to.owl.carousel', [$(this).index()]);
            });
            $mainSlider.hover(
                function(){
                    clearInterval(timerId);
                    $svgDots.addClass('pause');
                },
                function(){
                    timerId = initOwlTimer();
                    $svgDots.removeClass('pause');
                }
            );
            timerId = initOwlTimer();
        });
        $mainSlider.on('translate.owl.carousel', function(e){
            var player = players[e.relatedTarget._current];

            timer = timeout;
            if ($itemVideo.length) {
                for (var i in players) {
                    players[i].stopVideo();
                }
                if (player !== undefined) {
                    player.seekTo(player.b.c.playerVars.start);
                }
            }
        });
        $mainSlider.owlCarousel(params);
        if (itemParallaxLength) {
            $itemParallax.mouseParallax();
        }
        if ($itemVideo.length) {
            $('<script/>',{'src':'https://www.youtube.com/iframe_api'}).appendTo('body');

            onYouTubeIframeAPIReady = function(){
                $itemVideo.each(function(){
                    var $self = $(this),
                        $parent = $self.closest('.owl-item'),
                        videoId = $self.attr('data-video'),
                        time = $self.attr('data-time'),
                        tagId = 'video-' + videoId,
                        index = $parent.index();

                    $('<div/>',{'id':tagId}).prependTo($self);
                    var player = new YT.Player(tagId, {
                        videoId: videoId,
                        playerVars:{
                            loop: 1,
                            showinfo: 0,
                            controls: 0,
                            disablekb: 1,
                            modestbranding: 0,
                            iv_load_policy: 3,
                            playlist: videoId,
                            start: (time === undefined) ? 0 : parseInt(time)
                        },
                        events:{
                            'onReady':function(){
                                player.mute();
                                if ($parent.hasClass('active')) {
                                    player.playVideo();
                                }
                            }
                        }
                    });
                    players[index] = player;
                });
            };
        }
    }
    if ($mainBanner.length) {
        $mainBanner.each(function(){
            var $self = $(this),
                isRightBanner = ($self.closest('.main-slider-banner').hasClass('banner-right')),
                isDrag = !($self.hasClass('sortable-banner') || isRightBanner),
                itemLength = $self.find('.item').length,
                params = {
                    loop: true,
                    items: 1,
                    margin: 20,
                    navText: [],
                    responsive: {}
                };
            params['responsive'][breakpoints['large']] = {
                items: 2,
            };
            params['responsive'][breakpoints['xlarge']] = {
                items: (isRightBanner) ? 1 : 3,
                loop: false,
                dots: false,
                mouseDrag: isDrag,
                touchDrag: isDrag,
                freeDrag: !isDrag,
            };
            switch (itemLength) {
                case 1:
                    params['loop'] = false;
                    params['dots'] = false;
                    break;
                case 2:
                    params['responsive'][breakpoints['large']]['loop'] = false;
                    params['responsive'][breakpoints['large']]['dots'] = false;
                    break;
            }
            $(this).owlCarousel(params);
        });
    }
    if ($mainNews.length) {
        $mainNews.each(function(){
            var $self = $(this),
                itemLength = $self.find('.item').length,
                params = {
                    items: 1,
                    margin: 23,
                    nav: true,
                    navText: [],
                    responsive: {},
                };
            params['responsive'][breakpoints['large']] = {
                items: 2,
            };
            params['responsive'][breakpoints['xlarge']] = {
                items: 3,
            };
            params['responsive'][breakpoints['xxlarge']] = {
                items: 4,
            };
            switch (itemLength) {
                case 1:
                    params['nav'] = false;
                    params['dots'] = false;
                    break;
                case 2:
                    params['responsive'][breakpoints['large']]['dots'] = false;
                    params['responsive'][breakpoints['xlarge']]['dots'] = false;
                    params['responsive'][breakpoints['xxlarge']]['dots'] = false;
                    break;
                case 3:
                    params['responsive'][breakpoints['xlarge']]['dots'] = false;
                    params['responsive'][breakpoints['xxlarge']]['dots'] = false;
                    break;
                case 4:
                    params['responsive'][breakpoints['xxlarge']]['dots'] = false;
                    break;
            }
            $self.owlCarousel(params);
        });
    }
    if ($mainBrand.length) {
        $mainBrand.each(function(){
            var itemLength = $(this).find('.item').length,
                params = {
                    items: 4,
                    loop: true,
                    navText: [],
                    responsive: {},
                };
            params['responsive'][breakpoints['large']] = {
                items: 6,
            };
            params['responsive'][breakpoints['xlarge']] = {
                items: 8,
                dots: false,
            };
            if (itemLength <= 4) {
                params['dots'] = false;
                params['loop'] = false;
            } else if (itemLength <= 6) {
                params['responsive'][breakpoints['large']]['dots'] = false;
                params['responsive'][breakpoints['large']]['loop'] = false;
            } else if (itemLength <= 8) {
                params['responsive'][breakpoints['xlarge']]['dots'] = false;
                params['responsive'][breakpoints['xlarge']]['loop'] = false;
            } else {
                params['responsive'][breakpoints['xlarge']]['nav'] = true;
            }
            $(this).owlCarousel(params);
        });
    }
    if ($productPreview.length) {
        $productPreview.each(function(){
            var params = {
                items: 2,
                nav: true,
                dots: false,
                navText: [],
                responsive: {},
            };
            params['responsive'][breakpoints['medium']] = {
                items: 4,
            };
            $(this).owlCarousel(params);
        });
    }
    if ($productSeeIt.length) {
        $productSeeIt.each(function(){
            var $self = $(this),
                variation = $self.parent().hasClass('product-pack-variation'),
                inner = $self.hasClass('product-carousel-inner'),
                itemLength = $self.children('.item').length,
                params = {
                    items: 1,
                    margin: -1,
                    dragEndSpeed: 100,
                    navText: [],
                    rewind: variation ? false : true,
                    responsive: {},
                    mouseDrag: false
                };

            params['responsive'][breakpoints['medium']] = {
                items: 2,
            };
            params['responsive'][breakpoints['large']] = {
                items: 3,
            };
            params['responsive'][breakpoints['xlarge']] = {
                items: inner ? 3 : 4,
                nav: true,
                dots: false,
            };
            params['responsive'][breakpoints['xxlarge']] = {
                items: inner ? 4 : 5,
                nav: true,
                dots: false,
            };
            if (!variation) {
                switch (itemLength) {
                    case 1:
                        params['loop'] = false;
                        params['dots'] = false;
                    case 2:
                        params['responsive'][breakpoints['medium']]['loop'] = false;
                        params['responsive'][breakpoints['medium']]['dots'] = false;
                    case 3:
                        params['responsive'][breakpoints['large']]['loop'] = false;
                        params['responsive'][breakpoints['large']]['dots'] = false;
                    case 4:
                        params['responsive'][breakpoints['xlarge']]['loop'] = false;
                        params['responsive'][breakpoints['xlarge']]['nav'] = false;
                    case 5:
                        params['responsive'][breakpoints['xxlarge']]['loop'] = false;
                        params['responsive'][breakpoints['xxlarge']]['nav'] = (itemLength == 5 && inner) ? true : false;
                        break;
                }
            }
            $self.data('owlParams', params);
            if (!(variation && !itemLength)) {
                $self.owlCarousel(params);
            }
        });
    }
    if ($productPack.length) {
        $productPack.each(function(){
            var $self = $(this),
                itemLength = $self.children('.item').length,
                params = {
                    items: 1,
                    margin: -1,
                    responsive: {},
                };
            params['responsive'][breakpoints['xlarge']] = {
                items: 2,
            };
            params['responsive'][breakpoints['xxlarge']] = {
                items: 3,
            };
            $self.owlCarousel(params);
        });
    }
    if ($productCompare.length) {
        var itemLength = $productCompare.children('.item').length,
            $compareTd = $('.compare-table-td'),
            heightArr = [],
            params = {
            items: 1,
            margin: -1,
            navText: [],
            responsive: {},
            mouseDrag: false,
        };
        params['responsive'][breakpoints['medium']] = {
            items: 2,
        };
        params['responsive'][breakpoints['xlarge']] = {
            items: 3,
            nav: true,
            dots: false,
        };
        params['responsive'][breakpoints['xxlarge']] = {
            items: 4,
            nav: true,
            dots: false,
        };
        switch (itemLength) {
            case 1:
                params['dots'] = false;
            case 2:
                params['responsive'][breakpoints['medium']]['dots'] = false;
                break;
        }
        
        $compareTd.each(function(){
            var $td = $(this),
                index = $td.index(),
                heightColumn = $td.find('.column:not(.transparent)').outerHeight();

            if ((heightColumn > heightArr[index]) || (heightArr[index] === undefined)) {
                heightArr[index] = heightColumn;
            }
        });
        $compareTd.each(function(){
            var $td = $(this),
                index = $td.index(),
                $column = $td.find('.column:not(.transparent, .hide-for-large)');

            if ($column.length) {
                $column.css('height', heightArr[index]);
            }
        });
        
        $productCompare.owlCarousel(params);
    }
    if ($innerGallery.length) {
        $innerGallery.each(function() {
            var $self = $(this),
                itemLength = $self.children('.item').length,
                params = {
                    items: 2,
                    margin: 15,
                    loop: true,
                    navText: [],
                    responsive: {},
                };

            params['responsive'][breakpoints['large']] = {
                nav: true,
                dots: false,
            };
            params['responsive'][breakpoints['xxlarge']] = {
                items: 3,
                nav: true,
                dots: false,
            };
            switch (itemLength) {
                case 1:
                case 2:
                    params['loop'] = false;
                    params['dots'] = false;
                    params['responsive'][breakpoints['large']]['nav'] = false;
                case 3:
                    params['responsive'][breakpoints['xxlarge']]['nav'] = false;
                    break;
            }
            $self.owlCarousel(params);
        });
    }
    if ($innerTeam.length) {
        $innerTeam.each(function() {
            var $self = $(this),
                itemLength = $self.children('.item').length,
                params = {
                    items: 1,
                    loop: true,
                    navText: [],
                    responsive: {},
                };

            params['responsive'][breakpoints['medium']] = {
                items: 2,
            };
            params['responsive'][breakpoints['large']] = {
                items: 3,
            };
            params['responsive'][breakpoints['xxlarge']] = {
                items: 4,
                nav: true,
                dots: false,
            };
            switch (itemLength) {
                case 1:
                case 2:
                    params['loop'] = false;
                    params['dots'] = false;
                case 4:
                    params['responsive'][breakpoints['xxlarge']]['nav'] = false;
                    break;
            }
            $self.owlCarousel(params);
        });
    }
}

function removeOwlItem($self){
    var $owlCarousel = $self.closest('.owl-carousel'),
        $item = $self.closest('.owl-item'),
        index = $item.index();

    $item.find('.product-pack-change').toggleClass('remove add');
    var item = $item.html();
    $owlCarousel.trigger('remove.owl.carousel', index);
    $owlCarousel.trigger('refresh.owl.carousel');
    $owlCarousel.trigger('next.owl.carousel');
    return item;
}

function setPackVariation(target) {
    var $parentSet = target.parents('.set_group_block'),
        $mobileButton = $parentSet.find('.product-pack-mobile-button');
    $('.product-pack').removeClass('edit');
    $('.product-pack-caption.apply').hide();
    $mobileButton.children('.product-pack-set-variation').css('display','none');
    $mobileButton.children('.product-pack-get-variation').show();
    $parentSet.find('.product-pack-caption.change').show();
    $parentSet.find('.product-pack-variation').slideUp();
}

$(document).ready(function() {
    $.fancybox.showLoading = function(){
        var f = $.fancybox,
            doc = $(document),
            a, d;

        f.hideLoading();
        a = $('<div id="fancybox-loading"><div class="md-preloader"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="44" width="44" viewBox="0 0 75 75"><circle cx="37.5" cy="37.5" r="33.5" stroke-width="4"></circle></svg></div></div>').click(f.cancel).appendTo("body");
        doc.bind("keydown.loading", function(a){if(27===(a.which||a.keyCode))a.preventDefault(), f.cancel()});
        f.defaults.fixed || (d = f.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}));
    }
    
    $.fn.extend({
        mouseParallax: function(options) {
            var defaults = {
                    speed: 5,
                    vertical: true,
                },
                options = $.extend(defaults, options);

            return this.each(function() {
                var $self = $(this),
                    dataSpeed = $self.attr('data-speed'),
                    dataVertical = $self.attr('data-vertical'),
                    speed = (dataSpeed !== undefined) ? parseInt(dataSpeed) : options.speed,
                    vertical = (dataVertical !== undefined) ? (dataVertical === 'true') : options.vertical;

                //background.parent()
                $('body').on('mousemove', function(e){
                    if ($self.closest('.owl-item').hasClass('active')) {
                        mouseX = e.pageX;
                        mouseY = e.pageY;

                        centerH = $(window).width() / 2;
                        centerV = $(window).height() / 2;

                        // (координаты курсора относительно центральной линии экрана)/ ("50" - 1% = 50px) * скорость * ("0.05" - коэффициент ускорения)
                        percentX = (centerH - mouseX) / 50 * speed * 0.05;
                        percentY = (centerV - mouseY) / 50 * speed * 0.05;

                        if (vertical) {
                            $self.css('transform', 'translate(' + percentX + '%,' + percentY + '%)');
                        } else {
                            $self.css('transform', 'translateX(' + percentX + '%)');
                        }
                    }
                });
            });
        }
    });
    
    $(document).foundation();

    var $productGrid = $('.products-flex-grid'),
        $bannerGrid = $('.main-banner-grid');

    if ($productGrid.length) {
        $productGrid.isotope({
            itemSelector: '.isotope-item',
            masonry: {
                columnWidth: 240
            },
            animationOptions: {
                duration: 0,
                easing: 'linear',
                queue: false
            },
            transitionDuration: $productGrid.hasClass('sortable-grid') ? 0 : '0.4s'
        });
        $('.products-flex-grid.sortable-grid').sortable({
            update: function(e, ui){
                var params = '',
                    $sortBlock = ui.item.closest('.products-flex-grid.sortable-grid'),
                    url = $sortBlock.attr('data-url');
                
                $sortBlock.find('input[name="product_position"], input[name="banner_position"]').each(function() {
                    params = params + '|' + $(this).val();
                });
                url = url.replace('productpositions=', 'productpositions=' + params);
                window.location.href = url;
                applyChange();
            }
        });
    }
    if ($bannerGrid.length) {
        $bannerGrid.isotope({
            itemSelector: '.main-banner-item',
            layoutMode: 'packery',
            transitionDuration: $bannerGrid.hasClass('sortable-grid') ? 0 : '0.4s'
        });
        $('.main-banner-grid.sortable-grid').sortable({
            update: function(e, ui){
                var params = '',
                    $sortBlock = $('.main-banner-grid.sortable-grid'),
                    url = $sortBlock.attr('data-url');
                
                $sortBlock.find('input').each(function() {
                    params = params + '|' + $(this).val();
                });
                url = url.replace('bannerpositions=', 'bannerpositions=' + params);
                window.location.href = url;
                applyChange();
            }
        });
    }

    var windowWidth = $(window).width(),
        foundationScreenOld = Foundation.MediaQuery.current,
        slideout = new Slideout({
            'panel': document.getElementById('page'),
            'menu': document.getElementById('mobile-menu'),
            'padding': 260,
            'tolerance': 70
        }),
        scrTop = 0,
        $scrollUpDown = $(".scroll-up-down"),
        $page = $('#page'),
        $mobileMenu = $('#mobile-menu'),
        $headerMenu = $('.header-main-menu'),
        $headerMenuFixed = $('.header-menu-fixed'),
        $headerMobileFixed = $('.header-mobile-fixed'),
        $headerMenuWrap = $('#header-main-menu-wrap');
    window['var'] = {
        menuOffsetTop: 0,
        menuScrollTop: 0,
        menuPositionTop: $headerMenuFixed.position().top,
        menuHeight: $headerMenuFixed.outerHeight(),
        isMenuFixed: $page.hasClass('menu-fixed')
    };
    window['func'] = {};
    
    initOwl();
    
    //Все, что связано с шаблоном
    
    initSelect('select');
    $('input.phone').mask('+7 (000) 000-0000');
    $('input.zip').mask('000 000');
    $('.fancybox:not([disabled],.disabled)').fancybox({
        padding: 0
    });
    
    $(document).on('click', '.fancybox-cancel', function(e){
        $.fancybox.close();
        e.preventDefault();
    });
    
    $(document).on('click', '.preview-button', function(e){
        var $self = $(this);
        $.fancybox({
            type: 'ajax',
            href: $self.attr('data-href'),
            padding: 0,
        });
        e.preventDefault();
    });
    
    $(document).on('click', '.show-href', function(e){
        var $self = $(this);
        $self.closest('.fancybox-block').hide();
        $($self.attr('href')).show();
        e.preventDefault();
    });
    
    $(document).click(function(e){
        var $dropdown = $('.dropdown-custom.is-open');
    
        if ($dropdown.length && !$dropdown.has(e.target).length) {
            $dropdown.removeClass('is-open');
        }
    });
    
    function mainMenuArrowPosition(){
        var $menu = $('.header-main-menu-other'),
            left = $menu.offset().left,
            width = $menu.width();
        $('.header-main-menu-other .header-main-menu-dropdown-arrow').css({'left': left + width/2 - 10});
    }
    
    function hsMainMenuItems(action) {
        if ($headerMenu.is(':visible')) {
            var $menuBlock = $('.header-main-menu-block'),
                $menuBase = $('.header-main-menu-base'),
                $menuFull = $('#header-main-menu-full'),
                $menuFullCont = $menuFull.find('.container'),
                $menuOther = $('.header-main-menu-other'),
                $mainSlider = $('.main-slider'),
                maxWidth = parseInt($menuBlock.css('maxWidth')),
                maxHeight = (($mainSlider.length) ? $mainSlider.height() + 20 : 450) - 45,
                baseWidth = $menuBase.width() - 16,
                baseHeight = $menuBase.height(),
                isVertical = ($headerMenu.parent('.header-main-menu-dropdow-wrap').length);
    
            function hideMainMenuItems(){
                if ($menuOther.hasClass('hide')) {
                    $menuOther.removeClass('hide');
                }
                var $replaceItem = $menuBase.find('.header-main-menu-category:last-child');
                if ($replaceItem.length) {
                    $menuFullCont.prepend($replaceItem);
                    hsMainMenuItems('hide');
                }
            }
            function showMainMenuItems(){
                var $replaceItem = $menuFullCont.find('.header-main-menu-category:first-child');
                if ($replaceItem.length) {
                    $menuBase.append($replaceItem);
                    hsMainMenuItems('show');
                }
            }
    
            if (action === 'hide') {
                if (isVertical) {
                    if (baseHeight > maxHeight) {
                        hideMainMenuItems();
                        $menuFull.on('closeme.zf.dropdown', function(){
                            return false;
                        });
                    }
                } else {
                    if (baseWidth > maxWidth) {
                        hideMainMenuItems();
                    }
                }
            }
            if (action === 'show') {
                if (isVertical) {
                    if (baseHeight <= maxHeight) {
                        showMainMenuItems();
                    } else {
                        hsMainMenuItems('hide');
                    }
                } else {
                    if (baseWidth <= maxWidth) {
                        showMainMenuItems();
                    } else {
                        hsMainMenuItems('hide');
                    }
                }
            }
            mainMenuArrowPosition();
        }
    }
    
    window.func.headerFixed = function(){
        var top = '';
    
        if ($.inArray(foundationScreenOld, ['xlarge', 'xxlarge']) !== -1) {
            if ($page.hasClass('header-v1') || $page.hasClass('header-v2')) {
                window.var.menuHeight = $headerMenuFixed.outerHeight();
            }
            if (scrTop > window.var.menuPositionTop + window.var.menuScrollTop) {
                $headerMenuFixed.css('top', window.var.menuOffsetTop);
                $page.addClass('is-fixed');
                if ($page.hasClass('index-page') && $page.hasClass('header-v3')) {
                    if ($headerMenuWrap.hasClass('is-open') && !$headerMenuWrap.hasClass('open-to-click')) {
                        $headerMenuWrap.foundation('close');
                    }
                }
            } else {
                $headerMenuFixed.css('top', 0);
                $page.removeClass('is-fixed');
                if ($page.hasClass('index-page') && $page.hasClass('header-v3')) {
                    $headerMenuWrap.removeClass('open-to-click');
                    if (!$headerMenuWrap.hasClass('is-open')) {
                        $headerMenuWrap.foundation('open');
                    }
                }
            }
        }
        if ($.inArray(foundationScreenOld, ['small', 'medium', 'large']) !== -1) {
            $page.addClass('is-fixed');
            $headerMenuFixed.css('top', top);
            if (window.var.menuScrollTop) {
                top = (scrTop > window.var.menuScrollTop) ? 0 : window.var.menuScrollTop - scrTop;
            }
        }
        $headerMobileFixed.css('top', top);
    };
    
    if (window.var.isMenuFixed) {
        window.func.headerFixed();
        slideout.on('beforeopen', function(){
            $headerMobileFixed.css('top', (scrTop > window.var.menuScrollTop) ? scrTop - window.var.menuScrollTop : 0);
        });
        slideout.on('close', function(){
            $headerMobileFixed.css('top', (window.var.menuScrollTop) ? ((scrTop > window.var.menuScrollTop) ? 0 : window.var.menuScrollTop - scrTop) : '');
        });
        if (window.BX !== undefined && BX.admin !== undefined) {
            var BxPanel,
                headerFixedBX = function () {
                    var bxPanelHeight = BxPanel.DIV.clientHeight,
                        mobileTop = 0;
    
                    if (BxPanel.isFixed()) {
                        window.var.menuOffsetTop = bxPanelHeight;
                        window.var.menuScrollTop = 0;
                        mobileTop += bxPanelHeight;
                    } else {
                        window.var.menuOffsetTop = 0;
                        window.var.menuScrollTop = bxPanelHeight;
                        mobileTop = (scrTop >= bxPanelHeight) ? 0 : bxPanelHeight - scrTop;
                    }
                    $mobileMenu.css({
                        top: mobileTop,
                        height: window.innerHeight - mobileTop
                    });
                    window.func.headerFixed();
                };
    
            BX.ready(function () {
                BxPanel = BX.admin.panel;
                BX.addCustomEvent('onTopPanelCollapse', BX.delegate(headerFixedBX, this));
                BX.addCustomEvent('onTopPanelFix', BX.delegate(headerFixedBX, this));
                headerFixedBX();
            });
        }
    }
    
    hsMainMenuItems('hide');
    
    if ($page.hasClass('index-page') && $page.hasClass('header-v3') && $headerMenuWrap.length) {
        $headerMenuWrap.foundation('open');
        $headerMenuWrap.on('hide.zf.dropdown', function(){
            if (!$page.hasClass('is-fixed')) {
                $headerMenuWrap.foundation('open');
            }
        });
        $('.header-main-menu-button').click(function(){
            if ($page.hasClass('is-fixed')) {
                $headerMenuWrap.addClass('open-to-click');
            } else {
                return false;
            }
        });
    }
    
    function hideCustomMenu()
    {
        var $cMenu = $('#custom-menu');
        if ($cMenu.length) {
            var $toggle = $cMenu.find('.toggle');
    
            $cMenu.removeClass('active');
            if ( $toggle.attr('data-toggle') !== undefined) {
                $toggle.foundation('hide');
            }
        }
    }
    
    function menuFilterToggle(inMobile)
    {
        $('#catalog-filter').appendTo((inMobile) ? $mobileMenu : $('#catalog-filter-wrapper'));
        $mobileMenu.find('.mobile-menu-wrapper').toggleClass('hide');
        $('html').toggleClass('slideout-filter');
    }
    
    function menuFilterToggleOnce()
    {
        menuFilterToggle(true);
        slideout.open();
        slideout.once('close', function(){
            menuFilterToggle();
        });
    }
    
    $('.header-mobile-toggle').on('click', function() {
        hideCustomMenu();
        if (slideout.isOpen() && $('html').hasClass('slideout-filter')) {
            slideout.close();
            slideout.once('close', function(){
                slideout.open();
            });
        } else {
            slideout.toggle();
        }
    });
    
    $(document).on('click', '.filter-mobile-toggle', function(e){
        hideCustomMenu();
        if (slideout.isOpen()) {
            if ($('html').hasClass('slideout-filter')) {
                slideout.close();
            } else {
                slideout.close();
                slideout.once('close', function(){
                    menuFilterToggleOnce();
                });
            }
        } else {
            menuFilterToggleOnce();
            initSlider();
        }
        e.preventDefault();
    });
    
    $(document).on('open.zf.drilldown', function(){
        $mobileMenu.animate({scrollTop: 0}, 200);
    });
    
    $scrollUpDown.click(function(e){
        $("body,html").animate({scrollTop: 0}, 200);
        e.preventDefault();
    });
    
    $(window).resize(function() {
        var windowWidthNew = $(this).width(),
            foundationScreenNew = Foundation.MediaQuery.current;
        if (windowWidthNew > windowWidth) {
            hsMainMenuItems('show');
        }
        if (windowWidthNew < windowWidth) {
            hsMainMenuItems('hide');
        }
        if (foundationScreenOld !== foundationScreenNew) {
            if (slideout.isOpen()
                && ($.inArray(foundationScreenOld, ['small', 'medium', 'large']) !== -1)
                && ($.inArray(foundationScreenNew, ['xlarge', 'xxlarge']) !== -1)) {
                slideout.close();
            }
            if ($page.hasClass('is-fixed')
                && ($.inArray(foundationScreenNew, ['small', 'medium', 'large']) !== -1)
                && ($.inArray(foundationScreenOld, ['xlarge', 'xxlarge']) !== -1)) {
                $page.removeClass('is-fixed');
            }
            foundationScreenOld = foundationScreenNew;
            if (window.var.isMenuFixed) {
                $page.removeClass('is-fixed');
                window.var.menuHeight = $headerMenuFixed.outerHeight();
                window.var.menuPositionTop = $headerMenuFixed.position().top;
                if (headerFixedBX !== undefined) {
                    headerFixedBX();
                } else {
                    window.func.headerFixed();
                }
            }
        }
        windowWidth = windowWidthNew;
    
        $('.tracker').data('largeimage', false);
        checkAccordionTabs(foundationScreenNew);
    });
    
    $(window).scroll(function() {
        scrTop = window.pageYOffset;
        if (scrTop > 250) {
            $scrollUpDown.fadeIn();
        } else {
            $scrollUpDown.fadeOut();
        }
        if (window.var.isMenuFixed) {
            if (headerFixedBX !== undefined) {
                headerFixedBX();
            } else {
                window.func.headerFixed();
            }
        }
    });
    
    //Позиционирование блоков в ЛК
    
    $('.profile-column-container').isotope(profileGridOptions);
    
    //Сетка продуктов на главной
    
    $('.main-product-tabs .tabs').on('change.zf.tabs', function(e, $tab) {
        var index = $tab.index(),
            $productCarousel = $($tab.find('a').attr('href') + ' .product-carousel');
    
        $tab.closest('.main-product-tabs').find('.select-tabs option').eq(index).prop('selected', true).trigger('refresh');
        if ($productGrid.length) {
            $productGrid.isotope();
        }
        if ($productCarousel.length) {
            $productCarousel.trigger('refresh.owl.carousel');
        }
    });
    
    $(document).on('change', '.main-product-tabs select.select-tabs', function(){
        var target = $(this).find('option:selected').val();
        $('.main-product-tabs .tabs').foundation('selectTab', $(target));
    });
    
    // Сворачивание блоков в блоке Фильтров в Каталоге
    $('.catalog-filters__block .heading').click(function (e) {
        e.preventDefault();
        $(this).parents('.catalog-filters__block').toggleClass('showed').find('.body').slideToggle();
        if (!$(this).hasClass('showed')) {
            initSlider();
        }
    });
    
    $('.search-from-header-button').click(function(e){
        $(this).toggleClass('active');
        $('.search-from-header-wrap').toggleClass('active');
    });
    
    $(document).on('click', '.breadcrumbs a[data-toggle]', function(e){
        var $self = $(this);
    
        if (($.inArray(foundationScreenOld, ['small', 'medium', 'large']) !== -1)) {
            if (!$self.hasClass('visited')) {
                $self.addClass('visited');
                e.preventDefault();
            }
        }
    });

    $('body').on('click', function(e){
        var $target = $(e.target),
            $filterTip = $('.filter-tip');

        if (!$target.closest('.filter-tip').length && $filterTip.length) {
            $filterTip.hide();
        }
    });

    //Все, что связано с карточкой товара
    
    initProductPreviewZoom();
    
    initTimer();
    
    initSlider();
    
    $(document).on('click', '.product-preview-zoom', function(e){
        var previews = [],
            activeIndex = 0;
        $('.product-slider .item:not([data-content="video"])').each(function(){
            var $self = $(this);
            previews.push($self.attr('href'));
            if ($self.hasClass('active')) {
                activeIndex = $self.parent().index();
            }
        });
        $.fancybox(previews, {
            index: activeIndex,
            helpers	: {
                thumbs	: {
                    width	: 61,
                    height	: 61
                }
            }
        });
        e.preventDefault();
    });
    
    $(document).on('click', '.product-slider .item', function(e){
        var $self = $(this),
            type = $self.attr('data-content'),
            tag = (type == 'video') ? 'iframe' : 'img';
    
        if (!$self.hasClass('active')) {
            var $contentBlock = $('.product-preview-main-content');
            $contentBlock.removeClass('active');
            $contentBlock.filter('.' + type).addClass('active');
    
            $('.product-slider .item').removeClass('active');
            $('.product-preview-main ' + tag).attr('src', $self.attr('href'));
            $self.addClass('active');
    
            if (type == 'video') {
                $('.product-preview-zoom').addClass('invisible');
            } else {
                $('.product-preview-zoom').removeClass('invisible');
            }
        }
        e.preventDefault();
    });
    
    $(document).on('click', '.product-info-social a', function(e){
        $('.' + $(this).attr('href')).click();
        e.preventDefault();
    });
    
    //Все, что связано с блоком "Набор"
    
    $(document).on('click', '.product-pack-get-variation', function(e){
        var $parentSet = $(this).parents('.set_group_block'),
            $variation = $parentSet.find('.product-pack-variation'),
            $carouselVariation = $parentSet.find('.product-carousel'),
            $mobileButton = $parentSet.find('.product-pack-mobile-button');

        $parentSet.find('.product-pack').addClass('edit');
        $parentSet.find('.product-pack-caption.change').hide();
        $mobileButton.children('.product-pack-get-variation').hide();
        $mobileButton.children('.product-pack-set-variation').css('display','inline-block');
        $parentSet.find('.product-pack-caption.apply').show();
        if ($carouselVariation.data('owl.carousel') !== undefined) {
            if ($carouselVariation.data('owl.carousel')._items.length > 0) {
                $variation.slideDown();
            }
        }

        e.preventDefault();
    });
    
    $(document).on('click', '.product-pack-set-variation', function(e){
        setPackVariation($(this));
        e.preventDefault();
    });
    
    //Синхронизация Аккардиона и Табов
    
    function checkAccordionTabs(foundationScreen){
        var $content = $('.product-accordion-tabs-content'),
            $items   = $('.product-accordion-tabs-item'),
            $wraps   = $('.product-accordion-tabs-wrap');
    
        if ($.inArray(foundationScreen, ['small', 'medium', 'large']) != -1) {
            if ($content.hasClass('tabs-content')) {
                $content.removeClass('tabs-content').addClass('accordion').attr('data-accordion');
                $items.addClass('accordion-item').removeClass('tabs-panel');
                $wraps.addClass('accordion-content').hide();
                $items.filter('.is-active').children('.product-accordion-tabs-wrap').show();
            }
        } else {
            if ($content.hasClass('accordion')) {
                $content.removeAttr('data-accordion').removeClass('accordion').addClass('tabs-content');
                $items.removeClass('accordion-item').addClass('tabs-panel');
                $wraps.removeClass('accordion-content').show();
            }
        }
    }
    
    checkAccordionTabs(foundationScreenOld);
    
    $(document).on('click', '.product-accordion-tabs .accordion-title', function(){
        var $self = $(this),
            $tabsTitle  = $('.product-accordion-tabs .tabs-title'),
            $activeLink = $tabsTitle.children('a[href="#' + $self.attr('id') + '"]');
        $tabsTitle.removeClass('is-active');
        $tabsTitle.children().removeAttr('aria-selected');
        $activeLink.attr('aria-selected', 'true');
        $activeLink.parent().addClass('is-active');
        setTimeout(function(){
            $("body,html").animate({scrollTop: $self.offset().top}, 200);
        }, 250);
    });

});
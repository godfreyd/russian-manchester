
; /* Start:"a:4:{s:4:"full";s:99:"/local/templates/bitlate_pro/components/bitrix/catalog.compare.result/main/script.js?15088532871903";s:6:"source";s:84:"/local/templates/bitlate_pro/components/bitrix/catalog.compare.result/main/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
BX.namespace("BX.Iblock.Catalog");

BX.Iblock.Catalog.CompareClass = (function()
{
	var CompareClass = function(wrapObjId)
	{
		this.wrapObjId = wrapObjId;
	};

	CompareClass.prototype.MakeAjaxAction = function(url, basketChangeUrl, productId)
	{
        if (basketChangeUrl !== undefined) {
            var $self = $('.add2cart[data-product-id=' + productId + ']');
            if ($self.hasClass('in_basket')) {
                return true;
            }
        }
        $.fancybox.helpers.overlay.open({
            closeClick: false,
            parent: $('body'),
        });
        $.fancybox.showLoading();
        BX.ajax.post(
            url,
            {
                load: 'Y'
            },
            BX.proxy(function(result)
            {
                if (basketChangeUrl !== undefined) {
                    BX.onCustomEvent('OnBasketChange');
                    BX.ajax.post(
                        basketChangeUrl,
                        {
                            load: 'Y'
                        },
                        BX.proxy(function(result)
                        {
                            BX(this.wrapObjId).innerHTML = result;
                            updateAdd2Liked();
                            updateAdd2Basket();
                            initOwl();
                            preview2Basket($self);
                            $.fancybox.hideLoading();
                            $.fancybox.helpers.overlay.close();
                        }, this)
                    );
                } else {
                    BX(this.wrapObjId).innerHTML = result;
                    updateAdd2Liked();
                    updateAdd2Basket();
                    initOwl();
                    $.fancybox.hideLoading();
                    $.fancybox.helpers.overlay.close();
                }
			}, this)
		);
	};

	return CompareClass;
})();
/* End */
;; /* /local/templates/bitlate_pro/components/bitrix/catalog.compare.result/main/script.js?15088532871903*/


; /* Start:"a:4:{s:4:"full";s:73:"/local/templates/bitlate_pro/js/catalog.element.script.js?150885328779546";s:6:"source";s:57:"/local/templates/bitlate_pro/js/catalog.element.script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function (window) {

if (!!window.JCCatalogElement)
{
	return;
}

var BasketButton = function(params)
{
	BasketButton.superclass.constructor.apply(this, arguments);
	this.nameNode = BX.create('span', {
		props : { className : 'bx_medium bx_bt_button', id : this.id },
		style: typeof(params.style) === 'object' ? params.style : {},
		text: params.text
	});
	this.buttonNode = BX.create('span', {
		attrs: { className: params.ownerClass },
		children: [this.nameNode],
		events : this.contextEvents
	});
	if (BX.browser.IsIE())
	{
		this.buttonNode.setAttribute("hideFocus", "hidefocus");
	}
};
BX.extend(BasketButton, BX.PopupWindowButton);

window.JCCatalogElement = function (arParams)
{
	this.productType = 0;

	this.config = {
		useCatalog: true,
		showQuantity: true,
		showPrice: true,
		showAbsent: true,
		showOldPrice: false,
		showPercent: false,
		showSkuProps: false,
		showOfferGroup: false,
		useCompare: false,
		mainPictureMode: 'IMG',
		showBasisPrice: false,
		basketAction: ['BUY'],
		showClosePopup: false
	};

	this.checkQuantity = false;
	this.maxQuantity = 0;
	this.stepQuantity = 1;
	this.isDblQuantity = false;
	this.canBuy = true;
	this.currentBasisPrice = {};
	this.currentPrices = {};
	this.canSubscription = true;
	this.currentIsSet = false;
	this.updateViewedCount = false;

	this.precision = 6;
	this.precisionFactor = Math.pow(10,this.precision);

	this.listID = {
		main: ['PICT_ID', 'PICT_SUB_ID', 'BIG_SLIDER_ID', 'BIG_IMG_CONT_ID'],
		stickers: ['STICKER_ID'],
		productSlider: ['SLIDER_CONT', 'SLIDER_LIST', 'SLIDER_LEFT', 'SLIDER_RIGHT'],
		offerSlider: ['SLIDER_CONT_OF_ID', 'SLIDER_LIST_OF_ID', 'SLIDER_LEFT_OF_ID', 'SLIDER_RIGHT_OF_ID'],
		offers: ['TREE_ID', 'TREE_ITEM_ID', 'DISPLAY_PROP_DIV', 'PROP_TABLE', 'ARTNUMBER_DIV', 'LIKED_COMPARE_ID', 'BUY_1_CLICK_ID', 'OFFER_GROUP'],
		quantity: ['QUANTITY_ID', 'QUANTITY_UP_ID', 'QUANTITY_DOWN_ID', 'QUANTITY_MEASURE', 'QUANTITY_LIMIT', 'QUANTITY_MAX', 'BASIS_PRICE'],
		price: ['PRICE_ID'],
		oldPrice: ['OLD_PRICE_ID', 'DISCOUNT_VALUE_ID', 'ACTION_ECONOMY_ID'],
		discountPerc: ['DISCOUNT_PERC_ID'],
		basket: ['BASKET_PROP_DIV', 'BUY_ID', 'ADD_BASKET_ID', 'BASKET_ACTIONS_ID', 'NOT_AVAILABLE_MESS'],
		magnifier: ['MAGNIFIER_ID', 'MAGNIFIER_AREA_ID'],
		compare: ['COMPARE_LINK_ID']
	};

	this.visualPostfix = {
		// main pict
		PICT_ID: '_pict',
		PICT_SUB_ID: '_pict_sub',
		BIG_SLIDER_ID: '_big_slider',
		BIG_IMG_CONT_ID: '_bigimg_cont',
		// stickers
		STICKER_ID: '_sticker',
		// product pict slider
		SLIDER_CONT: '_slider_cont',
		SLIDER_LIST: '_slider_list',
		SLIDER_LEFT: '_slider_left',
		SLIDER_RIGHT: '_slider_right',
		// offers sliders
		SLIDER_CONT_OF_ID: '_slider_cont_',
		SLIDER_LIST_OF_ID: '_slider_list_',
		SLIDER_LEFT_OF_ID: '_slider_left_',
		SLIDER_RIGHT_OF_ID: '_slider_right_',
		// offers
		TREE_ID: '_skudiv',
		TREE_ITEM_ID: '_prop_',
		DISPLAY_PROP_DIV: '_sku_prop',
		PROP_TABLE: '_prop_table_',
		ARTNUMBER_DIV: '_articul_',
		LIKED_COMPARE_ID: '_add_liked_compare_',
		BUY_1_CLICK_ID: '_buy_1_click_',
		ACTION_ECONOMY_ID: '_action_economy',
		// quantity
		QUANTITY_ID: '_quantity',
		QUANTITY_UP_ID: '_quant_up',
		QUANTITY_DOWN_ID: '_quant_down',
		QUANTITY_MEASURE: '_quant_measure',
		QUANTITY_LIMIT: '_quant_limit',
		QUANTITY_MAX: '_quant_max_',
		BASIS_PRICE: '_basis_price',
		// price and discount
		PRICE_ID: '_price',
		OLD_PRICE_ID: '_old_price',
		DISCOUNT_VALUE_ID: '_price_discount',
		DISCOUNT_PERC_ID: '_dsc_pict',
		// basket
		BASKET_PROP_DIV: '_basket_prop',
		BUY_ID: '_buy_link',
		ADD_BASKET_ID: '_add_basket_link',
		BASKET_ACTIONS_ID: '_basket_actions',
		NOT_AVAILABLE_MESS: '_not_avail',
		// magnifier
		MAGNIFIER_ID: '_magnifier',
		MAGNIFIER_AREA_ID: '_magnifier_area',
		// offer groups
		OFFER_GROUP: '_set_group_',
		// compare
		COMPARE_LINK_ID: '_compare_link'
	};

	this.visual = {};

	this.basketMode = '';
	this.product = {
		checkQuantity: false,
		maxQuantity: 0,
		stepQuantity: 1,
		startQuantity: 1,
		isDblQuantity: false,
		canBuy: true,
		canSubscription: true,
		name: '',
		pict: {},
		id: 0,
		addUrl: '',
		buyUrl: '',
		slider: {},
		sliderCount: 0,
		useSlider: false,
		sliderPict: []
	};
	this.mess = {};

	this.basketData = {
		useProps: false,
		emptyProps: false,
		quantity: 'quantity',
		props: 'prop',
		basketUrl: '',
		sku_props: '',
		sku_props_var: 'basket_props',
		add_url: '',
		buy_url: ''
	};
	this.compareData = {
		compareUrl: '',
		comparePath: ''
	};

	this.defaultPict = {
		preview: null,
		detail: null
	};

	this.offers = [];
	this.offerNum = 0;
	this.treeProps = [];
	this.obTreeRows = [];
	this.showCount = [];
	this.showStart = [];
	this.selectedValues = {};
	this.sliders = [];

	this.obProduct = null;
	this.obQuantity = null;
	this.obQuantityUp = null;
	this.obQuantityDown = null;
	this.obBasisPrice = null;
	this.obPict = null;
	this.obPictAligner = null;
	this.obPrice = {
		price: null,
		full: null,
		discount: null,
		percent: null
	};
	this.obTree = null;
	this.obBuyBtn = null;
	this.obAddToBasketBtn = null;
	this.obBasketActions = null;
	this.obNotAvail = null;
	this.obSkuProps = null;
	this.obSlider = null;
	this.obMeasure = null;
	this.obQuantityLimit = {
		all: null,
		value: null
	};
	this.obCompare = null;
	this.obArtnumber = null;
	this.obQuantityMax = null;
	this.obPropTable = null;

	this.viewedCounter = {
		path: '/bitrix/components/bitrix/catalog.element/ajax.php',
		params: {
			AJAX: 'Y',
			SITE_ID: '',
			PRODUCT_ID: 0,
			PARENT_ID: 0
		}
	};

	this.currentImg = {
		src: '',
		width: 0,
		height: 0,
		screenWidth: 0,
		screenHeight: 0,
		screenOffsetX: 0,
		screenOffsetY: 0,
		scale: 1
	};

	this.obPopupWin = null;
	this.basketUrl = '';
	this.basketParams = {};

	this.obPopupPict = null;
	this.magnify = {
		obMagnifier: null,
		obMagnifyPict: null,
		obMagnifyArea: null,
		obBigImg: null,
		obBigSlider: null,
		magnifyShow: false,
		areaParams : {
			width: 100,
			height: 130,
			left: 0,
			top: 0,
			scaleFactor: 1,
			globalLeft: 0,
			globalTop: 0,
			globalRight: 0,
			globalBottom: 0
		},
		magnifierParams: {
			top: 0,
			left: 0,
			width: 0,
			height: 0,
			ratioX: 10,
			ratioY: 13,
			defaultScale: 1
		},
		magnifyPictParams: {
			marginTop: 0,
			marginLeft: 0,
			width: 0,
			height: 0
		}
	};

	this.treeRowShowSize = 5;
	this.treeEnableArrow = { display: '', cursor: 'pointer', opacity: 1 };
	this.treeDisableArrow = { display: '', cursor: 'default', opacity: 0.2 };
	this.sliderRowShowSize = 5;
	this.sliderEnableArrow = { display: '', cursor: 'pointer', opacity: 1 };
	this.sliderDisableArrow = { display: '', cursor: 'default', opacity: 0.2 };

	this.errorCode = 0;

	if (typeof arParams === 'object')
	{
		this.params = arParams;
		this.initConfig();

		if (!!this.params.MESS)
		{
			this.mess = this.params.MESS;
		}
		switch (this.productType)
		{
			case 0:// no catalog
			case 1://product
			case 2://set
				this.initProductData();
				break;
			case 3://sku
				this.initOffersData();
				break;
			default:
				this.errorCode = -1;
		}
		this.initBasketData();
		this.initCompareData();
	}
	if (0 === this.errorCode)
	{
		BX.ready(BX.delegate(this.Init,this));
	}
	this.params = {};
};
    
window.JCCatalogElement.prototype.Init = function()
{
	var i = 0,
		j = 0,
		strPrefix = '',
		SliderImgs = null,
		TreeItems = null;

	this.obProduct = BX(this.visual.ID);
	if (!this.obProduct)
	{
		this.errorCode = -1;
	}
	this.obPict = BX(this.visual.PICT_ID);
	this.obPictSub = BX(this.visual.PICT_SUB_ID);
	if (!this.obPict)
	{
		this.errorCode = -2;
	}
	else
	{
		this.obPictAligner = this.obPict.parentNode;
	}

	if (this.config.showPrice)
	{
		this.obPrice.price = BX(this.visual.PRICE_ID);
		if (!this.obPrice.price && this.config.useCatalog)
		{
			this.errorCode = -16;
		}
		this.obBasketActions = BX(this.visual.BASKET_ACTIONS_ID);
		if (!!this.obBasketActions)
		{
			if (BX.util.in_array('BUY', this.config.basketAction) || BX.util.in_array('ADD', this.config.basketAction))
			{
				this.obBuyBtn = BX(this.visual.BUY_ID);
			}
		}
		this.obNotAvail = BX(this.visual.NOT_AVAILABLE_MESS);
	}

	if (this.config.showQuantity)
	{
		this.obQuantity = BX(this.visual.QUANTITY_ID);
		if (!!this.visual.QUANTITY_UP_ID)
		{
			this.obQuantityUp = BX(this.visual.QUANTITY_UP_ID);
		}
		if (!!this.visual.QUANTITY_DOWN_ID)
		{
			this.obQuantityDown = BX(this.visual.QUANTITY_DOWN_ID);
		}
		if (this.config.showBasisPrice)
		{
			this.obBasisPrice = BX(this.visual.BASIS_PRICE);
		}
	}
	if (3 === this.productType)
	{
		if (!!this.visual.TREE_ID)
		{
			this.obTree = BX(this.visual.TREE_ID);
			if (!this.obTree)
			{
				this.errorCode = -256;
			}
			strPrefix = this.visual.TREE_ITEM_ID;
			for (i = 0; i < this.treeProps.length; i++)
			{
				this.obTreeRows[i] = {
					LEFT: BX(strPrefix+this.treeProps[i].ID+'_left'),
					RIGHT: BX(strPrefix+this.treeProps[i].ID+'_right'),
					LIST: BX(strPrefix+this.treeProps[i].ID+'_list'),
					CONT: BX(strPrefix+this.treeProps[i].ID+'_cont')
				};
				if (!this.obTreeRows[i].LEFT || !this.obTreeRows[i].RIGHT || !this.obTreeRows[i].LIST || !this.obTreeRows[i].CONT)
				{
					this.errorCode = -512;
					break;
				}
			}
		}
		if (!!this.visual.QUANTITY_MEASURE)
		{
			this.obMeasure = BX(this.visual.QUANTITY_MEASURE);
		}
		if (!!this.visual.QUANTITY_LIMIT)
		{
			this.obQuantityLimit.all = BX(this.visual.QUANTITY_LIMIT);
			if (!!this.obQuantityLimit.all)
			{
				this.obQuantityLimit.value = BX.findChild(this.obQuantityLimit.all, {tagName: 'span'}, false, false);
				if (!this.obQuantityLimit.value)
				{
					this.obQuantityLimit.all = null;
				}
			}
		}
	}

	if (this.config.showSkuProps)
	{
		if (!!this.visual.DISPLAY_PROP_DIV)
		{
			this.obSkuProps = BX(this.visual.DISPLAY_PROP_DIV);
		}
	}
	if (this.config.useCompare)
	{
		this.obCompare = BX(this.visual.COMPARE_LINK_ID);
	}
    if (0 === this.errorCode)
	{
		if (this.config.showQuantity)
		{
			if (!!this.obQuantityUp)
			{
				BX.bind(this.obQuantityUp, 'click', BX.delegate(this.QuantityUp, this));
			}
			if (!!this.obQuantityDown)
			{
				BX.bind(this.obQuantityDown, 'click', BX.delegate(this.QuantityDown, this));
			}
			if (!!this.obQuantity)
			{
				BX.bind(this.obQuantity, 'change', BX.delegate(this.QuantityChange, this));
			}
		}
		switch (this.productType)
		{
			case 0://no catalog
			case 1://product
			case 2://set
				if (this.product.useSlider)
				{
					this.product.slider = {
						COUNT: this.product.sliderCount,
						ID: this.visual.SLIDER_CONT,
						CONT: BX(this.visual.SLIDER_CONT),
						LIST: BX(this.visual.SLIDER_LIST),
						LEFT: BX(this.visual.SLIDER_LEFT),
						RIGHT: BX(this.visual.SLIDER_RIGHT),
						START: 0
					};
					SliderImgs = BX.findChildren(this.product.slider.LIST, {tagName: 'li'}, true);
					if (!!SliderImgs && 0 < SliderImgs.length)
					{
						for (j = 0; j < SliderImgs.length; j++)
						{
							BX.bind(SliderImgs[j], 'click', BX.delegate(this.ProductSelectSliderImg, this));
						}
					}
					if (!!this.product.slider.LEFT)
					{
						BX.bind(this.product.slider.LEFT, 'click', BX.delegate(this.ProductSliderRowLeft, this));
						BX.adjust(this.product.slider.LEFT, { style: this.sliderDisableArrow } );

					}
					if (!!this.product.slider.RIGHT)
					{
						BX.bind(this.product.slider.RIGHT, 'click', BX.delegate(this.ProductSliderRowRight, this));
						BX.adjust(this.product.slider.RIGHT, { style: this.sliderEnableArrow } );
					}
					this.setCurrentImg(this.product.sliderPict[0], true);
				}
				break;
			case 3://sku
				TreeItems = BX.findChildren(this.obTree, {tagName: 'div'}, true);
				if (!!TreeItems && 0 < TreeItems.length)
				{
					for (i = 0; i < TreeItems.length; i++)
					{
						BX.bind(TreeItems[i], 'click', BX.delegate(this.SelectOfferProp, this));
					}
				}
				for (i = 0; i < this.obTreeRows.length; i++)
				{
					BX.bind(this.obTreeRows[i].LEFT, 'click', BX.delegate(this.RowLeft, this));
					BX.bind(this.obTreeRows[i].RIGHT, 'click', BX.delegate(this.RowRight, this));
				}
				for (i = 0; i < this.offers.length; i++)
				{
					this.offers[i].SLIDER_COUNT = parseInt(this.offers[i].SLIDER_COUNT, 10);
					if (isNaN(this.offers[i].SLIDER_COUNT))
					{
						this.offers[i].SLIDER_COUNT = 0;
					}
					if (0 === this.offers[i].SLIDER_COUNT)
					{
						this.sliders[i] = {
							COUNT: this.offers[i].SLIDER_COUNT,
							ID: ''
						};
					}
					else
					{
						for (j = 0; j < this.offers[i].SLIDER.length; j++)
						{
							this.offers[i].SLIDER[j].WIDTH = parseInt(this.offers[i].SLIDER[j].WIDTH, 10);
							this.offers[i].SLIDER[j].HEIGHT = parseInt(this.offers[i].SLIDER[j].HEIGHT, 10);
						}
						this.sliders[i] = {
							COUNT: this.offers[i].SLIDER_COUNT,
							OFFER_ID: this.offers[i].ID,
							ID: this.visual.SLIDER_CONT_OF_ID+this.offers[i].ID,
							CONT: BX(this.visual.SLIDER_CONT_OF_ID+this.offers[i].ID),
							LIST: BX(this.visual.SLIDER_LIST_OF_ID+this.offers[i].ID),
							LEFT: BX(this.visual.SLIDER_LEFT_OF_ID+this.offers[i].ID),
							RIGHT: BX(this.visual.SLIDER_RIGHT_OF_ID+this.offers[i].ID),
							START: 0
						};
						SliderImgs = BX.findChildren(this.sliders[i].LIST, {tagName: 'div'}, true);
						if (!!SliderImgs && 0 < SliderImgs.length)
						{
							for (j = 0; j < SliderImgs.length; j++)
							{
								BX.bind(SliderImgs[j], 'click', BX.delegate(this.SelectSliderImg, this));
							}
						}
						if (!!this.sliders[i].LEFT)
						{
							BX.bind(this.sliders[i].LEFT, 'click', BX.delegate(this.SliderRowLeft, this));
						}
						if (!!this.sliders[i].RIGHT)
						{
							BX.bind(this.sliders[i].RIGHT, 'click', BX.delegate(this.SliderRowRight, this));
						}
					}
                    if (!!this.obBasketActions) {
                        var buyButton = BX(this.visual.BUY_ID + this.offers[i].ID);
                        if (BX.util.in_array('ADD', this.config.basketAction))
                            BX.bind(buyButton, 'click', BX.proxy(this.Add2Basket, this));
                        else
                            BX.bind(buyButton, 'click', BX.proxy(this.BuyBasket, this));
                    }
                    if (!!this.config.useCompare)
                    {
                        var obOfferCompare = BX(this.visual.COMPARE_LINK_ID + this.offers[i].ID);
                        if (!!obOfferCompare) {
                            BX.bind(obOfferCompare, 'click', BX.proxy(this.Compare, this));
                        }
                    }
				}
				this.SetCurrent();
				break;
		}

        if (3 != this.productType) {
            if (BX.util.in_array('ADD', this.config.basketAction)) {
                BX.bind(this.obBuyBtn, 'click', BX.proxy(this.Add2Basket, this));
            } else {
                BX.bind(this.obBuyBtn, 'click', BX.proxy(this.BuyBasket, this));
            }
            if (!!this.obCompare) {
                BX.bind(this.obCompare, 'click', BX.proxy(this.Compare, this));
            }
        }

		this.setMainPictHandler();
	}
};

window.JCCatalogElement.prototype.initConfig = function()
{
	this.productType = parseInt(this.params.PRODUCT_TYPE, 10);
	if (!!this.params.CONFIG && typeof(this.params.CONFIG) === 'object')
	{
		if (this.params.CONFIG.USE_CATALOG !== 'undefined' && BX.type.isBoolean(this.params.CONFIG.USE_CATALOG))
		{
			this.config.useCatalog = this.params.CONFIG.USE_CATALOG;
		}
		this.config.showQuantity = !!this.params.CONFIG.SHOW_QUANTITY;
		this.config.showPrice = !!this.params.CONFIG.SHOW_PRICE;
		this.config.showPercent = !!this.params.CONFIG.SHOW_DISCOUNT_PERCENT;
		this.config.showOldPrice = !!this.params.CONFIG.SHOW_OLD_PRICE;
		this.config.showSkuProps = !!this.params.CONFIG.SHOW_SKU_PROPS;
		this.config.showOfferGroup = !!this.params.CONFIG.OFFER_GROUP;
		this.config.useCompare = !!this.params.CONFIG.DISPLAY_COMPARE;
		if (!!this.params.CONFIG.MAIN_PICTURE_MODE)
		{
			this.config.mainPictureMode = this.params.CONFIG.MAIN_PICTURE_MODE;
		}
		this.config.showBasisPrice = !!this.params.CONFIG.SHOW_BASIS_PRICE;
		if (!!this.params.CONFIG.ADD_TO_BASKET_ACTION)
		{
			this.config.basketAction = this.params.CONFIG.ADD_TO_BASKET_ACTION;
		}
		this.config.showClosePopup = !!this.params.CONFIG.SHOW_CLOSE_POPUP;
		this.config.economyHtml = this.params.VISUAL.ECONOMY_HTML;
	}
	else
	{
		// old version
		if (this.params.USE_CATALOG !== 'undefined' && BX.type.isBoolean(this.params.USE_CATALOG))
		{
			this.config.useCatalog = this.params.USE_CATALOG;
		}
		this.config.showQuantity = !!this.params.SHOW_QUANTITY;
		this.config.showPrice = !!this.params.SHOW_PRICE;
		this.config.showPercent = !!this.params.SHOW_DISCOUNT_PERCENT;
		this.config.showOldPrice = !!this.params.SHOW_OLD_PRICE;
		this.config.showSkuProps = !!this.params.SHOW_SKU_PROPS;
		this.config.showOfferGroup = !!this.params.OFFER_GROUP;
		this.config.useCompare = !!this.params.DISPLAY_COMPARE;
		if (!!this.params.MAIN_PICTURE_MODE)
		{
			this.config.mainPictureMode = this.params.MAIN_PICTURE_MODE;
		}
		this.config.showBasisPrice = !!this.params.SHOW_BASIS_PRICE;
		if (!!this.params.ADD_TO_BASKET_ACTION)
		{
			this.config.basketAction = this.params.ADD_TO_BASKET_ACTION;
		}
		this.config.showClosePopup = !!this.params.SHOW_CLOSE_POPUP;
	}

	if (!this.params.VISUAL || typeof(this.params.VISUAL) !== 'object' || !this.params.VISUAL.ID)
	{
		this.errorCode = -1;
		return;
	}
	this.visual.ID = this.params.VISUAL.ID;
	this.initVisualParams('main');
	if (this.config.showQuantity)
	{
		this.initVisualParams('quantity');
	}
	if (this.config.showPrice)
	{
		this.initVisualParams('price');
	}
	if (this.config.showOldPrice)
	{
		this.initVisualParams('oldPrice');
	}
	if (this.config.showPercent)
	{
		this.initVisualParams('discountPerc');
	}
	this.initVisualParams('basket');
	if (this.config.mainPictureMode === 'MAGNIFIER')
	{
		this.initVisualParams('magnifier');
	}
	if (this.config.useCompare)
	{
		this.initVisualParams('compare');
	}
};

window.JCCatalogElement.prototype.initVisualParams = function(ID)
{
	var i = 0,
		key = '';

	if (!this.listID[ID])
	{
		this.errorCode = -1;
		return;
	}
	for (i = 0; i < this.listID[ID].length; i++)
	{
		key = this.listID[ID][i];
		this.visual[key] = (!!this.params.VISUAL[key] ? this.params.VISUAL[key] : this.visual.ID+this.visualPostfix[key]);
	}
};

window.JCCatalogElement.prototype.initProductData = function()
{
	var j = 0;
	this.initVisualParams('productSlider');
	if (!!this.params.PRODUCT && 'object' === typeof(this.params.PRODUCT))
	{
		if (this.config.showQuantity)
		{
			this.product.checkQuantity = this.params.PRODUCT.CHECK_QUANTITY;
			this.product.isDblQuantity = this.params.PRODUCT.QUANTITY_FLOAT;
			if (this.product.checkQuantity)
			{
				this.product.maxQuantity = (this.product.isDblQuantity ? parseFloat(this.params.PRODUCT.MAX_QUANTITY) : parseInt(this.params.PRODUCT.MAX_QUANTITY, 10));
			}
			this.product.stepQuantity = (this.product.isDblQuantity ? parseFloat(this.params.PRODUCT.STEP_QUANTITY) : parseInt(this.params.PRODUCT.STEP_QUANTITY, 10));

			this.checkQuantity = this.product.checkQuantity;
			this.isDblQuantity = this.product.isDblQuantity;
			this.maxQuantity = this.product.maxQuantity;
			this.stepQuantity = this.product.stepQuantity;
			if (this.isDblQuantity)
			{
				this.stepQuantity = Math.round(this.stepQuantity*this.precisionFactor)/this.precisionFactor;
			}
		}
		this.product.canBuy = this.params.PRODUCT.CAN_BUY;
		this.product.canSubscription = this.params.PRODUCT.SUBSCRIPTION;
		if (this.config.showPrice)
		{
			this.currentBasisPrice = this.params.PRODUCT.BASIS_PRICE;
            if (!!this.params.PRODUCT.PRICES && BX.type.isArray(this.params.PRODUCT.PRICES)) {
                this.currentPrices = this.params.PRODUCT.PRICES;
            }
		}

		this.canBuy = this.product.canBuy;
		this.canSubscription = this.product.canSubscription;

		this.product.name = this.params.PRODUCT.NAME;
		this.product.pict = this.params.PRODUCT.PICT;
		this.product.id = this.params.PRODUCT.ID;

		if (!!this.params.PRODUCT.ADD_URL)
		{
			this.product.addUrl = this.params.PRODUCT.ADD_URL;
		}
		if (!!this.params.PRODUCT.BUY_URL)
		{
			this.product.buyUrl = this.params.PRODUCT.BUY_URL;
		}

		if (!!this.params.PRODUCT.SLIDER_COUNT)
		{
			this.product.sliderCount = parseInt(this.params.PRODUCT.SLIDER_COUNT, 10);
			if (isNaN(this.product.sliderCount))
			{
				this.product.sliderCount = 0;
			}
			if (0 < this.product.sliderCount && !!this.params.PRODUCT.SLIDER.length && 0 < this.params.PRODUCT.SLIDER.length)
			{
				for (j = 0; j < this.params.PRODUCT.SLIDER.length; j++)
				{
					this.product.useSlider = true;
					this.params.PRODUCT.SLIDER[j].WIDTH = parseInt(this.params.PRODUCT.SLIDER[j].WIDTH, 10);
					this.params.PRODUCT.SLIDER[j].HEIGHT = parseInt(this.params.PRODUCT.SLIDER[j].HEIGHT, 10);
				}
				this.product.sliderPict = this.params.PRODUCT.SLIDER;
				this.setCurrentImg(this.product.sliderPict[0], false);
			}
		}
		this.currentIsSet = true;
	}
	else
	{
		this.errorCode = -1;
	}
};

window.JCCatalogElement.prototype.initOffersData = function()
{
	this.initVisualParams('offerSlider');
	this.initVisualParams('offers');
	if (!!this.params.OFFERS && BX.type.isArray(this.params.OFFERS))
	{
		this.offers = this.params.OFFERS;
		this.offerNum = 0;
		if (!!this.params.OFFER_SELECTED)
		{
			this.offerNum = parseInt(this.params.OFFER_SELECTED, 10);
		}
		if (isNaN(this.offerNum))
		{
			this.offerNum = 0;
		}
		if (!!this.params.TREE_PROPS)
		{
			this.treeProps = this.params.TREE_PROPS;
		}
		if (!!this.params.DEFAULT_PICTURE)
		{
			this.defaultPict.preview = this.params.DEFAULT_PICTURE.PREVIEW_PICTIRE;
			this.defaultPict.detail = this.params.DEFAULT_PICTURE.DETAIL_PICTURE;
		}
		if (!!this.params.PRODUCT && typeof(this.params.PRODUCT) === 'object')
		{
			this.product.id = parseInt(this.params.PRODUCT.ID, 10);
			this.product.name = this.params.PRODUCT.NAME;
		}
	}
	else
	{
		this.errorCode = -1;
	}
};

window.JCCatalogElement.prototype.initBasketData = function()
{
	if (!!this.params.BASKET && 'object' === typeof(this.params.BASKET))
	{
		if (1 === this.productType || 2 === this.productType)
		{
			this.basketData.useProps = !!this.params.BASKET.ADD_PROPS;
			this.basketData.emptyProps = !!this.params.BASKET.EMPTY_PROPS;
		}

		if (!!this.params.BASKET.QUANTITY)
		{
			this.basketData.quantity = this.params.BASKET.QUANTITY;
		}
		if (!!this.params.BASKET.PROPS)
		{
			this.basketData.props = this.params.BASKET.PROPS;
		}
		if (!!this.params.BASKET.BASKET_URL)
		{
			this.basketData.basketUrl = this.params.BASKET.BASKET_URL;
		}
		if (3 === this.productType)
		{
			if (!!this.params.BASKET.SKU_PROPS)
			{
				this.basketData.sku_props = this.params.BASKET.SKU_PROPS;
			}
		}
		if (!!this.params.BASKET.ADD_URL_TEMPLATE)
		{
			this.basketData.add_url = this.params.BASKET.ADD_URL_TEMPLATE;
		}
		if (!!this.params.BASKET.BUY_URL_TEMPLATE)
		{
			this.basketData.buy_url = this.params.BASKET.BUY_URL_TEMPLATE;
		}
		if (this.basketData.add_url === '' && this.basketData.buy_url === '')
		{
			this.errorCode = -1024;
		}
	}
};

window.JCCatalogElement.prototype.initCompareData = function()
{
	if (this.config.useCompare)
	{
		if (!!this.params.COMPARE && typeof(this.params.COMPARE) === 'object')
		{
			if (!!this.params.COMPARE.COMPARE_PATH)
			{
				this.compareData.comparePath = this.params.COMPARE.COMPARE_PATH;
			}
			if (!!this.params.COMPARE.COMPARE_URL_TEMPLATE)
			{
				this.compareData.compareUrl = this.params.COMPARE.COMPARE_URL_TEMPLATE;
			}
			else
			{
				this.config.useCompare = false;
			}
		}
		else
		{
			this.config.useCompare = false;
		}
	}
};

window.JCCatalogElement.prototype.setMainPictHandler = function()
{
	switch (this.config.mainPictureMode)
	{
		case 'GALLERY':
			break;
		case 'MAGNIFIER':
			this.magnify.obBigImg = BX(this.visual.BIG_IMG_CONT_ID);
			this.magnify.obBigSlider = BX(this.visual.BIG_SLIDER_ID);
			if (!!this.magnify.obBigImg && !!this.magnify.obBigSlider)
			{
				this.magnify.obMagnifyArea = this.obPictAligner.appendChild(BX.create(
					'DIV',
					{
						props: {
							id: this.visual.MAGNIFIER_AREA_ID,
							className: 'bx_item_slider_lupe_small'
						},
						style: {
							display: 'none',
							top: 0,
							left: 0,
							width: '100px',
							height: '130px'
						},
						events: {
							mouseover: BX.delegate(this.onMagnifierArea, this),
							mouseout: BX.delegate(function(){this.outMagnifierArea(); this.hideMagnifier(); }, this)
						}
					}
				));

				this.magnify.obMagnifier = this.magnify.obBigSlider.appendChild(BX.create(
					'DIV',
					{
						props: {
							id: this.visual.MAGNIFIER_ID,
							className: 'bx_item_slider_lupe'
						},
						style: {
							display: 'none'
						}
					}
				));
				this.magnify.obMagnifyPict = this.magnify.obMagnifier.appendChild(BX.create(
					'IMG',
					{
						props: {
							src: this.currentImg.src
						}
					}
				));
				BX.bind(this.obPict, 'mouseover', BX.delegate(this.showMagnifier, this));
			}
			break;
		case 'POPUP':
			this.obPopupPict = new BX.PopupWindow('CatalogElementPopup_'+this.visual.ID, null, {
				autoHide: false,
				offsetLeft: 0,
				offsetTop: 0,
				overlay : false,
				closeByEsc: true,
				titleBar: true,
				closeIcon: {top: '10px', right: '10px'}
			});
			BX.bind(this.obPict, 'click', BX.delegate(this.showMainPictPopup, this));
			BX.adjust(this.obPict, { style: { cursor: 'pointer' } });
			BX.addCustomEvent(this.obPopupPict, "onAfterPopupShow", BX.proxy(this.onPopupWindowShow, this));
			BX.addCustomEvent(this.obPopupPict, "onPopupClose", BX.proxy(this.onPopupWindowClose, this));
			break;
		default:
			break;
	}
};

window.JCCatalogElement.prototype.setCurrentImg = function(img, showImage)
{
	showImage = !!showImage;
	this.currentImg.src = img.SRC;
	this.currentImg.width = img.WIDTH;
	this.currentImg.height = img.HEIGHT;
    if (showImage && !!this.obPict)
	{
        if (img.TYPE === "video") {
            var curSrc = $('.product-preview-main iframe').attr('src');
            if (curSrc != this.currentImg.src) {
                $('.product-preview-main iframe').attr('src', this.currentImg.src);
            }
            var $contentBlock = $('.product-preview-main-content');
            $contentBlock.removeClass('active');
            $contentBlock.filter('.video').addClass('active');
            $('.product-preview-zoom').addClass('invisible');
        } else {
            var curSrc = $('.product-preview-main img').attr('src');
            if (curSrc != this.currentImg.src) {
                BX.adjust(this.obPict, { props: { src: this.currentImg.src } });
                BX.adjust(this.obPictSub, { props: { src: this.currentImg.src } });
            }
            var $contentBlock = $('.product-preview-main-content');
            $contentBlock.removeClass('active');
            $contentBlock.filter('.image').addClass('active');
            $('.product-preview-zoom').removeClass('invisible');
        }
        $('.product-slider .item').removeClass('active');
        $('.product-slider').eq(this.offerNum).find('.item').eq(0).addClass('active');
	}
};

window.JCCatalogElement.prototype.scaleImg = function(src, dest)
{
	var
		scaleX,
		scaleY,
		scale,
		result = {};

	if (dest.width >= src.width && dest.height >= src.height)
	{
		result.width = src.width;
		result.height = src.height;
	}
	else
	{
		scaleX = dest.width/src.width;
		scaleY = dest.height/src.height;
		scale =  Math.min(scaleX, scaleY);
		result.width = Math.max(1, parseInt(scale*src.width , 10));
		result.height = Math.max(1, parseInt(scale*src.height , 10));
	}
	return result;
};

window.JCCatalogElement.prototype.showMagnifier = function(e)
{
	if (!this.magnify.magnifyShow)
	{
		this.calcMagnifierParams();
		this.calcMagnifyAreaSize();
		this.calcMagnifyAreaPos(e);
		this.calcMagnifyPictSize();
		this.calcMagnifyPictPos();
		this.setMagnifyAreaParams(true);
		this.setMagnifyPictParams(true);
		this.setMagnifierParams(true);
		BX.bind(document, 'mousemove', BX.proxy(this.moveMagnifierArea, this));
	}
};

window.JCCatalogElement.prototype.hideMagnifier = function()
{
	if (!this.magnify.magnifyShow)
	{
		if (!!this.magnify.obMagnifier)
		{
			BX.adjust(this.magnify.obMagnifier, { style: { display: 'none' } });
		}
		if (!!this.magnify.obMagnifyArea)
		{
			BX.adjust(this.magnify.obMagnifyArea, { style: { display: 'none' } });
		}
		BX.unbind(document, 'mousemove', BX.proxy(this.moveMagnifierArea, this));
	}
};

window.JCCatalogElement.prototype.moveMagnifierArea = function(e)
{
	var
		currentPos = {
			X: 0,
			Y: 0
		},
		posBigImg = BX.pos(this.obPict),
		intersect = {},
		params = {},
		paramsPict = {};

	currentPos = this.inRect(e, posBigImg);
	if (this.inBound(posBigImg, currentPos))
	{
		intersect = this.intersectArea(currentPos, posBigImg);
		switch (intersect.X)
		{
			case -1:
				this.magnify.areaParams.left = this.currentImg.screenOffsetX;
				break;
			case 0:
				this.magnify.areaParams.left = this.currentImg.screenOffsetX + currentPos.X - (this.magnify.areaParams.width >>> 1);
				break;
			case 1:
				this.magnify.areaParams.left = this.currentImg.screenOffsetX + posBigImg.width - this.magnify.areaParams.width;
				break;
		}
		switch (intersect.Y)
		{
			case -1:
				this.magnify.areaParams.top = 0;
				break;
			case 0:
				this.magnify.areaParams.top = currentPos.Y - (this.magnify.areaParams.height >>> 1);
				break;
			case 1:
				this.magnify.areaParams.top = posBigImg.height - this.magnify.areaParams.height;
				break;
		}
		this.magnify.magnifyPictParams.marginLeft = -parseInt(((this.magnify.areaParams.left-this.currentImg.screenOffsetX)*this.currentImg.scale), 10);
		this.magnify.magnifyPictParams.marginTop = -parseInt(((this.magnify.areaParams.top)*this.currentImg.scale), 10);
		params.left = this.magnify.areaParams.left+'px';
		params.top = this.magnify.areaParams.top+'px';
		BX.adjust(this.magnify.obMagnifyArea, { style: params });
		paramsPict.marginLeft = this.magnify.magnifyPictParams.marginLeft+'px';
		paramsPict.marginTop = this.magnify.magnifyPictParams.marginTop+'px';
		BX.adjust(this.magnify.obMagnifyPict, { style: paramsPict });
	}
	else
	{
		this.outMagnifierArea();
		this.hideMagnifier();
	}
};

window.JCCatalogElement.prototype.onMagnifierArea = function()
{
	this.magnify.magnifyShow = true;
};

window.JCCatalogElement.prototype.outMagnifierArea = function()
{
	this.magnify.magnifyShow = false;
};

window.JCCatalogElement.prototype.calcMagnifierParams = function()
{
	if (!!this.magnify.obBigImg)
	{
		var pos = BX.pos(this.magnify.obBigImg, true);

		this.magnify.magnifierParams.width = pos.width;
		this.magnify.magnifierParams.height = pos.height;
		this.magnify.magnifierParams.top = pos.top;
		this.magnify.magnifierParams.left = pos.left + pos.width + 2;
	}
};

window.JCCatalogElement.prototype.setMagnifierParams = function(show)
{
	if (!!this.magnify.obMagnifier)
	{
		show = !!show;
		var params = {
			top: this.magnify.magnifierParams.top+'px',
			left: this.magnify.magnifierParams.left+'px',
			width: this.magnify.magnifierParams.width+'px',
			height: this.magnify.magnifierParams.height+'px'
		};
		if (show)
		{
			params.display = '';
		}
		BX.adjust(this.magnify.obMagnifier, { style: params });
	}
};

window.JCCatalogElement.prototype.setMagnifyAreaParams = function(show)
{
	if (!!this.magnify.obMagnifier)
	{
		show = !!show;
		var params = {
			top: this.magnify.areaParams.top+'px',
			left: this.magnify.areaParams.left+'px',
			width: this.magnify.areaParams.width+'px',
			height: this.magnify.areaParams.height+'px'
		};
		if (show)
		{
			params.display = '';
		}
		BX.adjust(this.magnify.obMagnifyArea, { style: params });
	}
};

window.JCCatalogElement.prototype.calcMagnifyAreaPos = function(e)
{
	var currentPos,
		posBigImg,
		intersect;

	posBigImg = BX.pos(this.obPict);
	currentPos = this.inRect(e, posBigImg);
	if (this.inBound(posBigImg, currentPos))
	{
		intersect = this.intersectArea(currentPos, posBigImg);
		switch (intersect.X)
		{
			case -1:
				this.magnify.areaParams.left = this.currentImg.screenOffsetX;
				break;
			case 0:
				this.magnify.areaParams.left = this.currentImg.screenOffsetX + currentPos.X - (this.magnify.areaParams.width >>> 1);
				break;
			case 1:
				this.magnify.areaParams.left = this.currentImg.screenOffsetX + posBigImg.width - this.magnify.areaParams.width;
				break;
		}
		switch (intersect.Y)
		{
			case -1:
				this.magnify.areaParams.top = 0;
				break;
			case 0:
				this.magnify.areaParams.top = currentPos.Y - (this.magnify.areaParams.height >>> 1);
				break;
			case 1:
				this.magnify.areaParams.top = posBigImg.height - this.magnify.areaParams.height;
				break;
		}
	}
};

window.JCCatalogElement.prototype.inBound = function(rect, point)
{
	return ((0 <= point.Y && rect.height >= point.Y) && (0 <= point.X && rect.width >= point.X));
};

window.JCCatalogElement.prototype.inRect = function(e, rect)
{
	var wndSize = BX.GetWindowSize(),
		currentPos = {
			X: 0,
			Y: 0,
			globalX: 0,
			globalY: 0
		};

	currentPos.globalX = e.clientX + wndSize.scrollLeft;
	currentPos.X = currentPos.globalX - rect.left;
	currentPos.globalY = e.clientY + wndSize.scrollTop;
	currentPos.Y = currentPos.globalY - rect.top;
	return currentPos;
};

window.JCCatalogElement.prototype.intersectArea = function(currentPos, rect)
{
	var intersect = {
			X: 0,
			Y: 0
		},
		halfX = this.magnify.areaParams.width >>> 1,
		halfY = this.magnify.areaParams.height >>> 1;

	if (currentPos.X <= halfX)
	{
		intersect.X = -1;
	}
	else if (currentPos.X >= (rect.width - halfX))
	{
		intersect.X = 1;
	}
	else
	{
		intersect.X = 0;
	}
	if (currentPos.Y <= halfY)
	{
		intersect.Y = -1;
	}
	else if (currentPos.Y >= (rect.height - halfY))
	{
		intersect.Y = 1;
	}
	else
	{
		intersect.Y = 0;
	}

	return intersect;
};

window.JCCatalogElement.prototype.calcMagnifyAreaSize = function()
{
	var scaleX,
		scaleY,
		scale;

	if (
		this.magnify.magnifierParams.width < this.currentImg.width &&
			this.magnify.magnifierParams.height < this.currentImg.height
		)
	{
		scaleX = this.magnify.obBigImg.offsetWidth/this.currentImg.width;
		scaleY = this.magnify.obBigImg.offsetHeight/this.currentImg.height;
		scale =  Math.min(scaleX, scaleY);
		this.currentImg.scale = 1/scale;
		this.magnify.areaParams.width = Math.max(1, parseInt(scale*this.magnify.magnifierParams.width , 10));
		this.magnify.areaParams.height = Math.max(1, parseInt(scale*this.magnify.magnifierParams.height , 10));
		this.magnify.areaParams.scaleFactor = this.magnify.magnifierParams.defaultScale;
	}
	else
	{
		scaleX = this.obPict.offsetWidth/this.magnify.obBigImg.offsetWidth;
		scaleY = this.obPict.offsetHeight/this.magnify.obBigImg.offsetHeight;
		scale =  Math.min(scaleX, scaleY);
		this.currentImg.scale = 1/scale;
		this.magnify.areaParams.width = Math.max(1, parseInt(scale*this.magnify.magnifierParams.width , 10));
		this.magnify.areaParams.height = Math.max(1, parseInt(scale*this.magnify.magnifierParams.height , 10));

		scaleX = this.magnify.magnifierParams.width/this.currentImg.width;
		scaleY = this.magnify.magnifierParams.height/this.currentImg.height;
		scale = Math.max(scaleX, scaleY);
		this.magnify.areaParams.scaleFactor = scale;
	}
};

window.JCCatalogElement.prototype.calcMagnifyPictSize = function()
{
	this.magnify.magnifyPictParams.width = this.currentImg.width*this.magnify.areaParams.scaleFactor;
	this.magnify.magnifyPictParams.height = this.currentImg.height*this.magnify.areaParams.scaleFactor;
};

window.JCCatalogElement.prototype.calcMagnifyPictPos = function()
{
	this.magnify.magnifyPictParams.marginLeft = -parseInt(((this.magnify.areaParams.left-this.currentImg.screenOffsetX)*this.currentImg.scale), 10);
	this.magnify.magnifyPictParams.marginTop = -parseInt(((this.magnify.areaParams.top)*this.currentImg.scale), 10);
};

window.JCCatalogElement.prototype.setMagnifyPictParams = function(show)
{
	if (!!this.magnify.obMagnifier)
	{
		show = !!show;
		var params = {
			width: this.magnify.magnifyPictParams.width+'px',
			height: this.magnify.magnifyPictParams.height+'px',
			marginTop: this.magnify.magnifyPictParams.marginTop+'px',
			marginLeft: this.magnify.magnifyPictParams.marginLeft+'px'
		};
		if (show)
		{
			params.display = '';
		}
		BX.adjust(this.magnify.obMagnifyPict, { style: params, props: { src: this.currentImg.src } });
	}
};

window.JCCatalogElement.prototype.ProductSliderRowLeft = function()
{
	var target = BX.proxy_context;
	if (!!target)
	{
		if (this.sliderRowShowSize < this.product.slider.COUNT)
		{
			if (0 > this.product.slider.START)
			{
				this.product.slider.START++;
				BX.adjust(this.product.slider.LIST, { style: { marginLeft: this.product.slider.START*20+'%' }});
				BX.adjust(this.product.slider.RIGHT, { style: this.sliderEnableArrow });
			}

			if (0 <= this.product.slider.START)
			{
				BX.adjust(this.product.slider.LEFT, { style: this.sliderDisableArrow });
			}
		}
	}
};

window.JCCatalogElement.prototype.ProductSliderRowRight = function()
{
	var target = BX.proxy_context;
	if (!!target)
	{
		if (this.sliderRowShowSize < this.product.slider.COUNT)
		{
			if ((this.sliderRowShowSize - this.product.slider.START) < this.product.slider.COUNT)
			{
				this.product.slider.START--;
				BX.adjust(this.product.slider.LIST, { style: { marginLeft: this.product.slider.START*20+'%' }});
				BX.adjust(this.product.slider.LEFT, { style: this.sliderEnableArrow } );
			}

			if ((this.sliderRowShowSize - this.product.slider.START) >= this.product.slider.COUNT)
			{
				BX.adjust(this.product.slider.RIGHT, { style: this.sliderDisableArrow } );
			}
		}
	}
};

window.JCCatalogElement.prototype.ProductSelectSliderImg = function()
{
	var strValue = '',
		target = BX.proxy_context;
	if (!!target && target.hasAttribute('data-value'))
	{
		strValue = target.getAttribute('data-value');
		this.SetProductMainPict(strValue);
	}
};

window.JCCatalogElement.prototype.SetProductMainPict = function(intPict)
{
	var indexPict = -1,
		i = 0,
		j = 0,
		value = '',
		strValue = '',
		RowItems = null;

	if (0 < this.product.sliderCount)
	{
		for (j = 0; j < this.product.sliderPict.length; j++)
		{
			if (intPict === this.product.sliderPict[j].ID)
			{
				indexPict = j;
				break;
			}
		}
		if (-1 < indexPict)
		{
			if (!!this.product.sliderPict[indexPict])
			{
				this.setCurrentImg(this.product.sliderPict[indexPict], true);
			}
			RowItems = BX.findChildren(this.product.slider.LIST, {tagName: 'div'}, false);
			if (!!RowItems && 0 < RowItems.length)
			{
				strValue = intPict;
				for (i = 0; i < RowItems.length; i++)
				{
					value = RowItems[i].getAttribute('data-value');
					if (value === strValue)
					{
						BX.addClass(RowItems[i], 'bx_active');
					}
					else
					{
						BX.removeClass(RowItems[i], 'bx_active');
					}
				}
			}
		}
	}
};

window.JCCatalogElement.prototype.SliderRowLeft = function()
{
	var strValue = '',
		index = -1,
		i,
		target = BX.proxy_context;
	if (!!target && target.hasAttribute('data-value'))
	{
		strValue = target.getAttribute('data-value');
		for (i = 0; i < this.sliders.length; i++)
		{
			if (this.sliders[i].OFFER_ID === strValue)
			{
				index = i;
				break;
			}
		}
		if (-1 < index && this.sliderRowShowSize < this.sliders[index].COUNT)
		{
			if (0 > this.sliders[index].START)
			{
				this.sliders[index].START++;
				BX.adjust(this.sliders[index].LIST, { style: { marginLeft: this.sliders[index].START*20+'%' }});
				BX.adjust(this.sliders[index].RIGHT, { style: this.sliderEnableArrow });
			}

			if (0 <= this.sliders[index].START)
			{
				BX.adjust(this.sliders[index].LEFT, { style: this.sliderDisableArrow });
			}
		}
	}
};

window.JCCatalogElement.prototype.SliderRowRight = function()
{
	var strValue = '',
		index = -1,
		i,
		target = BX.proxy_context;
	if (!!target && target.hasAttribute('data-value'))
	{
		strValue = target.getAttribute('data-value');
		for (i = 0; i < this.sliders.length; i++)
		{
			if (this.sliders[i].OFFER_ID === strValue)
			{
				index = i;
				break;
			}
		}
		if (-1 < index && this.sliderRowShowSize < this.sliders[index].COUNT)
		{
			if ((this.sliderRowShowSize - this.sliders[index].START) < this.sliders[index].COUNT)
			{
				this.sliders[index].START--;
				BX.adjust(this.sliders[index].LIST, { style: { marginLeft: this.sliders[index].START*20+'%' }});
				BX.adjust(this.sliders[index].LEFT, { style: this.sliderEnableArrow } );
			}

			if ((this.sliderRowShowSize - this.sliders[index].START) >= this.sliders[index].COUNT)
			{
				BX.adjust(this.sliders[index].RIGHT, { style: this.sliderDisableArrow } );
			}
		}
	}
};

window.JCCatalogElement.prototype.SelectSliderImg = function()
{
	var strValue = '',
		arItem = [],
		target = BX.proxy_context;
	if (!!target && target.hasAttribute('data-value'))
	{
		strValue = target.getAttribute('data-value');
		arItem = strValue.split('_');
		this.SetMainPict(arItem[0], arItem[1]);
	}
};

window.JCCatalogElement.prototype.SetMainPict = function(intSlider, intPict)
{
	var index = -1,
		indexPict = -1,
		i,
		j,
		value = '',
		RowItems = null,
		strValue = '';

	for (i = 0; i < this.offers.length; i++)
	{
		if (intSlider === this.offers[i].ID)
		{
			index = i;
			break;
		}
	}
	if (-1 < index)
	{
		if (0 < this.offers[index].SLIDER_COUNT)
		{
			for (j = 0; j < this.offers[index].SLIDER.length; j++)
			{
				if (intPict === this.offers[index].SLIDER[j].ID)
				{
					indexPict = j;
					break;
				}
			}
			if (-1 < indexPict)
			{
				if (!!this.offers[index].SLIDER[indexPict])
				{
					this.setCurrentImg(this.offers[index].SLIDER[indexPict], true);
				}
				RowItems = BX.findChildren(this.sliders[index].LIST, {tagName: 'div'}, false);
				if (!!RowItems && 0 < RowItems.length)
				{
					strValue = intSlider+'_'+intPict;
					for (i = 0; i < RowItems.length; i++)
					{
						value = RowItems[i].getAttribute('data-value');
						if (value === strValue)
						{
							BX.addClass(RowItems[i], 'bx_active');
						}
						else
						{
							BX.removeClass(RowItems[i], 'bx_active');
						}
					}
				}
			}
		}
	}
};

window.JCCatalogElement.prototype.SetMainPictFromItem = function(index)
{
	if (!!this.obPict)
	{
		var boolSet = false,
			obNewPict = {};

		if (!!this.offers[index])
		{
			if (!!this.offers[index].DETAIL_PICTURE)
			{
				obNewPict = this.offers[index].DETAIL_PICTURE;
				boolSet = true;
			}
			else if (!!this.offers[index].PREVIEW_PICTURE)
			{
				obNewPict = this.offers[index].PREVIEW_PICTURE;
				boolSet = true;
			}
		}
		if (!boolSet)
		{
			if (!!this.defaultPict.detail)
			{
				obNewPict = this.defaultPict.detail;
				boolSet = true;
			}
			else if (!!this.defaultPict.preview)
			{
				obNewPict = this.defaultPict.preview;
				boolSet = true;
			}
		}
		if (boolSet)
		{
			this.setCurrentImg(obNewPict, true);
		}
	}
};

window.JCCatalogElement.prototype.showMainPictPopup = function(e)
{
	var pictContent = '';

	pictContent = '<div style="text-align: center;"><img src="'+
		this.currentImg.src+
		'" width="'+this.currentImg.width+'" height="'+this.currentImg.height+'" name=""></div>';
	this.obPopupPict.setContent(pictContent);
	this.obPopupPict.show();
	return BX.PreventDefault(e);
};

window.JCCatalogElement.prototype.QuantityUp = function()
{
	var curValue = 0,
		boolSet = true,
		calcPrice;

	if (0 === this.errorCode && this.config.showQuantity && this.canBuy)
	{
		curValue = (this.isDblQuantity ? parseFloat(this.obQuantity.value) : parseInt(this.obQuantity.value, 10));
		if (!isNaN(curValue))
		{
			curValue += this.stepQuantity;
			if (this.checkQuantity)
			{
				if (curValue > this.maxQuantity)
				{
					boolSet = false;
				}
			}

			if (boolSet)
			{
				if (this.isDblQuantity)
				{
					curValue = Math.round(curValue*this.precisionFactor)/this.precisionFactor;
				}
				this.obQuantity.value = curValue;
                calcPrice = {
                    ECONOMY: this.currentBasisPrice.ECONOMY * curValue,
					DISCOUNT_VALUE: this.currentBasisPrice.DISCOUNT_VALUE * curValue,
					VALUE: this.currentBasisPrice.VALUE * curValue,
					DISCOUNT_DIFF: this.currentBasisPrice.DISCOUNT_DIFF * curValue,
					DISCOUNT_DIFF_PERCENT: this.currentBasisPrice.DISCOUNT_DIFF_PERCENT,
					CURRENCY: this.currentBasisPrice.CURRENCY,
                    PRICES: [],
				};
                if (this.currentPrices != undefined && this.currentPrices.length > 1) {
                    for (i = 0; i < this.currentPrices.length; i++)
                    {
                        calcPrice.PRICES[i] = {
                            TITLE: this.currentPrices[i].TITLE,
                            CURRENCY: this.currentPrices[i].CURRENCY,
                            ECONOMY: this.currentPrices[i].ECONOMY * curValue,
                            DISCOUNT_VALUE: this.currentPrices[i].DISCOUNT_VALUE * curValue,
                            VALUE: this.currentPrices[i].VALUE * curValue
                        };
                    }
                }
                this.setPrice(calcPrice);
			}
		}
	}
};

window.JCCatalogElement.prototype.QuantityDown = function()
{
	var curValue = 0,
		boolSet = true,
		calcPrice;

	if (0 === this.errorCode && this.config.showQuantity && this.canBuy)
	{
		curValue = (this.isDblQuantity ? parseFloat(this.obQuantity.value) : parseInt(this.obQuantity.value, 10));
		if (!isNaN(curValue))
		{
			curValue -= this.stepQuantity;
			if (curValue < this.stepQuantity)
			{
				boolSet = false;
			}
			if (boolSet)
			{
				if (this.isDblQuantity)
				{
					curValue = Math.round(curValue*this.precisionFactor)/this.precisionFactor;
				}
				this.obQuantity.value = curValue;
				calcPrice = {
                    ECONOMY: this.currentBasisPrice.ECONOMY * curValue,
					DISCOUNT_VALUE: this.currentBasisPrice.DISCOUNT_VALUE * curValue,
					VALUE: this.currentBasisPrice.VALUE * curValue,
					DISCOUNT_DIFF: this.currentBasisPrice.DISCOUNT_DIFF * curValue,
					DISCOUNT_DIFF_PERCENT: this.currentBasisPrice.DISCOUNT_DIFF_PERCENT,
					CURRENCY: this.currentBasisPrice.CURRENCY,
                    PRICES: [],
				};
                if (this.currentPrices != undefined && this.currentPrices.length > 1) {
                    for (i = 0; i < this.currentPrices.length; i++)
                    {
                        calcPrice.PRICES[i] = {
                            TITLE: this.currentPrices[i].TITLE,
                            CURRENCY: this.currentPrices[i].CURRENCY,
                            ECONOMY: this.currentPrices[i].ECONOMY * curValue,
                            DISCOUNT_VALUE: this.currentPrices[i].DISCOUNT_VALUE * curValue,
                            VALUE: this.currentPrices[i].VALUE * curValue
                        };
                    }
                }
				this.setPrice(calcPrice);
			}
		}
	}
};

window.JCCatalogElement.prototype.QuantityChange = function()
{
	var curValue = 0,
		calcPrice,
		intCount,
		count;

	if (0 === this.errorCode && this.config.showQuantity)
	{
		if (this.canBuy)
		{
			curValue = (this.isDblQuantity ? parseFloat(this.obQuantity.value) : parseInt(this.obQuantity.value, 10));
			if (!isNaN(curValue))
			{
				if (this.checkQuantity)
				{
					if (curValue > this.maxQuantity)
					{
						curValue = this.maxQuantity;
					}
				}
				if (curValue < this.stepQuantity)
				{
					curValue = this.stepQuantity;
				}
				else
				{
					count = Math.round((curValue*this.precisionFactor)/this.stepQuantity)/this.precisionFactor;
					intCount = parseInt(count, 10);
					if (isNaN(intCount))
					{
						intCount = 1;
						count = 1.1;
					}
					if (count > intCount)
					{
						curValue = (intCount <= 1 ? this.stepQuantity : intCount*this.stepQuantity);
						curValue = Math.round(curValue*this.precisionFactor)/this.precisionFactor;
					}
				}
				this.obQuantity.value = curValue;
			}
			else
			{
				this.obQuantity.value = this.stepQuantity;
			}
		}
		else
		{
			this.obQuantity.value = this.stepQuantity;
		}
		calcPrice = {
            ECONOMY: this.currentBasisPrice.ECONOMY * this.obQuantity.value,
			DISCOUNT_VALUE: this.currentBasisPrice.DISCOUNT_VALUE * this.obQuantity.value,
			VALUE: this.currentBasisPrice.VALUE * this.obQuantity.value,
			DISCOUNT_DIFF: this.currentBasisPrice.DISCOUNT_DIFF * this.obQuantity.value,
			DISCOUNT_DIFF_PERCENT: this.currentBasisPrice.DISCOUNT_DIFF_PERCENT,
			CURRENCY: this.currentBasisPrice.CURRENCY,
            PRICES: [],
		};
        if (this.currentPrices != undefined && this.currentPrices.length > 1) {
            for (i = 0; i < this.currentPrices.length; i++)
            {
                calcPrice.PRICES[i] = {
                    TITLE: this.currentPrices[i].TITLE,
                    CURRENCY: this.currentPrices[i].CURRENCY,
                    ECONOMY: this.currentPrices[i].ECONOMY * this.obQuantity.value,
                    DISCOUNT_VALUE: this.currentPrices[i].DISCOUNT_VALUE * this.obQuantity.value,
                    VALUE: this.currentPrices[i].VALUE * this.obQuantity.value
                };
            }
        }
		this.setPrice(calcPrice);
	}
};

window.JCCatalogElement.prototype.QuantitySet = function(index)
{
	var basisPrice = '',
		strLimit;
	if (this.errorCode === 0)
	{
		this.canBuy = this.offers[index].CAN_BUY;
		if (this.canBuy)
		{
			if (!!this.obBasketActions)
			{
				BX.style(this.obBasketActions, 'display', '');
			}
		}
		else
		{
			if (!!this.obBasketActions)
			{
				BX.style(this.obBasketActions, 'display', '');
			}
		}
		if (this.config.showQuantity)
		{
			this.isDblQuantity = this.offers[index].QUANTITY_FLOAT;
			this.checkQuantity = this.offers[index].CHECK_QUANTITY;
			if (this.isDblQuantity)
			{
				this.maxQuantity = parseFloat(this.offers[index].MAX_QUANTITY);
				this.stepQuantity = Math.round(parseFloat(this.offers[index].STEP_QUANTITY)*this.precisionFactor)/this.precisionFactor;
			}
			else
			{
				this.maxQuantity = parseInt(this.offers[index].MAX_QUANTITY, 10);
				this.stepQuantity = parseInt(this.offers[index].STEP_QUANTITY, 10);
			}
			this.obQuantity.value = this.stepQuantity;
			this.obQuantity.disabled = !this.canBuy;
            if (!this.canBuy) {
                $('#' + this.visual.TREE_ID + ' .product-count').hide();
            } else {
                $('#' + this.visual.TREE_ID + ' .product-count').show();
            }
			if (!!this.obMeasure)
			{
				if (!!this.offers[index].MEASURE)
				{
					BX.adjust(this.obMeasure, { html : this.offers[index].MEASURE});
				}
				else
				{
					BX.adjust(this.obMeasure, { html : ''});
				}
			}
			if (!!this.obQuantityLimit.all)
			{
				if (!this.checkQuantity)
				{
					BX.adjust(this.obQuantityLimit.value, { html: '' });
					BX.adjust(this.obQuantityLimit.all, { style: {display: 'none'} });
				}
				else
				{
					strLimit = this.offers[index].MAX_QUANTITY;
					if (!!this.offers[index].MEASURE)
					{
						strLimit += (' '+this.offers[index].MEASURE);
					}
					BX.adjust(this.obQuantityLimit.value, { html: strLimit});
					BX.adjust(this.obQuantityLimit.all, { style: {display: ''} });
				}
			}
			if (!!this.obBasisPrice)
			{
				if (!!this.offers[index].BASIS_PRICE)
				{
					basisPrice = BX.message('BASIS_PRICE_MESSAGE');
					basisPrice = basisPrice.replace(
						'#PRICE#',
						BX.Currency.currencyFormat(this.offers[index].BASIS_PRICE.DISCOUNT_VALUE, this.offers[index].BASIS_PRICE.CURRENCY, true)
					);
					basisPrice = basisPrice.replace('#MEASURE#', this.offers[index].MEASURE);
					BX.adjust(this.obBasisPrice, { style: { display: '' }, html: basisPrice });
				}
				else
				{
					BX.adjust(this.obBasisPrice, { style: { display: 'none' }, html: '' });
				}
			}
		}
		this.currentBasisPrice = this.offers[index].BASIS_PRICE;
		this.currentPrices = this.offers[index].PRICES;
	}
};

window.JCCatalogElement.prototype.SelectOfferProp = function()
{
	var i = 0,
		strTreeValue = '',
		arTreeItem = [],
		RowItems = null,
		target = BX.proxy_context;

	if (!!target && target.hasAttribute('data-treevalue'))
	{
		if (typeof(document.activeElement) === 'object')
			document.activeElement.blur();
		strTreeValue = target.getAttribute('data-treevalue');
		arTreeItem = strTreeValue.split('_');
		this.SearchOfferPropIndex(arTreeItem[0], arTreeItem[1]);
		RowItems = BX.findChildren(target.parentNode, {tagName: 'div'}, false);
		if (!!RowItems && 0 < RowItems.length)
		{
			for (i = 0; i < RowItems.length; i++)
			{
				BX.removeClass(RowItems[i], 'bx_active');
			}
		}
		BX.addClass(target, 'bx_active');
	}
};

window.JCCatalogElement.prototype.SearchOfferPropIndex = function(strPropID, strPropValue)
{
	var strName = '',
		arShowValues = false,
		arCanBuyValues = [],
		allValues = [],
		index = -1,
		i, j,
		arFilter = {},
		tmpFilter = [];

	for (i = 0; i < this.treeProps.length; i++)
	{
		if (this.treeProps[i].ID === strPropID)
		{
			index = i;
			break;
		}
	}

	if (-1 < index)
	{
		for (i = 0; i < index; i++)
		{
			strName = 'PROP_'+this.treeProps[i].ID;
			arFilter[strName] = this.selectedValues[strName];
		}
		strName = 'PROP_'+this.treeProps[index].ID;
		arFilter[strName] = strPropValue;
		for (i = index+1; i < this.treeProps.length; i++)
		{
			strName = 'PROP_'+this.treeProps[i].ID;
			arShowValues = this.GetRowValues(arFilter, strName);
			if (!arShowValues)
			{
				break;
			}
			allValues = [];
			if (this.config.showAbsent)
			{
				arCanBuyValues = [];
				tmpFilter = [];
				tmpFilter = BX.clone(arFilter, true);
				for (j = 0; j < arShowValues.length; j++)
				{
					tmpFilter[strName] = arShowValues[j];
					allValues[allValues.length] = arShowValues[j];
					if (this.GetCanBuy(tmpFilter))
						arCanBuyValues[arCanBuyValues.length] = arShowValues[j];
				}
			}
			else
			{
				arCanBuyValues = arShowValues;
			}
			if (!!this.selectedValues[strName] && BX.util.in_array(this.selectedValues[strName], arCanBuyValues))
			{
				arFilter[strName] = this.selectedValues[strName];
			}
			else
			{
				if (this.config.showAbsent)
					arFilter[strName] = (arCanBuyValues.length > 0 ? arCanBuyValues[0] : allValues[0]);
				else
					arFilter[strName] = arCanBuyValues[0];
			}
			this.UpdateRow(i, arFilter[strName], arShowValues, arCanBuyValues);
		}
		this.selectedValues = arFilter;
		this.ChangeInfo();
	}
};

window.JCCatalogElement.prototype.RowLeft = function()
{
	var strTreeValue = '',
		index = -1,
		i,
		target = BX.proxy_context;
	if (!!target && target.hasAttribute('data-treevalue'))
	{
		strTreeValue = target.getAttribute('data-treevalue');
		for (i = 0; i < this.treeProps.length; i++)
		{
			if (this.treeProps[i].ID === strTreeValue)
			{
				index = i;
				break;
			}
		}
		if (-1 < index && this.treeRowShowSize < this.showCount[index])
		{
			if (0 > this.showStart[index])
			{
				this.showStart[index]++;
				BX.adjust(this.obTreeRows[index].LIST, { style: { marginLeft: this.showStart[index]*20+'%' }});
				BX.adjust(this.obTreeRows[index].RIGHT, { style: this.treeEnableArrow });
			}

			if (0 <= this.showStart[index])
			{
				BX.adjust(this.obTreeRows[index].LEFT, { style: this.treeDisableArrow });
			}
		}
	}
};

window.JCCatalogElement.prototype.RowRight = function()
{
	var strTreeValue = '',
		index = -1,
		i,
		target = BX.proxy_context;
	if (!!target && target.hasAttribute('data-treevalue'))
	{
		strTreeValue = target.getAttribute('data-treevalue');
		for (i = 0; i < this.treeProps.length; i++)
		{
			if (this.treeProps[i].ID === strTreeValue)
			{
				index = i;
				break;
			}
		}
		if (-1 < index && this.treeRowShowSize < this.showCount[index])
		{
			if ((this.treeRowShowSize - this.showStart[index]) < this.showCount[index])
			{
				this.showStart[index]--;
				BX.adjust(this.obTreeRows[index].LIST, { style: { marginLeft: this.showStart[index]*20+'%' }});
				BX.adjust(this.obTreeRows[index].LEFT, { style: this.treeEnableArrow });
			}

			if ((this.treeRowShowSize - this.showStart[index]) >= this.showCount[index])
			{
				BX.adjust(this.obTreeRows[index].RIGHT, { style: this.treeDisableArrow });
			}
		}
	}
};

window.JCCatalogElement.prototype.UpdateRow = function(intNumber, activeID, showID, canBuyID)
{
	var i = 0,
		showI = 0,
		value = '',
		dataTreeVal = '',
		countShow = 0,
		strNewLen = '',
		obData = {},
		RowItems = null,
		pictMode = false,
		extShowMode = false,
		isCurrent = false,
		selectIndex = 0,
		obLeft = this.treeEnableArrow,
		obRight = this.treeEnableArrow,
		currentShowStart = 0;

	if (-1 < intNumber && intNumber < this.obTreeRows.length)
	{
		RowItems = BX.findChildren(this.obTreeRows[intNumber].LIST, {tagName: 'div'}, false);
		if (!!RowItems && 0 < RowItems.length)
		{
			pictMode = ('PICT' === this.treeProps[intNumber].SHOW_MODE);
			countShow = showID.length;
			extShowMode = this.treeRowShowSize < countShow;
            strNewLen = 'auto';
			obData = {
				props: { className: '' },
				style: {
					width: strNewLen
				}
			};
			if (pictMode)
			{
				obData.style.paddingTop = strNewLen;
			}
            obData.style.lineHeight = '0';
			for (i = 0; i < RowItems.length; i++)
			{
				value = RowItems[i].getAttribute('data-onevalue');
                dataTreeVal = RowItems[i].getAttribute('data-treevalue');
				isCurrent = (value === activeID);
				if (BX.util.in_array(value, canBuyID))
				{
					obData.props.className = (isCurrent ? 'inline-block-item bx_active' : 'inline-block-item');
                    if (isCurrent) {
                        $('#id_' + this.visual.ID + '_' + dataTreeVal).attr('checked', 'checked');
                    } else {
                        $('#id_' + this.visual.ID + '_' + dataTreeVal).removeAttr('checked');
                    }
				}
				else
				{
					obData.props.className = (isCurrent ? 'inline-block-item bx_active bx_missing' : 'inline-block-item bx_missing');
                    if (isCurrent) {
                        $('#id_' + this.visual.ID + '_' + dataTreeVal).attr('checked', 'checked');
                    } else {
                        $('#id_' + this.visual.ID + '_' + dataTreeVal).removeAttr('checked');
                    }
				}
				obData.style.display = 'none';
				if (BX.util.in_array(value, showID))
				{
					obData.style.display = '';
					if (isCurrent)
					{
						selectIndex = showI;
					}
					showI++;
				}
				BX.adjust(RowItems[i], obData);
			}

			obData = {
				style: {
					width: 'auto',
				}
			};

			/*if (pictMode)
			{
				BX.adjust(this.obTreeRows[intNumber].CONT, {props: {className: (extShowMode ? 'bx_item_detail_scu full' : 'bx_item_detail_scu')}});
			}
			else
			{
				BX.adjust(this.obTreeRows[intNumber].CONT, {props: {className: (extShowMode < countShow ? 'bx_item_detail_size full' : 'bx_item_detail_size')}});
			}*/
			if (extShowMode)
			{
				if (selectIndex +1 === countShow)
				{
					obRight = this.treeDisableArrow;
				}
				if (this.treeRowShowSize <= selectIndex)
				{
					currentShowStart = this.treeRowShowSize - selectIndex - 1;
				}
				if (0 === currentShowStart)
				{
					obLeft = this.treeDisableArrow;
				}
				BX.adjust(this.obTreeRows[intNumber].LEFT, {style: obLeft });
				BX.adjust(this.obTreeRows[intNumber].RIGHT, {style: obRight });
			}
			else
			{
				BX.adjust(this.obTreeRows[intNumber].LEFT, {style: {display: 'none'}});
				BX.adjust(this.obTreeRows[intNumber].RIGHT, {style: {display: 'none'}});
			}
			BX.adjust(this.obTreeRows[intNumber].LIST, obData);
			this.showCount[intNumber] = countShow;
			this.showStart[intNumber] = currentShowStart;
		}
	}
};

window.JCCatalogElement.prototype.GetRowValues = function(arFilter, index)
{
	var arValues = [],
		i = 0,
		j = 0,
		boolSearch = false,
		boolOneSearch = true;

	if (0 === arFilter.length)
	{
		for (i = 0; i < this.offers.length; i++)
		{
			if (!BX.util.in_array(this.offers[i].TREE[index], arValues))
			{
				arValues[arValues.length] = this.offers[i].TREE[index];
			}
		}
		boolSearch = true;
	}
	else
	{
		for (i = 0; i < this.offers.length; i++)
		{
			boolOneSearch = true;
			for (j in arFilter)
			{
				if (arFilter[j] !== this.offers[i].TREE[j])
				{
					boolOneSearch = false;
					break;
				}
			}
			if (boolOneSearch)
			{
				if (!BX.util.in_array(this.offers[i].TREE[index], arValues))
				{
					arValues[arValues.length] = this.offers[i].TREE[index];
				}
				boolSearch = true;
			}
		}
	}
	return (boolSearch ? arValues : false);
};

window.JCCatalogElement.prototype.GetCanBuy = function(arFilter)
{
	var i = 0,
		j = 0,
		boolOneSearch = true,
		boolSearch = false;

	for (i = 0; i < this.offers.length; i++)
	{
		boolOneSearch = true;
		for (j in arFilter)
		{
			if (arFilter[j] !== this.offers[i].TREE[j])
			{
				boolOneSearch = false;
				break;
			}
		}
		if (boolOneSearch)
		{
			if (this.offers[i].CAN_BUY)
			{
				boolSearch = true;
				break;
			}
		}
	}
	return boolSearch;
};

window.JCCatalogElement.prototype.SetCurrent = function()
{
	var i = 0,
		j = 0,
		strName = '',
		arShowValues = false,
		arCanBuyValues = [],
		arFilter = {},
		tmpFilter = [],
		current = this.offers[this.offerNum].TREE;

	for (i = 0; i < this.treeProps.length; i++)
	{
		strName = 'PROP_'+this.treeProps[i].ID;
		arShowValues = this.GetRowValues(arFilter, strName);
		if (!arShowValues)
		{
			break;
		}
		if (BX.util.in_array(current[strName], arShowValues))
		{
			arFilter[strName] = current[strName];
		}
		else
		{
			arFilter[strName] = arShowValues[0];
			this.offerNum = 0;
		}
		if (this.config.showAbsent)
		{
			arCanBuyValues = [];
			tmpFilter = [];
			tmpFilter = BX.clone(arFilter, true);
			for (j = 0; j < arShowValues.length; j++)
			{
				tmpFilter[strName] = arShowValues[j];
				if (this.GetCanBuy(tmpFilter))
				{
					arCanBuyValues[arCanBuyValues.length] = arShowValues[j];
				}
			}
		}
		else
		{
			arCanBuyValues = arShowValues;
		}
		this.UpdateRow(i, arFilter[strName], arShowValues, arCanBuyValues);
	}
	this.selectedValues = arFilter;
	this.ChangeInfo();
};

window.JCCatalogElement.prototype.ChangeInfo = function()
{
	var index = -1,
		i = 0,
		j = 0,
		boolOneSearch = true;

	for (i = 0; i < this.offers.length; i++)
	{
		boolOneSearch = true;
		for (j in this.selectedValues)
		{
			if (this.selectedValues[j] !== this.offers[i].TREE[j])
			{
				boolOneSearch = false;
				break;
			}
		}
		if (boolOneSearch)
		{
			index = i;
			break;
		}
	}
	if (-1 < index)
	{
        if (this.offers[index].PRICES != undefined && this.offers[index].PRICES.length > 1) {
            var currentPrices = this.offers[index].PRICES;
            this.offers[index].PRICE.PRICES = [];
            for (i = 0; i < currentPrices.length; i++)
            {
                this.offers[index].PRICE.PRICES[i] = {
                    TITLE: currentPrices[i].TITLE,
                    CURRENCY: currentPrices[i].CURRENCY,
                    ECONOMY: currentPrices[i].ECONOMY * currentPrices[i].CATALOG_MEASURE_RATIO,
                    DISCOUNT_VALUE: currentPrices[i].DISCOUNT_VALUE * currentPrices[i].CATALOG_MEASURE_RATIO,
                    VALUE: currentPrices[i].VALUE * currentPrices[i].CATALOG_MEASURE_RATIO
                };
            }
        }
        this.setPrice(this.offers[index].PRICE);
		for (i = 0; i < this.offers.length; i++)
		{
			if (!!this.obBasketActions) {
                var buyButton = BX(this.visual.BUY_ID + this.offers[i].ID);
                if (i == index) {
                    BX.adjust(buyButton, {style: {display: ''}});
                } else {
                    BX.adjust(buyButton, {style: {display: 'none'}});
                }
            }
            if (this.config.showOfferGroup && this.offers[i].OFFER_GROUP)
			{
				if (i !== index)
				{
					BX.adjust(BX(this.visual.OFFER_GROUP+this.offers[i].ID), { style: {display: 'none'} });
				}
			}
			if (!!this.sliders[i].ID)
			{
				if (i === index)
				{
					BX.adjust(this.sliders[i].CONT, {style: { display: ''}});
				}
				else
				{
					BX.adjust(this.sliders[i].CONT, {style: { display: 'none'}});
				}
			}
            this.obQuantityMax = BX(this.visual.QUANTITY_MAX + this.offers[i].ID);
            this.obArtnumber = BX(this.visual.ARTNUMBER_DIV + this.offers[i].ID);
            this.obPropTable = BX(this.visual.PROP_TABLE + this.offers[i].ID);
            this.obLikedCompare = BX(this.visual.LIKED_COMPARE_ID + this.offers[i].ID);
            this.obBuy1Click = BX(this.visual.BUY_1_CLICK_ID + this.offers[i].ID);
            if (i === index)
            {
                if (!!this.obQuantityMax) {
                    BX.adjust(this.obQuantityMax, {style: { display: ''}});
                }
                if (!!this.obArtnumber) {
                    BX.adjust(this.obArtnumber, {style: { display: ''}});
                }
                if (this.config.showSkuProps && !!this.obPropTable)
                {
                    BX.adjust(this.obPropTable, {style: { display: ''}});
                }
                if (!!this.obLikedCompare)
                {
                    BX.adjust(this.obLikedCompare, {style: { display: ''}});
                }
                if (!!this.obBuy1Click)
                {
                    BX.adjust(this.obBuy1Click, {style: { display: ''}});
                }
            }
            else
            {
                if (!!this.obQuantityMax) {
                    BX.adjust(this.obQuantityMax, {style: { display: 'none'}});
                }
                if (!!this.obArtnumber) {
                    BX.adjust(this.obArtnumber, {style: { display: 'none'}});
                }
                if (this.config.showSkuProps && !!this.obPropTable)
                {
                    BX.adjust(this.obPropTable, {style: { display: 'none'}});
                }
                if (!!this.obLikedCompare)
                {
                    BX.adjust(this.obLikedCompare, {style: { display: 'none'}});
                }
                if (!!this.obBuy1Click)
                {
                    BX.adjust(this.obBuy1Click, {style: { display: 'none'}});
                }
            }
		}
		if (this.config.showOfferGroup && this.offers[index].OFFER_GROUP)
		{
			BX.adjust(BX(this.visual.OFFER_GROUP+this.offers[index].ID), { style: {display: ''} });
            var $parentSet = $('#' + this.visual.OFFER_GROUP+this.offers[index].ID),
                $carousel = $parentSet.find('.product-pack-carousel'),
                owl = $carousel.data('owlCarousel');
    
            if (owl !== undefined) {
                owl._width = $carousel.width();
                owl.invalidate('width');
                owl.refresh();
            }
		}
		if (0 < this.offers[index].SLIDER_COUNT)
		{
			this.SetMainPict(this.offers[index].ID, this.offers[index].SLIDER[0].ID);
		}
		else
		{
			this.SetMainPictFromItem(index);
		}
		this.offerNum = index;
		this.QuantitySet(this.offerNum);

		this.incViewedCounter();
        if ($('#product_preview').length <= 0) {
            BX.onCustomEvent('onCatalogStoreProductChange', [this.offers[this.offerNum].ID]);
        }
	}
};

window.JCCatalogElement.prototype.setPrice = function(price)
{
    var strPrice = '';

    if (!!this.obPrice.price)
    {
        var obActionEconomy = BX(this.visual.ACTION_ECONOMY_ID);
        if (price.PRICES != undefined && price.PRICES.length > 1) {
            for (i = 0; i < price.PRICES.length; i++)
            {
                strPrice += '<div class="product-price sale-price">';
                strPrice += '<div class="product-info-caption">' + price.PRICES[i].TITLE + '</div>';
                strPrice += '<div class="main">' + BX.Currency.currencyFormat(price.PRICES[i].DISCOUNT_VALUE, price.PRICES[i].CURRENCY, true) + '</div>';
                if (this.config.showOldPrice && (price.PRICES[i].DISCOUNT_VALUE !== price.PRICES[i].VALUE))
                {
                    strPrice += '<div class="old">' + BX.Currency.currencyFormat(price.PRICES[i].VALUE, price.PRICES[i].CURRENCY, true) + '</div>';
                    strPrice += '<div class="economy">' + this.config.economyHtml.replace('#ECONOMY_PRICE#', BX.Currency.currencyFormat(price.PRICES[i].ECONOMY, price.PRICES[i].CURRENCY, true)) + '</div>';
                }
                strPrice += '</div>';
            }
            var j = price.PRICES.length - 1;
            if (!!obActionEconomy) {
                if (this.config.showOldPrice && (price.PRICES[j].DISCOUNT_VALUE !== price.PRICES[j].VALUE)) {
                    BX.adjust(obActionEconomy, {html: BX.Currency.currencyFormat(price.PRICES[j].ECONOMY, price.PRICES[j].CURRENCY, true)});
                } else {
                    BX.adjust(obActionEconomy, {html: ''});
                }
            }
        } else {
            strPrice += '<div class="product-price sale-price">';
            strPrice += '<div class="main">' + BX.Currency.currencyFormat(price.DISCOUNT_VALUE, price.CURRENCY, true) + '</div>';
            if (this.config.showOldPrice && (price.DISCOUNT_VALUE !== price.VALUE))
            {
                strPrice += '<div class="old">' + BX.Currency.currencyFormat(price.VALUE, price.CURRENCY, true) + '</div>';
                strPrice += '<div class="economy">' + this.config.economyHtml.replace('#ECONOMY_PRICE#', BX.Currency.currencyFormat(price.ECONOMY, price.CURRENCY, true)) + '</div>';
            }
            strPrice += '</div>';
            if (!!obActionEconomy) {
                if (this.config.showOldPrice && (price.DISCOUNT_VALUE !== price.VALUE)) {
                    BX.adjust(obActionEconomy, {html: BX.Currency.currencyFormat(price.ECONOMY, price.CURRENCY, true)});
                } else {
                    BX.adjust(obActionEconomy, {html: ''});
                }
            }
        }
        BX.adjust(this.obPrice.price, {html: strPrice});
    }
};

window.JCCatalogElement.prototype.Compare = function()
{
	var compareParams, compareLink;
    if (!!this.compareData.compareUrl)
	{
		switch (this.productType)
		{
			case 0://no catalog
			case 1://product
			case 2://set
				compareLink = this.compareData.compareUrl.replace('#ID#', this.product.id.toString());
				break;
			case 3://sku
				compareLink = this.compareData.compareUrl.replace('#ID#', this.offers[this.offerNum].ID);
				break;
		}
		compareParams = {
			ajax_action: 'Y'
		};
		BX.ajax.loadJSON(
			compareLink,
			compareParams,
			BX.proxy(this.CompareResult, this)
		);
	}
};

window.JCCatalogElement.prototype.CompareResult = function(result)
{
	var popupContent, popupButtons, popupTitle;
	if (!!this.obPopupWin)
		this.obPopupWin.close();

	if (typeof result !== 'object')
		return false;

	if (result.STATUS === 'OK')
	{
		BX.onCustomEvent('OnCompareChange');
        var compareUrl = (!!this.compareData.comparePath) ? this.compareData.comparePath : '';
        switch (this.productType)
        {
            case 1://
            case 2://
                var productId = this.product.id;
                break;
            case 3:
                var productId = this.offers[this.offerNum].ID;
                break;
        }
        add2compare(productId, result.COUNT, BX.message('BTN_COMPARE_REDIRECT'), compareUrl);
	}
	return false;
};

window.JCCatalogElement.prototype.CompareRedirect = function()
{
	if (!!this.compareData.comparePath)
		location.href = this.compareData.comparePath;
	else
		this.obPopupWin.close();
};

window.JCCatalogElement.prototype.InitBasketUrl = function()
{
	this.basketUrl = (this.basketMode === 'ADD' ? this.basketData.add_url : this.basketData.buy_url);
	switch (this.productType)
	{
		case 1://product
		case 2://set
			this.basketUrl = this.basketUrl.replace('#ID#', this.product.id.toString());
			break;
		case 3://sku
			this.basketUrl = this.basketUrl.replace('#ID#', this.offers[this.offerNum].ID);
			break;
	}
	this.basketParams = {
		'ajax_basket': 'Y'
	};
	if (this.config.showQuantity)
	{
		this.basketParams[this.basketData.quantity] = this.obQuantity.value;
	}
	if (!!this.basketData.sku_props)
	{
		this.basketParams[this.basketData.sku_props_var] = this.basketData.sku_props;
	}
};

window.JCCatalogElement.prototype.FillBasketProps = function()
{
	if (!this.visual.BASKET_PROP_DIV)
		return;

	var
		i = 0,
		propCollection = null,
		foundValues = false,
		obBasketProps = null;
	if (this.basketData.useProps && !this.basketData.emptyProps)
	{
		if (!!this.obPopupWin && !!this.obPopupWin.contentContainer)
			obBasketProps = this.obPopupWin.contentContainer;
	}
	else
	{
		obBasketProps = BX(this.visual.BASKET_PROP_DIV);
	}
	if (!!obBasketProps)
	{
		propCollection = obBasketProps.getElementsByTagName('select');
		if (!!propCollection && !!propCollection.length)
		{
			for (i = 0; i < propCollection.length; i++)
			{
				if (!propCollection[i].disabled)
				{
					switch(propCollection[i].type.toLowerCase())
					{
						case 'select-one':
							this.basketParams[propCollection[i].name] = propCollection[i].value;
							foundValues = true;
							break;
						default:
							break;
					}
				}
			}
		}
		propCollection = obBasketProps.getElementsByTagName('input');
		if (!!propCollection && !!propCollection.length)
		{
			for (i = 0; i < propCollection.length; i++)
			{
				if (!propCollection[i].disabled)
				{
					switch(propCollection[i].type.toLowerCase())
					{
						case 'hidden':
							this.basketParams[propCollection[i].name] = propCollection[i].value;
							foundValues = true;
							break;
						case 'radio':
							if (propCollection[i].checked)
							{
								this.basketParams[propCollection[i].name] = propCollection[i].value;
								foundValues = true;
							}
							break;
						default:
							break;
					}
				}
			}
		}
	}
	if (!foundValues)
	{
		this.basketParams[this.basketData.props] = [];
		this.basketParams[this.basketData.props][0] = 0;
	}
};

window.JCCatalogElement.prototype.SendToBasket = function()
{
	if (!this.canBuy)
		return;

    $.fancybox.helpers.overlay.open({
        closeClick: false,
        parent: $('body'),
    });
    $.fancybox.showLoading();
	this.InitBasketUrl();
	this.FillBasketProps();
	BX.ajax.loadJSON(
		this.basketUrl,
		this.basketParams,
		BX.proxy(this.BasketResult, this)
	);
};

window.JCCatalogElement.prototype.Add2Basket = function()
{
	this.basketMode = 'ADD';
	this.Basket();
};

window.JCCatalogElement.prototype.BuyBasket = function()
{
	this.basketMode = 'BUY';
	this.Basket();
};

window.JCCatalogElement.prototype.Basket = function()
{
	var contentBasketProps = '';
	if (!this.canBuy)
		return;

	switch (this.productType)
	{
	case 1://product
	case 2://set
		var $self = $("#" + this.visual.BUY_ID);
        if (!$self.hasClass('in_basket')) {
            this.SendToBasket();
        }
		break;
	case 3://sku
        var $self = $("#" + this.visual.BUY_ID + this.offers[this.offerNum].ID);
        if (!$self.hasClass('in_basket')) {
            this.SendToBasket();
        }
		break;
	}
};

window.JCCatalogElement.prototype.BasketResult = function(arResult)
{
	var popupContent, popupButtons, popupTitle, productPict;
	if (!!this.obPopupWin)
		this.obPopupWin.close();

	if (typeof arResult !== 'object')
		return false;

	if (arResult.STATUS === 'OK' && this.basketMode === 'BUY')
	{
		this.BasketRedirect();
	}
	else
	{
		var $self = null;
		if (arResult.STATUS === 'OK')
		{
			BX.onCustomEvent('OnBasketChange');
			switch (this.productType)
			{
				case 1://
				case 2://
					productPict = this.product.pict.SRC;
					$self = $("#" + this.visual.BUY_ID);
                    this.obBuyBtn.href = (!!this.basketData.basketUrl ? this.basketData.basketUrl : BX.message('BASKET_URL'));
                    $("#" + this.visual.BUY_ID + " span").html(BX.message('ADD_TO_BASKET'));
                    break;
				case 3:
					productPict = (!!this.offers[this.offerNum].PREVIEW_PICTURE ?
						this.offers[this.offerNum].PREVIEW_PICTURE.SRC :
						this.defaultPict.pict.SRC
						);
                    $self = $("#" + this.visual.BUY_ID + this.offers[this.offerNum].ID);
                    var buyButton = BX(this.visual.BUY_ID + this.offers[this.offerNum].ID);
                    buyButton.href = (!!this.basketData.basketUrl ? this.basketData.basketUrl : BX.message('BASKET_URL'));
                    $("#" + this.visual.BUY_ID + this.offers[this.offerNum].ID + " span").html(BX.message('ADD_TO_BASKET'));
					break;
			}
		}
        preview2Basket($self);
	}
    $.fancybox.hideLoading();
    if (!$self.parents('#product_preview').length) {
        $.fancybox.helpers.overlay.close();
    }
	return false;
};

window.JCCatalogElement.prototype.BasketRedirect = function()
{
	location.href = (!!this.basketData.basketUrl ? this.basketData.basketUrl : BX.message('BASKET_URL'));
};

window.JCCatalogElement.prototype.InitPopupWindow = function()
{
	if (!!this.obPopupWin)
		return;

	this.obPopupWin = BX.PopupWindowManager.create('CatalogElementBasket_'+this.visual.ID, null, {
		autoHide: false,
		offsetLeft: 0,
		offsetTop: 0,
		overlay : true,
		closeByEsc: true,
		titleBar: true,
		closeIcon: {top: '10px', right: '10px'}
	});
};

window.JCCatalogElement.prototype.onPopupWindowShow = function(popup)
{
	BX.bind(document, 'click', BX.proxy(this.popupWindowClick, this));
};

window.JCCatalogElement.prototype.onPopupWindowClose = function(popup, event)
{
	BX.unbind(document, 'click', BX.proxy(this.popupWindowClick, this));
};

window.JCCatalogElement.prototype.popupWindowClick = function()
{
	if (!!this.obPopupPict && typeof (this.obPopupPict) === 'object')
	{
		if (this.obPopupPict.isShown())
			this.obPopupPict.close();
	}
};

window.JCCatalogElement.prototype.incViewedCounter = function()
{
	if (this.currentIsSet && !this.updateViewedCount)
	{
		switch (this.productType)
		{
			case 1:
			case 2:
				this.viewedCounter.params.PRODUCT_ID = this.product.id;
				this.viewedCounter.params.PARENT_ID = this.product.id;
				break;
			case 3:
				this.viewedCounter.params.PARENT_ID = this.product.id;
				this.viewedCounter.params.PRODUCT_ID = this.offers[this.offerNum].ID;
				break;
			default:
				return;
		}
		this.viewedCounter.params.SITE_ID = BX.message('SITE_ID');
		this.updateViewedCount = true;
		BX.ajax.post(
			this.viewedCounter.path,
			this.viewedCounter.params,
			BX.delegate(function(){ this.updateViewedCount = false; }, this)
		);
	}
};

window.JCCatalogElement.prototype.allowViewedCount = function(update)
{
	update = !!update;
	this.currentIsSet = true;
	if (update)
		this.incViewedCounter();
};
window.JCCatalogStoreSKU = function(params)
{
	var i;

	if(!params)
		return;

	this.config = {
		'id' : params.ID,
		'showEmptyStore'	: params.SHOW_EMPTY_STORE,
		'useMinAmount'		: params.USE_MIN_AMOUNT,
		'minAmount'			: params.MIN_AMOUNT
	};

	this.messages = params.MESSAGES;
	this.sku = params.SKU;
	this.stores = params.STORES;
	this.obStores = {};
	for (i in this.stores)
		this.obStores[this.stores[i]] = BX(this.config.id+"_"+this.stores[i]);
    if ($('#product_preview').length <= 0) {
        BX.addCustomEvent(window, "onCatalogStoreProductChange", BX.proxy(this.offerOnChange, this));
    }
};

window.JCCatalogStoreSKU.prototype.offerOnChange = function(id)
{
	var curSku = this.sku[id],
		k,
		message,
		parent;

	for (k in this.obStores)
	{
        message = this.messages['ABSENT'];
		BX.adjust(this.obStores[k], {html: message});
		if (!!curSku[k])
		{
			message = curSku[k];
			BX.adjust(this.obStores[k],  {html: message});
		}
		parent = BX.findParent(this.obStores[k], {tagName: 'li'});
		if (!!this.config.showEmptyStore || curSku[k] > 0)
			BX.show(parent);
		else
			BX.hide(parent);
	}
};
})(window);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:73:"/local/templates/bitlate_pro/js/catalog.section.script.js?150885328747436";s:6:"source";s:57:"/local/templates/bitlate_pro/js/catalog.section.script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function (window) {

if (!!window.JCCatalogSection)
{
	return;
}

var BasketButton = function(params)
{
	BasketButton.superclass.constructor.apply(this, arguments);
	this.nameNode = BX.create('span', {
		props : { className : 'bx_medium bx_bt_button', id : this.id },
		style: typeof(params.style) === 'object' ? params.style : {},
		text: params.text
	});
	this.buttonNode = BX.create('span', {
		attrs: { className: params.ownerClass },
		style: { marginBottom: '0', borderBottom: '0 none transparent' },
		children: [this.nameNode],
		events : this.contextEvents
	});
	if (BX.browser.IsIE())
	{
		this.buttonNode.setAttribute("hideFocus", "hidefocus");
	}
};
BX.extend(BasketButton, BX.PopupWindowButton);

window.JCCatalogSection = function (arParams)
{
	this.productType = 0;
	this.showQuantity = true;
	this.showAbsent = true;
	this.secondPict = false;
	this.showOldPrice = false;
	this.showFullPrice = false;
	this.showPercent = false;
	this.showSkuProps = false;
	this.basketAction = 'ADD';
	this.showClosePopup = false;
	this.useCompare = false;
	this.visual = {
		ID: '',
		PICT_ID: '',
		SECOND_PICT_ID: '',
		QUANTITY_ID: '',
		QUANTITY_UP_ID: '',
		QUANTITY_DOWN_ID: '',
		PRICE_ID: '',
		DSC_PERC: '',
		SECOND_DSC_PERC: '',
		DISPLAY_PROP_DIV: '',
		BASKET_PROP_DIV: ''
	};
	this.product = {
		checkQuantity: false,
		maxQuantity: 0,
		stepQuantity: 1,
		isDblQuantity: false,
		canBuy: true,
		canSubscription: true,
		name: '',
		pict: {},
		id: 0,
		addUrl: '',
		buyUrl: ''
	};

	this.basketMode = '';
	this.basketData = {
		useProps: false,
		emptyProps: false,
		quantity: 'quantity',
		props: 'prop',
		basketUrl: '',
		sku_props: '',
		sku_props_var: 'basket_props',
		add_url: '',
		buy_url: ''
	};

	this.compareData = {
		compareUrl: '',
		comparePath: ''
	};

	this.defaultPict = {
		pict: null,
		secondPict: null
	};

	this.checkQuantity = false;
	this.maxQuantity = 0;
	this.stepQuantity = 1;
	this.isDblQuantity = false;
	this.canBuy = true;
	this.currentBasisPrice = {};
	this.canSubscription = true;
	this.precision = 6;
	this.precisionFactor = Math.pow(10,this.precision);

	this.offers = [];
	this.offerNum = 0;
	this.treeProps = [];
	this.obTreeRows = [];
	this.showCount = [];
	this.showStart = [];
	this.selectedValues = {};

	this.obProduct = null;
	this.obQuantity = null;
	this.obQuantityUp = null;
	this.obQuantityDown = null;
	this.obPict = null;
	this.obSecondPict = null;
	this.obPrice = null;
	this.obPriceHover = null;
	this.obTree = null;
	this.obBuyBtn = null;
	this.obBasketActions = null;
	this.obNotAvail = null;
	this.obDscPerc = null;
	this.obSecondDscPerc = null;
	this.obSkuProps = null;
	this.obMeasure = null;
	this.obCompare = null;

	this.obPopupWin = null;
	this.basketUrl = '';
	this.basketParams = {};

	this.treeRowShowSize = 5;
	this.treeEnableArrow = { display: '', cursor: 'pointer', opacity: 1 };
	this.treeDisableArrow = { display: '', cursor: 'default', opacity:0.2 };

	this.lastElement = false;
	this.containerHeight = 0;

	this.errorCode = 0;

	if ('object' === typeof arParams)
	{
		this.productType = parseInt(arParams.PRODUCT_TYPE, 10);
		this.showQuantity = arParams.SHOW_QUANTITY;
		this.showAbsent = arParams.SHOW_ABSENT;
		this.secondPict = !!arParams.SECOND_PICT;
		this.showOldPrice = !!arParams.SHOW_OLD_PRICE;
		this.showFullPrice = !!arParams.SHOW_FULL_PRICE;
		this.showPercent = !!arParams.SHOW_DISCOUNT_PERCENT;
		this.showSkuProps = !!arParams.SHOW_SKU_PROPS;
		if (!!arParams.ADD_TO_BASKET_ACTION)
		{
			this.basketAction = arParams.ADD_TO_BASKET_ACTION;
		}
		this.showClosePopup = !!arParams.SHOW_CLOSE_POPUP;
		this.useCompare = !!arParams.DISPLAY_COMPARE;

		this.visual = arParams.VISUAL;
		switch (this.productType)
		{
			case 0://no catalog
			case 1://product
			case 2://set
				if (!!arParams.PRODUCT && 'object' === typeof(arParams.PRODUCT))
				{
					if (this.showQuantity)
					{
						this.product.checkQuantity = arParams.PRODUCT.CHECK_QUANTITY;
						this.product.isDblQuantity = arParams.PRODUCT.QUANTITY_FLOAT;
						if (this.product.checkQuantity)
						{
							this.product.maxQuantity = (this.product.isDblQuantity ? parseFloat(arParams.PRODUCT.MAX_QUANTITY) : parseInt(arParams.PRODUCT.MAX_QUANTITY, 10));
						}
						this.product.stepQuantity = (this.product.isDblQuantity ? parseFloat(arParams.PRODUCT.STEP_QUANTITY) : parseInt(arParams.PRODUCT.STEP_QUANTITY, 10));

						this.checkQuantity = this.product.checkQuantity;
						this.isDblQuantity = this.product.isDblQuantity;
						this.maxQuantity = this.product.maxQuantity;
						this.stepQuantity = this.product.stepQuantity;
						if (this.isDblQuantity)
						{
							this.stepQuantity = Math.round(this.stepQuantity*this.precisionFactor)/this.precisionFactor;
						}
					}
					this.product.canBuy = arParams.PRODUCT.CAN_BUY;
					this.product.canSubscription = arParams.PRODUCT.SUBSCRIPTION;
					if (!!arParams.PRODUCT.BASIS_PRICE)
					{
						this.currentBasisPrice = arParams.PRODUCT.BASIS_PRICE;
					}

					this.canBuy = this.product.canBuy;
					this.canSubscription = this.product.canSubscription;

					this.product.name = arParams.PRODUCT.NAME;
					this.product.pict = arParams.PRODUCT.PICT;
					this.product.id = arParams.PRODUCT.ID;
					if (!!arParams.PRODUCT.ADD_URL)
					{
						this.product.addUrl = arParams.PRODUCT.ADD_URL;
					}
					if (!!arParams.PRODUCT.BUY_URL)
					{
						this.product.buyUrl = arParams.PRODUCT.BUY_URL;
					}
					if (!!arParams.BASKET && 'object' === typeof(arParams.BASKET))
					{
						this.basketData.useProps = !!arParams.BASKET.ADD_PROPS;
						this.basketData.emptyProps = !!arParams.BASKET.EMPTY_PROPS;
					}
				}
				else
				{
					this.errorCode = -1;
				}
				break;
			case 3://sku
				if (!!arParams.OFFERS && BX.type.isArray(arParams.OFFERS))
				{
					if (!!arParams.PRODUCT && 'object' === typeof(arParams.PRODUCT))
					{
						this.product.name = arParams.PRODUCT.NAME;
						this.product.id = arParams.PRODUCT.ID;
					}
					this.offers = arParams.OFFERS;
					this.offerNum = 0;
					if (!!arParams.OFFER_SELECTED)
					{
						this.offerNum = parseInt(arParams.OFFER_SELECTED, 10);
					}
					if (isNaN(this.offerNum))
					{
						this.offerNum = 0;
					}
					if (!!arParams.TREE_PROPS)
					{
						this.treeProps = arParams.TREE_PROPS;
					}
					if (!!arParams.DEFAULT_PICTURE)
					{
						this.defaultPict.pict = arParams.DEFAULT_PICTURE.PICTURE;
						this.defaultPict.secondPict = arParams.DEFAULT_PICTURE.PICTURE_SECOND;
					}
				}
				break;
			default:
				this.errorCode = -1;
		}
		if (!!arParams.BASKET && 'object' === typeof(arParams.BASKET))
		{
			if (!!arParams.BASKET.QUANTITY)
			{
				this.basketData.quantity = arParams.BASKET.QUANTITY;
			}
			if (!!arParams.BASKET.PROPS)
			{
				this.basketData.props = arParams.BASKET.PROPS;
			}
			if (!!arParams.BASKET.BASKET_URL)
			{
				this.basketData.basketUrl = arParams.BASKET.BASKET_URL;
			}
			if (3 === this.productType)
			{
				if (!!arParams.BASKET.SKU_PROPS)
				{
					this.basketData.sku_props = arParams.BASKET.SKU_PROPS;
				}
			}
			if (!!arParams.BASKET.ADD_URL_TEMPLATE)
			{
				this.basketData.add_url = arParams.BASKET.ADD_URL_TEMPLATE;
			}
			if (!!arParams.BASKET.BUY_URL_TEMPLATE)
			{
				this.basketData.buy_url = arParams.BASKET.BUY_URL_TEMPLATE;
			}
			if (this.basketData.add_url === '' && this.basketData.buy_url === '')
			{
				this.errorCode = -1024;
			}
		}
		if (this.useCompare)
		{
			if (!!arParams.COMPARE && typeof(arParams.COMPARE) === 'object')
			{
				if (!!arParams.COMPARE.COMPARE_PATH)
				{
					this.compareData.comparePath = arParams.COMPARE.COMPARE_PATH;
				}
				if (!!arParams.COMPARE.COMPARE_URL_TEMPLATE)
				{
					this.compareData.compareUrl = arParams.COMPARE.COMPARE_URL_TEMPLATE;
				}
				else
				{
					this.useCompare = false;
				}
			}
			else
			{
				this.useCompare = false;
			}
		}

		this.lastElement = (!!arParams.LAST_ELEMENT && 'Y' === arParams.LAST_ELEMENT);
	}
	if (0 === this.errorCode)
	{
		BX.ready(BX.delegate(this.Init,this));
	}
};

window.JCCatalogSection.prototype.Init = function()
{
	var i = 0,
		strPrefix = '',
		TreeItems = null;

	this.obProduct = BX(this.visual.ID);
	if (!this.obProduct)
	{
		this.errorCode = -1;
	}
	this.obPict = BX(this.visual.PICT_ID);
	if (!this.obPict)
	{
		this.errorCode = -2;
	}
	if (this.secondPict && !!this.visual.SECOND_PICT_ID)
	{
		this.obSecondPict = BX(this.visual.SECOND_PICT_ID);
	}
	this.obPrice = BX(this.visual.PRICE_ID);
	this.obPriceHover = BX(this.visual.PRICE_HOVER_ID);
	this.obEconomyHover = BX(this.visual.ECONOMY_ID);
	this.obActionEconomy = BX(this.visual.ACTION_ECONOMY_ID);
	if (!this.obPrice)
	{
		this.errorCode = -16;
	}
	if (this.showQuantity && !!this.visual.QUANTITY_ID)
	{
        this.obQuantity = BX(this.visual.QUANTITY_ID);
		if (!!this.visual.QUANTITY_UP_ID)
		{
			this.obQuantityUp = BX(this.visual.QUANTITY_UP_ID);
		}
		if (!!this.visual.QUANTITY_DOWN_ID)
		{
			this.obQuantityDown = BX(this.visual.QUANTITY_DOWN_ID);
		}
	}
	if (3 === this.productType && this.offers.length > 0)
	{
		if (!!this.visual.TREE_ID)
		{
			this.obTree = BX(this.visual.TREE_ID);
			if (!this.obTree)
			{
				this.errorCode = -256;
			}
			strPrefix = this.visual.TREE_ITEM_ID;
			for (i = 0; i < this.treeProps.length; i++)
			{
				this.obTreeRows[i] = {
					LEFT: BX(strPrefix+this.treeProps[i].ID+'_left'),
					RIGHT: BX(strPrefix+this.treeProps[i].ID+'_right'),
					LIST: BX(strPrefix+this.treeProps[i].ID+'_list'),
					CONT: BX(strPrefix+this.treeProps[i].ID+'_cont')
				};
				if (!this.obTreeRows[i].LEFT || !this.obTreeRows[i].RIGHT || !this.obTreeRows[i].LIST || !this.obTreeRows[i].CONT)
				{
					this.errorCode = -512;
					break;
				}
			}
		}
		if (!!this.visual.QUANTITY_MEASURE)
		{
			this.obMeasure = BX(this.visual.QUANTITY_MEASURE);
		}
	}
	this.obBasketActions = BX(this.visual.BASKET_ACTIONS_ID);
	if (!!this.obBasketActions)
	{
		if (!!this.visual.BUY_ID)
		{
			this.obBuyBtn = BX(this.visual.BUY_ID);
		}
	}
	this.obNotAvail = BX(this.visual.NOT_AVAILABLE_MESS);

	if (this.showPercent)
	{
		if (!!this.visual.DSC_PERC)
		{
			this.obDscPerc = BX(this.visual.DSC_PERC);
		}
		if (this.secondPict && !!this.visual.SECOND_DSC_PERC)
		{
			this.obSecondDscPerc = BX(this.visual.SECOND_DSC_PERC);
		}
	}

	if (this.showSkuProps)
	{
		if (!!this.visual.DISPLAY_PROP_DIV)
		{
			this.obSkuProps = BX(this.visual.DISPLAY_PROP_DIV);
		}
	}
	if (0 === this.errorCode)
	{
		if (this.showQuantity)
		{
			if (!!this.obQuantityUp)
			{
                BX.bind(this.obQuantityUp, 'click', BX.delegate(this.QuantityUp, this));
			}
			if (!!this.obQuantityDown)
			{
				BX.bind(this.obQuantityDown, 'click', BX.delegate(this.QuantityDown, this));
			}
			if (!!this.obQuantity)
			{
				BX.bind(this.obQuantity, 'change', BX.delegate(this.QuantityChange, this));
			}
		}
		switch (this.productType)
		{
			case 1://product
				break;
			case 3://sku
				if (this.offers.length > 0)
				{
					TreeItems = BX.findChildren(this.obTree, {tagName: 'div'}, true);
					if (!!TreeItems && 0 < TreeItems.length)
					{
						for (i = 0; i < TreeItems.length; i++)
						{
							BX.bind(TreeItems[i], 'click', BX.delegate(this.SelectOfferProp, this));
						}
					}
					for (i = 0; i < this.obTreeRows.length; i++)
					{
						BX.bind(this.obTreeRows[i].LEFT, 'click', BX.delegate(this.RowLeft, this));
						BX.bind(this.obTreeRows[i].RIGHT, 'click', BX.delegate(this.RowRight, this));
					}
                    for (i = 0; i < this.offers.length; i++)
					{
                        if (!!this.obBasketActions) {
                            var buyButton = BX(this.visual.BUY_ID + this.offers[i].ID);
                            if (this.basketAction === 'ADD')
                                BX.bind(buyButton, 'click', BX.delegate(this.Add2Basket, this));
                            else
                                BX.bind(buyButton, 'click', BX.delegate(this.BuyBasket, this));
                        }
                        if (this.useCompare)
                        {
                            var obOfferCompare = BX(this.visual.COMPARE_LINK_ID + this.offers[i].ID);
                            if (!!obOfferCompare) {
                                BX.bind(obOfferCompare, 'click', BX.proxy(this.Compare, this));
                            }
                        }
					}
					this.SetCurrent();
				}
				break;
		}
		if (3 != this.productType)
        {
            if (!!this.obBuyBtn)
            {
                if (this.basketAction === 'ADD')
                    BX.bind(this.obBuyBtn, 'click', BX.delegate(this.Add2Basket, this));
                else
                    BX.bind(this.obBuyBtn, 'click', BX.delegate(this.BuyBasket, this));
            }
            if (this.useCompare)
            {
                this.obCompare = BX(this.visual.COMPARE_LINK_ID);
                if (!!this.obCompare)
                    BX.bind(this.obCompare, 'click', BX.proxy(this.Compare, this));
            }
        }
	}
};

window.JCCatalogSection.prototype.QuantityUp = function()
{
	var curValue = 0,
		boolSet = true,
		calcPrice;

	if (0 === this.errorCode && this.showQuantity && this.canBuy)
	{
		curValue = (this.isDblQuantity ? parseFloat(this.obQuantity.value) : parseInt(this.obQuantity.value, 10));
		if (!isNaN(curValue))
		{
            curValue += this.stepQuantity;
			if (this.checkQuantity)
			{
				if (curValue > this.maxQuantity)
				{
					boolSet = false;
				}
			}
			if (boolSet)
			{
				if (this.isDblQuantity)
				{
					curValue = Math.round(curValue*this.precisionFactor)/this.precisionFactor;
				}
				this.obQuantity.value = curValue;
                calcPrice = {
                    ECONOMY: this.currentBasisPrice.ECONOMY * curValue,
					DISCOUNT_VALUE: this.currentBasisPrice.DISCOUNT_VALUE * curValue,
					VALUE: this.currentBasisPrice.VALUE * curValue,
					DISCOUNT_DIFF: this.currentBasisPrice.DISCOUNT_DIFF * curValue,
					DISCOUNT_DIFF_PERCENT: this.currentBasisPrice.DISCOUNT_DIFF_PERCENT,
					CURRENCY: this.currentBasisPrice.CURRENCY,
                    PRICES: [],
				};
                var currentPrices = this.currentBasisPrice.PRICES;
                if (currentPrices != undefined && currentPrices.length > 1) {
                    for (i = 0; i < currentPrices.length; i++)
                    {
                        calcPrice.PRICES[i] = {
                            TITLE: currentPrices[i].TITLE,
                            CURRENCY: currentPrices[i].CURRENCY,
                            ECONOMY: currentPrices[i].ECONOMY * curValue,
                            DISCOUNT_VALUE: currentPrices[i].DISCOUNT_VALUE * curValue,
                            VALUE: currentPrices[i].VALUE * curValue
                        };
                    }
                }
				this.setPrice(calcPrice);
			}
		}
	}
};

window.JCCatalogSection.prototype.QuantityDown = function()
{
	var curValue = 0,
		boolSet = true,
		calcPrice;

	if (0 === this.errorCode && this.showQuantity && this.canBuy)
	{
		curValue = (this.isDblQuantity ? parseFloat(this.obQuantity.value): parseInt(this.obQuantity.value, 10));
		if (!isNaN(curValue))
		{
			curValue -= this.stepQuantity;
			if (curValue < this.stepQuantity)
			{
				boolSet = false;
			}
			if (boolSet)
			{
				if (this.isDblQuantity)
				{
					curValue = Math.round(curValue*this.precisionFactor)/this.precisionFactor;
				}
				this.obQuantity.value = curValue;
				calcPrice = {
                    ECONOMY: this.currentBasisPrice.ECONOMY * curValue,
					DISCOUNT_VALUE: this.currentBasisPrice.DISCOUNT_VALUE * curValue,
					VALUE: this.currentBasisPrice.VALUE * curValue,
					DISCOUNT_DIFF: this.currentBasisPrice.DISCOUNT_DIFF * curValue,
					DISCOUNT_DIFF_PERCENT: this.currentBasisPrice.DISCOUNT_DIFF_PERCENT,
					CURRENCY: this.currentBasisPrice.CURRENCY,
                    PRICES: [],
				};
                var currentPrices = this.currentBasisPrice.PRICES;
                if (currentPrices != undefined && currentPrices.length > 1) {
                    for (i = 0; i < currentPrices.length; i++)
                    {
                        calcPrice.PRICES[i] = {
                            TITLE: currentPrices[i].TITLE,
                            CURRENCY: currentPrices[i].CURRENCY,
                            ECONOMY: currentPrices[i].ECONOMY * curValue,
                            DISCOUNT_VALUE: currentPrices[i].DISCOUNT_VALUE * curValue,
                            VALUE: currentPrices[i].VALUE * curValue
                        };
                    }
                }
				this.setPrice(calcPrice);
			}
		}
	}
};

window.JCCatalogSection.prototype.QuantityChange = function()
{
	var curValue = 0,
		calcPrice,
		intCount,
		count;

	if (0 === this.errorCode && this.showQuantity)
	{
		if (this.canBuy)
		{
			curValue = (this.isDblQuantity ? parseFloat(this.obQuantity.value) : parseInt(this.obQuantity.value, 10));
			if (!isNaN(curValue))
			{
				if (this.checkQuantity)
				{
					if (curValue > this.maxQuantity)
					{
						curValue = this.maxQuantity;
					}
				}
				if (curValue < this.stepQuantity)
				{
					curValue = this.stepQuantity;
				}
				else
				{
					count = Math.round((curValue*this.precisionFactor)/this.stepQuantity)/this.precisionFactor;
					intCount = parseInt(count, 10);
					if (isNaN(intCount))
					{
						intCount = 1;
						count = 1.1;
					}
					if (count > intCount)
					{
						curValue = (intCount <= 1 ? this.stepQuantity : intCount*this.stepQuantity);
						curValue = Math.round(curValue*this.precisionFactor)/this.precisionFactor;
					}
				}
				this.obQuantity.value = curValue;
			}
			else
			{
				this.obQuantity.value = this.stepQuantity;
			}
		}
		else
		{
			this.obQuantity.value = this.stepQuantity;
		}
		calcPrice = {
			ECONOMY: this.currentBasisPrice.ECONOMY * this.obQuantity.value,
			DISCOUNT_VALUE: this.currentBasisPrice.DISCOUNT_VALUE * this.obQuantity.value,
			VALUE: this.currentBasisPrice.VALUE * this.obQuantity.value,
			DISCOUNT_DIFF: this.currentBasisPrice.DISCOUNT_DIFF * this.obQuantity.value,
			DISCOUNT_DIFF_PERCENT: this.currentBasisPrice.DISCOUNT_DIFF_PERCENT,
			CURRENCY: this.currentBasisPrice.CURRENCY,
            PRICES: [],
		};
        var currentPrices = this.currentBasisPrice.PRICES;
        if (currentPrices != undefined && currentPrices.length > 1) {
            for (i = 0; i < currentPrices.length; i++)
            {
                calcPrice.PRICES[i] = {
                    TITLE: currentPrices[i].TITLE,
                    CURRENCY: currentPrices[i].CURRENCY,
                    ECONOMY: currentPrices[i].ECONOMY * this.obQuantity.value,
                    DISCOUNT_VALUE: currentPrices[i].DISCOUNT_VALUE * this.obQuantity.value,
                    VALUE: currentPrices[i].VALUE * this.obQuantity.value
                };
            }
        }
		this.setPrice(calcPrice);
	}
};

window.JCCatalogSection.prototype.QuantitySet = function(index)
{
	if (0 === this.errorCode)
	{
		this.canBuy = this.offers[index].CAN_BUY;
		if (this.canBuy)
		{
			if (!!this.obBasketActions)
			{
				BX.style(this.obBasketActions, 'display', '');
			}
			if (!!this.obNotAvail)
			{
				BX.style(this.obNotAvail, 'display', 'none');
			}
		}
		else
		{
			if (!!this.obBasketActions)
			{
				BX.style(this.obBasketActions, 'display', 'none');
			}
			if (!!this.obNotAvail)
			{
				BX.style(this.obNotAvail, 'display', '');
			}
		}
		if (this.showQuantity)
		{
			this.isDblQuantity = this.offers[index].QUANTITY_FLOAT;
			this.checkQuantity = this.offers[index].CHECK_QUANTITY;
			if (this.isDblQuantity)
			{
				this.maxQuantity = parseFloat(this.offers[index].MAX_QUANTITY);
				this.stepQuantity = Math.round(parseFloat(this.offers[index].STEP_QUANTITY)*this.precisionFactor)/this.precisionFactor;
			}
			else
			{
				this.maxQuantity = parseInt(this.offers[index].MAX_QUANTITY, 10);
				this.stepQuantity = parseInt(this.offers[index].STEP_QUANTITY, 10);
			}

			this.obQuantity.value = this.stepQuantity;
			this.obQuantity.disabled = !this.canBuy;
            if (!this.canBuy) {
                $('#' + this.visual.TREE_ID + ' .product-count').hide();
            } else {
                $('#' + this.visual.TREE_ID + ' .product-count').show();
            }
			if (!!this.obMeasure)
			{
				if (!!this.offers[index].MEASURE)
				{
					BX.adjust(this.obMeasure, { html : this.offers[index].MEASURE});
				}
				else
				{
					BX.adjust(this.obMeasure, { html : ''});
				}
			}
		}
		this.currentBasisPrice = this.offers[index].BASIS_PRICE;
	}
};

window.JCCatalogSection.prototype.SelectOfferProp = function()
{
	var i = 0,
		value = '',
		strTreeValue = '',
		arTreeItem = [],
		RowItems = null,
		target = BX.proxy_context;

	if (!!target && target.hasAttribute('data-treevalue'))
	{
		strTreeValue = target.getAttribute('data-treevalue');
		arTreeItem = strTreeValue.split('_');
		if (this.SearchOfferPropIndex(arTreeItem[0], arTreeItem[1]))
		{
			RowItems = BX.findChildren(target.parentNode, {tagName: 'div'}, false);
			if (!!RowItems && 0 < RowItems.length)
			{
				for (i = 0; i < RowItems.length; i++)
				{
					value = RowItems[i].getAttribute('data-onevalue');
					if (value === arTreeItem[1])
					{
						BX.addClass(RowItems[i], 'bx_active');
					}
					else
					{
						BX.removeClass(RowItems[i], 'bx_active');
					}
				}
			}
		}
	}
};

window.JCCatalogSection.prototype.SearchOfferPropIndex = function(strPropID, strPropValue)
{
	var strName = '',
		arShowValues = false,
		i, j,
		arCanBuyValues = [],
		allValues = [],
		index = -1,
		arFilter = {},
		tmpFilter = [];

	for (i = 0; i < this.treeProps.length; i++)
	{
		if (this.treeProps[i].ID === strPropID)
		{
			index = i;
			break;
		}
	}

	if (-1 < index)
	{
		for (i = 0; i < index; i++)
		{
			strName = 'PROP_'+this.treeProps[i].ID;
			arFilter[strName] = this.selectedValues[strName];
		}
		strName = 'PROP_'+this.treeProps[index].ID;
		arShowValues = this.GetRowValues(arFilter, strName);
		if (!arShowValues)
		{
			return false;
		}
		if (!BX.util.in_array(strPropValue, arShowValues))
		{
			return false;
		}
		arFilter[strName] = strPropValue;
		for (i = index+1; i < this.treeProps.length; i++)
		{
			strName = 'PROP_'+this.treeProps[i].ID;
			arShowValues = this.GetRowValues(arFilter, strName);
			if (!arShowValues)
			{
				return false;
			}
			allValues = [];
			if (this.showAbsent)
			{
				arCanBuyValues = [];
				tmpFilter = [];
				tmpFilter = BX.clone(arFilter, true);
				for (j = 0; j < arShowValues.length; j++)
				{
					tmpFilter[strName] = arShowValues[j];
					allValues[allValues.length] = arShowValues[j];
					if (this.GetCanBuy(tmpFilter))
						arCanBuyValues[arCanBuyValues.length] = arShowValues[j];
				}
			}
			else
			{
				arCanBuyValues = arShowValues;
			}
			if (!!this.selectedValues[strName] && BX.util.in_array(this.selectedValues[strName], arCanBuyValues))
			{
				arFilter[strName] = this.selectedValues[strName];
			}
			else
			{
				if (this.showAbsent)
					arFilter[strName] = (arCanBuyValues.length > 0 ? arCanBuyValues[0] : allValues[0]);
				else
					arFilter[strName] = arCanBuyValues[0];
			}
			this.UpdateRow(i, arFilter[strName], arShowValues, arCanBuyValues);
		}
		this.selectedValues = arFilter;
		this.ChangeInfo();
	}
	return true;
};

window.JCCatalogSection.prototype.RowLeft = function()
{
	var i = 0,
		strTreeValue = '',
		index = -1,
		target = BX.proxy_context;

	if (!!target && target.hasAttribute('data-treevalue'))
	{
		strTreeValue = target.getAttribute('data-treevalue');
		for (i = 0; i < this.treeProps.length; i++)
		{
			if (this.treeProps[i].ID === strTreeValue)
			{
				index = i;
				break;
			}
		}
		if (-1 < index && this.treeRowShowSize < this.showCount[index])
		{
			if (0 > this.showStart[index])
			{
				this.showStart[index]++;
				BX.adjust(this.obTreeRows[index].LIST, { style: { marginLeft: this.showStart[index]*20+'%' }});
				BX.adjust(this.obTreeRows[index].RIGHT, { style: this.treeEnableArrow });
			}

			if (0 <= this.showStart[index])
			{
				BX.adjust(this.obTreeRows[index].LEFT, { style: this.treeDisableArrow });
			}
		}
	}
};

window.JCCatalogSection.prototype.RowRight = function()
{
	var i = 0,
		strTreeValue = '',
		index = -1,
		target = BX.proxy_context;

	if (!!target && target.hasAttribute('data-treevalue'))
	{
		strTreeValue = target.getAttribute('data-treevalue');
		for (i = 0; i < this.treeProps.length; i++)
		{
			if (this.treeProps[i].ID === strTreeValue)
			{
				index = i;
				break;
			}
		}
		if (-1 < index && this.treeRowShowSize < this.showCount[index])
		{
			if ((this.treeRowShowSize - this.showStart[index]) < this.showCount[index])
			{
				this.showStart[index]--;
				BX.adjust(this.obTreeRows[index].LIST, { style: { marginLeft: this.showStart[index]*20+'%' }});
				BX.adjust(this.obTreeRows[index].LEFT, { style: this.treeEnableArrow });
			}

			if ((this.treeRowShowSize - this.showStart[index]) >= this.showCount[index])
			{
				BX.adjust(this.obTreeRows[index].RIGHT, { style: this.treeDisableArrow });
			}
		}
	}
};

window.JCCatalogSection.prototype.UpdateRow = function(intNumber, activeID, showID, canBuyID)
{
	var i = 0,
		showI = 0,
		value = '',
		dataTreeVal = '',
		countShow = 0,
		strNewLen = '',
		obData = {},
		pictMode = false,
		extShowMode = false,
		isCurrent = false,
		selectIndex = 0,
		obLeft = this.treeEnableArrow,
		obRight = this.treeEnableArrow,
		currentShowStart = 0,
		RowItems = null;

    if (-1 < intNumber && intNumber < this.obTreeRows.length)
	{
		RowItems = BX.findChildren(this.obTreeRows[intNumber].LIST, {tagName: 'div'}, false);
        if (!!RowItems && 0 < RowItems.length)
		{
			pictMode = ('PICT' === this.treeProps[intNumber].SHOW_MODE);
			countShow = showID.length;
			extShowMode = this.treeRowShowSize < countShow;
			strNewLen = 'auto';
			obData = {
				props: { className: '' },
				style: {
					width: strNewLen
				}
			};
			if (pictMode)
			{
				obData.style.paddingTop = strNewLen;
			}
            obData.style.lineHeight = '0';
			for (i = 0; i < RowItems.length; i++)
			{
				value = RowItems[i].getAttribute('data-onevalue');
				dataTreeVal = RowItems[i].getAttribute('data-treevalue');
                isCurrent = (value === activeID);
				if (BX.util.in_array(value, canBuyID))
				{
					obData.props.className = (isCurrent ? 'inline-block-item bx_active' : 'inline-block-item');
                    if (isCurrent) {
                        $('#' + this.visual.ID + '_prop_' + dataTreeVal).attr('checked', 'checked');
                    } else {
                        $('#' + this.visual.ID + '_prop_' + dataTreeVal).removeAttr('checked');
                    }
				}
				else
				{
					obData.props.className = (isCurrent ? 'inline-block-item bx_active bx_missing' : 'inline-block-item bx_missing');
                    if (isCurrent) {
                        $('#' + this.visual.ID + '_prop_' + dataTreeVal).attr('checked', 'checked');
                    } else {
                        $('#' + this.visual.ID + '_prop_' + dataTreeVal).removeAttr('checked');
                    }
				}
				obData.style.display = 'none';
				if (BX.util.in_array(value, showID))
				{
					obData.style.display = '';
					if (isCurrent)
					{
						selectIndex = showI;
					}
					showI++;
				}
				BX.adjust(RowItems[i], obData);
			}

			obData = {
				style: {
					width: 'auto',
				}
			};
			/*if (pictMode)
			{
				BX.adjust(this.obTreeRows[intNumber].CONT, {props: {className: (extShowMode ? 'bx_item_detail_scu full' : 'bx_item_detail_scu')}});
			}
			else
			{
				BX.adjust(this.obTreeRows[intNumber].CONT, {props: {className: (extShowMode ? 'bx_item_detail_size full' : 'bx_item_detail_size')}});
			}*/
			if (extShowMode)
			{
				if (selectIndex +1 === countShow)
				{
					obRight = this.treeDisableArrow;
				}
				if (this.treeRowShowSize <= selectIndex)
				{
					currentShowStart = this.treeRowShowSize - selectIndex - 1;
				}
				if (0 === currentShowStart)
				{
					obLeft = this.treeDisableArrow;
				}
				BX.adjust(this.obTreeRows[intNumber].LEFT, {style: obLeft });
				BX.adjust(this.obTreeRows[intNumber].RIGHT, {style: obRight });
			}
			else
			{
				BX.adjust(this.obTreeRows[intNumber].LEFT, {style: {display: 'none'}});
				BX.adjust(this.obTreeRows[intNumber].RIGHT, {style: {display: 'none'}});
			}
			BX.adjust(this.obTreeRows[intNumber].LIST, obData);
			this.showCount[intNumber] = countShow;
			this.showStart[intNumber] = currentShowStart;
		}
	}
};

window.JCCatalogSection.prototype.GetRowValues = function(arFilter, index)
{
	var i = 0,
		j,
		arValues = [],
		boolSearch = false,
		boolOneSearch = true;

	if (0 === arFilter.length)
	{
		for (i = 0; i < this.offers.length; i++)
		{
			if (!BX.util.in_array(this.offers[i].TREE[index], arValues))
			{
				arValues[arValues.length] = this.offers[i].TREE[index];
			}
		}
		boolSearch = true;
	}
	else
	{
		for (i = 0; i < this.offers.length; i++)
		{
			boolOneSearch = true;
			for (j in arFilter)
			{
				if (arFilter[j] !== this.offers[i].TREE[j])
				{
					boolOneSearch = false;
					break;
				}
			}
			if (boolOneSearch)
			{
				if (!BX.util.in_array(this.offers[i].TREE[index], arValues))
				{
					arValues[arValues.length] = this.offers[i].TREE[index];
				}
				boolSearch = true;
			}
		}
	}
	return (boolSearch ? arValues : false);
};

window.JCCatalogSection.prototype.GetCanBuy = function(arFilter)
{
	var i = 0,
		j,
		boolSearch = false,
		boolOneSearch = true;

	for (i = 0; i < this.offers.length; i++)
	{
		boolOneSearch = true;
		for (j in arFilter)
		{
			if (arFilter[j] !== this.offers[i].TREE[j])
			{
				boolOneSearch = false;
				break;
			}
		}
		if (boolOneSearch)
		{
			if (this.offers[i].CAN_BUY)
			{
				boolSearch = true;
				break;
			}
		}
	}
	return boolSearch;
};

window.JCCatalogSection.prototype.SetCurrent = function()
{
	var i = 0,
		j = 0,
		arCanBuyValues = [],
		strName = '',
		arShowValues = false,
		arFilter = {},
		tmpFilter = [],
		current = this.offers[this.offerNum].TREE;

	for (i = 0; i < this.treeProps.length; i++)
	{
		strName = 'PROP_'+this.treeProps[i].ID;
		arShowValues = this.GetRowValues(arFilter, strName);
		if (!arShowValues)
		{
			break;
		}
		if (BX.util.in_array(current[strName], arShowValues))
		{
			arFilter[strName] = current[strName];
		}
		else
		{
			arFilter[strName] = arShowValues[0];
			this.offerNum = 0;
		}
		if (this.showAbsent)
		{
			arCanBuyValues = [];
			tmpFilter = [];
			tmpFilter = BX.clone(arFilter, true);
			for (j = 0; j < arShowValues.length; j++)
			{
				tmpFilter[strName] = arShowValues[j];
				if (this.GetCanBuy(tmpFilter))
				{
					arCanBuyValues[arCanBuyValues.length] = arShowValues[j];
				}
			}
		}
		else
		{
			arCanBuyValues = arShowValues;
		}
		this.UpdateRow(i, arFilter[strName], arShowValues, arCanBuyValues);
	}
	this.selectedValues = arFilter;
	this.ChangeInfo();
};

window.JCCatalogSection.prototype.ChangeInfo = function()
{
	var i = 0,
		j,
		index = -1,
		boolOneSearch = true;

	for (i = 0; i < this.offers.length; i++)
	{
		boolOneSearch = true;
		for (j in this.selectedValues)
		{
			if (this.selectedValues[j] !== this.offers[i].TREE[j])
			{
				boolOneSearch = false;
				break;
			}
		}
		if (boolOneSearch)
		{
			index = i;
			break;
		}
	}
	if (-1 < index)
	{
		if (!!this.obPict)
		{
			if (!!this.offers[index].PREVIEW_PICTURE)
			{
				BX.adjust(this.obPict, {props: {src: this.offers[index].PREVIEW_PICTURE.SRC}});
			}
			else
			{
				BX.adjust(this.obPict, {props: {src: this.defaultPict.pict.SRC}});
			}
		}
		if (this.secondPict && !!this.obSecondPict)
		{
			if (!!this.offers[index].PREVIEW_PICTURE_SECOND)
			{
				BX.adjust(this.obSecondPict, {props: {src: this.offers[index].PREVIEW_PICTURE_SECOND.SRC}});
			}
			else if (!!this.offers[index].PREVIEW_PICTURE.SRC)
			{
				BX.adjust(this.obSecondPict, {props: {src: this.offers[index].PREVIEW_PICTURE.SRC}});
			}
			else if (!!this.defaultPict.secondPict)
			{
				BX.adjust(this.obSecondPict, {props: {src: this.defaultPict.secondPict.SRC}});
			}
			else
			{
				BX.adjust(this.obSecondPict, {props: {src: this.defaultPict.pict.SRC}});
			}
		}
		/*if (this.showSkuProps && !!this.obSkuProps)
		{
			if (0 === this.offers[index].DISPLAY_PROPERTIES.length)
			{
				BX.adjust(this.obSkuProps, {style: {display: 'none'}, html: ''});
			}
			else
			{
				BX.adjust(this.obSkuProps, {style: {display: ''}, html: this.offers[index].DISPLAY_PROPERTIES});
			}
		}*/
        /*if (this.offers[index].SHOW_BASKET_BUTTON == "N") {
            this.obBuyBtn.href = (!!this.basketData.basketUrl ? this.basketData.basketUrl : BX.message('BASKET_URL'));
            this.obBuyBtn.text = BX.message('ADD_TO_BASKET');
        } else {
            this.obBuyBtn.href = "javascript:;";
            this.obBuyBtn.text = BX.message('ADD_TO_BASKET_BUTTON');
        }*/
        
        for (i = 0; i < this.offers.length; i++)
        {
            if (!!this.obBasketActions) {
                var buyButton = BX(this.visual.BUY_ID + this.offers[i].ID);
                if (i == index) {
                    BX.adjust(buyButton, {style: {display: ''}});
                } else {
                    BX.adjust(buyButton, {style: {display: 'none'}});
                }
            }
            
            var likedCompare = BX(this.visual.LIKED_COMPARE_ID + this.offers[i].ID);
                if (!!likedCompare) {
                if (i == index) {
                    BX.adjust(likedCompare, {style: {display: ''}});
                } else {
                    BX.adjust(likedCompare, {style: {display: 'none'}});
                }
            }
            var obPropTable = BX(this.visual.PROP_TABLE + this.offers[i].ID);
            if (!!obPropTable) {
                if (i == index) {
                    BX.adjust(obPropTable, {style: {display: ''}});
                } else {
                    BX.adjust(obPropTable, {style: {display: 'none'}});
                }
            }
            var obQuantityMax = BX(this.visual.QUANTITY_MAX + this.offers[i].ID);
            if (!!obQuantityMax) {
                if (i == index) {
                    BX.adjust(obQuantityMax, {style: {display: ''}});
                } else {
                    BX.adjust(obQuantityMax, {style: {display: 'none'}});
                }
            }
        }
        this.currentBasisPrice = this.offers[index].BASIS_PRICE;
        
        var calcPrice = {
            ECONOMY: this.currentBasisPrice.ECONOMY * this.currentBasisPrice.CATALOG_MEASURE_RATIO,
            DISCOUNT_VALUE: this.currentBasisPrice.DISCOUNT_VALUE * this.currentBasisPrice.CATALOG_MEASURE_RATIO,
            VALUE: this.currentBasisPrice.VALUE * this.currentBasisPrice.CATALOG_MEASURE_RATIO,
            DISCOUNT_DIFF: this.currentBasisPrice.DISCOUNT_DIFF * this.currentBasisPrice.CATALOG_MEASURE_RATIO,
            DISCOUNT_DIFF_PERCENT: this.currentBasisPrice.DISCOUNT_DIFF_PERCENT,
            CURRENCY: this.currentBasisPrice.CURRENCY,
            PRICES: [],
        };
        var currentPrices = this.currentBasisPrice.PRICES;
        if (currentPrices != undefined && currentPrices.length > 1) {
            for (j = 0; j < currentPrices.length; j++)
            {
                calcPrice.PRICES[j] = {
                    TITLE: currentPrices[j].TITLE,
                    CURRENCY: currentPrices[j].CURRENCY,
                    ECONOMY: currentPrices[j].ECONOMY * currentPrices[j].CATALOG_MEASURE_RATIO,
                    DISCOUNT_VALUE: currentPrices[j].DISCOUNT_VALUE * currentPrices[j].CATALOG_MEASURE_RATIO,
                    VALUE: currentPrices[j].VALUE * currentPrices[j].CATALOG_MEASURE_RATIO
                };
            }
        }
        this.setPrice(calcPrice);
		this.offerNum = index;
		this.QuantitySet(this.offerNum);
	}
};

window.JCCatalogSection.prototype.setPrice = function(price)
{
	var strPrice,
		obData;

	if (!!this.obPrice)
	{
        if (price.PRICES != undefined && price.PRICES.length > 1) {
            strPrice = BX.Currency.currencyFormat(price.DISCOUNT_VALUE, price.CURRENCY, true);
            if (this.showOldPrice && (price.DISCOUNT_VALUE !== price.VALUE))
            {
                strPrice += ' <span class="old">'+BX.Currency.currencyFormat(price.VALUE, price.CURRENCY, true)+'</span>';
            }
            BX.adjust(this.obPrice, {html: strPrice});
            if (!!this.obActionEconomy) {
                if (this.showOldPrice && (price.DISCOUNT_VALUE !== price.VALUE))
                {
                    strEconomy = BX.Currency.currencyFormat(price.ECONOMY, price.CURRENCY, true);
                    BX.adjust(this.obActionEconomy, {html: strEconomy});
                } else {
                    BX.adjust(this.obActionEconomy, {html: ' '});
                }
            }
            if (this.showFullPrice) {
                this.obPriceHover = this.obPrice;
            }
            if (!!this.obPriceHover) {
                strPriceHover = '';
                for (i = 0; i < price.PRICES.length; i++)
                {
                    if (this.showFullPrice) {
                        strPriceHover += '<div class="price-block">';
                    } else {
                        strPriceHover += '<div class="price-block">';
                    }
                    strPriceHover += '<div class="product-info-caption">' + price.PRICES[i].TITLE + '</div>';
                    strPriceHover += '<div class="price">' + BX.Currency.currencyFormat(price.PRICES[i].DISCOUNT_VALUE, price.PRICES[i].CURRENCY, true);
                    if (this.showOldPrice && (price.PRICES[i].DISCOUNT_VALUE !== price.PRICES[i].VALUE))
                    {
                        strPriceHover += '<span class="old">' + BX.Currency.currencyFormat(price.PRICES[i].VALUE, price.PRICES[i].CURRENCY, true) + '</span></div>';
                        strPriceHover += '<div class="economy">' + this.visual.ECONOMY_HTML.replace('#ECONOMY_PRICE#', BX.Currency.currencyFormat(price.PRICES[i].ECONOMY, price.PRICES[i].CURRENCY, true));
                    }
                    strPriceHover += '</div></div>';
                }
                BX.adjust(this.obPriceHover, {html: strPriceHover});
            }
        } else {
            strPrice = BX.Currency.currencyFormat(price.DISCOUNT_VALUE, price.CURRENCY, true);
            if (this.showOldPrice && (price.DISCOUNT_VALUE !== price.VALUE))
            {
                strPrice += ' <span class="old">'+BX.Currency.currencyFormat(price.VALUE, price.CURRENCY, true)+'</span>';
            }
            BX.adjust(this.obPrice, {html: strPrice});
            if (this.showFullPrice) {
                this.obPriceHover = this.obPrice;
            }
            if (!!this.obPriceHover) {
                strPriceHover = '<div class="price">' + strPrice + '</div>';
                if (this.showOldPrice && (price.DISCOUNT_VALUE !== price.VALUE))
                {
                    strPriceHover += '<div class="economy">' + this.visual.ECONOMY_HTML.replace('#ECONOMY_PRICE#', BX.Currency.currencyFormat(price.ECONOMY, price.CURRENCY, true)) + '</div>';
                }
                BX.adjust(this.obPriceHover, {html: strPriceHover});
            } else {
                strEconomyHover = '';
                if (!!this.obEconomyHover) {
                    if (this.showOldPrice && (price.DISCOUNT_VALUE !== price.VALUE))
                    {
                        strEconomyHover = this.visual.ECONOMY_HTML.replace('#ECONOMY_PRICE#', BX.Currency.currencyFormat(price.ECONOMY, price.CURRENCY, true));
                        BX.adjust(this.obEconomyHover, {html: strEconomyHover});
                        BX.style(this.obEconomyHover, 'display', '');
                    } else {
                        BX.adjust(this.obEconomyHover, {html: ' '});
                        BX.style(this.obEconomyHover, 'display', 'none');
                    }
                }
            }
            if (!!this.obActionEconomy) {
                if (this.showOldPrice && (price.DISCOUNT_VALUE !== price.VALUE))
                {
                    strEconomy = BX.Currency.currencyFormat(price.ECONOMY, price.CURRENCY, true);
                    BX.adjust(this.obActionEconomy, {html: strEconomy});
                } else {
                    BX.adjust(this.obActionEconomy, {html: ' '});
                }
            }
        }
	}
};

window.JCCatalogSection.prototype.Compare = function()
{
	var compareParams, compareLink;
	if (!!this.compareData.compareUrl)
	{
		switch (this.productType)
		{
			case 0://no catalog
			case 1://product
			case 2://set
				compareLink = this.compareData.compareUrl.replace('#ID#', this.product.id.toString());
				break;
			case 3://sku
				compareLink = this.compareData.compareUrl.replace('#ID#', this.offers[this.offerNum].ID);
				break;
		}
		compareParams = {
			ajax_action: 'Y'
		};
		BX.ajax.loadJSON(
			compareLink,
			compareParams,
			BX.proxy(this.CompareResult, this)
		);
	}
};

window.JCCatalogSection.prototype.CompareResult = function(result)
{
	var popupContent, popupButtons, popupTitle;
	if (!!this.obPopupWin)
	{
		this.obPopupWin.close();
	}
	if (typeof result !== 'object')
	{
		return false;
	}
	if (result.STATUS === 'OK')
	{
		BX.onCustomEvent('OnCompareChange');
        var compareUrl = (!!this.compareData.comparePath) ? this.compareData.comparePath : '';
        switch (this.productType)
        {
            case 1://
            case 2://
                var productId = this.product.id;
                break;
            case 3:
                var productId = this.offers[this.offerNum].ID;
                break;
        }
        add2compare(productId, result.COUNT, BX.message('BTN_COMPARE_REDIRECT'), compareUrl);
	}
	return false;
};

window.JCCatalogSection.prototype.CompareRedirect = function()
{
	if (!!this.compareData.comparePath)
	{
		location.href = this.compareData.comparePath;
	}
	else
	{
		this.obPopupWin.close();
	}
};

window.JCCatalogSection.prototype.InitBasketUrl = function()
{
	this.basketUrl = (this.basketMode === 'ADD' ? this.basketData.add_url : this.basketData.buy_url);
	switch (this.productType)
	{
		case 1://product
		case 2://set
			this.basketUrl = this.basketUrl.replace('#ID#', this.product.id.toString());
			break;
		case 3://sku
			this.basketUrl = this.basketUrl.replace('#ID#', this.offers[this.offerNum].ID);
			break;
	}
	this.basketParams = {
		'ajax_basket': 'Y'
	};
	if (this.showQuantity)
	{
		this.basketParams[this.basketData.quantity] = this.obQuantity.value;
	}
	if (!!this.basketData.sku_props)
	{
		this.basketParams[this.basketData.sku_props_var] = this.basketData.sku_props;
	}
};

window.JCCatalogSection.prototype.FillBasketProps = function()
{
	if (!this.visual.BASKET_PROP_DIV)
	{
		return;
	}
	var
		i = 0,
		propCollection = null,
		foundValues = false,
		obBasketProps = null;

	if (this.basketData.useProps && !this.basketData.emptyProps)
	{
		if (!!this.obPopupWin && !!this.obPopupWin.contentContainer)
		{
			obBasketProps = this.obPopupWin.contentContainer;
		}
	}
	else
	{
		obBasketProps = BX(this.visual.BASKET_PROP_DIV);
	}
	if (!!obBasketProps)
	{
		propCollection = obBasketProps.getElementsByTagName('select');
		if (!!propCollection && !!propCollection.length)
		{
			for (i = 0; i < propCollection.length; i++)
			{
				if (!propCollection[i].disabled)
				{
					switch(propCollection[i].type.toLowerCase())
					{
						case 'select-one':
							this.basketParams[propCollection[i].name] = propCollection[i].value;
							foundValues = true;
							break;
						default:
							break;
					}
				}
			}
		}
		propCollection = obBasketProps.getElementsByTagName('input');
		if (!!propCollection && !!propCollection.length)
		{
			for (i = 0; i < propCollection.length; i++)
			{
				if (!propCollection[i].disabled)
				{
					switch(propCollection[i].type.toLowerCase())
					{
						case 'hidden':
							this.basketParams[propCollection[i].name] = propCollection[i].value;
							foundValues = true;
							break;
						case 'radio':
							if (propCollection[i].checked)
							{
								this.basketParams[propCollection[i].name] = propCollection[i].value;
								foundValues = true;
							}
							break;
						default:
							break;
					}
				}
			}
		}
	}
	if (!foundValues)
	{
		this.basketParams[this.basketData.props] = [];
		this.basketParams[this.basketData.props][0] = 0;
	}
};

window.JCCatalogSection.prototype.Add2Basket = function()
{
	this.basketMode = 'ADD';
	this.Basket();
};

window.JCCatalogSection.prototype.BuyBasket = function()
{
	this.basketMode = 'BUY';
	this.Basket();
};

window.JCCatalogSection.prototype.SendToBasket = function()
{
	if (!this.canBuy)
	{
		return;
	}
	this.InitBasketUrl();
	this.FillBasketProps();
    
    $.fancybox.helpers.overlay.open({
        closeClick: false,
        parent: $('body'),
    });
    $.fancybox.showLoading();
	BX.ajax.loadJSON(
		this.basketUrl,
		this.basketParams,
		BX.delegate(this.BasketResult, this)
	);
};

window.JCCatalogSection.prototype.Basket = function()
{
    var contentBasketProps = '';
	if (!this.canBuy)
	{
		return;
	}
	switch (this.productType)
	{
	case 1://product
	case 2://set
        var $self = $("#" + this.visual.BUY_ID);
        if (!$self.hasClass('in_basket')) {
            this.SendToBasket();
        }
		break;
	case 3://sku
        var $self = $("#" + this.visual.BUY_ID + this.offers[this.offerNum].ID);
        if (!$self.hasClass('in_basket')) {
            this.SendToBasket();
        }
		break;
	}
};

window.JCCatalogSection.prototype.BasketResult = function(arResult)
{
	var strContent = '',
		strPict = '',
		successful,
		buttons = [];

	if (!!this.obPopupWin)
	{
		this.obPopupWin.close();
	}
	if ('object' !== typeof arResult)
	{
		return false;
	}
    successful = (arResult.STATUS === 'OK');
	if (successful && this.basketAction === 'BUY')
	{
		this.BasketRedirect();
	}
	else
	{
		var $self = null;
        if (successful)
		{
            BX.onCustomEvent('OnBasketChange');
			switch(this.productType)
			{
			case 1://
			case 2://
				strPict = this.product.pict.SRC;
                $self = $("#" + this.visual.BUY_ID);
                this.obBuyBtn.href = (!!this.basketData.basketUrl ? this.basketData.basketUrl : BX.message('BASKET_URL'));
                $("#" + this.visual.BUY_ID + " span").html(BX.message('ADD_TO_BASKET'));
				break;
			case 3:
				strPict = (!!this.offers[this.offerNum].PREVIEW_PICTURE ?
					this.offers[this.offerNum].PREVIEW_PICTURE.SRC :
					this.defaultPict.pict.SRC
				);
                $self = $("#" + this.visual.BUY_ID + this.offers[this.offerNum].ID);
                var buyButton = BX(this.visual.BUY_ID + this.offers[this.offerNum].ID);
                buyButton.href = (!!this.basketData.basketUrl ? this.basketData.basketUrl : BX.message('BASKET_URL'));
                $("#" + this.visual.BUY_ID + this.offers[this.offerNum].ID + " span").html(BX.message('ADD_TO_BASKET'));
				break;
			}
		}
        preview2Basket($self);
	}
    $.fancybox.hideLoading();
    $.fancybox.helpers.overlay.close();
};

window.JCCatalogSection.prototype.BasketRedirect = function()
{
	location.href = (!!this.basketData.basketUrl ? this.basketData.basketUrl : BX.message('BASKET_URL'));
};
})(window);
/* End */
;; /* /local/templates/bitlate_pro/js/catalog.element.script.js?150885328779546*/
; /* /local/templates/bitlate_pro/js/catalog.section.script.js?150885328747436*/

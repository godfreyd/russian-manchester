<?php
defined('B_PROLOG_INCLUDED') and (B_PROLOG_INCLUDED === true) or die();
IncludeModuleLangFile($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/bitlate.proshop/options.php");
$bitlate_proshop_default_option = array(
	"NL_SHOP_RUB" => "N",
	"NL_SHOP_RUB_FORMAT" => GetMessage("NL_SHOP_RUB_FORMAT"),
	"NL_SHOP_RUB_FORMAT_DEFAULT" => "",
	"NL_REQUEST_CALL_OKKADD_MESS" => GetMessage("NL_REQUEST_CALL_OKKADD_MESS_DEFAULT"),
	"NL_REQUEST_CALL_EMAIL" => "#DEFAULT_EMAIL_FROM#",
	"NL_BUY1CLICK_OKKADD_MESS" => GetMessage("NL_BUY1CLICK_OKKADD_MESS_DEFAULT"),
	"NL_BUY1CLICK_EMAIL" => "#DEFAULT_EMAIL_FROM#",
	"NL_SERVICE_ORDER_OKKADD_MESS" => GetMessage("NL_SERVICE_ORDER_OKKADD_MESS_DEFAULT"),
	"NL_SERVICE_ORDER_EMAIL" => "#DEFAULT_EMAIL_FROM#",
	"NL_CATALOG_REVIEWS_MODERATE" => "N",
	"NL_CATALOG_PRICE_COMPOSITE" => "N",
	"NL_CATALOG_VIEW" => "board",
	"NL_CATALOG_TYPE" => "catalog",
	"NL_CATALOG_ID" => "",
	"NL_CATALOG_OFFERS_TYPE" => "offers",
	"NL_CATALOG_OFFERS_ID" => "",
	"NL_NEWS_ID" => "",
	"NL_MAIN_SLIDER_ID" => "",
	"NL_MAIN_ACTIONS_ID" => "",
	"NL_SERVICES_ID" => "",
	"NL_MANUFACTURE_ID" => "",
	"NL_ADVANTAGES_ID" => "",
	"NL_HBLOCK_SOCIAL_ID" => "",
	"NL_SERVICE_ORDER_ID" => "",
	"NL_TEAM_ID" => "",
	"NL_VACANCY_ID" => "",
	"NL_CATALOG_PROPERTY_CODE" => "DOCS|MANUFACTURE|ARTNUMBER|WEIGHT|DIAGONAL|DIAM|GUARANTEE|COUNTRY|POWER|ZIRNOST|KAKAO|KREPOST|MATERIAL|OBIEM|CVET|VOZRAST|SEASON|COLLECTION|USTANOVKA|GABARITI|GRUZ|PATRON|DLINA|EMKOST|ISTOCHNIK|SKOROST|VOLTE|NAPRIAZENIE|TIP|COKOL|CATEGORY|OUTPUT_CURRENT|FLEXIBLE_TRIPOD|DIAMETER_OF_FILTER|HARDDRIVE|PROTECTION_OF_GLARE|NUMBER_INPUTS|NUMBER_USB|NUMBER_CHANNELS|NUMBER_BURNERS|NUMBER_IN_MEMORY|WINDSHIELD_MOUNT|MAXIMUM_PRESSURE|CASE_MATERIAL|CLOCK|VOLUME_OVEN|OPER_MEM|OPERATING_SYSTEM|SURFACE|HEADSET|COATING|BATTERY|APERTURE|IMPEDANCE|DISPLAY_LINES|NFC|CONTROL_TYPE|NOISE|FOCAL_LENGHT|FORMAT_MEDIA|PLAYBACK_FORMATS|FREQUENCY_RANGE|SENSITIVITY|KEYBOARD_LANGUAGE",
	"NL_CATALOG_OFFERS_PROPERTY_CODE" => "ARTNUMBER|COLOR_REF|SIZES_SHOES|SIZES_CLOTHES",
	"NL_CATALOG_CART_OFFERS_PROPERTY_CODE" => "COLOR_REF|SIZES_SHOES|SIZES_CLOTHES",
	"NL_CATALOG_CART_PRODUCT_PROPERTIES_CODE" => "MANUFACTURE",
	"NL_CATALOG_PRICE_CODE" => "BASE|WHOLESALE",
	"NL_HIDE_NOT_AVAILABLE" => "N",
	"NL_CATALOG_COMPONENT_TEMPLATE" => ".default",
	"NL_CATALOG_MAIN_LIST" => "Y",
	"NL_CATALOG_ART_CODE" => "ARTNUMBER",
	"NL_CATALOG_OFFERS_ART_CODE" => "ARTNUMBER",
	"NL_CATALOG_ADD_PICT_PROP" => "MORE_PHOTO",
	"NL_CATALOG_ADD_VIDEO_PROP" => "MORE_VIDEO",
	"NL_CATALOG_OFFER_ADD_PICT_PROP" => "MORE_PHOTO",
	"NL_CATALOG_OFFER_ADD_VIDEO_PROP" => "MORE_VIDEO",
	"NL_CATALOG_SORT_LIST_CODES" => "price_asc|price_desc|manufacture|manufacture_price_asc",
	"NL_CATALOG_SORT_LIST_FIELDS" => "PROPERTY_MIN_PRICE|PROPERTY_MIN_PRICE|PROPERTY_MANUFACTURE.NAME|PROPERTY_MANUFACTURE.NAME;PROPERTY_MIN_PRICE",
	"NL_CATALOG_SORT_LIST_ORDERS" => "asc,nulls|desc,nulls|asc,nulls|asc;asc,nulls",
	"NL_CATALOG_SORT_LIST_NAME" => GetMessage("NL_SORT_LIST_NAME_DEFAULT_1") . "|". GetMessage("NL_SORT_LIST_NAME_DEFAULT_2") . "|" . GetMessage("NL_SORT_LIST_NAME_DEFAULT_3") . "|" . GetMessage("NL_SORT_LIST_NAME_DEFAULT_4"),
	"NL_CATALOG_USE_COMPARE" => "Y",
	"NL_CATALOG_USE_AMOUNT" => "Y",
	"NL_CATALOG_STORES" => "1",
	"NL_CATALOG_USE_MIN_AMOUNT" => "Y",
	"NL_CATALOG_MIN_AMOUNT" => "10",
	"NL_CATALOG_MAX_AMOUNT" => "20",
	"NL_CATALOG_USE_BIG_DATA" => "N",
	"NL_CATALOG_BIG_DATA_RCM_TYPE" => "bestsell",
	"NL_CATALOG_PAGE_TO_LIST" => "16|64|ALL",
	"NL_CATALOG_SEF_FOLDER" => "#SITE_DIR#catalog/",
	"NL_CATALOG_SEF_URL_TEMPLATES_SECTIONS" => "filter/#SMART_FILTER_PATH#/apply/",
	"NL_CATALOG_SEF_URL_TEMPLATES_SECTION" => "#SECTION_CODE#/",
	"NL_CATALOG_SEF_URL_TEMPLATES_ELEMENT" => "#SECTION_CODE#/#ELEMENT_CODE#.html",
	"NL_CATALOG_SEF_URL_TEMPLATES_COMPARE" => "compare/",
	"NL_CATALOG_SEF_URL_TEMPLATES_SEARCH" => "search/",
	"NL_SLIDER_PAGE_ELEMENT_COUNT" => "10",
	"NL_SLIDER_ELEMENT_SORT_FIELD" => "sort",
	"NL_SLIDER_ELEMENT_SORT_ORDER" => "asc",
	"NL_SLIDER_ELEMENT_SORT_FIELD2" => "active_from",
	"NL_SLIDER_ELEMENT_SORT_ORDER2" => "asc",
	"NL_MAIN_TABS_PAGE_ELEMENT_COUNT" => "15",
	"NL_MAIN_TABS_PAGE_ELEMENT_COUNT_BANNERS" => "17",
	"NL_MAIN_TABS_PAGE_ELEMENT_COUNT_MAX" => "15",
	"NL_MAIN_TABS_ELEMENT_SORT_FIELD" => "sort",
	"NL_MAIN_TABS_ELEMENT_SORT_ORDER" => "asc",
	"NL_MAIN_TABS_ELEMENT_SORT_FIELD2" => "active_from",
	"NL_MAIN_TABS_ELEMENT_SORT_ORDER2" => "asc",
	"NL_SET_STATUS_404" => "N",
	"NL_SHOW_404" => "N",
	"NL_MESSAGE_404" => GetMessage("NL_MESSAGE_404_DEFAULT"),
	"NL_MAIN_BANNER_VALUE" => "medium",
	"NL_PRODUCT_TYPE_VALUE" => "board",
	"NL_PRODUCT_SIZE_TYPE_VALUE" => "max",
	"NL_ACTION_POS_VALUE" => "board3_3",
	"NL_ACTION_SORT_FIELD_VALUE" => "SORT",
	"NL_BASKET_POS_VALUE" => "fixed",
	"NL_NEWS_TYPE_VALUE" => 3,
	"NL_FILTER_TYPE_VALUE" => "VERTICAL",
	"NL_HEADER_TYPE_VALUE" => "pro1",
	"NL_HEADER_VERSION_VALUE" => "v1",
	"NL_MAIN_MENU_POS" => "header",
	"NL_MAIN_BLOCK_POSITION_VALUE" => "MAIN-1|ADVANTAGES-1|ACTIONS-1|PRODUCTS-1|NEWS-1|BRANDS-1",
	"NL_MODULE_SITE_ID" => "",
	"NL_MODULE_SITE_DIR" => "",
);
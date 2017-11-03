<?global $favFilter;
if (is_array($USER_FAVORITES) && count($USER_FAVORITES) > 0) {
    $favFilter = array('ID' => array_keys($USER_FAVORITES));
} else {
    $favFilter = array('ID' => false);
}

$APPLICATION->IncludeComponent(
	"bitrix:catalog.section",
	"favorites",
	array(
		"USER_FAVORITES" => $USER_FAVORITES,
		"BY_LINK" => "Y",
		"IBLOCK_TYPE" => "#NL_CATALOG_TYPE#",
		"IBLOCK_ID" => "#NL_CATALOG_ID#",
		"ELEMENT_SORT_FIELD" => "sort",
		"ELEMENT_SORT_ORDER" => "asc",
		"ELEMENT_SORT_FIELD2" => "active_from",
		"ELEMENT_SORT_ORDER2" => "asc",
		"META_KEYWORDS" => "-",
		"META_DESCRIPTION" => "-",
		"BROWSER_TITLE" => "-",
		"INCLUDE_SUBSECTIONS" => "Y",
		"BASKET_URL" => "#SITE_DIR#personal/cart/",
		"ACTION_VARIABLE" => "",
		"PRODUCT_ID_VARIABLE" => "",
		"SECTION_ID_VARIABLE" => "",
		"PRODUCT_QUANTITY_VARIABLE" => "",
		"PRODUCT_PROPS_VARIABLE" => "prop",
		"FILTER_NAME" => 'favFilter',
		"CACHE_TYPE" => "N",
		"CACHE_TIME" =>  0,
		"CACHE_FILTER" => "N",
		"CACHE_GROUPS" => "N",
		"SET_TITLE" => "N",
		"SET_STATUS_404" => "N",
		"DISPLAY_COMPARE" => "#NL_CATALOG_USE_COMPARE#",
		"PAGE_ELEMENT_COUNT" => "999999",
		"LINE_ELEMENT_COUNT" => "",
		"PRICE_CODE" => #NL_CATALOG_PRICE_CODE#,
		"USE_PRICE_COUNT" => "N",
		"SHOW_PRICE_COUNT" => "1",
		"PRICE_VAT_INCLUDE" => "Y",
		"USE_PRODUCT_QUANTITY" => "Y",
		"ADD_PROPERTIES_TO_BASKET" => "Y",
		"PARTIAL_PRODUCT_PROPERTIES" => "Y",
		"PRODUCT_PROPERTIES" => #NL_CATALOG_CART_PRODUCT_PROPERTIES_CODE#,
		"DISPLAY_TOP_PAGER" => "N",
		"DISPLAY_BOTTOM_PAGER" => "N",
		"PAGER_TITLE" => "",
		"PAGER_SHOW_ALWAYS" => "N",
		"PAGER_TEMPLATE" => ".default",
		"PAGER_DESC_NUMBERING" => "N",
		"PAGER_DESC_NUMBERING_CACHE_TIME" => "",
		"PAGER_SHOW_ALL" => "N",
		"PROPERTY_CODE" => #NL_CATALOG_PROPERTY_CODE#,
		"OFFERS_CART_PROPERTIES" => #NL_CATALOG_CART_OFFERS_PROPERTY_CODE#,
		"OFFERS_FIELD_CODE" => array(
		),
		"OFFERS_PROPERTY_CODE" => #NL_CATALOG_OFFERS_PROPERTY_CODE#,
		"OFFERS_SORT_FIELD" => "sort",
        "OFFERS_SORT_FIELD2" => "name",
        "OFFERS_SORT_ORDER" => "asc",
        "OFFERS_SORT_ORDER2" => "asc",
		"OFFERS_LIMIT" => "0",
		"SECTION_ID" => "",
		"SECTION_CODE" => "",
		"SECTION_URL" => "#NL_CATALOG_SEF_FOLDER##NL_CATALOG_SEF_URL_TEMPLATES_SECTION#",
        "DETAIL_URL" => "#NL_CATALOG_SEF_FOLDER##NL_CATALOG_SEF_URL_TEMPLATES_ELEMENT#",
		"CONVERT_CURRENCY" => "N",
		"HIDE_NOT_AVAILABLE" => "N",
		"LABEL_PROP" => "SALELEADER",
		"ADD_PICT_PROP" => "#NL_CATALOG_ADD_PICT_PROP#",
        "ADD_VIDEO_PROP" => "#NL_CATALOG_ADD_VIDEO_PROP#",
		"PRODUCT_DISPLAY_MODE" => "Y",
		"OFFER_ADD_PICT_PROP" => "#NL_CATALOG_OFFER_ADD_PICT_PROP#",
        "OFFER_ADD_VIDEO_PROP" => "#NL_CATALOG_OFFER_ADD_VIDEO_PROP#",
		"OFFER_TREE_PROPS" => #NL_CATALOG_OFFERS_PROPERTY_CODE#,
		"PRODUCT_SUBSCRIPTION" => "N",
		"SHOW_DISCOUNT_PERCENT" => "N",
		"SHOW_OLD_PRICE" => "Y",
		"ADD_TO_BASKET_ACTION" => "ADD",
		"MESS_BTN_BUY" => "",
		"MESS_BTN_ADD_TO_BASKET" => "",
		"MESS_BTN_DETAIL" => "",
		"MESS_NOT_AVAILABLE" => "",
		"TEMPLATE_THEME" => "",
		"ADD_SECTIONS_CHAIN" => "N",
		"SECTION_USER_FIELDS" => array(
		),
		"SHOW_ALL_WO_SECTION" => "Y",
		"AJAX_MODE" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "N",
		"AJAX_OPTION_HISTORY" => "N",
		"SET_META_KEYWORDS" => "N",
		"SET_META_DESCRIPTION" => "N",
		"AJAX_OPTION_ADDITIONAL" => "",
	),
	false
);
<?$APPLICATION->IncludeComponent("bitrix:sale.basket.basket.line", $TEMPLATE, array(
        "PATH_TO_BASKET" => SITE_DIR."personal/cart/",
        "PATH_TO_PERSONAL" => SITE_DIR."personal/",
        "SHOW_PERSONAL_LINK" => "N",
        "SHOW_NUM_PRODUCTS" => "Y",
        "SHOW_TOTAL_PRICE" => "Y",
        "SHOW_PRODUCTS" => "Y",
        "POSITION_FIXED" =>"N",
        "HIDE_ON_BASKET_PAGES" => "N",
    ),
    false,
    array()
);?>
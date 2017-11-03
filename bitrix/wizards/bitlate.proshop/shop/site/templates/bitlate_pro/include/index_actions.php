<?$MAIN_BANNER_TYPE = $templateOptions['main_banner'];
$MAIN_SLIDER_TYPE = $templateOptions['action_pos'];
$SORT_FIELD = $templateOptions['action_sort_field'];
if ($SORT_FIELD != 'SORT') {
    $SORT_FIELD = 'PROPERTY_' . $SORT_FIELD;
}
$NEWS_COUNT = $templateOptions['news_count'];?>
<?if (!in_array($MAIN_SLIDER_TYPE, array('product', 'empty')) && $templateOptions['positions']['ACTIONS']['visible'] == 1):
    global $arrFilterBanners;
    $arrFilterBanners = array('PROPERTY_SIZE' => BitlateProUtils::getBannerSizeId('gorizontal_mini'));
    if ($MAIN_SLIDER_TYPE == 'right') {
        $arrFilterBanners = array('PROPERTY_SIZE' => BitlateProUtils::getBannerSizeId('gorizontal_right'));
    } elseif (in_array($MAIN_SLIDER_TYPE, array('board3_3'))) {
        $arrFilterBanners = array(array(
            "LOGIC" => "OR",
            array("PROPERTY_SIZE" => BitlateProUtils::getBannerSizeId('gorizontal')),
            array("PROPERTY_SIZE" => BitlateProUtils::getBannerSizeId('vertical')),
            array("PROPERTY_SIZE" => BitlateProUtils::getBannerSizeId('square')),
        ));
    } elseif (in_array($MAIN_SLIDER_TYPE, array('board4_2'))) {
        $arrFilterBanners = array(array(
            "LOGIC" => "OR",
            array("PROPERTY_SIZE" => BitlateProUtils::getBannerSizeId('gorizontal_4_2')),
            array("PROPERTY_SIZE" => BitlateProUtils::getBannerSizeId('vertical_4_2')),
            array("PROPERTY_SIZE" => BitlateProUtils::getBannerSizeId('square_mini')),
        ));
    } elseif ($MAIN_SLIDER_TYPE == 'product') {
        $arrFilterBanners = array(array(
            "LOGIC" => "OR",
            array("PROPERTY_SIZE" => BitlateProUtils::getBannerSizeId('big_product')),
            array("PROPERTY_SIZE" => BitlateProUtils::getBannerSizeId('gorizontal_priduct')),
        ));
    }?>
    <?$APPLICATION->IncludeComponent(
        "bitrix:news.list",
        "main_banner_slider",
        array(
            "IBLOCK_TYPE" => "news",
            "IBLOCK_ID" => '#NL_ACTIONS_IBLOCK_ID#',
            "NEWS_COUNT" => $NEWS_COUNT,
            "SORT_BY1" => $SORT_FIELD,
            "SORT_ORDER1" => "ASC",
            "SORT_BY2" => "ACTIVE_FROM",
            "SORT_ORDER2" => "DESC",
            "FILTER_NAME" => "arrFilterBanners",
            "FIELD_CODE" => array(
                0 => "NAME",
                1 => "PREVIEW_TEXT",
                2 => "DETAIL_PICTURE",
            ),
            "PROPERTY_CODE" => array(
                0 => "LINK_TYPE",
                1 => "LINK",
                2 => "SIZE",
                3 => "POSITION",
                4 => "GORIZONTAL_RIGHT_PHOTO",
                5 => "GORIZONTAL_MINI_PHOTO",
                6 => "GORIZONTAL_PHOTO",
                7 => "VERTICAL_PHOTO",
                8 => "SQUARE_PHOTO",
                9 => "SQUARE_MINI_PHOTO",
            ),
            "CHECK_DATES" => "Y",
            "DETAIL_URL" => "",
            "AJAX_MODE" => "N",
            "AJAX_OPTION_JUMP" => "N",
            "AJAX_OPTION_STYLE" => "Y",
            "AJAX_OPTION_HISTORY" => "N",
            "CACHE_TYPE" => "A",
            "CACHE_TIME" => "36000000",
            "CACHE_FILTER" => "N",
            "CACHE_GROUPS" => "Y",
            "PREVIEW_TRUNCATE_LEN" => "",
            "ACTIVE_DATE_FORMAT" => "d.m.Y",
            "SET_STATUS_404" => "N",
            "SET_TITLE" => "N",
            "INCLUDE_IBLOCK_INTO_CHAIN" => "N",
            "ADD_SECTIONS_CHAIN" => "N",
            "HIDE_LINK_WHEN_NO_DETAIL" => "N",
            "PARENT_SECTION" => "",
            "PARENT_SECTION_CODE" => "",
            "INCLUDE_SUBSECTIONS" => "Y",
            "PAGER_TEMPLATE" => ".default",
            "DISPLAY_TOP_PAGER" => "N",
            "DISPLAY_BOTTOM_PAGER" => "N",
            "PAGER_SHOW_ALWAYS" => "Y",
            "PAGER_DESC_NUMBERING" => "N",
            "PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
            "PAGER_SHOW_ALL" => "N",
            "AJAX_OPTION_ADDITIONAL" => "",
            "DISPLAY_PANEL" => "Y",
            "SLIDER_TYPE" => $MAIN_SLIDER_TYPE,
        ),
        false
    );?>
<?endif;?>
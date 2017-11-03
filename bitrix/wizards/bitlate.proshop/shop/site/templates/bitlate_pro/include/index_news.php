<?$fieldCode = array(
    0 => "NAME",
    1 => "ACTIVE_FROM",
    2 => "PREVIEW_TEXT",
);
$NEWS_TYPE = $templateOptions['news_type'];
if ($NEWS_TYPE == 1 || $NEWS_TYPE == 3) {
    $fieldCode[] = "PREVIEW_PICTURE";
}?>
<?$APPLICATION->IncludeComponent(
    "bitrix:news.list", 
    "main_news", 
    array(
        "IBLOCK_TYPE" => "news",
        "IBLOCK_ID" => '#NL_NEWS_IBLOCK_ID#',
        "NEWS_COUNT" => "20",
        "SORT_BY1" => "ACTIVE_FROM",
        "SORT_ORDER1" => "DESC",
        "SORT_BY2" => "SORT",
        "SORT_ORDER2" => "ASC",
        "FILTER_NAME" => "",
        "FIELD_CODE" => $fieldCode,
        "DISPLAY_PICTURE" => ($NEWS_TYPE == 1) ? "Y" : "N",
        "PROPERTY_CODE" => array(),
        "CHECK_DATES" => "Y",
        "DETAIL_URL" => "",
        "AJAX_MODE" => "N",
        "AJAX_OPTION_JUMP" => "N",
        "AJAX_OPTION_STYLE" => "Y",
        "AJAX_OPTION_HISTORY" => "N",
        "CACHE_TYPE" => "A",
        "CACHE_TIME" => "36000000",
        "CACHE_FILTER" => "Y",
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
        "PAGER_TITLE" => getMessage('TITLE_NEWS'),
        "PAGER_SHOW_ALWAYS" => "Y",
        "PAGER_DESC_NUMBERING" => "N",
        "PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
        "PAGER_SHOW_ALL" => "N",
        "AJAX_OPTION_ADDITIONAL" => "",
        "DISPLAY_PANEL" => "Y",
    ),
    false
);?>
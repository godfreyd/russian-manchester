<?$MAIN_BANNER_TYPE = $templateOptions['main_banner'];
$MAIN_SLIDER_TYPE = $templateOptions['action_pos'];?>
<div class="main-slider-banner<?=(($MAIN_SLIDER_TYPE == 'on') ? " lapping" : '')?> float-center <?=$MAIN_BANNER_TYPE?><?if ($MAIN_SLIDER_TYPE == 'right'):?> banner-right<?endif;?>">
    <?$APPLICATION->IncludeComponent(
        "bitrix:news.list",
        "main_slider",
        array(
            "IBLOCK_TYPE" => "services",
            "IBLOCK_ID" => '6',
            "NEWS_COUNT" => "999999",
            "SORT_BY1" => "SORT",
            "SORT_ORDER1" => "ASC",
            "SORT_BY2" => "ACTIVE_FROM",
            "SORT_ORDER2" => "DESC",
            "FILTER_NAME" => "",
            "FIELD_CODE" => array(
                0 => "NAME",
                1 => "PREVIEW_TEXT",
                2 => "",
            ),
            "PROPERTY_CODE" => array(
                0 => "LINK",
                1 => "STYLE",
                2 => "VIDEO_ID",
                3 => "VIDEO_TIME",
                4 => "PARALLAX_1",
                5 => "PARALLAX_2",
                6 => "PARALLAX_3",
                7 => "PARALLAX_4",
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
        ),
        false
    );?>
    <?if ($templateOptions['main_actions_position']):
        require($_SERVER["DOCUMENT_ROOT"] . SITE_TEMPLATE_PATH . "/include/index_actions.php");
    endif;?>
</div>
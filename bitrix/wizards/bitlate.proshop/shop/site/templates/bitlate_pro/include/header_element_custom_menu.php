<div id="bx_custom_menu">
    <?$frame = new \Bitrix\Main\Page\FrameHelper("bx_custom_menu", false);
    $frame->begin();?>
        <?if ($USER->IsAdmin() && $APPLICATION->GetCurDir() == SITE_DIR):?>
            <?$APPLICATION->IncludeComponent("bitlatepro:custom.menu","",Array(
                'CUR_THEME' => $templateOptions['theme_type'],
                'CUR_THEME_COLOR_1' => $templateOptions['theme_color_1'],
                'CUR_THEME_COLOR_2' => $templateOptions['theme_color_2'],
                'CUR_MAIN_BANNER' => $templateOptions['main_banner'],
                'CUR_PRODUCT_TYPE' => $templateOptions['product_type'],
                'CUR_ACTION_POS' => $templateOptions['action_pos'],
                'CUR_BASKET_POS' => $templateOptions['basket_pos'],
                'CUR_NEWS_TYPE' => $templateOptions['news_type'],
                'CUR_FILTER_TYPE' => $templateOptions['filter_type'],
                'CUR_HEADER_TYPE' => $templateOptions['header_type'],
                'CUR_HEADER_VERSION' => $templateOptions['header_version'],
                'CUR_MAIN_BLOCK_POSITION' => $templateOptions['positions'],
                'CUR_MAIN_ACTIONS_POSITION' => $templateOptions['main_actions_position'],
                'CUR_PRODUCT_SIZE_TYPE' => $templateOptions['product_size'],
                'CUR_MAIN_MENU_POS' => $templateOptions['main_menu_pos'],
            ));?>
        <?endif;?>
    <?$frame->beginStub();?>
    <?$frame->end();?>
</div>
<?php
__IncludeLang($_SERVER['DOCUMENT_ROOT'] . "/local/templates/bitlate_pro/lang/" . LANGUAGE_ID . "/ajax.php", false, true);
class BitlateProUtils
{
    public static $propertyEnumValues;
    
    public static function getThemeList() {
        return array(
            // 0 - default
            0 => array(
                'CODE' => 'black_blue',
                'COLOR_1' => '#222222',
                'COLOR_2' => '#2d59ff',
            ),
            1 => array(
                'CODE' => 'black_brown',
                'COLOR_1' => '#222222',
                'COLOR_2' => '#9c8762',
            ),
            2 => array(
                'CODE' => 'blue_red',
                'COLOR_1' => '#006dd2',
                'COLOR_2' => '#f65130',
            ),
            3 => array(
                'CODE' => 'blue_yellow',
                'COLOR_1' => '#023397',
                'COLOR_2' => '#fcc901',
            ),
            4 => array(
                'CODE' => 'green_red',
                'COLOR_1' => '#15c284',
                'COLOR_2' => '#ff5a43',
            ),
            5 => array(
                'CODE' => 'blue_orange',
                'COLOR_1' => '#3a5bc3',
                'COLOR_2' => '#ff7424',
            ),
            6 => array(
                'CODE' => 'blue_green',
                'COLOR_1' => '#2b95e9',
                'COLOR_2' => '#26ce83',
            ),
        );
    }
    
    public static function getActionPosList() {
        return array(
            // 3 - default
            0 => array(
                'CODE' => 'on',
                'ENUM_CODE' => 'gorizontal_mini',
                'SORT_FIELD' => 'SORT',
                'TITLE' => GetMessage('CUSTOM_MENU_ACTION_BANNER_ON'),
            ),
            1 => array(
                'CODE' => 'below',
                'ENUM_CODE' => 'gorizontal_mini',
                'SORT_FIELD' => 'SORT',
                'TITLE' => GetMessage('CUSTOM_MENU_ACTION_BANNER_BELOW'),
            ),
            2 => array(
                'CODE' => 'right',
                'ENUM_CODE' => 'gorizontal_right',
                'SORT_FIELD' => 'SORT',
                'TITLE' => GetMessage('CUSTOM_MENU_ACTION_BANNER_RIGHT'),
            ),
            3 => array(
                'CODE' => 'board3_3',
                'ENUM_CODE' => 'square',
                'SORT_FIELD' => 'POSITION_3_3',
                'TITLE' => GetMessage('CUSTOM_MENU_ACTION_BANNER_3_3'),
            ),
            4 => array(
                'CODE' => 'board4_2',
                'ENUM_CODE' => 'square_mini',
                'SORT_FIELD' => 'POSITION_4_2',
                'TITLE' => GetMessage('CUSTOM_MENU_ACTION_BANNER_4_2'),
            ),
            5 => array(
                'CODE' => 'product',
                'ENUM_CODE' => 'big_product',
                'SORT_FIELD' => 'POSITION',
                'TITLE' => GetMessage('CUSTOM_MENU_ACTION_BANNER_PRODUCT'),
            ),
            /*6 => array(
                'CODE' => 'empty',
                'TITLE' => GetMessage('CUSTOM_MENU_ACTION_BANNER_EMPTY'),
            ),*/
        );
    }
    
    public static function getBasketPosList() {
        return array(
            // 1 - default
            0 => array(
                'CODE' => 'header',
                'TITLE' => GetMessage('CUSTOM_MENU_BASKET_HEADER'),
            ),
            1 => array(
                'CODE' => 'fixed',
                'TITLE' => GetMessage('CUSTOM_MENU_BASKET_FIXED'),
            ),
        );
    }
    
    public static function getNewsTypeList() {
        return array(
            // 2 - default
            0 => array(
                'CODE' => 1,
                'TITLE' => GetMessage('CUSTOM_MENU_NEWS_TYPE_1'),
            ),
            1 => array(
                'CODE' => 2,
                'TITLE' => GetMessage('CUSTOM_MENU_NEWS_TYPE_2'),
            ),
            2 => array(
                'CODE' => 3,
                'TITLE' => GetMessage('CUSTOM_MENU_NEWS_TYPE_3'),
            ),
        );
    }
    
    public static function getMainBannerList() {
        return array(
            // 1 - default
            0 => array(
                'CODE' => 'large',
                'CHAR' => 'L',
                'TITLE' => GetMessage('CUSTOM_MENU_MAIN_BANNER_L'),
            ),
            1 => array(
                'CODE' => 'medium',
                'CHAR' => 'M',
                'TITLE' => GetMessage('CUSTOM_MENU_MAIN_BANNER_M'),
            ),
            2 => array(
                'CODE' => 'small',
                'CHAR' => 'S',
                'TITLE' => GetMessage('CUSTOM_MENU_MAIN_BANNER_S'),
            ),
        );
    }
    
    public static function getProductTypeList() {
        return array(
            // 0 - default
            0 => array(
                'CODE' => 'board',
                'TITLE' => GetMessage('CUSTOM_MENU_PRODUCT_BOARD'),
            ),
            1 => array(
                'CODE' => 'slider',
                'TITLE' => GetMessage('CUSTOM_MENU_PRODUCT_SLIDER'),
            ),
        );
    }
    
    public static function getFilterTypeList() {
        return array(
            // 0 - default
            0 => array(
                'CODE' => 'VERTICAL',
                'TITLE' => GetMessage('CUSTOM_MENU_FILTER_VERTICAL'),
            ),
            1 => array(
                'CODE' => 'HORIZONTAL',
                'TITLE' => GetMessage('CUSTOM_MENU_FILTER_HORIZONTAL'),
            ),
        );
    }
    
    public static function getHeaderTypeList() {
        return array(
            // 0 - default
            0 => array(
                'CODE' => 'pro1',
                'HEADER' => 'v1',
                'CLASS' => 'header-v1 theme-transparent-primary',
                'HEADER_TITLE' => GetMessage('CUSTOM_MENU_HEADER_TYPE_0'),
                'TITLE' => GetMessage('CUSTOM_MENU_HEADER_0'),
            ),
            1 => array(
                'CODE' => 'lite',
                'HEADER' => 'lite',
                'CLASS' => '',
                'HEADER_TITLE' => GetMessage('CUSTOM_MENU_HEADER_TYPE_1'),
                'TITLE' => GetMessage('CUSTOM_MENU_HEADER_1'),
            ),
            2 => array(
                'CODE' => 'pro2',
                'HEADER' => 'v1',
                'CLASS' => 'header-v1 theme-transparent-secondary',
                'HEADER_TITLE' => GetMessage('CUSTOM_MENU_HEADER_TYPE_1'),
                'TITLE' => GetMessage('CUSTOM_MENU_HEADER_2'),
            ),
            3 => array(
                'CODE' => 'pro3',
                'HEADER' => 'v1',
                'CLASS' => 'header-v1 theme-primary-white',
                'HEADER_TITLE' => GetMessage('CUSTOM_MENU_HEADER_TYPE_1'),
                'TITLE' => GetMessage('CUSTOM_MENU_HEADER_3'),
            ),
            4 => array(
                'CODE' => 'pro4',
                'HEADER' => 'v1',
                'CLASS' => 'header-v1 theme-secondary-white',
                'HEADER_TITLE' => GetMessage('CUSTOM_MENU_HEADER_TYPE_1'),
                'TITLE' => GetMessage('CUSTOM_MENU_HEADER_4'),
            ),
            5 => array(
                'CODE' => 'pro5',
                'HEADER' => 'v2',
                'CLASS' => 'header-v2 theme-transparent-primary',
                'HEADER_TITLE' => GetMessage('CUSTOM_MENU_HEADER_TYPE_2'),
                'TITLE' => GetMessage('CUSTOM_MENU_HEADER_5'),
            ),
            6 => array(
                'CODE' => 'pro6',
                'HEADER' => 'v2',
                'CLASS' => 'header-v2 theme-primary-white',
                'HEADER_TITLE' => GetMessage('CUSTOM_MENU_HEADER_TYPE_2'),
                'TITLE' => GetMessage('CUSTOM_MENU_HEADER_6'),
            ),
            7 => array(
                'CODE' => 'pro7',
                'HEADER' => 'v2',
                'CLASS' => 'header-v2 theme-secondary-white',
                'HEADER_TITLE' => GetMessage('CUSTOM_MENU_HEADER_TYPE_2'),
                'TITLE' => GetMessage('CUSTOM_MENU_HEADER_7'),
            ),
            8 => array(
                'CODE' => 'pro8',
                'HEADER' => 'v3',
                'CLASS' => 'header-v3 theme-transparent-primary',
                'HEADER_TITLE' => GetMessage('CUSTOM_MENU_HEADER_TYPE_3'),
                'TITLE' => GetMessage('CUSTOM_MENU_HEADER_8'),
            ),
            9 => array(
                'CODE' => 'pro9',
                'HEADER' => 'v3',
                'CLASS' => 'header-v3 theme-primary-white',
                'HEADER_TITLE' => GetMessage('CUSTOM_MENU_HEADER_TYPE_3'),
                'TITLE' => GetMessage('CUSTOM_MENU_HEADER_9'),
            ),
            10 => array(
                'CODE' => 'pro10',
                'HEADER' => 'v3',
                'CLASS' => 'header-v3 theme-secondary-white',
                'HEADER_TITLE' => GetMessage('CUSTOM_MENU_HEADER_TYPE_3'),
                'TITLE' => GetMessage('CUSTOM_MENU_HEADER_10'),
            ),
        );
    }
    
    public static function getMainBlockPositionList() {
        return array(
            'MAIN' => array(
                'CODE' => 'MAIN',
                'TITLE' => GetMessage('CUSTOM_BLOCK_POSITION_MAIN'),
                'SVG' => 'main',
                'FIX' => 1,
            ),
            'ACTIONS' => array(
                'CODE' => 'ACTIONS',
                'TITLE' => GetMessage('CUSTOM_BLOCK_POSITION_ACTIONS'),
                'FIX_TITLE' => GetMessage('CUSTOM_BLOCK_POSITION_ACTIONS_FIX'),
                'SVG' => 'banner',
                'FIX' => 0,
            ),
            'PRODUCTS' => array(
                'CODE' => 'PRODUCTS',
                'TITLE' => GetMessage('CUSTOM_BLOCK_POSITION_PRODUCTS'),
                'SVG' => 'product',
                'FIX' => 0,
            ),
            'NEWS' => array(
                'CODE' => 'NEWS',
                'TITLE' => GetMessage('CUSTOM_BLOCK_POSITION_NEWS'),
                'SVG' => 'news',
                'FIX' => 0,
            ),
            'ADVANTAGES' => array(
                'CODE' => 'ADVANTAGES',
                'TITLE' => GetMessage('CUSTOM_BLOCK_POSITION_ADVANTAGES'),
                'SVG' => 'plus',
                'FIX' => 0,
            ),
            'BRANDS' => array(
                'CODE' => 'BRANDS',
                'TITLE' => GetMessage('CUSTOM_BLOCK_POSITION_BRANDS'),
                'SVG' => 'brand',
                'FIX' => 0,
            ),
        );
    }
    public static function getProductSizeTypeList() {
        return array(
            0 => array(
                'CODE' => 'max',
                'TITLE' => GetMessage('CUSTOM_PRODUCT_SIZE_TYPE_MAX'),
            ),
            1 => array(
                'CODE' => 'min',
                'TITLE' => GetMessage('CUSTOM_PRODUCT_SIZE_TYPE_MIN'),
            ),
        );
    }
    
    public static function getGenerateOptions() {
        return array(
            'NL_CATALOG_TYPE',
            'NL_CATALOG_ID',
            'NL_CATALOG_OFFERS_TYPE',
            'NL_CATALOG_OFFERS_ID',
            'NL_CATALOG_PROPERTY_CODE',
            'NL_CATALOG_OFFERS_PROPERTY_CODE',
            'NL_CATALOG_CART_PRODUCT_PROPERTIES_CODE',
            'NL_CATALOG_CART_OFFERS_PROPERTY_CODE',
            'NL_CATALOG_PRICE_CODE',
            'NL_HIDE_NOT_AVAILABLE',
            'NL_CATALOG_COMPONENT_TEMPLATE',
            'NL_CATALOG_MAIN_LIST',
            'NL_CATALOG_ADD_PICT_PROP',
            'NL_CATALOG_ADD_VIDEO_PROP',
            'NL_CATALOG_OFFER_ADD_PICT_PROP',
            'NL_CATALOG_OFFER_ADD_VIDEO_PROP',
            'NL_CATALOG_SORT_LIST_CODES',
            'NL_CATALOG_SORT_LIST_FIELDS',
            'NL_CATALOG_SORT_LIST_ORDERS',
            'NL_CATALOG_SORT_LIST_NAME',
            'NL_CATALOG_USE_COMPARE',
            'NL_CATALOG_USE_AMOUNT',
            'NL_CATALOG_STORES',
            'NL_CATALOG_USE_MIN_AMOUNT',
            'NL_CATALOG_MIN_AMOUNT',
            'NL_CATALOG_MAX_AMOUNT',
            'NL_CATALOG_USE_BIG_DATA',
            'NL_CATALOG_BIG_DATA_RCM_TYPE',
            'NL_CATALOG_PAGE_TO_LIST',
            'NL_CATALOG_SEF_FOLDER',
            'NL_CATALOG_SEF_URL_TEMPLATES_SECTIONS',
            'NL_CATALOG_SEF_URL_TEMPLATES_SECTION',
            'NL_CATALOG_SEF_URL_TEMPLATES_ELEMENT',
            'NL_CATALOG_SEF_URL_TEMPLATES_COMPARE',
            'NL_CATALOG_SEF_URL_TEMPLATES_SEARCH',
            'NL_SET_STATUS_404',
            'NL_SHOW_404',
            'NL_MESSAGE_404',
            'NL_SLIDER_PAGE_ELEMENT_COUNT',
            'NL_SLIDER_ELEMENT_SORT_FIELD',
            'NL_SLIDER_ELEMENT_SORT_ORDER',
            'NL_SLIDER_ELEMENT_SORT_FIELD2',
            'NL_SLIDER_ELEMENT_SORT_ORDER2',
            'NL_MAIN_TABS_ELEMENT_SORT_FIELD',
            'NL_MAIN_TABS_ELEMENT_SORT_ORDER',
            'NL_MAIN_TABS_ELEMENT_SORT_FIELD2',
            'NL_MAIN_TABS_ELEMENT_SORT_ORDER2',
        );
    }
    
    public static function getMultyOptions() {
        return array(
            'NL_CATALOG_PRICE_CODE',
            'NL_CATALOG_PROPERTY_CODE',
            'NL_CATALOG_OFFERS_PROPERTY_CODE',
            'NL_CATALOG_CART_PRODUCT_PROPERTIES_CODE',
            'NL_CATALOG_CART_OFFERS_PROPERTY_CODE',
            'NL_CATALOG_STORES',
            'NL_CATALOG_PAGE_TO_LIST',
            'NL_CATALOG_SORT_LIST_CODES',
            'NL_CATALOG_SORT_LIST_FIELDS',
            'NL_CATALOG_SORT_LIST_ORDERS',
            'NL_CATALOG_SORT_LIST_NAME',
        );
    }
    
    public static function getViewListInfo() {
        return array(
            0 => array(
                'CODE' => 'board',
                'ICON' => 'tile',
                'TITLE' => GetMessage('NL_CATALOG_VIEW_MAIN'),
            ),
            1 => array(
                'CODE' => 'list',
                'ICON' => 'list',
                'TITLE' => GetMessage('NL_CATALOG_VIEW_LIST'),
            ),
            2 => array(
                'CODE' => 'mini',
                'ICON' => 'mini',
                'TITLE' => GetMessage('NL_CATALOG_VIEW_MINI'),
            ),
        );
    }
    
    public static function getMainMenuPosList() {
        return array(
            // 0 - default
            0 => array(
                'CODE' => 'header',
                'TITLE' => GetMessage('CUSTOM_MENU_MAIN_MENU_POS_HEADER'),
            ),
            1 => array(
                'CODE' => 'fix',
                'TITLE' => GetMessage('CUSTOM_MENU_MAIN_MENU_POS_FIX'),
            ),
        );
    }
    
    public static function sendAjaxHeader() {
        if (ToUpper(SITE_CHARSET) != "UTF-8" && isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
            header('Content-Type: text/html; charset=utf-8');
        }
    }
    
    public static function prepareRequest($data) {
        if (ToUpper(SITE_CHARSET) != "UTF-8" && isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
            if (is_array($data)) {
                foreach ($data as $k => $val) {
                    $data[$k] = utf8win1251($val);
                }
            } else {
                $data = utf8win1251($data);
            }
        }
        return $data;
    }
    
    public static function nl_highloadblock_sort($a, $b) {
        if ($a['UF_SORT'] == $b['UF_SORT']) return 0;
        return ($a['UF_SORT'] < $b['UF_SORT']) ? -1 : 1;
    }

    public static function nl_truncate_text($text, $size) {
        $size = intval($size);
        if (strlen($text) > $size && $size > 0){
            $text = substr($text, 0, $size);
            $pos = strrpos($text, ' ');
            $text = substr($text, 0, $pos) . '...';
        }
        return $text;
    }

    public static function nl_inclination($n, $s1, $s2, $s3){
        $m = $n % 10;
        $j = $n % 100;
        if ($m == 0 || $m >= 5 || ($j >= 10 && $j <= 20)) return $s3;
        if ($m >= 2 && $m <= 4) return $s2;
        return $s1;
    }
    
    public static function getGenerateFiles() {
        return array("product_tab.php", "product_slider.php", "catalog.php", "favorites.php", "compare_list.php", "search_title.php");
    }
    
    public static function getGenerateDataName() {
        return $_SERVER['DOCUMENT_ROOT'] . "/bitrix/modules/bitlate.proshop/install/data/";
    }
    
    public static function getGenerateCopyName() {
        return $_SERVER['DOCUMENT_ROOT'] . "/local/templates/bitlate_pro/include/#SITE_ID#/";
    }
    
    public static function getGenerateIncludeName() {
        return $_SERVER['DOCUMENT_ROOT'] . "/local/templates/bitlate_pro/include/";
    }
    
    public static function getGenerateDeleteDir() {
        return $_SERVER['DOCUMENT_ROOT'] . "/local/templates/bitlate_pro/include/#SITE_ID#/delete/";
    }
    
    public static function generateIncludeFile($siteLID, $siteDir, $changeProps = true) {
        require_once($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/classes/general/wizard.php");
        $generateFiles = self::getGenerateFiles();
        $fileIncludeDir = self::getGenerateIncludeName();
        if (!file_exists($fileIncludeDir)) {
            mkdir($fileIncludeDir, 0777);
        }
        foreach ($generateFiles as $file) {
            $fileCopyDir = str_replace('#SITE_ID#', $siteLID, self::getGenerateCopyName());
            $fileCopyName = $fileCopyDir . $file;
            $fileDeleteDir = str_replace('#SITE_ID#', $siteLID, self::getGenerateDeleteDir());
            $fileDataName = self::getGenerateDataName() . $file;
            if (file_exists($fileDataName)) {
                $i = 0;
                $fileDeleteName = $fileDeleteDir . $file . '_' . $i;
                while (file_exists($fileDeleteName) && $i < 999) {
                    $i++;
                    $fileDeleteName = $fileDeleteDir . $file . '_' . $i;
                }
                if (!file_exists($fileDeleteDir)) {
                    mkdir($fileDeleteDir, 0777);
                }
                if (!file_exists($fileCopyDir)) {
                    mkdir($fileCopyDir, 0777);
                }
                if (file_exists($fileCopyName)) {
                    copy($fileCopyName, $fileDeleteName);
                }
                copy($fileDataName, $fileCopyName);
                $macrosParams = array();
                foreach (self::getGenerateOptions() as $option) {
                    $optionVal = COption::GetOptionString("bitlate.proshop", $option, false, $siteLID);
                    if (in_array($option, self::getMultyOptions())) {
                        $valArr = explode('|', $optionVal);
                        $optionVal = "array(\n";
                        foreach ($valArr as $i => $val) {
                            if (!empty($val)) {
                                $optionVal .= "\t\t\t{$i} => \"{$val}\",\n";
                            }
                        }
                        $optionVal .= "\t\t)";
                    }
                    $macrosParams[$option] = $optionVal;
                }
                $macrosParams['SITE_DIR'] = $siteDir;
                $macrosParams['NL_IBLOCK_ID_NEWS'] = COption::GetOptionString("bitlate.proshop", "NL_NEWS_ID", false, $siteLID);
                $macrosParams['NL_IBLOCK_ID_ACTIONS'] = COption::GetOptionString("bitlate.proshop", "NL_MAIN_ACTIONS_ID", false, $siteLID);
                CWizardUtil::ReplaceMacros($fileCopyName, $macrosParams);
            }
            
        }
        if ($changeProps === true) {
            $catalogIblockId = COption::GetOptionString("bitlate.proshop", "NL_CATALOG_ID", false, $siteLID);
            $mainSliderIblockId = COption::GetOptionString("bitlate.proshop", "NL_MAIN_SLIDER_ID", false, $siteLID);
            $mainActionIblockId = COption::GetOptionString("bitlate.proshop", "NL_MAIN_ACTIONS_ID", false, $siteLID);
            $dbProp = CIBlockProperty::GetList(array(), array("IBLOCK_ID" => $mainSliderIblockId, 'CODE' => 'RELATED_ITEM'));
            while ($arProp = $dbProp->GetNext()) {
                $arFields = Array(
                    "LINK_IBLOCK_ID" => $catalogIblockId,
                );
                $ibp = new CIBlockProperty;
                $ibp->Update($arProp['ID'], $arFields);
            }
            $dbProp = CIBlockProperty::GetList(array(), array("IBLOCK_ID" => $mainActionIblockId, 'CODE' => 'ACTION_PRODUCTS'));
            while ($arProp = $dbProp->GetNext()) {
                $arFields = Array(
                    "LINK_IBLOCK_ID" => $catalogIblockId,
                );
                $ibp = new CIBlockProperty;
                $ibp->Update($arProp['ID'], $arFields);
            }
        }
    }
    
    public static function getThemeParamsCode($paramsList) {
        $paramsCodes = array();
        foreach ($paramsList as $i => $paramInfo) {
            $paramsCodes[$i] = $paramInfo['CODE'];
        }
        return $paramsCodes;
    }
    
    public static function initTemplateOptions() {
        global $APPLICATION, $USER;
        $result = array();
        $requestParams = array('theme', 'main_banner', 'product_type', 'action_pos', 'basket_pos', 'news_type', 'filter_type', 'main_menu_pos', 'header_type', 'positions', 'product_size', 'bannerpositions', 'productpositions');
        $paramsOptions = array(
            'main_banner' => array(
                'optionName' => 'NL_MAIN_BANNER_VALUE',
                'functionName' => 'getMainBannerList',
            ),
            'product_type' => array(
                'optionName' => 'NL_PRODUCT_TYPE_VALUE',
                'functionName' => 'getProductTypeList',
            ),
            'product_size' => array(
                'optionName' => 'NL_PRODUCT_SIZE_TYPE_VALUE',
                'functionName' => 'getProductSizeTypeList',
            ),
            'action_pos' => array(
                'optionName' => 'NL_ACTION_POS_VALUE',
                'functionName' => 'getActionPosList',
            ),
            'basket_pos' => array(
                'optionName' => 'NL_BASKET_POS_VALUE',
                'functionName' => 'getBasketPosList',
            ),
            'news_type' => array(
                'optionName' => 'NL_NEWS_TYPE_VALUE',
                'functionName' => 'getNewsTypeList',
            ),
            'filter_type' => array(
                'optionName' => 'NL_FILTER_TYPE_VALUE',
                'functionName' => 'getFilterTypeList',
            ),
            'main_menu_pos' => array(
                'optionName' => 'NL_MAIN_MENU_POS',
                'functionName' => 'getMainMenuPosList',
            ),
        );
        foreach ($requestParams as $param) {
            if (!empty($_REQUEST[$param])) {
                if ($USER->IsAdmin()) {
                    switch ($param) {
                        case 'main_banner':
                        case 'product_type':
                        case 'action_pos':
                        case 'basket_pos':
                        case 'news_type':
                        case 'filter_type':
                        case 'product_size':
                        case 'main_menu_pos':
                            $funcName = $paramsOptions[$param]['functionName'];
                            $fincRes = self::$funcName();
                            $fincCodeRes = self::getThemeParamsCode($fincRes);
                            if (in_array($_REQUEST[$param], $fincCodeRes)) {
                                if ($param == "action_pos") {
                                    $oldParam = COption::GetOptionString("bitlate.proshop", $paramsOptions[$param]['optionName'], false, SITE_ID);
                                    $actionKey = array_search($_REQUEST[$param], $fincCodeRes);
                                    if ($_REQUEST[$param] != $oldParam) {
                                        if (!CModule::IncludeModule('iblock')) return false;
                                        $actionOldKey = array_search($oldParam, $fincCodeRes);
                                        $ibpenum = new CIBlockPropertyEnum;
                                        $ibpenum->Update(self::getBannerSizeId($fincRes[$actionOldKey]['ENUM_CODE']), Array('DEF' => 'N'));
                                        $ibpenum->Update(self::getBannerSizeId($fincRes[$actionKey]['ENUM_CODE']), Array('DEF' => 'Y'));
                                    }
                                    COption::SetOptionString("bitlate.proshop", "NL_ACTION_SORT_FIELD_VALUE", $fincRes[$actionKey]['SORT_FIELD'], false, SITE_ID);
                                }
                                COption::SetOptionString("bitlate.proshop", $paramsOptions[$param]['optionName'], $_REQUEST[$param], false, SITE_ID);
                            }
                        break;
                        case 'theme':
                            $themeList = self::getThemeList();
                            if (in_array($_REQUEST['theme'], self::getThemeParamsCode($themeList))) {
                                $themeKey = array_search($_REQUEST['theme'], self::getThemeParamsCode($themeList));
                                COption::SetOptionString("main", "theme_value", $_REQUEST['theme'], false, SITE_ID);
                                COption::SetOptionString("bitlate.proshop", "NL_THEME_TYPE_VALUE", $_REQUEST['theme'], false, SITE_ID);
                                COption::SetOptionString("bitlate.proshop", "NL_THEME_COLOR_PRIMARY_VALUE", $themeList[$themeKey]['COLOR_1'], false, SITE_ID);
                                COption::SetOptionString("bitlate.proshop", "NL_THEME_COLOR_SECONDARY_VALUE", $themeList[$themeKey]['COLOR_2'], false, SITE_ID);
                            } elseif ($_REQUEST['theme'] == 'custom') {
                                $primary = trim($_REQUEST['primary']);
                                $secondary = trim($_REQUEST['secondary']);
                                if (preg_match('/^([a-f0-9]{6}|[a-f0-9]{3})$/i', $primary) && preg_match('/^([a-f0-9]{6}|[a-f0-9]{3})$/i', $secondary)) {
                                    include("generator.php");
                                    $generator = new BitlateGenerator();
                                    $generator->setInputCssFile(self::getGenerateDataName());
                                    $generator->setOutputCssFile(str_replace('#SITE_ID#', SITE_ID, self::getGenerateCopyName()));
                                    if ($generator->generateCss('#' . $primary, '#' . $secondary)) {
                                        COption::SetOptionString("bitlate.proshop", "NL_THEME_TYPE_VALUE", 'custom', false, SITE_ID);
                                        COption::SetOptionString("bitlate.proshop", "NL_THEME_COLOR_PRIMARY_VALUE", '#' . $primary, false, SITE_ID);
                                        COption::SetOptionString("bitlate.proshop", "NL_THEME_COLOR_SECONDARY_VALUE", '#' . $secondary, false, SITE_ID);
                                    }
                                }
                            }
                        case 'header_type':
                            $headerTypes = self::getHeaderTypeList();
                            if (in_array($_REQUEST['header_type'], self::getThemeParamsCode($headerTypes))) {
                                COption::SetOptionString("bitlate.proshop", "NL_HEADER_TYPE_VALUE", $_REQUEST['header_type'], false, SITE_ID);
                                $headerKey = array_search($_REQUEST['header_type'], self::getThemeParamsCode($headerTypes));
                                COption::SetOptionString("bitlate.proshop", "NL_HEADER_VERSION_VALUE", $headerTypes[$headerKey]['HEADER'], false, SITE_ID);
                            }
                        break;
                        case 'positions':
                            $positions = explode('|', $_REQUEST['positions']);
                            $positionsList = self::getThemeParamsCode(self::getMainBlockPositionList());
                            $curPositions = array('MAIN-1');
                            foreach ($positions as $pos) {
                                list($position, $isVisible) = explode('-', $pos);
                                if (in_array($position, $positionsList)) {
                                    $curPositions[] = $position . '-' . (($isVisible == 1) ? '1' : '0');
                                }
                            }
                            COption::SetOptionString("bitlate.proshop", "NL_MAIN_BLOCK_POSITION_VALUE", implode('|', $curPositions), false, SITE_ID);
                        break;
                        case 'bannerpositions':
                            if (!CModule::IncludeModule('iblock')) return false;
                            $sortField = COption::GetOptionString("bitlate.proshop", "NL_ACTION_SORT_FIELD_VALUE", false, SITE_ID);
                            $iblockActions = COption::GetOptionString("bitlate.proshop", "NL_MAIN_ACTIONS_ID", false, SITE_ID);
                            $positions = explode('|', $_REQUEST['bannerpositions']);
                            $pos = 0;
                            foreach ($positions as $id) {
                                $id = intval($id);
                                if ($id > 0) {
                                    $pos++;
                                    if ($sortField == "SORT") {
                                        $el = new CIBlockElement;
                                        $res = $el->Update($id, array("SORT" => $pos));
                                    } else {
                                        CIBlockElement::SetPropertyValuesEx($id, $iblockActions, array($sortField => $pos));
                                    }
                                }
                            }
                        break;
                        case 'productpositions':
                            if (!CModule::IncludeModule('iblock')) return false;
                            $positions = explode('|', $_REQUEST['productpositions']);
                            $pos = 0;
                            $posProduct = 10000;
                            $tab = ToUpper(trim($_REQUEST['tab']));
                            $iblockActions = COption::GetOptionString("bitlate.proshop", "NL_MAIN_ACTIONS_ID", false, SITE_ID);
                            foreach ($positions as $id) {
                                $id = intval($id);
                                if ($id > 0 && $tab != '') {
                                    $pos++;
                                    $posProduct--;
                                    $iblockId = CIBlockElement::GetIBlockByID($id);
                                    if ($iblockActions == $iblockId) {
                                        CIBlockElement::SetPropertyValuesEx($id, $iblockId, array('POSITION' => $pos));
                                    } else {
                                        CIBlockElement::SetPropertyValuesEx($id, $iblockId, array('SORT_' . $tab => $posProduct));
                                    }
                                }
                            }
                        break;
                    }
                }
                LocalRedirect($APPLICATION->GetCurPageParam('', array($param, 'primary', 'secondary', 'tab')));
                die();
            }
        }
        $result['theme'] = COption::GetOptionString("main", "theme_value", false, SITE_ID);
        $result['theme_type'] = COption::GetOptionString("bitlate.proshop", "NL_THEME_TYPE_VALUE", false, SITE_ID);
        if ($result['theme_type'] == 'custom') {
            $result['theme_css'] = str_replace('#SITE_ID#', SITE_ID, "/local/templates/bitlate_pro/include/#SITE_ID#/main.css");
        } else {
            $result['theme_css'] = "/local/templates/".SITE_TEMPLATE_ID."/themes/".$result['theme']."/css/main.css";
        }
        $result['theme_color_1'] = COption::GetOptionString("bitlate.proshop", "NL_THEME_COLOR_PRIMARY_VALUE", false, SITE_ID);
        $result['theme_color_2'] = COption::GetOptionString("bitlate.proshop", "NL_THEME_COLOR_SECONDARY_VALUE", false, SITE_ID);
        $result['main_banner'] = COption::GetOptionString("bitlate.proshop", "NL_MAIN_BANNER_VALUE", false, SITE_ID);
        $result['product_type'] = COption::GetOptionString("bitlate.proshop", "NL_PRODUCT_TYPE_VALUE", false, SITE_ID);
        $result['action_pos'] = COption::GetOptionString("bitlate.proshop", "NL_ACTION_POS_VALUE", false, SITE_ID);
        $result['action_sort_field'] = COption::GetOptionString("bitlate.proshop", "NL_ACTION_SORT_FIELD_VALUE", false, SITE_ID);
        $result['basket_pos'] = COption::GetOptionString("bitlate.proshop", "NL_BASKET_POS_VALUE", false, SITE_ID);
        $result['news_type'] = COption::GetOptionString("bitlate.proshop", "NL_NEWS_TYPE_VALUE", false, SITE_ID);
        $result['filter_type'] = COption::GetOptionString("bitlate.proshop", "NL_FILTER_TYPE_VALUE", false, SITE_ID);
        $result['product_size'] = COption::GetOptionString("bitlate.proshop", "NL_PRODUCT_SIZE_TYPE_VALUE", false, SITE_ID);
        $result['main_menu_pos'] = COption::GetOptionString("bitlate.proshop", "NL_MAIN_MENU_POS", false, SITE_ID);
        $positionsList = COption::GetOptionString("bitlate.proshop", "NL_MAIN_BLOCK_POSITION_VALUE", false, SITE_ID);
        $positionsList = explode('|', $positionsList);
        $headerTypes = self::getHeaderTypeList();
        $result['header_type'] = COption::GetOptionString("bitlate.proshop", "NL_HEADER_TYPE_VALUE", false, SITE_ID);
        $result['header_version'] = COption::GetOptionString("bitlate.proshop", "NL_HEADER_VERSION_VALUE", false, SITE_ID);
        $headerKey = array_search($result['header_type'], self::getThemeParamsCode($headerTypes));
        $result['header_class'] = $headerTypes[$headerKey]['CLASS'];
        if ($headerTypes[$headerKey]['HEADER'] == 'v3') {
            $result['main_banner'] = 'small';
            if (in_array($result['action_pos'], array('on', 'right'))) {
                $result['action_pos'] = 'below';
            }
        }
        $result['news_count'] = 3;
        if ($result['action_pos'] == 'right') {
            $result['main_banner'] = 'small';
            $result['news_count'] = 2;
        } elseif (in_array($result['action_pos'], array('board3_3', 'board4_2', 'product'))) {
            $result['news_count'] = 999999;
        }
        if ($result['action_pos'] == 'product') {
            $result['product_size'] = 'min';
        }
        $result['positions'] = array();
        $result['main_actions_position'] = 0;
        $prevPos = '';
        foreach ($positionsList as $k => $pos) {
            list($position, $isVisible) = explode('-', $pos);
            $fileName = $_SERVER["DOCUMENT_ROOT"] . SITE_TEMPLATE_PATH . "/include/index_" . ToLower($position) . ".php";
            if (file_exists($fileName)) {
                if ($prevPos == 'MAIN' && $position == 'ACTIONS') {
                    $result['main_actions_position'] = 1;
                }
                $result['positions'][$position]['path'] = $fileName;
                $result['positions'][$position]['visible'] = $isVisible;
                if ($position == 'ACTIONS' && $isVisible != 1) {
                    $result['action_pos'] = 'empty';
                }
                if ($isVisible == 1) {
                    $prevPos = $position;
                }
            }
        }
        $result['use_compare'] = COption::GetOptionString("bitlate.proshop", "NL_CATALOG_USE_COMPARE", false, SITE_ID);
        $result['url_catalog'] = str_replace('#SITE_DIR#', SITE_DIR, COption::GetOptionString("bitlate.proshop", "NL_CATALOG_SEF_FOLDER", false, SITE_ID));
        $result['url_catalog_search'] = $result['url_catalog'] . str_replace('#SITE_DIR#', SITE_DIR, COption::GetOptionString("bitlate.proshop", "NL_CATALOG_SEF_URL_TEMPLATES_SEARCH", false, SITE_ID));
        unset($positionsList);
        return $result;
    }
    
    public static function getEnumValues($xmlId, $iblockId, $code) {
        if (!self::$propertyEnumValues[$code][$xmlId]) {
            if (!CModule::IncludeModule('iblock')) return false;
            $propertyEnum = CIBlockPropertyEnum::GetList(Array("DEF" => "DESC", "SORT" => "ASC"), Array("IBLOCK_ID" => $iblockId, "CODE" => $code));
            while ($enumFields = $propertyEnum->GetNext()) {
                self::$propertyEnumValues[$code][$enumFields['XML_ID']] = $enumFields['ID'];
            }
        }
        return self::$propertyEnumValues[$code][$xmlId];
    }
    
    public static function getBannerSizeId($xmlId) {
        return self::getEnumValues($xmlId, COption::GetOptionString("bitlate.proshop", "NL_MAIN_ACTIONS_ID", false, SITE_ID), "SIZE");
    }
    
    public static function getLinkTypeId($xmlId) {
        return self::getEnumValues($xmlId, COption::GetOptionString("bitlate.proshop", "NL_MAIN_ACTIONS_ID", false, SITE_ID), "LINK_TYPE");
    }
    
    public static function getViewList() {
        $result = array();
        $list = self::getViewListInfo();
        foreach ($list as $info) {
            $result[$info['CODE']] = $info['TITLE'];
        }
        return $result;
    }
    
    public static function parseLink($link) {
        $url = parse_url(trim($link));
        if ($url !== null) {
            $result['source'] = ToLower($url['host']);
            if ($result['source'] == '' && ToLower($url['path']) == '//vk.com/video_ext.php') {
                $result['source'] = 'vk.com';
            } else {
                $availDomains = array(
                    'www.youtube.com',
                    'youtube.com',
                    'www.youtube.ru', 
                    'youtube.ru', 
                    'youtu.be', 
                    'www.vimeo.com', 
                    'vimeo.com', 
                    'www.rutube.ru',
                    'rutube.ru',
                    'vk.com',
                );

                if (!in_array($result['source'], $availDomains)) {
                    return false;
                }
            }
            
            parse_str($url['query'], $params);
            
            if (!is_array($params)) {
                $params = array();
            }
            $result['path'] = $url['path'];
            $result['params'] = $params;
            return $result;
        } else {
            return false;
        }
    }
    
    public static function getVideoUrl($src) {
        $params = self::parseLink($src);
        if ($params !== false) {
            switch ($params['source']) {
                case 'www.youtube.com':
                case 'www.youtube.ru':
                case 'youtube.com':
                case 'youtube.ru':
                case 'youtu.be':
                    if ($params['source'] == 'youtu.be') {
                        $id = str_replace('/', '', $params['path']);
                    } else {
                        $id = false;
                        if ($params['params']['v']!='') {
                            $id = $params['params']['v'];
                        } elseif (stripos($params['path'], 'embed')!==false) {
                            $id = explode('/',$params['path']);
                            if ($id[count($id)-1]!='') {
                                $id = $id[count($id)-1];
                            } elseif ($id[count($id)-2]!='') {
                                $id = $id[count($id)-2];
                            }
                        }
                    }
                    if ($id) {
                        return 'https://www.youtube.com/embed/' . htmlspecialchars(urlencode($id)) . '?enablejsapi=1';
                    }
                    break;
                case 'www.rutube.ru':
                case 'rutube.ru':
                    $id = false;
                    $id = explode('/',$params['path']);
                    if ($id[count($id)-1]!='') {
                        $id = $id[count($id)-1];
                    } elseif ($id[count($id)-2]!='') {
                        $id = $id[count($id)-2];
                    }
                    if ($id) {
                        return '//rutube.ru/video/embed/' . htmlspecialchars(urlencode($id));
                    }
                    break;
                case 'www.vimeo.com':
                case 'vimeo.com':
                    $id = false;
                    $id = explode('/',$params['path']);
                    if ($id[count($id)-1]!='') {
                        $id = $id[count($id)-1];
                    } elseif ($id[count($id)-2]!='') {
                        $id = $id[count($id)-2];
                    } else {
                        $id = false;
                    }
                    
                    if ($id) {
                        return '//player.vimeo.com/video/' . htmlspecialchars(urlencode($id)) . '?title=0&amp;byline=0&amp;portrait=0&amp;color=ff0179&amp;api=1';
                    }
                    break;
                case 'vk.com':
                    $oid = false;
                    $id = false;
                    $hash = false;
                    
                    if ($params['params']['oid']!='') {
                        $oid = $params['params']['oid'];
                    }
                    if ($params['params']['id']!='') {
                        $id = $params['params']['id'];
                    }
                    if ($params['params']['hash']!='') {
                        $hash = $params['params']['hash'];
                    }
                    
                    if ($oid && $id && $hash) {
                        return '//vk.com/video_ext.php?oid=' . htmlspecialchars(urlencode($oid)) . '&id=' . htmlspecialchars(urlencode($id)) . '&hash=' . htmlspecialchars(urlencode($hash));
                    }
                    break;
            }
        }
        return false;
    }
    
	public static function getTopTableBuy1Click() {
		__IncludeLang($_SERVER['DOCUMENT_ROOT'] . SITE_TEMPLATE_PATH . "/lang/" . LANGUAGE_ID . "/ajax.php", false, true);
		$tmpCart = '<table border="1" width="100%" cellpadding="0" cellspacing="0">';
		$tmpCart .= '<tr>';
		$tmpCart .= '<td>ID</td>';
		$tmpCart .= '<td>' . GetMessage('T_B1C_TABLE_NAME') . '</td>';
		$tmpCart .= '<td>' . GetMessage('T_B1C_TABLE_QUANTITY') . '</td>';
		$tmpCart .= '<td>' . GetMessage('T_B1C_TABLE_PRICE') . '</td>';
		$tmpCart .= '<td>' . GetMessage('T_B1C_TABLE_SUM') . '</td>';
		$tmpCart .= '</tr>';
		return $tmpCart;
	}
	
	public static function getRowTableBuy1Click($id, $detailUrl, $name, $params, $quantity, $onePrice, $totalPrice) {
		$name = htmlspecialcharsbx($name);
		$tmpCart = '<tr>';
		$tmpCart .= "<td>{$id}</td>";
		$tmpCart .= "<td><a href=\"http://{$_SERVER['HTTP_HOST']}{$detailUrl}\">{$name}</a> {$params}</td>";
		$tmpCart .= "<td>{$quantity}</td>";
		$tmpCart .= "<td>{$onePrice}</td>";
		$tmpCart .= "<td>{$totalPrice}</td>";
		$tmpCart .= '</tr>';
		return $tmpCart;
	}
	
	public static function getBottomTableBuy1Click($totalPrice) {
		$tmpCart = '<tr>';
		$tmpCart .= '<td colspan="4"><b>' . GetMessage('T_B1C_TABLE_TOTAL') . '</b></td>';
		$tmpCart .= '<td>' . $totalPrice . '</td>';
		$tmpCart .= '</tr>';
		$tmpCart .= '</table>';
		return $tmpCart;
	}
	
	public static function getPropsStr($offerId, $iblockId, $propsArray) {
		$propsStrArray = array();
		$productProperties = CIBlockPriceTools::GetOfferProperties(
			$offerId,
			$iblockId,
			$propsArray,
			array()
		);
		if (count($productProperties) > 0) {
			foreach ($productProperties as $prop) {
				$propsStrArray[] .= "{$prop['NAME']}: {$prop['VALUE']}";
			}
		}
		return " (" . implode(", ", $propsStrArray) . ")";
	}
	
	public static function getFavorits() {
        global $USER, $APPLICATION;
        CModule::IncludeModule('iblock');
        CModule::IncludeModule('catalog');
        $arElements = array();
        if (!$USER->IsAuthorized()) {
            $tmpArElements = unserialize($APPLICATION->get_cookie('nl_favorites'));
        } else {
            $idUser = $USER->GetID();
            $rsUser = CUser::GetByID($idUser);
            $arUser = $rsUser->Fetch();
            $tmpArElements = unserialize($arUser['UF_NL_FAVORITES']);
        }
        if (is_array($tmpArElements) && count($tmpArElements) > 0) {
            $arFilter = array(
                "IBLOCK_ID" => COption::GetOptionString("bitlate.proshop", "NL_CATALOG_ID", false, SITE_ID),
                "IBLOCK_LID" => SITE_ID,
                "IBLOCK_ACTIVE" => "Y",
                "ACTIVE_DATE" => "Y",
                "ACTIVE" => "Y",
                "CHECK_PERMISSIONS" => "Y",
                "MIN_PERMISSION" => "R",
                "INCLUDE_SUBSECTIONS" => "Y",
            );
            foreach ($tmpArElements as $elId => $element) {
                $arFilter["ID"][] = $elId;
            }
            $arRes = CIBlockElement::GetList(array("sort" => "asc"), $arFilter, false, false, array('ID', 'IBLOCK_ID'));
            while ($arFields = $arRes->GetNext()) {
                $mxResult = CCatalogSKU::getExistOffers($arFields["ID"]);
                if ($mxResult[$arFields["ID"]] === true) {
                    if (!$tmpArElements[$arFields["ID"]][0]) {
                        $arElements[$arFields["ID"]] = $tmpArElements[$arFields["ID"]];
                    }
                } else {
                    if ($tmpArElements[$arFields["ID"]][0] > 0) {
                        $arElements[$arFields["ID"]] = $tmpArElements[$arFields["ID"]];
                    }
                }
            }
        } else {
            $arElements = $tmpArElements;
        }
		return $arElements;
	}
	
	public static function getCountFavorits() {
		$arElements = self::getFavorits();
		$countFav = 0;
		if (is_array($arElements) && count($arElements) > 0) {
			foreach ($arElements as $arElement) {
				$countFav += count($arElement);
			}
		}
		return $countFav;
	}
	
	public static function setFavorits($arElements) {
		global $USER, $APPLICATION;
		if (!$USER->IsAuthorized()) {
			$APPLICATION->set_cookie("nl_favorites", serialize($arElements));
		} else {
			$idUser = $USER->GetID();
			$USER->Update($idUser, Array("UF_NL_FAVORITES" => serialize($arElements)));
		}
		return true;
	}
    
    public static function getProductAmount($quantity, $minAmount, $maxAmount) {
        $quantity = ($quantity > 0) ? $quantity : 0;
        $result = array('count' => $quantity, 'products' => $quantity . " " . self::nl_inclination($quantity, GetMessage('NL_PRODUCT_1'), GetMessage('NL_PRODUCT_2'), GetMessage('NL_PRODUCT_10')));
        if ($minAmount > 0 && $maxAmount > 0) {
            if ($quantity == 0) {
                $result['class'] = 'nope';
                $result['text'] = GetMessage('CATALOG_EMPTY_AMOUNT');
            } elseif ($quantity < $minAmount) {
                $result['class'] = 'few';
                $result['text'] = GetMessage('CATALOG_FEW_AMOUNT');
            } elseif ($quantity > $maxAmount) {
                $result['class'] = 'many';
                $result['text'] = GetMessage('CATALOG_MANY_AMOUNT');
            } else {
                $result['class'] = 'mean';
                $result['text'] = GetMessage('CATALOG_MEAN_AMOUNT');
            }
        }
        return $result;
    }
    
    public static function getFileSize($size) {
        $filesizename = array("b", " Kb", " Mb", " Gb", " Tb", " Pb", " Eb", " Zb", " Yb");
        return $size ? round($size / pow(1024, ($i = floor(log($size, 1024)))), 2) . $filesizename[$i] : '0 b';
    }
    
    public static function getFileExtention($fileName) {
        $pathInfo = pathinfo($fileName);
        return $pathInfo['extension'];
    }
    
    public static function getSectionsTree($iblockId) {
        $params = array('IBLOCK_ID' => $iblockId);
        $obCache = new CPHPCache; 
        $lifeTime = 60 * 60 * 10; 
        $cacheId = 'getSectionsTree' . md5(serialize($params));

        if ($obCache->InitCache($lifeTime, $cacheId, "/iblock/catalog")) {
            $vars = $obCache->GetVars();
            $arResult = $vars["result"];
        } else {
            CModule::IncludeModule('iblock');
            $arResult = array();
            $res = CIBlockSection::GetList(array(), array('IBLOCK_ID' => $iblockId, 'ACTIVE' => 'Y', 'GLOBAL_ACTIVE' => 'Y', "CNT_ACTIVE" => "Y"), false, array("ID", "NAME", "IBLOCK_ID", "IBLOCK_SECTION_ID", "SECTION_PAGE_URL"));
            while ($sec = $res->getNext()) {
                $arResult[$sec['SECTION_PAGE_URL']] = $sec;
            }

            if ($obCache->StartDataCache($lifeTime, $cacheId, "/iblock/catalog")) {
                $obCache->EndDataCache(array("result" => $arResult)); 
            }
        }

        return $arResult;
    }
}
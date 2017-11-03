<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();
if (!CModule::IncludeModule('bitlate.proshop'))
    return;

$arResult['THEME_LIST'] = BitlateProUtils::getThemeList();
$curTheme = $arParams['CUR_THEME'];
$arResult['MAIN_BANNER_LIST'] = BitlateProUtils::getMainBannerList();
$curMainBanner = $arParams['CUR_MAIN_BANNER'];
$arResult['PRODUCT_TYPE_LIST'] = BitlateProUtils::getProductTypeList();
$curProductType = $arParams['CUR_PRODUCT_TYPE'];
$arResult['ACTION_POS_LIST'] = BitlateProUtils::getActionPosList();
$curActionPos = $arParams['CUR_ACTION_POS'];
$arResult['BASKET_POS_LIST'] = BitlateProUtils::getBasketPosList();
$curBasketPos = $arParams['CUR_BASKET_POS'];
$arResult['NEWS_TYPE_LIST'] = BitlateProUtils::getNewsTypeList();
$curNewsType = $arParams['CUR_NEWS_TYPE'];
$arResult['FILTER_TYPE_LIST'] = BitlateProUtils::getFilterTypeList();
$curFilterType = $arParams['CUR_FILTER_TYPE'];
$arResult['HEADER_TYPE_LIST'] = BitlateProUtils::getHeaderTypeList();
$curHeaderType = $arParams['CUR_HEADER_TYPE'];
$curHeaderVersion = $arParams['CUR_HEADER_VERSION'];
$arResult['MAIN_BLOCK_POSITION_LIST'] = BitlateProUtils::getMainBlockPositionList();
$curMainBlockPosition = $arParams['CUR_MAIN_BLOCK_POSITION'];
$curMainActionsPosition = $arParams['CUR_MAIN_ACTIONS_POSITION'];
$arResult['PRODUCT_SIZE_TYPE'] = BitlateProUtils::getProductSizeTypeList();
$curProductSizeType = $arParams['CUR_PRODUCT_SIZE_TYPE'];
$arResult['MAIN_MENU_POS_LIST'] = BitlateProUtils::getMainMenuPosList();
$curMainMenuPos = $arParams['CUR_MAIN_MENU_POS'];

$arResult['CUR_THEME'] = $curTheme;
$arResult['CUR_MAIN_BANNER'] = $curMainBanner;
$arResult['CUR_PRODUCT_TYPE'] = $curProductType;
$arResult['CUR_ACTION_POS'] = $curActionPos;
$arResult['CUR_BASKET_POS'] = $curBasketPos;
$arResult['CUR_NEWS_TYPE'] = $curNewsType;
$arResult['CUR_FILTER_TYPE'] = $curFilterType;
$arResult['CUR_HEADER_TYPE'] = $curHeaderType;
$arResult['CUR_HEADER_VERSION'] = $curHeaderVersion;
$arResult['CUR_MAIN_BLOCK_POSITION'] = $curMainBlockPosition;
$arResult['CUR_PRODUCT_SIZE_TYPE'] = $curProductSizeType;
$arResult['CUR_MAIN_MENU_POS'] = $curMainMenuPos;

if ($arResult['CUR_HEADER_VERSION'] == 'v3' || $arResult['CUR_ACTION_POS'] == 'right') {
    $arResult['MAIN_BANNER_LIST'] = null;
}
if ($arResult['CUR_HEADER_VERSION'] == 'v3' || !$curMainActionsPosition) {
    unset($arResult['ACTION_POS_LIST'][0]);
    unset($arResult['ACTION_POS_LIST'][2]);
}
if ($arResult['CUR_PRODUCT_TYPE'] == 'slider') {
    unset($arResult['ACTION_POS_LIST'][5]);
    $arResult['PRODUCT_SIZE_TYPE'] = null;
}
if (in_array($arResult['CUR_ACTION_POS'], array('on', 'right'))) {
    $arResult['MAIN_BLOCK_POSITION_LIST']['ACTIONS']['FIX'] = 1;
}
if ($arResult['CUR_ACTION_POS'] == 'product') {
    $arResult['PRODUCT_TYPE_LIST'] = null;
    $arResult['PRODUCT_SIZE_TYPE'] = null;
}
$this->IncludeComponentTemplate();
?>
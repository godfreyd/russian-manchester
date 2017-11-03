<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
IncludeTemplateLangFile(__FILE__);
if (!CModule::IncludeModule('bitlate.proshop')) return false;
$templateOptions = BitlateProUtils::initTemplateOptions();
global $USER;
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <?$APPLICATION->SetAdditionalCSS("https://fonts.googleapis.com/css?family=Roboto:400,400italic,700,700italic,900,900italic&subset=cyrillic-ext,cyrillic,latin");?>
    <?$APPLICATION->SetAdditionalCSS($templateOptions['theme_css']);?>
    <?$APPLICATION->SetAdditionalCSS("/local/templates/".SITE_TEMPLATE_ID."/css/custom.css");?>
    <?$APPLICATION->SetAdditionalCSS("/local/templates/".SITE_TEMPLATE_ID."/css/site.css");?>
    <?$APPLICATION->AddHeadScript("/local/templates/".SITE_TEMPLATE_ID."/js/jquery.min.js");?>
    <?$APPLICATION->AddHeadScript("/local/templates/".SITE_TEMPLATE_ID."/js/foundation.min.js");?>
    <?$APPLICATION->AddHeadScript("/local/templates/".SITE_TEMPLATE_ID."/js/isotope.pkgd.min.js");?>
    <?$APPLICATION->AddHeadScript("/local/templates/".SITE_TEMPLATE_ID."/js/packery-mode.pkgd.min.js");?>
    <?$APPLICATION->AddHeadScript("/local/templates/".SITE_TEMPLATE_ID."/js/slideout.min.js");?>
    <?$APPLICATION->AddHeadScript("/local/templates/".SITE_TEMPLATE_ID."/js/owl.carousel.min.js");?>
    <?$APPLICATION->AddHeadScript("/local/templates/".SITE_TEMPLATE_ID."/js/fancybox.min.js");?>
    <?$APPLICATION->AddHeadScript("/local/templates/".SITE_TEMPLATE_ID."/js/fancybox-thumbs.js");?>
    <?$APPLICATION->AddHeadScript("/local/templates/".SITE_TEMPLATE_ID."/js/zoomsl.min.js");?>
    <?$APPLICATION->AddHeadScript("/local/templates/".SITE_TEMPLATE_ID."/js/selectbox.min.js");?>
    <?$APPLICATION->AddHeadScript("/local/templates/".SITE_TEMPLATE_ID."/js/mask.min.js");?>
    <?$APPLICATION->AddHeadScript("/local/templates/".SITE_TEMPLATE_ID."/js/yandex.maps.js");?>
    <?$APPLICATION->AddHeadScript("/local/templates/".SITE_TEMPLATE_ID."/js/main.js");?>
    <?$APPLICATION->AddHeadScript("/local/templates/".SITE_TEMPLATE_ID."/js/colorpicker.min.js");?>
    <?$APPLICATION->AddHeadScript("/local/templates/".SITE_TEMPLATE_ID."/js/jquery.validate.min.js");?>
    <?$APPLICATION->AddHeadScript("/local/templates/".SITE_TEMPLATE_ID."/js/custom.js");?>
    <?$APPLICATION->AddHeadScript("/local/templates/".SITE_TEMPLATE_ID."/js/site.js");?>
    <?$APPLICATION->AddHeadScript("/local/templates/".SITE_TEMPLATE_ID."/js/jquery-ui.min.js");?>
    <?if (strpos($APPLICATION->GetCurDir(), SITE_DIR . 'company/contacts') === 0 || strpos($APPLICATION->GetCurDir(), SITE_DIR . 'company/shops') === 0 || strpos($APPLICATION->GetCurDir(), SITE_DIR . 'shop/delivery') === 0):?>
        <?$APPLICATION->AddHeadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU");?>
    <?endif;?>
    <?$APPLICATION->ShowHead()?>
    <title><?$APPLICATION->ShowTitle();?></title>
</head>
<body>
    <?$APPLICATION->ShowPanel();?>
    <div style="height: 0; width: 0; position: absolute; visibility: hidden">
        <?require($_SERVER["DOCUMENT_ROOT"] . SITE_TEMPLATE_PATH . "/include/header_svg.php");?>
    </div>
    
    <nav id="mobile-menu" class="mobile-menu hide-for-xlarge">
        <div class="mobile-menu-wrapper">
            <a href="<?=SITE_DIR?>personal/" class="button mobile-menu-profile relative">
                <svg class="icon">
                    <use xlink:href="#svg-icon-profile"></use>
                </svg>
                <?=getMessage('PERSONAL_CABINET')?>
            </a>
            <div class="is-drilldown">
                <?$APPLICATION->IncludeComponent('bitrix:menu', "mobile_menu_main", array(
                        "ROOT_MENU_TYPE" => "main",
                        "MENU_CACHE_TYPE" => "Y",
                        "MENU_CACHE_TIME" => "36000000",
                        "MENU_CACHE_USE_GROUPS" => "Y",
                        "MENU_CACHE_GET_VARS" => array(),
                        "MAX_LEVEL" => "2",
                        "USE_EXT" => "Y",
                        "ALLOW_MULTI_SELECT" => "N",
                        "SUB_CLASS" => "mobile-menu-main",
                    )
                );?>
                <?$APPLICATION->IncludeComponent('bitrix:menu', "mobile_menu_main", array(
                        "ROOT_MENU_TYPE" => "site",
                        "MENU_CACHE_TYPE" => "Y",
                        "MENU_CACHE_TIME" => "36000000",
                        "MENU_CACHE_USE_GROUPS" => "Y",
                        "MENU_CACHE_GET_VARS" => array(),
                        "MAX_LEVEL" => "2",
                        "USE_EXT" => "Y",
                        "ALLOW_MULTI_SELECT" => "N",
                        "CHILD_MENU_TYPE" => "bottom",
                        "DELAY" => "N",
                    )
                );?>
                <form action="<?=$templateOptions['url_catalog_search']?>" class="mobile-menu-search relative">
                    <button type="submit">
                        <svg class="icon">
                            <use xlink:href="#svg-icon-search"></use>
                        </svg>
                    </button>
                    <input type="text" placeholder="<?=getMessage('SEARCH_STRING')?>" name="q" />
                </form>
            </div>
        </div>
    </nav>
    <?$headerClass = $templateOptions['header_class'];
    if ($APPLICATION->GetCurDir() == SITE_DIR) {
        $headerClass .= ' index-page';
    }
    if ($templateOptions['main_menu_pos'] == 'fix') {
        $headerClass .= ' menu-fixed';
    }?>
    <div id="page" class="<?=trim($headerClass)?>">
        <header<?if ($templateOptions['basket_pos'] == 'fixed'):?> class="header-fixed"<?endif;?>>
            <?require($_SERVER["DOCUMENT_ROOT"] . SITE_TEMPLATE_PATH . "/include/header_" . $templateOptions['header_version'] . ".php");?>
        </header>
        <?$classSection = "";
        if ($APPLICATION->GetCurDir() == SITE_DIR) {
        } elseif (strpos($APPLICATION->GetCurDir(), SITE_DIR . 'company/') === 0 || strpos($APPLICATION->GetCurDir(), SITE_DIR . 'shop/') === 0 || strpos($APPLICATION->GetCurDir(), SITE_DIR . 'info/') === 0 || strpos($APPLICATION->GetCurDir(), $templateOptions['url_catalog_search']) === 0) {
            $classSection = "inner";
        } elseif (($APPLICATION->GetCurDir() == SITE_DIR . 'personal/' || $APPLICATION->GetCurDir() == SITE_DIR . 'personal/profile/') && $USER->IsAuthorized()) {
            $classSection = "profile";
        } elseif ($APPLICATION->GetCurDir() == SITE_DIR . 'personal/cart/' || strpos($APPLICATION->GetCurDir(), SITE_DIR . 'personal/order/make/') === 0 || strpos($APPLICATION->GetCurDir(), SITE_DIR . 'personal/order/payment/') === 0) {
            $classSection = "cart";
        } elseif (ERROR_404 == "Y") {
            $classSection = "not-found";
        } else {
            $classSection = "fancy";
        }
        if (ERROR_404 != "Y" && (strpos($APPLICATION->GetCurDir(), $templateOptions['url_catalog']) === false || strpos($APPLICATION->GetCurDir(), $templateOptions['url_catalog_search']) === 0)):?>
            <section class="<?=$classSection?>">
                <?if ($APPLICATION->GetCurDir() == SITE_DIR):?>
                    <?foreach ($templateOptions['positions'] as $position => $pos):
                        $positionFile = $pos['path'];
                        if ($pos['visible'] == 1 && ($position != 'ACTIONS' || ($position == 'ACTIONS' && !$templateOptions['main_actions_position']))) {
                            require($positionFile);
                        }
                    endforeach;?>
                <?elseif (strpos($APPLICATION->GetCurDir(), SITE_DIR . 'company/') === 0 || strpos($APPLICATION->GetCurDir(), SITE_DIR . 'shop/') === 0 || strpos($APPLICATION->GetCurDir(), SITE_DIR . 'info/') === 0):?>
                    <div class="advanced-container-medium">
                        <nav>
                            <?$APPLICATION->IncludeComponent("bitrix:breadcrumb","",Array(
                                    "START_FROM" => "0", 
                                    "PATH" => "", 
                                )
                            );?>
                        </nav>
                        <article class="inner-container">
                            <h1><?$APPLICATION->ShowTitle(false)?></h1>
                            <?$APPLICATION->IncludeComponent("bitrix:menu", "left", array(
                                    "ROOT_MENU_TYPE" => "left",
                                    "MENU_CACHE_TYPE" => "Y",
                                    "MENU_CACHE_TIME" => "36000000",
                                    "MENU_CACHE_USE_GROUPS" => "Y",
                                    "MENU_CACHE_GET_VARS" => array(
                                    ),
                                    "MAX_LEVEL" => "1",
                                    "USE_EXT" => "N",
                                    "ALLOW_MULTI_SELECT" => "N",
                                    "DELAY" => "N",
                                ),
                                false
                            );?>
                            <div class="inner-content columns">
                <?elseif (($APPLICATION->GetCurDir() == SITE_DIR . 'personal/' || $APPLICATION->GetCurDir() == SITE_DIR . 'personal/profile/') && $USER->IsAuthorized()):?>
                    <div class="inner-bg">
                        <div class="advanced-container-medium">
                            <article class="profile-container">
                                <h1 class="text-center"><?$APPLICATION->ShowTitle(false)?></h1>
                <?elseif ($APPLICATION->GetCurDir() == SITE_DIR . 'personal/cart/' || strpos($APPLICATION->GetCurDir(), SITE_DIR . 'personal/order/') === 0):?>
                    <div class="inner-bg">
                        <div class="advanced-container-medium">
                <?elseif (strpos($APPLICATION->GetCurDir(), $templateOptions['url_catalog_search']) === 0):?>
                    <div class="advanced-container-medium">
                        <nav>
                            <?$APPLICATION->IncludeComponent("bitrix:breadcrumb","",Array(
                                    "START_FROM" => "0", 
                                    "PATH" => "", 
                                )
                            );?>
                        </nav>
                        <article class="inner-container">
                            <h1><?$APPLICATION->ShowTitle(false)?></h1>
                <?else:?>
                    <div class="inner-bg">
                        <article class="inner-container float-center table-container">
                <?endif;?>
        <?endif;?>
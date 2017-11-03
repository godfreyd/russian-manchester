<div class="header-line-top hide-for-small-only hide-for-medium-only hide-for-large-only">
    <div class="container row">
        <?require($_SERVER["DOCUMENT_ROOT"] . SITE_TEMPLATE_PATH . "/include/header_element_top_menu.php");?>
        <?require($_SERVER["DOCUMENT_ROOT"] . SITE_TEMPLATE_PATH . "/include/header_element_personal_menu.php");?>
    </div>
</div>
<div class="advanced-container inline-block-container relative header-mobile-fixed">
    <a href="javascript:;" class="header-mobile-toggle inline-block-item vertical-middle hide-for-xlarge">
        <svg class="icon">
            <use xlink:href="#svg-icon-m-toggle"></use>
        </svg>
    </a>
    <a href="<?=SITE_DIR?>" class="header-logo inline-block-item vertical-middle">
        <?$APPLICATION->IncludeFile(
            SITE_DIR . "include/logo.php",
            Array("PATH_TO_LOGO" => SITE_TEMPLATE_PATH . "/themes/" . $templateOptions['theme'] . "/images/logo.png")
        );?>
    </a>
    <div class="header-block-right show-for-xlarge">
        <div class="inline-block-item" id="title-search">
            <?require($_SERVER["DOCUMENT_ROOT"] . SITE_TEMPLATE_PATH . "/include/header_element_search_title.php");?>
        </div>
        <div class="header-phone inline-block-item">
            <?require($_SERVER["DOCUMENT_ROOT"] . SITE_TEMPLATE_PATH . "/include/header_element_phone.php");?>
        </div>
        <div class="header-cart header-block-info inline-block-item">
            <?require($_SERVER["DOCUMENT_ROOT"] . SITE_TEMPLATE_PATH . "/include/header_element_basket.php");?>
        </div>
    </div>
    <?require($_SERVER["DOCUMENT_ROOT"] . SITE_TEMPLATE_PATH . "/include/header_element_fixed_block.php");?>
</div>
<?require($_SERVER["DOCUMENT_ROOT"] . SITE_TEMPLATE_PATH . "/include/header_element_catalog_menu.php");?>
<div class="header-line-top show-for-xlarge">
    <div class="container row">
        <div class="header-phone float-left">
            <?require($_SERVER["DOCUMENT_ROOT"] . SITE_TEMPLATE_PATH . "/include/header_element_phone.php");?>
        </div>
        <?require($_SERVER["DOCUMENT_ROOT"] . SITE_TEMPLATE_PATH . "/include/header_element_personal_menu.php");?>
    </div>
</div>
<div class="header-line-center header-menu-fixed">
    <div class="advanced-container inline-block-container header-mobile-fixed">
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
        <div class="inline-block">
            <?require($_SERVER["DOCUMENT_ROOT"] . SITE_TEMPLATE_PATH . "/include/header_element_catalog_menu.php");?>
        </div>
        <div class="header-block-right show-for-xlarge">
            <div class="inline-block">
                <div class="inline-block">
                    <?require($_SERVER["DOCUMENT_ROOT"] . SITE_TEMPLATE_PATH . "/include/header_element_top_menu.php");?>
                </div>
                <div class="search-from-header-wrap inline-block-item vertical-middle" id="title-search">
                    <?require($_SERVER["DOCUMENT_ROOT"] . SITE_TEMPLATE_PATH . "/include/header_element_search_title.php");?>
                </div>
            </div>
            <a href="javascript:;" class="search-from-header-button inline-block-item vertical-middle">
                <svg class="icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-icon-search"></use>
                </svg>
            </a>
            <div class="header-cart header-block-info inline-block-item">
                <?require($_SERVER["DOCUMENT_ROOT"] . SITE_TEMPLATE_PATH . "/include/header_element_basket.php");?>
            </div>
        </div>
        <?require($_SERVER["DOCUMENT_ROOT"] . SITE_TEMPLATE_PATH . "/include/header_element_fixed_block.php");?>
    </div>
</div>
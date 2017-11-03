<ul class="header-fixed-block">
    <li class="header-cart header-block-info header-fixed-item">
        <?$APPLICATION->IncludeFile(
            SITE_TEMPLATE_PATH . "/include/header_element_basket.php",
            Array("TEMPLATE" => "mini")
        );?>
    </li>
    <li class="header-liked header-block-info header-fixed-item">
        <?$APPLICATION->IncludeComponent("bitlatepro:catalog.favorite.line","mini",Array());?>
    </li>
    <?if ($templateOptions['use_compare'] == "Y"):?>
        <li class="header-compare header-block-info header-fixed-item">
            <?$TYPE = 'mini';?>
            <?require($_SERVER["DOCUMENT_ROOT"] . SITE_DIR . "include/compare_list.php");?>
        </li>
    <?endif;?>
</ul>
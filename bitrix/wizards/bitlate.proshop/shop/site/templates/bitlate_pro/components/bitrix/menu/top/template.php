<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
$this->setFrameMode(true);
if (!CModule::IncludeModule('bitlate.proshop')) return;
$headerVersion = COption::GetOptionString("bitlate.proshop", "NL_HEADER_VERSION_VALUE", false, SITE_ID);
$class = ($headerVersion != 'lite') ? "header-additional-menu menu inline-block-item vertical-middle" : "menu float-left";
if (!empty($arResult)):?>
    <ul class="<?=$class?>">
        <?foreach($arResult as $itemIdex => $arItem):
            if ($arItem["DEPTH_LEVEL"] > 1) continue;?>
            <?if ($arItem["SELECTED"]):?>
                <li class="active"><a href="<?=$arItem["LINK"]?>"><?=$arItem["TEXT"]?></a></li>
            <?else:?>
                <li><a href="<?=$arItem["LINK"]?>"><?=$arItem["TEXT"]?></a></li>
            <?endif?>
        <?endforeach;?>
    </ul>
<?endif;?>
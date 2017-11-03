<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
$this->setFrameMode(true);?>

<?if ($arResult['NAV_RESULT']->NavPageNomer <= 1 && $arParams['REQUEST_LOAD'] != "Y"):?>
    <nav class="inner-menu-filter">
        <ul class="menu">
            <li class="float-left<?if ($arParams["CUR_ACTIVE"] == ''):?> active<?endif;?>"><a href="<?=$APPLICATION->GetCurPage()?>" data-ajax="<?=$APPLICATION->GetCurPage()?>?load=Y"><?=GetMessage('CT_ALL')?></a></li>
            <?if ($arResult["ACTIONS_ACTIVE"] === true):?>
                <li class="float-left<?if ($arParams["CUR_ACTIVE"] == "Y"):?> active<?endif;?>"><a href="<?=$APPLICATION->GetCurPage()?>" data-ajax="<?=$APPLICATION->GetCurPage()?>?ACTIVE=Y&load=Y"><?=GetMessage('CT_ACTIVE')?></a></li>
            <?endif;?>
            <?if ($arResult["ACTIONS_INACTIVE"] === true):?>
                <li class="float-left<?if ($arParams["CUR_ACTIVE"] == "N"):?> active<?endif;?>"><a href="<?=$APPLICATION->GetCurPage()?>" data-ajax="<?=$APPLICATION->GetCurPage()?>?ACTIVE=N&load=Y"><?=GetMessage('CT_INACTIVE')?></a></li>
            <?endif;?>
        </ul>
        <div class="clearfix"></div>
    </nav>
    <ul class="inner-content-list" id="action-items">
<?endif;?>
    <?foreach ($arResult["ITEMS"] as $i => $arItem):
        $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
        $this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
        $pic = false;
        $itemClass = (!$arItem['ACTIVE_TO'] || strtotime($arItem['ACTIVE_TO']) >= strtotime(date("Y-m-d") . ' 00:00:00')) ? ' secondary' : '';
        if (!empty($arItem['PREVIEW_PICTURE'])) {
            $pic = CFile::resizeImageGet($arItem['PREVIEW_PICTURE']['ID'], array('width' => 385, 'height' => 210), BX_RESIZE_IMAGE_EXACT, true);
        }
        $linkType = $arItem["DISPLAY_PROPERTIES"]["LINK_TYPE"]["VALUE_XML_ID"];
        switch ($linkType) {
            case 'custom':
                $link = $arItem["DISPLAY_PROPERTIES"]["LINK"]["VALUE"];
                break;
            case 'detail':
                $link = $arItem['DETAIL_PAGE_URL'];
                break;
            default:
                $link = '';
                break;
        }?>
        <li class="row table-container" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
            <div class="inner-content-preview for-action table-item float-none columns large-7 xxlarge-5">
                <?if ($pic !== false):?>
                    <?if ($link):?>
                        <a href="<?=$link?>">
                    <?endif;?>
                    <img src="<?=$pic['src']?>" alt="<?=$arItem['NAME']?>" title="<?=$arItem['NAME']?>">
                    <?if ($link):?>
                        </a>
                    <?endif;?>
                <?endif;?>
            </div>
            <div class="inner-content-info table-item float-none columns large-5 xxlarge-7">
                <?if($arParams["DISPLAY_DATE"]!="N" && $arItem["DISPLAY_ACTIVE_FROM"]):?>
                    <span class="label<?=$itemClass?>"><?=$arItem['DISPLAY_ACTIVE_FROM']?><?if ($arItem['ACTIVE_TO']):?> – <?=ConvertTimeStamp(strtotime($arItem['ACTIVE_TO']), $arParams["LIST_ACTIVE_DATE_FORMAT"])?><?endif;?></span>
                <?endif;?>
                <?if ($link):?>
                    <a href="<?=$link?>" class="name">
                <?else:?>
                    <div class="name">
                <?endif;?>
                <?=$arItem['NAME']?>
                <?if ($link):?>
                    </a>
                <?else:?>
                    </div>
                <?endif;?>
                <div class="show-for-large"><?=$arItem['PREVIEW_TEXT']?></div>
            </div>
        </li>
    <?endforeach;?>
<?$nextPageUrl = '';
if (isset($arResult['NAV_RESULT']->NavPageCount) && ($arResult['NAV_RESULT']->NavPageCount > 1) && ($arResult['NAV_RESULT']->NavPageCount > $arResult['NAV_RESULT']->NavPageNomer)) {
    $nextPageUrl = $APPLICATION->GetCurPageParam("PAGEN_" . $arResult['NAV_RESULT']->NavNum . "=" . ($arResult['NAV_RESULT']->NavPageNomer + 1) . "&load=Y", array("PAGEN_" . $arResult['NAV_RESULT']->NavNum, "load"));
}
if ($arResult['NAV_RESULT']->NavPageNomer <= 1 && $arParams['REQUEST_LOAD'] != "Y"):?>
    </ul>
    <?if ($nextPageUrl != ''):?>
        <a href="javascript:;" class="load-more float-center text-center" onclick="getNewsItems(this, 'action-items', false)" data-ajax="<?=$nextPageUrl?>">
            <svg class="icon">
                <use xlink:href="#svg-icon-load-more"></use>
            </svg>
            <?=GetMessage('CT_BUTTON_SHOW_MORE')?>
        </a>
    <?endif;?>
<?else:?>
    <script>
        <?if ($nextPageUrl != ''):?>
            $('.load-more').attr('data-ajax', '<?=$nextPageUrl?>');
            $('.load-more').show();
        <?else:?>
            $('.load-more').hide();
        <?endif;?>
    </script>
<?endif;?>
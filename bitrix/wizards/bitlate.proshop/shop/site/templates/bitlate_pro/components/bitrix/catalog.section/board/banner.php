<?$strBannerEdit = CIBlock::GetArrayByID($banner["IBLOCK_ID"], "ELEMENT_EDIT");
$strBannerDelete = CIBlock::GetArrayByID($banner["IBLOCK_ID"], "ELEMENT_DELETE");
$arBannerDeleteParams = array("CONFIRM" => GetMessage('CT_BCS_TPL_ELEMENT_DELETE_CONFIRM'));
$this->AddEditAction($banner['ID'], $banner['EDIT_LINK'], $strBannerEdit);
$this->AddDeleteAction($banner['ID'], $banner['DELETE_LINK'], $strBannerDelete, $arBannerDeleteParams);?>
<div class="products-flex-item <?=(($banner['SIZE'] == 'gorizontal_priduct') ? 'size-2x1' : 'size-2x2')?> banner-item pos<?=$arResult['BANNER_POSITION']?><?=$gridItemClass?>" id="<?=$this->GetEditAreaId($banner['ID']);?>">
    <?if (($APPLICATION->GetShowIncludeAreas())):?>
        <input type="hidden" name="banner_position" value="<?=$banner['ID']?>">
    <?endif;?>
    <?if ($banner['LINK']):?>
        <a href="<?=$banner['LINK']?>">
    <?else:?>
        <div>
    <?endif;?>
        <?if ($banner['BIG_PICTURE']):?>
            <img src="<?=$banner['BIG_PICTURE']?>" alt="<?=$banner['NAME']?>" class="show-for-xlarge">
            <img src="<?=$banner['PREVIEW_PICTURE']?>" alt="<?=$banner['NAME']?>" class="hide-for-xlarge">
        <?else:?>
            <img src="<?=$banner['PREVIEW_PICTURE']?>" alt="<?=$banner['NAME']?>">
        <?endif;?>
    <?if ($banner['LINK']):?>
        </a>
    <?else:?>
        </div>
    <?endif;?>
</div>
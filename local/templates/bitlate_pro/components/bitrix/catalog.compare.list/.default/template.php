<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);
if (!CModule::IncludeModule('bitlate.proshop')) return;
$headerVersion = COption::GetOptionString("bitlate.proshop", "NL_HEADER_VERSION_VALUE", false, SITE_ID);?>

<a href="<?=$arParams["COMPARE_URL"]?>" id="bx_compare_count" class="button transparent add2compare inline-block-item relative">
    <?$frame = $this->createFrame('bx_compare_count', false)->begin();
        $countCompare = count($arResult);?>
        <svg class="icon">
            <use xlink:href="#svg-icon-compare"></use>
        </svg>
        <?if (in_array($headerVersion, array('v1', 'v3'))):
            $countCompareCaptionMini = $countCompare . ' ' . BitlateProUtils::nl_inclination($countCompare, GetMessage('NL_PRODUCT_1'), GetMessage('NL_PRODUCT_2'), GetMessage('NL_PRODUCT_10'));?>
            <span class="text"><?=getMessage('COMPARE_TITLE')?></span>
            <span class="header-block-info-counter inline-block-item add2compare_counter" title="<?=$countCompareCaptionMini?>"><?if ($countCompare > 0):?><?=$countCompare?><?endif;?></span>
        <?else:?>
            <?=getMessage('COMPARE_TITLE')?><span class="add2compare_counter"><?if ($countCompare > 0):?> (<?=$countCompare?>)<?endif;?></span>
        <?endif;?>
        <div class="compare_products" style="display:none;">
            <?if ($countCompare > 0):?>
                <?foreach($arResult as $arElement):?>
                    <div data-product-id="<?=$arElement['PARENT_ID']?>"></div>
                <?endforeach;?>
            <?endif;?>
        </div>
    <?$frame->beginStub();?>
        <svg class="icon">
            <use xlink:href="#svg-icon-compare"></use>
        </svg>
        <?if (in_array($headerVersion, array('v1', 'v3'))):?>
            <span class="text"><?=getMessage('COMPARE_TITLE')?></span>
        <?else:?>
            <?=getMessage('COMPARE_TITLE')?>
        <?endif;?>
    <?$frame->end();?>
    <script>
        var NL_ADD_2_COMPARE = '<?=getMessage('COMPARE_REDIRECT')?>';
        var NL_ADD_2_COMPARE_URL = '<?=$arParams["COMPARE_URL"]?>';
    </script>
</a>
        
<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
$this->setFrameMode(true);?>
<div id="custom-menu">
    <div class="header">
        <button type="button" class="toggle  float-right" data-tooltip aria-haspopup="true" data-click-open="false" data-disable-hover="true" data-tooltip-class="tooltip tooltip-fixed" title="<?=GetMessage('CUSTOM_MENU_TITLE')?>">
            <span class="line relative"></span>
            <span class="line center-line"></span>
            <span class="line relative"></span>
        </button>
        <div class="clearfix"></div>
    </div>
    <ul id="custom-menu-accordion" class="accordion" data-accordion>
        <li class="accordion-item is-active" data-accordion-item>
            <a href="#" class="accordion-title">
                <?=GetMessage('CUSTOM_MENU_TITLE')?>
                <svg class="icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-icon-up-down"></use>
                </svg>
            </a>
            <div class="accordion-content" data-tab-content>
                <form action="<?=SITE_DIR?>" class="body">
                    <fieldset class="radio-color inline-block-container">
                        <legend><?=GetMessage('CUSTOM_MENU_COLOR_TITLE')?></legend>
                        <?foreach ($arResult['THEME_LIST'] as $k => $paramInfo):?>
                            <input type="radio" name="custom_color" class="show-for-sr custom-option" value="<?=$APPLICATION->GetCurPageParam("theme=" . $paramInfo['CODE'], array("theme"))?>" id="custom-color-<?=$k?>"<?if ($paramInfo['CODE'] == $arResult['CUR_THEME']):?> checked="checked"<?endif;?>>
                            <label for="custom-color-<?=$k?>" class="row">
                                <span class="small-6 column" style="background-color: <?=$paramInfo['COLOR_1']?>;"></span>
                                <span class="small-6 column" style="background-color: <?=$paramInfo['COLOR_2']?>;"></span>
                            </label>
                        <?endforeach;?>
                        <label class="row colorpicker-icon" data-url="<?=$APPLICATION->GetCurPageParam("theme=custom", array("custom"))?>">
                            <span class="small-6 column colorpicker-element" data-wrap="#color-primary-wrap" data-hex="#hex-color-primary">
                                <input type="hidden" name="custom[color][primary]" value="#<?=$arParams['CUR_THEME_COLOR_1']?>">
                                <span class="input-group-addon"><i style="background-color: #<?=$arParams['CUR_THEME_COLOR_1']?>;"></i></span>
                            </span>
                            <span class="small-6 column colorpicker-element" data-wrap="#color-secondary-wrap" data-hex="#hex-color-secondary">
                                <input type="hidden" name="custom[color][secondary]" value="#<?=$arParams['CUR_THEME_COLOR_2']?>">
                                <span class="input-group-addon"><i style="background-color: #<?=$arParams['CUR_THEME_COLOR_2']?>;"></i></span>
                            </span>
                            <svg class="icon" data-toggle="colorpicker">
                                <use xlink:href="#svg-icon-colorpicker"></use>
                            </svg>
                        </label>
                        <script>
                            window['colors'] = {
                                primary: '<?=$arParams['CUR_THEME_COLOR_1']?>',
                                secondary: '<?=$arParams['CUR_THEME_COLOR_2']?>',
                            };
                        </script>
                    </fieldset>
                    <?$headersTypes = array();?>
                    <fieldset class="select-dropdown">
                        <legend><?=GetMessage('CUSTOM_MENU_HEADER_TYPE_TITLE')?></legend>
                        <select name="custom_cart_style" id="custom_cart_style" class="custom-option" data-smart-positioning="dropup">
                            <?foreach ($arResult['HEADER_TYPE_LIST'] as $k => $paramInfo):
                                if (!in_array($paramInfo['HEADER'], $headersTypes)):
                                    $headersTypes[] = $paramInfo['HEADER'];?>
                                    <option value="<?=$APPLICATION->GetCurPageParam("header_type=" . $paramInfo['CODE'], array("header_type"))?>"<?if ($paramInfo['HEADER'] == $arResult['CUR_HEADER_VERSION']):?> selected="selected"<?endif;?>><?=$paramInfo['HEADER_TITLE']?></option>
                                <?endif;?>
                            <?endforeach;?>
                        </select>
                    </fieldset>
                    <fieldset class="select-dropdown">
                        <legend><?=GetMessage('CUSTOM_MENU_HEADER_COLOR_TITLE')?></legend>
                        <?foreach ($headersTypes as $k => $version):
                            if ($arResult['CUR_HEADER_VERSION'] == $version):?>
                                <select name="custom_cart_style_<?=$version?>" id="custom_cart_style_<?=$version?>" class="custom-option<?=(($arResult['CUR_HEADER_VERSION'] != $version) ? ' hide' : '')?>" data-smart-positioning="dropup">
                                    <?foreach ($arResult['HEADER_TYPE_LIST'] as $k => $paramInfo):
                                        if ($paramInfo['HEADER'] == $version):?>
                                            <option value="<?=$APPLICATION->GetCurPageParam("header_type=" . $paramInfo['CODE'], array("header_type"))?>"<?if ($paramInfo['CODE'] == $arResult['CUR_HEADER_TYPE']):?> selected="selected"<?endif;?>><?=$paramInfo['TITLE']?></option>
                                        <?endif;?>
                                    <?endforeach;?>
                                </select>
                            <?endif;?>
                        <?endforeach;?>
                    </fieldset>
                    <fieldset class="select-dropdown">
                        <legend><?=GetMessage('CUSTOM_MENU_BASKET_TITLE')?></legend>
                        <select name="custom_basket_place" id="custom-basket-place" class="custom-option" data-smart-positioning="dropup">
                            <?foreach ($arResult['BASKET_POS_LIST'] as $k => $paramInfo):?>
                                <option value="<?=$APPLICATION->GetCurPageParam("basket_pos=" . $paramInfo['CODE'], array("basket_pos"))?>"<?if ($paramInfo['CODE'] == $arResult['CUR_BASKET_POS']):?> selected="selected"<?endif;?>><?=$paramInfo['TITLE']?></option>
                            <?endforeach;?>
                        </select>
                    </fieldset>
                    <?if ($arResult['MAIN_MENU_POS_LIST']):?>
                        <fieldset class="select-dropdown">
                            <legend><?=GetMessage('CUSTOM_MENU_MAIN_MENU_POS_TITLE')?></legend>
                            <select name="custom_banner_place" id="custom-banner-place" class="custom-option">
                                <?foreach ($arResult['MAIN_MENU_POS_LIST'] as $k => $paramInfo):?>
                                    <option value="<?=$APPLICATION->GetCurPageParam("main_menu_pos=" . $paramInfo['CODE'], array("main_menu_pos"))?>"<?if ($paramInfo['CODE'] == $arResult['CUR_MAIN_MENU_POS']):?> selected="selected"<?endif;?>><?=$paramInfo['TITLE']?></option>
                                <?endforeach;?>
                            </select>
                        </fieldset>
                    <?endif;?>
                    <?if ($arResult['ACTION_POS_LIST']):?>
                        <fieldset class="select-dropdown">
                            <legend><?=GetMessage('CUSTOM_MENU_ACTION_BANNER_TITLE')?></legend>
                            <select name="custom_banner_place" id="custom-banner-place" class="custom-option">
                                <?foreach ($arResult['ACTION_POS_LIST'] as $k => $paramInfo):?>
                                    <option value="<?=$APPLICATION->GetCurPageParam("action_pos=" . $paramInfo['CODE'], array("action_pos"))?>"<?if ($paramInfo['CODE'] == $arResult['CUR_ACTION_POS']):?> selected="selected"<?endif;?>><?=$paramInfo['TITLE']?></option>
                                <?endforeach;?>
                            </select>
                        </fieldset>
                    <?endif;?>
                    <?if ($arResult['MAIN_BANNER_LIST']):?>
                        <fieldset class="text-justify radio-banner">
                            <legend><?=GetMessage('CUSTOM_MENU_MAIN_BANNER_TITLE')?></legend>
                            <?foreach ($arResult['MAIN_BANNER_LIST'] as $k => $paramInfo):?>
                                <input type="radio" name="main_banner" class="show-for-sr custom-option" value="<?=$APPLICATION->GetCurPageParam("main_banner=" . $paramInfo['CODE'], array("main_banner"))?>"<?if ($paramInfo['CODE'] == $arResult['CUR_MAIN_BANNER']):?> checked="checked"<?endif;?> id="custom-banner-<?=$paramInfo['CODE']?>">
                                <label for="custom-banner-<?=$paramInfo['CODE']?>" class="text-center">
                                    <span class="icon <?=$paramInfo['CODE']?>"><?=$paramInfo['CHAR']?></span>
                                    <span><?=$paramInfo['TITLE']?></span>
                                </label>
                            <?endforeach;?>
                        </fieldset>
                    <?endif;?>
                    <?if ($arResult['PRODUCT_TYPE_LIST']):?>
                        <fieldset class="select-dropdown">
                            <legend><?=GetMessage('CUSTOM_MENU_PRODUCT_TITLE')?></legend>
                            <select name="custom_product_type" id="custom-product-type" class="custom-option">
                                <?foreach ($arResult['PRODUCT_TYPE_LIST'] as $k => $paramInfo):?>
                                    <option value="<?=$APPLICATION->GetCurPageParam("product_type=" . $paramInfo['CODE'], array("product_type"))?>"<?if ($paramInfo['CODE'] == $arResult['CUR_PRODUCT_TYPE']):?> selected="selected"<?endif;?>><?=$paramInfo['TITLE']?></option>
                                <?endforeach;?>
                            </select>
                        </fieldset>
                    <?endif;?>
                    <?if ($arResult['PRODUCT_SIZE_TYPE']):?>
                        <fieldset class="select-dropdown">
                            <legend><?=GetMessage('CUSTOM_MENU_PRODUCT_SIZE_TITLE')?></legend>
                            <select name="custom_product_size_type" id="custom-product-size-type" class="custom-option">
                                <?foreach ($arResult['PRODUCT_SIZE_TYPE'] as $k => $paramInfo):?>
                                    <option value="<?=$APPLICATION->GetCurPageParam("product_size=" . $paramInfo['CODE'], array("product_size"))?>"<?if ($paramInfo['CODE'] == $arResult['CUR_PRODUCT_SIZE_TYPE']):?> selected="selected"<?endif;?>><?=$paramInfo['TITLE']?></option>
                                <?endforeach;?>
                            </select>
                        </fieldset>
                    <?endif;?>
                    <fieldset class="select-dropdown">
                        <legend><?=GetMessage('CUSTOM_MENU_NEWS_TITLE')?></legend>
                        <select name="custom_news_main" id="custom-news-main" class="custom-option">
                            <?foreach ($arResult['NEWS_TYPE_LIST'] as $k => $paramInfo):?>
                                <option value="<?=$APPLICATION->GetCurPageParam("news_type=" . $paramInfo['CODE'], array("news_type"))?>"<?if ($paramInfo['CODE'] == $arResult['CUR_NEWS_TYPE']):?> selected="selected"<?endif;?>><?=$paramInfo['TITLE']?></option>
                            <?endforeach;?>
                        </select>
                    </fieldset>
                    <fieldset class="select-dropdown">
                        <legend><?=GetMessage('CUSTOM_MENU_FILTER_TITLE')?></legend>
                        <select name="custom_filter_type" id="custom-filter-type" class="custom-option">
                            <?foreach ($arResult['FILTER_TYPE_LIST'] as $k => $paramInfo):?>
                                <option value="<?=$APPLICATION->GetCurPageParam("filter_type=" . $paramInfo['CODE'], array("filter_type"))?>"<?if ($paramInfo['CODE'] == $arResult['CUR_FILTER_TYPE']):?> selected="selected"<?endif;?>><?=$paramInfo['TITLE']?></option>
                            <?endforeach;?>
                        </select>
                    </fieldset>
                </form>
            </div>
        </li>
        <li class="accordion-item" data-accordion-item>
            <a href="#" class="accordion-title">
                <?=GetMessage('CUSTOM_MENU_POSITION_TITLE')?>
                <svg class="icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-icon-up-down"></use>
                </svg>
            </a>
            <div class="accordion-content" data-tab-content>
                <form action="<?=SITE_DIR?>" class="body">
                    <fieldset class="sortable" data-url="<?=$APPLICATION->GetCurPageParam("positions=", array("positions"))?>" data-visible-text="<?=GetMessage('CUSTOM_MENU_VISIBLE_TITLE')?>" data-invisible-text="<?=GetMessage('CUSTOM_MENU_INVISIBLE_TITLE')?>">
                        <div class="sortable-item sortable-disabled">
                            <svg class="icon icon-custom-main">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-icon-custom-main"></use>
                            </svg>
                            <div class="desc"><?=GetMessage('CUSTOM_MENU_POSITION_FIRST_TITLE')?></div>
                        </div>
                        <?foreach ($arResult['CUR_MAIN_BLOCK_POSITION'] as $position => $pos):
                            $isVisible = $pos['visible'];
                            $paramInfo = $arResult['MAIN_BLOCK_POSITION_LIST'][$position];
                            if ($position != 'MAIN'):?>
                                <div class="sortable-item<?if ($paramInfo['FIX']):?> sortable-disabled<?endif;?><?if ($isVisible != 1):?> sortable-invisible<?endif;?>">
                                    <input type="hidden" name="custom_main_position[]" value="<?=$paramInfo['CODE']?>">
                                    <svg class="icon icon-custom-<?=$paramInfo['SVG']?>">
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-icon-custom-<?=$paramInfo['SVG']?>"></use>
                                    </svg>
                                    <div class="desc">
                                        <svg class="icon icon-custom-invisible">
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-icon-custom-invisible"></use>
                                        </svg>
                                        <?=$paramInfo['TITLE']?>
                                        <?if ($paramInfo['FIX']):?>
                                            <a href="javascript:;" class="info" title="<?=$paramInfo['FIX_TITLE']?>" aria-haspopup="true" data-tooltip data-tooltip-class="tooltip tooltip-white">i</a>
                                        <?endif;?>
                                    </div>
                                    <div class="hide-block-wrap">
                                        <a href="javascript:;" class="hide-block">
                                            <svg class="icon icon-custom-invisible">
                                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-icon-custom-invisible"></use>
                                            </svg>
                                            <span><?=(($isVisible != 1) ? GetMessage('CUSTOM_MENU_VISIBLE_TITLE') : GetMessage('CUSTOM_MENU_INVISIBLE_TITLE'))?></span>
                                        </a>
                                    </div>
                                </div>
                            <?endif;?>
                        <?endforeach;?>
                    </fieldset>
                </form>
            </div>
        </li>
    </ul>
    <div id="colorpicker" class="dropdown-pane colorpicker-dropdown" data-dropdown data-v-offset="5" data-close-on-click="true">
        <ul class="tabs" data-tabs id="color-tabs">
            <li class="tabs-title is-active"><a href="#tab-color-primary" aria-selected="true"><?=GetMessage('CUSTOM_MENU_COLOR_1')?></a></li>
            <li class="tabs-title"><a href="#tab-color-secondary"><?=GetMessage('CUSTOM_MENU_COLOR_2')?></a></li>
        </ul>
        <div class="tabs-content" data-tabs-content="color-tabs">
            <div class="tabs-panel is-active" id="tab-color-primary">
                <div id="color-primary-wrap"></div>
                <div class="hex-color-input">
                    <label for="hex-color-primary">Hex</label>
                    <div class="relative float-left">
                        <span>#</span>
                        <input type="text" class="colorpicker-input" name="hex-color-primary" id="hex-color-primary" value="<?=$arParams['CUR_THEME_COLOR_1']?>">
                    </div>
                </div>
            </div>
            <div class="tabs-panel" id="tab-color-secondary">
                <div id="color-secondary-wrap"></div>
                <div class="hex-color-input">
                    <label for="hex-color-secondary">Hex</label>
                    <div class="relative float-left">
                        <span>#</span>
                        <input type="text" class="colorpicker-input" name="hex-color-secondary" id="hex-color-secondary" value="<?=$arParams['CUR_THEME_COLOR_2']?>">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
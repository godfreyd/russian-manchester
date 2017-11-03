<div class="main-product-tabs">
    <div class="advanced-container-medium">
        <select class="select-tabs hide-for-large">
            <option value="#product-tab-recomend"><?=getMessage('TITLE_TAB_RECOMEND')?></option>
            <option value="#product-tab-news"><?=getMessage('TITLE_TAB_NEWS')?></option>
            <option value="#product-tab-hits"><?=getMessage('TITLE_TAB_HITS')?></option>
            <option value="#product-tab-discount"><?=getMessage('TITLE_TAB_DISCOUNT')?></option>
        </select>
        <ul class="tabs inline-block-container text-center show-for-large" id="main-product-tabs" data-tabs>
            <li class="tabs-title inline-block-item float-none is-active"><a href="#product-tab-recomend"><span><?=getMessage('TITLE_TAB_RECOMEND')?></span></a></li>
            <li class="tabs-title inline-block-item float-none"><a href="#product-tab-news"><span><?=getMessage('TITLE_TAB_NEWS')?></span></a></li>
            <li class="tabs-title inline-block-item float-none"><a href="#product-tab-hits"><span><?=getMessage('TITLE_TAB_HITS')?></span></a></li>
            <li class="tabs-title inline-block-item float-none"><a href="#product-tab-discount"><span><?=getMessage('TITLE_TAB_DISCOUNT')?></span></a></li>
        </ul>
    </div>
    <div class="container row tabs-content" data-tabs-content="main-product-tabs">
        <?$arTabs = array('recomend', 'news', 'hits', 'discount');
        foreach ($arTabs as $type):?>
            <div class="tabs-panel<?if ($type == 'recomend'):?> is-active<?endif;?>" id="product-tab-<?=$type?>">
                <?if ($templateOptions['product_type'] != 'slider'):?>
                    <div class="products-flex-grid product-grid product-grid-<?=$type?>">
                <?endif;?>
                    <?$PRODUCT_TYPE = $templateOptions['product_type'];
                    $PRODUCT_COUNT = $templateOptions['product_count'];
                    $TYPE = $type;?>
                    <?require($_SERVER["DOCUMENT_ROOT"] . SITE_DIR . "include/popup/product_tab.php");?>
            </div>
        <?endforeach;?>
    </div>
</div>
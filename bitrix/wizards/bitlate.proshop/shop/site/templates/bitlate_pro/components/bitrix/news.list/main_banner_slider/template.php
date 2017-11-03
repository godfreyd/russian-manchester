<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
$this->setFrameMode(true);?>

<?if (!empty($arResult['ITEMS'])):
    $gridClass = ($APPLICATION->GetShowIncludeAreas()) ? ' sortable-grid' : '';
    $bannerClass = ($APPLICATION->GetShowIncludeAreas()) ? ' sortable-banner' : '';
    $gridUrl = ($APPLICATION->GetShowIncludeAreas()) ? $APPLICATION->GetCurPageParam("bannerpositions=", array("bannerpositions")) : '';?>
    <div class="container row">
        <?if ($arParams["SLIDER_TYPE"] == "board3_3"):
            $classItems = 'inline-block-item main-banner-item';?>
            <div class="main-banner-grid grid-column-3 inline-block-container hide-for-small-only<?=$gridClass?>" data-url="<?=$gridUrl?>">
        <?elseif ($arParams["SLIDER_TYPE"] == "board4_2"):
            $classItems = 'inline-block-item main-banner-item';?>
            <div class="main-banner-grid grid-column-4 inline-block-container hide-for-small-only<?=$gridClass?>" data-url="<?=$gridUrl?>">
        <?else:
            $classItems = 'item';?>
            <div class="owl-carousel main-banner hide-for-small-only<?=$bannerClass?>" data-url="<?=$gridUrl?>">
        <?endif;?>
            <?foreach ($arResult['ITEMS'] as $arItem):
                $itemSize = $arItem['PROPERTIES']['SIZE']['VALUE_XML_ID'];
                $classItem = $classItems;
                $pic = array();
                $picBig = array();
                $bigPicture = false;
                $smallPicture = false;
                $isGorizontal = (($arParams["SLIDER_TYPE"] == "board3_3" && in_array('gorizontal', $itemSize)) || ($arParams["SLIDER_TYPE"] == "board4_2" && in_array('gorizontal_4_2', $itemSize))) ? true : false;
                $isVertical = (($arParams["SLIDER_TYPE"] == "board3_3" && in_array('vertical', $itemSize)) || ($arParams["SLIDER_TYPE"] == "board4_2" && in_array('vertical_4_2', $itemSize))) ? true : false;
                if ($arParams["SLIDER_TYPE"] == "right") {
                    $arSize = array('width' => 365, 'height' => 215);
                    $smallPicture = ($arItem['PROPERTIES']['GORIZONTAL_RIGHT_PHOTO']['VALUE'] > 0) ? $arItem['PROPERTIES']['GORIZONTAL_RIGHT_PHOTO']['VALUE'] : false;
                } elseif ($arParams["SLIDER_TYPE"] == "board3_3") {
                    $arSize = array('width' => 385, 'height' => 385);
                    if ($isGorizontal) {
                        $arSize = array('width' => 793, 'height' => 385);
                        $smallPicture = ($arItem['PROPERTIES']['GORIZONTAL_PHOTO']['VALUE'] > 0) ? $arItem['PROPERTIES']['GORIZONTAL_PHOTO']['VALUE'] : false;
                    } else {
                        $smallPicture = ($arItem['PROPERTIES']['SQUARE_PHOTO']['VALUE'] > 0) ? $arItem['PROPERTIES']['SQUARE_PHOTO']['VALUE'] : false;
                    }
                    if ($isVertical) {
                        $bigPicture = ($arItem['PROPERTIES']['VERTICAL_PHOTO']['VALUE'] > 0) ? $arItem['PROPERTIES']['VERTICAL_PHOTO']['VALUE'] : false;
                    }
                } elseif ($arParams["SLIDER_TYPE"] == "board4_2") {
                    $arSize = array('width' => 286, 'height' => 286);
                    $smallPicture = ($arItem['PROPERTIES']['SQUARE_MINI_PHOTO']['VALUE'] > 0) ? $arItem['PROPERTIES']['SQUARE_MINI_PHOTO']['VALUE'] : false;
                    if ($isGorizontal) {
                        $bigPicture = ($arItem['PROPERTIES']['GORIZONTAL_PHOTO']['VALUE'] > 0) ? $arItem['PROPERTIES']['GORIZONTAL_PHOTO']['VALUE'] : false;
                    } elseif ($isVertical) {
                        $bigPicture = ($arItem['PROPERTIES']['VERTICAL_PHOTO']['VALUE'] > 0) ? $arItem['PROPERTIES']['VERTICAL_PHOTO']['VALUE'] : false;
                    }
                } else {
                    $arSize = array('width' => 385, 'height' => 210);
                    $smallPicture = ($arItem['PROPERTIES']['GORIZONTAL_MINI_PHOTO']['VALUE'] > 0) ? $arItem['PROPERTIES']['GORIZONTAL_RIGHT_PHOTO']['VALUE'] : false;
                }
                $smallPicture = (!$smallPicture) ? $arItem['PREVIEW_PICTURE']['ID'] : $smallPicture;
                if ($smallPicture > 0):
                    if (in_array($arParams["SLIDER_TYPE"], array("board3_3", "board4_2"))) {
                        if ($isGorizontal || $isVertical) {
                            if ($isGorizontal) {
                                $classItem .= ' size-2x1';
                                if ($arParams["SLIDER_TYPE"] == "board3_3") {
                                    $classItem .= ' size-all-screen';
                                }
                                $arBigSize = array('width' => 793, 'height' => 385);
                            } else {
                                $classItem .= ' size-1x2';
                                $arBigSize = array('width' => 385, 'height' => 800);
                                if (!$bigPicture) {
                                    $bigPicture = ($arItem['DETAIL_PICTURE']['ID'] > 0) ? $arItem['DETAIL_PICTURE']['ID'] : $smallPicture;
                                }
                            }
                            if ($bigPicture > 0) {
                                $picBig = CFile::ResizeImageGet($bigPicture, $arBigSize, BX_RESIZE_IMAGE_EXACT, true);
                            }
                        }
                    }
                    $pic = CFile::ResizeImageGet($smallPicture, $arSize, BX_RESIZE_IMAGE_EXACT, true);
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
                    <?
                    $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
                    $this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
                    ?>
                    <div class="<?=$classItem?>" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
                        <?if (($APPLICATION->GetShowIncludeAreas())):?>
                            <input type="hidden" name="banner_position[]" value="<?=$arItem['ID']?>">
                        <?endif;?>
                        <?if ($link):?>
                            <a href="<?=$link?>">
                        <?endif;?>
                            <?if ($picBig['src']):?>
                                <img src="<?=$pic['src']?>" alt="<?=$arItem['NAME']?>" class="hide-for-xlarge">
                                <img src="<?=$picBig['src']?>" alt="<?=$arItem['NAME']?>" class="show-for-xlarge">
                            <?else:?>
                                <img src="<?=$pic['src']?>" alt="<?=$arItem['NAME']?>">
                            <?endif;?>
                        <?if ($link):?>
                            </a>
                        <?endif;?>
                    </div>
                <?endif;
            endforeach;?>
        </div>
    </div>
<?endif;?>
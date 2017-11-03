<?php

class CNLSearchEventHandler
{
    function OnBeforeIndexHandler($arFields)
    {
        if (!CModule::IncludeModule("iblock")) {
            return $arFields;
        }
        if (!CModule::IncludeModule("catalog")) {
            return $arFields;
        }
        if ($arFields["MODULE_ID"] == "iblock") {
            $iblockIds = array();
            $artCodes = array();
            $artOffersCodes = array();
            if (is_array($arFields["SITE_ID"])) {
                foreach ($arFields["SITE_ID"] as $sId) {
                    $iblockId = COption::GetOptionString("bitlate.proshop", 'NL_CATALOG_ID', false, $sId);
                    if ($iblockId > 0) {
                        $iblockIds[] = $iblockId;
                    }
                    $artCode = COption::GetOptionString("bitlate.proshop", 'NL_CATALOG_ART_CODE', false, $sId);
                    if ($artCode != '') {
                        $artCodes[] = $artCode;
                    }
                    $artOffersCode = COption::GetOptionString("bitlate.proshop", 'NL_CATALOG_OFFERS_ART_CODE', false, $sId);
                    if ($artOffersCode != '') {
                        $artOffersCodes[] = "PROPERTY_" . $artOffersCode;
                    }
                }
            }
            $artCodes = array_unique($artCodes);
            $artOffersCodes = array_unique($artOffersCodes);
            if (in_array($arFields["PARAM2"], $iblockIds)) {
                if (count($artCodes) > 0) {
                    foreach ($artCodes as $artCode) {
                        $db_props = CIBlockElement::GetProperty(
                            $arFields["PARAM2"],
                            $arFields["ITEM_ID"],
                            array("sort" => "asc"),
                            Array("CODE" => $artCode)
                        );
                        if ($ar_props = $db_props->Fetch()) {
                            $arFields["TITLE"] .= " " . $ar_props["VALUE"];
                            break;
                        }
                    }
                }
                if (count($artOffersCodes) > 0) {
                    $resOffers = CCatalogSKU::getOffersList(
                        array($arFields["ITEM_ID"]),
                        $arFields["PARAM2"],
                        $skuFilter = array(),
                        $fields = $artOffersCodes,
                        $propertyFilter = array()
                    );
                    if (is_array($resOffers[$arFields["ITEM_ID"]]) && count($resOffers[$arFields["ITEM_ID"]]) > 0) {
                        
                        foreach($resOffers[$arFields["ITEM_ID"]] as $offer) {
                            foreach ($artOffersCodes as $artCode) {
                                if ($offer[$artCode . "_VALUE"] != '') {
                                    $arFields["TITLE"] .= " " . $offer[$artCode . "_VALUE"];
                                    $arFields["BODY"] .= " " . $offer[$artCode . "_VALUE"];
                                }
                            }
                        }
                    }
                }
            }
        }
        return $arFields;
    }
}
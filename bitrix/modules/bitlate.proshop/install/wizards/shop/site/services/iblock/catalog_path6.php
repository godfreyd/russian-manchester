<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)
    die();

if(!CModule::IncludeModule("iblock") || !CModule::IncludeModule("catalog"))
    return;

$replacePriceXML_ID = '';
$replacePriceNAME = '';
if (CBXFeatures::IsFeatureEnabled('CatMultiPrice')) {
    $iblockXMLFile = WIZARD_SERVICE_RELATIVE_PATH . "/xml/" . LANGUAGE_ID . "/catalog_path6.xml";
} else {
    $iblockXMLFile = WIZARD_SERVICE_RELATIVE_PATH . "/xml/" . LANGUAGE_ID . "/catalog_base_path6.xml";
    $arPrices = CCatalogGroup::GetListArray();
    if (is_array($arPrices)) {
        foreach($arPrices as $i => $arPrice) {
            $replacePriceXML_ID = $arPrice["XML_ID"];
            $replacePriceNAME = $arPrice["NAME"];
            break;
        }
    }
}

//$iblockCode = "NL_GOODS_" . WIZARD_SITE_ID;
$iblockCode = "NL_GOODS";
$iblockType = "catalog";

CWizardUtil::ReplaceMacros($_SERVER["DOCUMENT_ROOT"] . $iblockXMLFile, array("NL_GOODS" => $iblockCode));
if ($replacePriceXML_ID != '' && $replacePriceNAME != '') {
    CWizardUtil::ReplaceMacros($_SERVER["DOCUMENT_ROOT"] . $iblockXMLFile, array("NL_PRICE_XML_ID" => $replacePriceXML_ID));
    CWizardUtil::ReplaceMacros($_SERVER["DOCUMENT_ROOT"] . $iblockXMLFile, array("NL_PRICE_NAME" => $replacePriceNAME));
}

$IBLOCK_CATALOG_ID = false;
if ($_SESSION["WIZARD_CATALOG_IBLOCK_ID"])
{
	$IBLOCK_CATALOG_ID = $_SESSION["WIZARD_CATALOG_IBLOCK_ID"];
}

if($IBLOCK_CATALOG_ID > 0)
{
	$permissions = Array(
		"1" => "X",
		"2" => "R"
	);
	$dbGroup = CGroup::GetList($by = "", $order = "", Array("STRING_ID" => "sale_administrator"));
	if($arGroup = $dbGroup -> Fetch())
	{
		$permissions[$arGroup["ID"]] = 'W';
	}
	$dbGroup = CGroup::GetList($by = "", $order = "", Array("STRING_ID" => "content_editor"));
	if($arGroup = $dbGroup -> Fetch())
	{
		$permissions[$arGroup["ID"]] = 'W';
	}
	if ($_SESSION["WIZARD_MANUFACTURE_IBLOCK_CODE"])
	{
		$IBLOCK_MANUFACTURE_CODE = $_SESSION["WIZARD_MANUFACTURE_IBLOCK_CODE"];
	}
	CWizardUtil::ReplaceMacros($_SERVER["DOCUMENT_ROOT"] . $iblockXMLFile, array("NL_MANUFACTURE" => $IBLOCK_MANUFACTURE_CODE));
	
	$IBLOCK_CATALOG_ID_2 = WizardServices::ImportIBlockFromXML(
		$iblockXMLFile,
		$iblockCode,
		$iblockType,
		WIZARD_SITE_ID,
		$permissions
	);
	if ($IBLOCK_CATALOG_ID_2 != $IBLOCK_CATALOG_ID)
		return;
}
else
{
	return;
}
?>
<?if (isset($_REQUEST['load']) && $_REQUEST['load'] == 'Y') {
    require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");
} else {
    require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
    $APPLICATION->SetTitle("Каталог");
}
CModule::IncludeModule('bitlate.proshop');
$templateOptions = BitlateProUtils::initTemplateOptions();
$FILTER_VIEW_MODE = $templateOptions['filter_type'];?>
<?require($_SERVER["DOCUMENT_ROOT"] . SITE_TEMPLATE_PATH . "/include/" . SITE_ID ."/catalog.php");?>
<?if (isset($_REQUEST['load']) && $_REQUEST['load'] == 'Y') {
    require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/epilog_after.php");
} else {
    require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");
}?>
<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");

CModule::IncludeModule('bitlate.proshop');
$_POST = BitlateProUtils::prepareRequest($_POST);
$_REQUEST = BitlateProUtils::prepareRequest($_REQUEST);
$APPLICATION->IncludeComponent("bitrix:main.include", "",
	array(
		"AREA_FILE_SHOW" => "file",
		"PATH" => SITE_DIR."include/popup/confirmation.php"
	),
	false
);

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/epilog_after.php");
?> 
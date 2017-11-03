<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");

global $USER;
CModule::IncludeModule('bitlate.proshop');
$_POST = BitlateProUtils::prepareRequest($_POST);
$_REQUEST = BitlateProUtils::prepareRequest($_REQUEST);
if ($USER->IsAuthorized()) {
    $APPLICATION->IncludeComponent("bitrix:main.include", "",
        array(
            "AREA_FILE_SHOW" => "file",
            "PATH" => SITE_DIR . "include/popup/auth.php"
        ),
        false
    );
} else {
    $APPLICATION->IncludeComponent("bitrix:main.include", "",
        array(
            "AREA_FILE_SHOW" => "file",
            "PATH" => SITE_DIR . "include/popup/login.php"
        ),
        false
    );
}

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/epilog_after.php");
?> 
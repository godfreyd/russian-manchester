<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");

CModule::IncludeModule('bitlate.proshop');
$_POST = BitlateProUtils::prepareRequest($_POST);
$_REQUEST = BitlateProUtils::prepareRequest($_REQUEST);
$APPLICATION->IncludeFile(
    SITE_DIR . "include/popup/subscribe.php",
    Array(
        'TEMPLATE' => 'main',
        'SET_TITLE' => 'Y',
    )
);

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/epilog_after.php");
?> 
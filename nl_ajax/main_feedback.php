<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");

CModule::IncludeModule('bitlate.proshop');
$_POST = BitlateProUtils::prepareRequest($_POST);
$_REQUEST = BitlateProUtils::prepareRequest($_REQUEST);
$APPLICATION->IncludeComponent("bitrix:main.feedback", ".default", array(
        "USE_CAPTCHA" => "Y",
        "OK_TEXT" => "Спасибо, ваш вопрос принят.",
        "EMAIL_TO" => "Sergei-b84@bk.ru",
        "REQUIRED_FIELDS" => array(
            0 => "NAME",
            1 => "EMAIL",
            2 => "MESSAGE",
        ),
        "EVENT_MESSAGE_ID" => array(
        )
    ),
    false
);

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/epilog_after.php");
?>
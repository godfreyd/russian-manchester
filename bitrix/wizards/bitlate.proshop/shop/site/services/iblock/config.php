<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)
	die();

if(!CModule::IncludeModule("bitlate.proshop"))
	return;

BitlateProUtils::generateIncludeFile(WIZARD_SITE_ID, WIZARD_SITE_DIR, false);
?>
<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)
	die();

COption::SetOptionString("main", "theme_value", WIZARD_THEME_ID, false, WIZARD_SITE_ID);
COption::SetOptionString("bitlate.proshop", "NL_THEME_TYPE_VALUE", WIZARD_THEME_ID, false, WIZARD_SITE_ID);

if(!CModule::IncludeModule("bitlate.proshop"))
	return;

$themeList = BitlateProUtils::getThemeList();
$themeKey = array_search(WIZARD_THEME_ID, BitlateProUtils::getThemeParamsCode($themeList));
COption::SetOptionString("bitlate.proshop", "NL_THEME_COLOR_PRIMARY_VALUE", $themeList[$themeKey]['COLOR_1'], false, WIZARD_SITE_ID);
COption::SetOptionString("bitlate.proshop", "NL_THEME_COLOR_SECONDARY_VALUE", $themeList[$themeKey]['COLOR_2'], false, WIZARD_SITE_ID);
?>
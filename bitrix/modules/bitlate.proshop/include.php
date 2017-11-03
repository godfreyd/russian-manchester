<?
IncludeModuleLangFile(__FILE__);
CModule::AddAutoloadClasses(
	'bitlate.proshop',
	array (
		'BitlateProUtils' => 'classes/bitlate_proshop_utils.php',
		'CNLIBlockElementHandler' => 'classes/event_handlers/IBlockElementAddUpdateHandler.php',
		'CNLBlogCommentHandler' => 'classes/event_handlers/BlogCommentHandler.php',
		'CNLMainEventHandler' => 'classes/event_handlers/MainHandler.php',
		'CNLSearchEventHandler' => 'classes/event_handlers/SearchHandler.php',
	)
);
?>
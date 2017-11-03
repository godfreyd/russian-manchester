<?if ($templateOptions['header_version'] != 'v2'):?>
    <div class="inline-block-container">
    <svg class="icon">
        <use xlink:href="#svg-icon-phone"></use>
    </svg>
    <div class="inline-block-item">
<?endif;?>
        <div class="header-phone-number">
            <div class="inline-block">
                <?$APPLICATION->IncludeComponent(
                    "bitrix:main.include",
                    "",
                    Array(
                        "AREA_FILE_SHOW" => "file",
                        "AREA_FILE_SUFFIX" => "inc",
                        "PATH" => SITE_DIR . "include/phone.php"
                    )
                );?>
            </div>
        </div>
        <div class="header-phone-link"><a href="#request-callback" class="fancybox"><?=getMessage('REQUEST_CALL')?></a></div>
<?if ($templateOptions['header_version'] != 'v2'):?>
        </div>
    </div>
<?endif;?>
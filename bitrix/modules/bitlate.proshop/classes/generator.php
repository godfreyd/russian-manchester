<?php
include("Color.php");

use Mexitek\PHPColors\Color;

class SColor extends Mexitek\PHPColors\Color
{
    public function hex2rgba($opacity = false) {
        $color = $this->getHex();
        //Check if color has 6 or 3 characters and get values
        if (strlen($color) == 6) {
            $hex = array( $color[0] . $color[1], $color[2] . $color[3], $color[4] . $color[5] );
        } elseif ( strlen( $color ) == 3 ) {
            $hex = array( $color[0] . $color[0], $color[1] . $color[1], $color[2] . $color[2] );
        }
        //Convert hexadec to rgb
        $rgb =  array_map('hexdec', $hex);
        //Check if opacity is set(rgba or rgb)
        if($opacity){
            if(abs($opacity) > 1)
                $opacity = 1.0;
            $output = 'rgba('.implode(",",$rgb).','.$opacity.')';
        } else {
            $output = 'rgb('.implode(",",$rgb).')';
        }
        //Return rgb(a) color string
        return $output;
    }

    public function foreground($black = '000000', $white = 'ffffff') {
        return $this->isDark(false, 150) ? $white : $black;
    }
}

class BitlateGenerator {
    public $inputCssFile;
    public $outputCssFile;
    public $cssFile = 'main.css';
    
    public function setInputCssFile($path) {
        $this->inputCssFile = $path . $this->cssFile;
    }
    public function setOutputCssFile($path) {
        $this->outputCssFile = $path . $this->cssFile;
    }
    
    public function generateCss($primaryColor, $secondaryColor) {
        $primaryColorSass = new SColor($primaryColor);
        $secondaryColorSass = new SColor($secondaryColor);
        
        $searchColors = array(
            'primary-color'              => '#006dd2',
            'secondary-color'            => '#fb3d17',
            'primary-color-hover'        => '#0687ff',
            'secondary-color-hover'      => '#fc6749',
            'primary-color-l-30'         => '#6cb8ff',
            'primary-border-color'       => '#00539f',
            'primary-color-foreground'   => '#feffef',
            'secondary-color-foreground' => '#efeefe',
            'secondary-color-99'         => 'rgba(251, 61, 23, 0.99)',
            'path'                       => '../',
        );
        $replaceColors = array(
            'primary-color'              => $primaryColor,
            'secondary-color'            => $secondaryColor,
            'primary-color-hover'        => "#" . $primaryColorSass->lighten(10),
            'secondary-color-hover'      => "#" . $secondaryColorSass->lighten(10),
            'primary-color-l-30'         => "#" . $primaryColorSass->lighten(30),
            'primary-border-color'       => "#" . $primaryColorSass->darken(10),
            'primary-color-foreground'   => "#" . $primaryColorSass->foreground(),
            'secondary-color-foreground' => "#" . $secondaryColorSass->foreground(),
            'secondary-color-99'         => $secondaryColorSass->hex2rgba(0.99),
            'path'                       => '../../',
        );
        $getContent = file_get_contents($this->inputCssFile);
        $putContent = str_replace($searchColors, $replaceColors, $getContent);
        file_put_contents($this->outputCssFile, $putContent);
        return true;
    }
}
; /* /bitrix/js/currency/core_currency.min.js?15088526941528*/

; /* Start:"a:4:{s:4:"full";s:55:"/bitrix/js/currency/core_currency.min.js?15088526941528";s:6:"source";s:36:"/bitrix/js/currency/core_currency.js";s:3:"min";s:40:"/bitrix/js/currency/core_currency.min.js";s:3:"map";s:40:"/bitrix/js/currency/core_currency.map.js";}"*/
(function(r){BX.namespace("BX.Currency");if(BX.Currency.defaultFormat){return}BX.mergeEx(BX.Currency,{currencyList:[],defaultFormat:{FORMAT_STRING:"#",DEC_POINT:".",THOUSANDS_SEP:" ",DECIMALS:2,HIDE_ZERO:"N"},setCurrencyFormat:function(r,e,t){var n=this.getCurrencyIndex(r),c=BX.clone(this.defaultFormat,true),i;t=!!t;if(n>-1&&!t){return}if(n===-1){n=this.currencyList.length}for(i in c){if(c.hasOwnProperty(i)&&typeof e[i]!=="undefined"){c[i]=e[i]}}this.currencyList[n]={currency:r,format:BX.clone(c,true)}},setCurrencies:function(r,e){var t;if(!!r&&BX.type.isArray(r)){for(t=0;t<r.length;t++){if(!!r[t].CURRENCY&&!!r[t].FORMAT){this.setCurrencyFormat(r[t].CURRENCY,r[t].FORMAT,e)}}}},getCurrencyFormat:function(r){var e=this.getCurrencyIndex(r);return e>-1?this.currencyList[e].format:false},getCurrencyIndex:function(r){var e,t=-1;if(this.currencyList.length===0){return t}for(e=0;e<this.currencyList.length;e++){if(this.currencyList[e].currency===r){t=e;break}}return t},clearCurrency:function(r){var e=this.getCurrencyIndex(r);if(e>-1)this.currencyList=BX.util.deleteFromArray(this.currencyList,e)},clean:function(){this.currencyList=[]},currencyFormat:function(r,e,t){var n="",c;t=!!t;c=this.getCurrencyFormat(e);if(!!c&&typeof c==="object"){c.CURRENT_DECIMALS=c.DECIMALS;if(c.HIDE_ZERO==="Y"&&r==parseInt(r,10))c.CURRENT_DECIMALS=0;n=BX.util.number_format(r,c.CURRENT_DECIMALS,c.DEC_POINT,c.THOUSANDS_SEP);if(t)n=c.FORMAT_STRING.replace(/(^|[^&])#/,"$1"+n)}return n}})})(window);
/* End */
;
//# sourceMappingURL=kernel_currency.map.js
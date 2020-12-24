this.myCssElement = function (ele) {
	this.element = ele;//boxA

	this.cssStyle = function () {
		return getStyleElement(ele);
	}

	this.outerWidth = function (){
		var cssBoxA = getStyleElement(ele);
		var vOuterWidth = parseInt(cssBoxA.borderLeftWidth) + parseInt(cssBoxA.paddingLeft) + parseInt(cssBoxA.width) + parseInt(cssBoxA.paddingRight) + parseInt(cssBoxA.borderRightWidth);
		return vOuterWidth;
	}

	this.outerHeight = function () {
		var cssBoxA = getStyleElement(ele);
		var vOuterHeight  = parseInt(cssBoxA.borderTopWidth) + parseInt(cssBoxA.paddingTop) + parseInt(cssBoxA.height) + parseInt(cssBoxA.paddingBottom) + parseInt(cssBoxA.borderBottomWidth);
		return vOuterHeight;
	}

	this.innerWidth = function () {
		var cssBoxA = getStyleElement(ele);
		var innerWidth = parseInt(cssBoxA.paddingLeft) + parseInt(cssBoxA.width) + parseInt(cssBoxA.paddingRight); 
		return innerWidth;
	}

	this.innerHeight = function () {
		var cssBoxA = getStyleElement(ele);
		var innerHeigth = parseInt(cssBoxA.paddingTop) + parseInt(cssBoxA.height) + parseInt(cssBoxA.paddingBottom);
		return innerHeigth;
	}

		function getStyleElement(ele){
			var getStyle;
			if(ele.currentStyle){
				var getStyle = ele.currentStyle;//ie
			} else {
				var getStyle = window.getComputedStyle(ele,null);
			}
			return getStyle;
		}	
}
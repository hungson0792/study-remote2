function getElementsByClassName(parentNode,targetClass){
			var rednode = [];			
			var elemts = parentNode.getElementsByTagName("*");
			if(elemts.length > 0){
				var myClass = new RegExp("\\b" + targetClass +"\\b");
				for(var i = 0; i<elemts.length;i++){
					//console.log(elemts.item(i).className);
					var classes = elemts.item(i).className;
					if(myClass.test(classes) == 1){
						rednode.push(elemts.item(i));
					}
				}
			}
			return rednode;
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
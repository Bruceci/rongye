navHoverTop = function() {
	var lis = document.getElementById("top_menu");
        if (lis) {
            lis = lis.getElementsByTagName("LI");
            for (var i=0, len=lis.length; i<len; i++) {
                    lis[i].onmouseover=function() {
                            this.className+=" iehover";
                    }
                    lis[i].onmouseout=function() {
                            this.className=this.className.replace(new RegExp(" iehover\\b"), "");
                    }
            }
        }
}
if (window.attachEvent) { window.attachEvent("onload", navHoverTop); }

navHoverLeft = function() {
	var lis = document.getElementById("fc_submenu_column");
        if (lis ) {
            lis = lis.getElementsByTagName("LI");
            for (var i=0, len=lis.length; i<len; i++) {
                    lis[i].onmouseover=function() {
                            this.className+=" iehover";
                    }
                    lis[i].onmouseout=function() {
                            this.className=this.className.replace(new RegExp(" iehover\\b"), "");
                    }
            }
        }
}
if (window.attachEvent) { window.attachEvent("onload", navHoverLeft); }


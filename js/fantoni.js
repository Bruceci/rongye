function openImageWin(ctx, imagePath)
{
    win = window.open(ctx + '/ShowImage.html?imgsrc=' + imagePath, 'imageWin', 'status=no,menubar=no,width=100,height=100,resizable=yes,scrollbars=yes');
}

function getHttpRequest()
{
    var httpReq;
    if (window.XMLHttpRequest) { 
        httpReq = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        httpReq = new ActiveXObject("Microsoft.XMLHTTP"); //IE/Windows ActiveX
    }
    return httpReq;
}

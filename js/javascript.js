var contextPath = '';
/* ###################################
### i18n.js
################################### */

/* ###################################
### Message Class
################################### */

var MGNL_I18N_DEFAULT_BASENAME = "info.magnolia.module.admininterface.messages";

/* ###################################
### Constructor
################################### */

function MgnlI18nMessages(){
    this.messages = new Object();
}

/* ###################################
### Add a message. Basename is optional
################################### */

MgnlI18nMessages.prototype.add = function (key, msg, basename){
    if(basename==null){
        basename = MGNL_I18N_DEFAULT_BASENAME;
    }
    
    if(this.messages[basename] == null){
        this.messages[basename] = new Object();
    }
    
    this.messages[basename][key]=msg;
}


/* ###################################
### Get a Message. Basename is optional
################################### */

MgnlI18nMessages.prototype.get = function (key, basename, args){
    var msg;
    
    // basename is optional
    if(basename == null)
        basename = MGNL_I18N_DEFAULT_BASENAME;
        
    // return ??? key ??? if you can't find the mesage
    if(this.messages[basename] == null || this.messages[basename][key] == null){
        return "???" + key + "???";
    }
    
    msg = this.messages[basename][key];
    
    // replace parameters
    if(args != null){
        for(i=0; i<args.length;i++){
            msg = msg.replace("{" + i +"}", args[i]);
        }
    }
    return msg;
}

var mgnlMessages = new MgnlI18nMessages();
/* ###################################
### Generated AbstractMessagesImpl
################################### */

mgnlMessages.add('inline.delete.text.js','The selected paragraph will be deleted immediately.\n\nAre you sure to continue?','info.magnolia.module.admininterface.messages');
mgnlMessages.add('dialog.calendar.sun.js','Sun','info.magnolia.module.admininterface.messages');
mgnlMessages.add('dialog.calendar.month1.js','January','info.magnolia.module.admininterface.messages');
mgnlMessages.add('tree.deletenode.confirm.text.js','The node\n{0}\nwill be deleted immediately.\n\nAre you sure to continue?','info.magnolia.module.admininterface.messages');
mgnlMessages.add('dialog.calendar.fri.js','Fri','info.magnolia.module.admininterface.messages');
mgnlMessages.add('tree.savenode.confirmDeactivation.text.js','Save will de-activate the node.\nContinue?','info.magnolia.module.admininterface.messages');
mgnlMessages.add('dialog.calendar.datecheck.datetime.js','Date must be of format\nyyyy-MM-dd\'T\'HH:mm:ss\n\nexample:\n2004-06-14T09:28:00','info.magnolia.module.admininterface.messages');
mgnlMessages.add('dialog.calendar.mon.js','Mon','info.magnolia.module.admininterface.messages');
mgnlMessages.add('dialog.richedit.pastehelp.js','Text copied in some applications (e.g. Word, Excel) contains additional information which might mess up your web content.\n\n Pasting text by Ctrl-V would insert this additional information.','info.magnolia.module.admininterface.messages');
mgnlMessages.add('tree.movenode.confirm.text.js','The node\n{0}\nwill be de-activated immediately.\n\nAre you sure to continue?','info.magnolia.module.admininterface.messages');
mgnlMessages.add('dialog.calendar.sat.js','Sat','info.magnolia.module.admininterface.messages');
mgnlMessages.add('import.button.close.js','Close','info.magnolia.module.admininterface.messages');
mgnlMessages.add('tree.movenode.confirm.title.js','Move node?','info.magnolia.module.admininterface.messages');
mgnlMessages.add('dialog.calendar.month10.js','October','info.magnolia.module.admininterface.messages');
mgnlMessages.add('dialog.calendar.thu.js','Thu','info.magnolia.module.admininterface.messages');
mgnlMessages.add('import.button.js','Import','info.magnolia.module.admininterface.messages');
mgnlMessages.add('dialog.richedit.nopaste.js','Your browser does not support clean paste','info.magnolia.module.admininterface.messages');
mgnlMessages.add('dialog.calendar.month2.js','February','info.magnolia.module.admininterface.messages');
mgnlMessages.add('tree.pastenode.itself.js','It\'s not possible to move a node into itself.','info.magnolia.module.admininterface.messages');
mgnlMessages.add('tree.deletenode.confirm.deactivation.text.js','The node\n{0}\nwill be DE-ACTIVATED and deleted immediately.\n\nAre you sure to continue?','info.magnolia.module.admininterface.messages');
mgnlMessages.add('dialog.calendar.month9.js','September','info.magnolia.module.admininterface.messages');
mgnlMessages.add('dialog.calendar.wed.js','Wed','info.magnolia.module.admininterface.messages');
mgnlMessages.add('tree.exportnode.confirm.text.js','Are you sure you want to continue?','info.magnolia.module.admininterface.messages');
mgnlMessages.add('dialog.calendar.month7.js','July','info.magnolia.module.admininterface.messages');
mgnlMessages.add('dialog.calendar.month8.js','August','info.magnolia.module.admininterface.messages');
mgnlMessages.add('inline.move.aboveThisOne.js','Move the paragraph selected above this one','info.magnolia.module.admininterface.messages');
mgnlMessages.add('inline.delete.title.js','Delete paragraph?','info.magnolia.module.admininterface.messages');
mgnlMessages.add('dialog.calendar.month5.js','May','info.magnolia.module.admininterface.messages');
mgnlMessages.add('tree.exportnode.confirm.title.js','Exporting {0} to xml.','info.magnolia.module.admininterface.messages');
mgnlMessages.add('tree.deletenode.confirm.title.js','Delete node?','info.magnolia.module.admininterface.messages');
mgnlMessages.add('dialog.calendar.datecheck.date.js','Date must be of format\nyyyy-MM-dd\n\nexample:\n2004-06-14','info.magnolia.module.admininterface.messages');
mgnlMessages.add('tree.loading.js','Loading...','info.magnolia.module.admininterface.messages');
mgnlMessages.add('dialog.calendar.month11.js','November','info.magnolia.module.admininterface.messages');
mgnlMessages.add('tree.saving.js','Saving...','info.magnolia.module.admininterface.messages');
mgnlMessages.add('tree.savenode.confirmDeactivation.title.js','De-activation warning','info.magnolia.module.admininterface.messages');
mgnlMessages.add('dialog.acl.choose.js','Please choose a role','info.magnolia.module.admininterface.messages');
mgnlMessages.add('dialog.calendar.month4.js','April','info.magnolia.module.admininterface.messages');
mgnlMessages.add('dialog.password.failed.js','Password verification failed!','info.magnolia.module.admininterface.messages');
mgnlMessages.add('dialog.calendar.month3.js','March','info.magnolia.module.admininterface.messages');
mgnlMessages.add('dialog.verifyname.illegalCharacter.js','Illegal characters in name!','info.magnolia.module.admininterface.messages');
mgnlMessages.add('dialog.calendar.tue.js','Tue','info.magnolia.module.admininterface.messages');
mgnlMessages.add('dialog.calendar.month12.js','December','info.magnolia.module.admininterface.messages');
mgnlMessages.add('dialog.calendar.month6.js','June','info.magnolia.module.admininterface.messages');

// this is the main switch
var mgnlDebugOn = false;

// set the contextes which you want to debug
var mgnlDebugContextes = {
    tree: true,
    dialog: true,
    acl: true,
    debug: true
}

function mgnlRootWindow(current){
    if(current.top != current)
        return mgnlRootWindow(current.top);
    if(current.opener != null)
        return mgnlRootWindow(current.opener);
    return current;
}

function mgnlDebug(msg, context, o, level){
    if(!mgnlDebugOn)
        return;
    if(!level)
        level = 1;
        
    // is the context in debug mode?
    if(context != null && (mgnlDebugContextes[context] == null || !mgnlDebugContextes[context]))
        return;
        
    var console = mgnlRootWindow(window).mgnlDebugConsole;
    var doc = null;
    // create new window if not allready done
    if(console == null){
        console = window.open('','mgnlDebugConsole');
        mgnlRootWindow(window).mgnlDebugConsole = console;
        doc = console.document;
        doc.write('<input type="button" value="Clear" onclick="document.getElementById(\'consoleDiv\').innerHTML=\'\';" > <p>');
        doc.write('<div id="consoleDiv" style="font-family: sans-serif; font-size: 10pt">');
        doc.write('</div>');
        doc.close();
    }
    else{
        doc = console.document;
    }
    
    if(doc == null)
        return;
    
    // get the div to write in
    var div = doc.getElementById('consoleDiv');
    
    if(o){
        msg += ":" + mgnlDebugObject(o, level, "");
    }
    
    if(context != null)
        msg = context + ": " + msg;
    div.innerHTML += msg + "<br>";
}

function mgnlDebugObject(o, level, spaces){
    var res = "";
    switch(typeof o){
    
        case "object":
            if(level<=0)
                return "object";
            res = "<br>" + spaces + "{<br>";
            for(var key in o){
                if(!res.match(/\{<br>$/))
                    res += ",<br>";
                res += spaces + "&nbsp;&nbsp;&nbsp;" + key + ":";
                res += mgnlDebugObject(o[key], level-1, spaces + "&nbsp;&nbsp;&nbsp;"); 
            }
            res += "<br>" + spaces + "}";
            break;
        case "function":
            return "function"
            break;
        
        default:
            return o;
    }
    return res;
}
/* ###################################
### generic.js
### generic, magnolia independant methods
################################### */

/**
 * Simple shortcut for document.getElementById()
 */
if (typeof $ != 'function') {
    function $(element)
    {
        return document.getElementById(element);
    }
}

/**
 * get position of an object
 */
function mgnlGetPosX(obj)
    {
    if (!obj) return 0;

    if (navigator.appName.indexOf("Microsoft")==-1)
        {
        if (navigator.vendor!=("Netscape6") && navigator.product!=("Gecko")) return obj.x; //ns4
        else //ns6; don't laugh...
            {
            for (var elem in obj)
                {
                var tmp=obj[elem];
                }
            return obj.offsetLeft;
            }
        }
    var x=document.body.scrollLeft;
    while (obj.offsetParent)
        {
        x+=obj.offsetLeft;
        obj=obj.offsetParent;
        }
    return x; //ie
    }


function mgnlGetPosY(obj)
    {
    if (!obj) return 0;

    return obj.offsetTop;
    if (navigator.appName.indexOf("Microsoft")==-1)
        {
        if (navigator.vendor!=("Netscape6") && navigator.product!=("Gecko")) return obj.y; //ns4
        else //ns6; don't laugh...
            {
            for (var elem in obj)
                {
                var tmp=obj[elem];
                }
            return obj.offsetTop;
            }
        }
    var y=document.body.scrollTop;
    while (obj.offsetParent)
        {
        y+=obj.offsetLeft;
        obj=obj.offsetParent;
        }
    return y; //ie
    }


function mgnlGetMousePos(event)
    {
    var pos=new Object();
    if (document.all)
        {
        pos.x=window.event.clientX+document.body.scrollLeft;
        pos.y=window.event.clientY+document.body.scrollTop;
        }
    else
        {
        pos.x=event.pageX;
        pos.y=event.pageY;
        }
    return pos;
    }


/* ###################################
### miscellaneous
################################### */


function mgnlIsKeyEnter(event){
    return mgnlIsKey(event,13);
}

function mgnlIsKeyEscape(event){
    return mgnlIsKey(event,27);
}

function mgnlIsKey(event,keyCode){
    if (window.event && window.event.keyCode == keyCode)
        return true;
    else if
        (navigator.appName=="Netscape" && event.which==keyCode) return true;
    else
        return false;
}

function mgnlGetWindowSize() {
    return mgnl.util.DHTMLUtil.getWindowSize();
}


function mgnlGetIFrameDocument(iFrameName)
    {
    if (document.frames && document.frames[iFrameName]) return document.frames[iFrameName].document;
    else if (document.getElementById(iFrameName)) return document.getElementById(iFrameName).contentDocument;
    else return null;
    }

function mgnlGetCacheKiller() {
    var now = new Date();
    return now.getTime();
}



/* ###################################
### add/remove parameter to query string
################################### */

function mgnlAddParameter(href, name, value)
{
    var anchorSplit = href.split("#");
    var anchor = (anchorSplit.length == 2) ? "#"+anchorSplit[1] : "";
    href=anchorSplit[0];

    var delimiter;
    if (href.indexOf("?") == -1)
        delimiter = "?";
    else
        delimiter = "&";

    return href + delimiter + name + "=" + value + anchor;
}


function mgnlRemoveParameter(href, name)
    {
    var anchorSplit = href.split("#");
    var anchor = (anchorSplit.length == 2) ? "#"+anchorSplit[1] : "";

    href=anchorSplit[0];
    var tmp=href.split("?");

    var newHref=tmp[0];
    var query= new Array();
    if (tmp[1]) {
        var paramObj=tmp[1].split("&");

        for (var i=0;i<paramObj.length;i++) {
            if (paramObj[i].indexOf(name+"=")!=0) {
                    query.push(paramObj[i]);
            }
        }
    }

    if(query.length > 0) {
        newHref += "?";

        for(var i=0; i < query.length; i++) {
            newHref += query[i];

            if(i + 1 < query.length) {
                newHref += "&";
            }
        }
    }

    return newHref + anchor;
}

/* ###################################
### general.js
### some general magnolia methods (used all over magnolia)
################################### */

var mgnlSort=false; //true as long as a page is selected


var mgnlControlSets=new Object();
//dialog: will be extended by each tab

var mgnlTreeControls=new Object();
//will be extended by each tree

var mgnlMove=false;
//inline editing: true as long as a paragraph is selected for moving





/* ###################################
### mouse events
################################### */

var xMousePos = 0; //used in site admin (place layers)
var yMousePos = 0;

function initMouseEvents()
    {
    document.onmousemove=getMousePos;
    document.onmousedown=mgnlResetDown;
    document.onmouseup=mgnlResetUp;
    }

initMouseEvents();

var mgnlDragTreeColumn_Tree;
var mgnlDragTreeColumn=false;

var mgnlTreeMoveNode_Tree;
var mgnlTreeMoveNode=false;

function getMousePos(evt)
    {
    var x,y;
    if (document.all)
        {
        x=window.event.clientX+document.body.scrollLeft;
        y=window.event.clientY+document.body.scrollTop;
        }
    else
        {
        x=evt.pageX;
        y=evt.pageY;
        }
    xMousePos = x;
    yMousePos = y;


    // moving content paragraphs
    if (mgnlMove)
        {
        var divShadow=document.getElementById('mgnlMoveDivShadow');

        divShadow.style.left=(x+15) + "px";
        divShadow.style.top=(y-20) + "px";


        var divDenied=document.getElementById('mgnlMoveDivDenied');
        divDenied.style.left=(x+5) + "px";
        divDenied.style.top=(y-15) + "px";

        var divAllowed=document.getElementById('mgnlMoveDivAllowed');
        divAllowed.style.left=(x+20) + "px";
        divAllowed.style.top=(y-19) + "px";
        }

    // sorting pages in site admin
    // outdated; old admin
    if (mgnlSort)
        {
        var divShadow=document.getElementById('mgnlSortDivShadow');
        divShadow.style.left=(x+5) + "px";
        divShadow.style.top=(y-20) + "px";

        var divDenied=document.getElementById('mgnlSortDivDenied');
        divDenied.style.left=(x+5) + "px";
        divDenied.style.top=(y-15) + "px";
        }

    // move/copy pages in tree
    if (mgnlTreeMoveNode)
        {
        mgnlTreeMoveNode_Tree.moveNode(x,y);
        }

    // resize tree columns
    if (mgnlDragTreeColumn)
        {
        mgnlDragTreeColumn_Tree.dragColumn(x,y);
        }
    }

function mgnlResetDown()
    {
    if (mgnlMove)
        {
        var editBarTable=document.getElementById(mgnlMoveNodeCollection+'__'+mgnlMoveNode);
        mgnlMoveNodeSetClassName(editBarTable,"NORMAL");

        var divShadow=document.getElementById('mgnlMoveDivShadow');
        divShadow.style.visibility='hidden';
        divShadow.style.left=-50 + "px";;
        divShadow.style.top=-50 + "px";

        var divDenied=document.getElementById('mgnlMoveDivDenied');
        divDenied.style.visibility='hidden';
        divDenied.style.left=-50 + "px";
        divDenied.style.top=-50 + "px";

        var divAllowed=document.getElementById('mgnlMoveDivAllowed');
        divAllowed.style.visibility='hidden';
        divAllowed.style.left=-50 + "px";
        divAllowed.style.top=-50 + "px";

        mgnlMove=false;

        //trick! otherwise, by clicking a cont. of a different list, this one would be selected directly. now, the already selected will just be disabled
        mgnlMoveDont=true;
        setTimeout("mgnlMoveDont=false;",500);
        }

    if (mgnlSort)
        {
        if (!mgnlSortSubmit)
            {
            var trSelected=document.getElementById('sadminTr'+mgnlSortPageId);
            trSelected.style.backgroundColor='';
            }

        var divShadow=document.getElementById('mgnlSortDivShadow');
        divShadow.style.visibility='hidden';
        divShadow.style.left=-50 + "px";
        divShadow.style.top=-50 + "px";

        var divDenied=document.getElementById('mgnlSortDivDenied');
        divDenied.style.visibility='hidden';
        divDenied.style.left=-50 + "px";
        divDenied.style.top=-50 + "px";

        mgnlSort=false;
        }
    }


function mgnlResetUp(evt)
    {
    if (mgnlDragTreeColumn)
        {
        mgnlDragTreeColumn_Tree.dragColumnStop(evt);
        }
    }


/* ###################################
### open window
################################### */


function mgnlOpenWindow(url,width,height)
    {

    //dialog window is resized in  dialog itself (window.resize)
    if (!width) width=800;
    if (!height) height=100;

    if(url.charAt(0)!= "/"){
        url = "/" + url;
    }
    url = contextPath + url;

    if(url.indexOf('?')>=0){
        url+="&";
    }
    else{
        url+="?";
    }
    url+="mgnlCK="+mgnlGetCacheKiller();

    var w=window.open(url,"mgnlDialog"+mgnlGetCacheKiller(),"width="+width+",height="+height+",scrollbars=no,status=yes,resizable=yes");
    if (w) w.focus();
    }


/* ###################################
### open dialog window
################################### */
function mgnlOpenDialog(path,nodeCollection,node,paragraph,repository,dialogPage,width,height)
    {

    //dialog window is resized in  dialog itself (window.resize)
    if (!width) width=800;
    if (!height) height=100;

    //magnolia edit window: add browser information (needed for rich editor)
    var agent=navigator.userAgent.toLowerCase();

    var richE="false";
    var richEPaste="";
    var richESupported=false;
    if (document.designMode)
        {
        //safari has designMode...
        if (agent.indexOf("safari")==-1) richESupported=true;
        }
    if (richESupported)
        {
        //richedit
        richE="true";
        if (agent.indexOf("mac")!=-1) richEPaste="false";
        else if (agent.indexOf("msie")!=-1)  richEPaste="button";
        else richEPaste="textarea";
        }

    if (!dialogPage){
        dialogPage = ".magnolia/dialogs/" + paragraph + ".html";
    }


    var url=contextPath;
    url+="/"+ dialogPage;
    if(path){
        url = mgnl.util.URLUtil.addParameter(url,"mgnlPath", path);
    }
    if (nodeCollection) {
        url = mgnl.util.URLUtil.addParameter(url,"mgnlNodeCollection", nodeCollection);
    }
    if (node) {
        url = mgnl.util.URLUtil.addParameter(url,"mgnlNode", node);
    }
    if (paragraph) {
        url = mgnl.util.URLUtil.addParameter(url,"mgnlParagraph", paragraph);
    }
    if(repository){
        url = mgnl.util.URLUtil.addParameter(url,"mgnlRepository", repository);
    }
    url = mgnl.util.URLUtil.addParameter(url,"mgnlRichE", richE);
    url = mgnl.util.URLUtil.addParameter(url,"mgnlRichEPaste", richEPaste);

    url = mgnl.util.URLUtil.addParameter(url,"mgnlCK", mgnlGetCacheKiller());

    var w=window.open(url,"mgnlDialog"+mgnlGetCacheKiller(),"width="+width+",height="+height+"scrollbars=no,status=yes,resizable=yes");
    if (w) w.focus();
}


/* ###################################
### open tree browser
################################### */

function mgnlOpenTreeBrowser(pathSelected, pathOpen, repository, width, height, callBackCommand){
    mgnlDebug("mgnlOpenTreeBrowser","dialog");
    if (!width) width=450;
    if (!height) height=550;
    var src =  contextPath + "/.magnolia/pages/linkBrowser.html?mgnlCK="+mgnlGetCacheKiller();
    if (pathSelected) src+="&pathSelected="+pathSelected;
    if (pathOpen) src+="&pathOpen="+pathOpen;
    if (repository) src+="&repository="+repository;
    var w=window.open(src,"mgnlTreeBrowser","width="+width+",height="+height+",resizable=yes,status=yes,scrollbars=no");

    mgnlDebug("register call back function", "dialog");
    // we can't set this on the opened window since this is lost in safari
    window.mgnlCallBackCommand = callBackCommand;
}

function mgnlOpenTreeBrowserWithControl(control,repository,pathSelected,pathOpen,extension,width,height,addcontext){
    pathSelected = pathSelected?pathSelected:control.value;
    pathOpen = pathOpen?pathOpen:control.value;
    mgnlDebug("mgnlOpenTreeBrowserWithControl","dialog");
    var callBackCommand = new MgnlTreeBrowserWithControlCallBackCommand(control,extension,addcontext);
    mgnlOpenTreeBrowser(pathSelected, pathOpen, repository, width, height, callBackCommand)
}

/* ###################################
### tree browser default callback
################################### */

function MgnlTreeBrowserWithControlCallBackCommand(control, extension, addcontext){
    this.control = control;
    this.extension = extension;
    this.addcontext = addcontext;

    this.callback = function(value){
        if (this.addcontext){
          value = contextPath + value;
        }

        if (this.extension){
            value += "." + extension;
        }

        mgnlDebug("MgnlTreeBrowserCallBackCommand: write to the control", "dialog");
        this.control.value = value;
    }
}



/* ###################################
### open adminCentral
################################### */

function mgnlOpenAdminCentral(path,repository)
    {
    var src="";
    src+="${pageContext.request.contextPath}/.magnolia/adminCentral.html?mgnlCK="+mgnlGetCacheKiller();
    src+="&pathSelected="+path;
    if (repository) src+="&repository="+repository;
    var w=window.open(src,"mgnlAdminCentral","");
    if (w) w.focus();
    }






/* ###################################
### update mgnlCK in the extisting location string
################################### */

function mgnlUpdateCK(href)
    {
    if (!href)
       href=document.location.href;

    href = mgnlRemoveParameter(href, 'mgnlCK');
    href = mgnlAddParameter(href, 'mgnlCK', new Date().getTime());
    return href;
    }


/* ###################################
### alert
################################### */
function mgnlAlert(text,title)
    {
    var line="--------------------------------------------\n";
    var alertText="";
    alertText+=line;
    if (title) alertText+=title+"\n"+line;
    alertText+="\n"+text+"\n";
    alertText+=line;
    alert(alertText);
    }

/* ###################################
### confirm
################################### */
function mgnlConfirm(text,title)
    {
    var line="--------------------------------------------\n";
    var alertText="";
    alertText+=line;
    if (title) alertText+=title+"\n"+line;
    alertText+="\n"+text+"\n";
    alertText+=line;
    return confirm(alertText);
    }


function eventHandlerOnResize(e)
    {
    //resize tabs before resize of trees (in case there are any trees on a tab)
    mgnlDialogResizeTabs();
    mgnlDialogLinkBrowserResize();
    mgnlTreeResize();
    }

/* ###################################
### controls.js
################################### */

var mgnlControlButtonBorderDark="#396101";
var mgnlControlButtonBorderLight="#ADC97B";
var mgnlControlButtonPUSHED="_PUSHED";

function mgnlShiftDividedButton(id)
    {
    var button=document.getElementById(id);
    if (button)
        {
        var state;
        if (button.type=="checkbox") state=!button.checked;
        else state=true;
        button.checked=state;
        }
    }

function mgnlShiftPushButtonDown(button)
    {
    if (button.className.indexOf(mgnlControlButtonPUSHED)==-1)
        {
        button.style.borderTopColor=mgnlControlButtonBorderDark;
        button.style.borderLeftColor=mgnlControlButtonBorderDark;
        button.style.borderBottomColor=mgnlControlButtonBorderLight;
        button.style.borderRightColor=mgnlControlButtonBorderLight;
        }
    }

function mgnlShiftPushButtonOut(button)
    {
    button.style.borderTopColor="";
    button.style.borderLeftColor="";
    button.style.borderBottomColor="";
    button.style.borderRightColor="";
    }

function mgnlShiftPushButtonClick(button)
    {
    if (button.id.indexOf("_SETBUTTON_")!=-1)
        {
        //is part of a button set (radio, e.g. tab buttons) -> disable all other buttons
        var baseId=button.id.substring(0,button.id.lastIndexOf("_"));
        var i=0;
        var className=button.className;
        if (className.indexOf(mgnlControlButtonPUSHED)==-1)
            {
            while (document.getElementById(baseId+"_"+i))
                {
                var currentButton=document.getElementById(baseId+"_"+i)
                currentButton.className=className;
                i++;
                }
            button.className=className+mgnlControlButtonPUSHED;
            }
        }
    mgnlShiftPushButtonOut(button); //get rid of hilighted borders
    }


/* ###################################
### tree.js
################################### */

    var globalCounter=0; //for debugging

    //#################
    //### Tree
    //### repository: the repository name
    //### name: the name of the javascript tree
    //### handlerName: the name of the tree handler
    //### browseMode: true if the tree is showed in the link browser.
    //### functionBarName: the name of the functionBar javascript object (needs call to refresh on selectNode)
    //#################

    function mgnlTree(repository, path, name, height, handlerName, browseMode, functionBarName) {
        if(handlerName == null){
            handlerName = repository;
        }

        if(browseMode == null){
            browseMode = false;
        }

        this.repository=repository;
        this.path=path;
        this.name=name;
        this.handlerName = handlerName;
        this.browseMode = browseMode;
        this.functionBarName = functionBarName;
        mgnlDebug("new mgnlTree", "tree", this);

        document.write('<div id="'+name+'_'+path+'_DivSub" style="display:none;"></div>');
        this.divMain=document.getElementById(name+"_"+path+"_DivMain");
        // this is setted afterward because a cyclic dependency for the conditions
        this.menu = null;

        this.addressBar=document.getElementById(name+"AddressBar");
        this.divMoveShadow=document.getElementById(name+"_MoveShadow");
        this.divMoveDenied=document.getElementById(name+"_MoveDenied");


        this.nodes=new Object();
        this.selectedNode=this.getNode(path);

        this.clipboardNode=null;
        this.clipboardMethod=null;

        this.lastEditedHtmlObject;
        this.lastEditedOriginalValue="";
        this.lastEditedNode;
        this.lastEditedName="";
        this.lastEditedIsMeta=false;
        this.lastEditedIsLabel=false;
        this.lastEditedIsNodeDataValue=false;
        this.lastEditedIsNodeDataType=false;

        this.columns=new Array();

        //this.columnResizerDiv=document.getElementById(name+"_ColumnResizerDiv");
        this.columnResizerLine=document.getElementById(name+"_ColumnResizerLine");
        this.columnHeaderDiv=document.getElementById(name+"_ColumnHeader");

        this.height=height;

        this.paddingLeft=0;
        this.paddingRight=0;
        this.paddingTop=0;
        this.paddingBottom=0;
        this.columnResizerGifWidthHalf=4;
        this.columnResizerGifWidth=9;
        this.columnSpacing=8;
        this.columnMinimumWidth=20;

        this.colors=new Object();
        this.colors.nodeHighlight="#EDF2FA";

        this.colors.nodeSelected="#D1E1ED";

        this.strings=new Object();
        this.strings.saving=mgnlMessages.get('tree.saving.js');
        this.strings.loading=mgnlMessages.get('tree.loading.js');
        this.strings.empty="-";

        this.moveDontReset=false;
        this.moveDenied=false;
        this.moveDeniedTimeout=200;
        this.moveLastMouseoverId=null;
    }


    mgnlTree.prototype.expandNode = function(path)
        {
        mgnlDebug('tree.expandNode','tree');

        var chunks=path.split("/");
        var id="";

        for (var i=1;i<chunks.length;i++) //i==1: first chunk is empty: /en/bla -> [], [en], [bla]
            {
            id+="/"+chunks[i];
            var node=this.nodes[id];

            if (node)
                {
                node.expand();
                }
            else
                {
                node=this.getNode(id);

                var divSub=document.getElementById(node.divSubId);
                if (divSub.innerHTML=="")
                    {
                    var params=new Object();
                    params.pathSelected=path;
                    node.expand(params);
                    break;
                    }
                }
            }
        this.selectNode(path);
        }


    mgnlTree.prototype.shifterDown = function(id)
        {
        this.moveDontReset=true;
        this.shiftNode(id);
        }

    mgnlTree.prototype.shifterOut = function()
        {
        this.moveDontReset=false;
        }


    mgnlTree.prototype.shiftNode = function(id)
        {
        var node=this.getNode(id);
        node.shift();
        }

    mgnlTree.prototype.selectNode = function(id) {
        mgnlDebug("selectNode:" + id, "tree");
        var sNode=this.getNode(id);
        var divMain=document.getElementById(sNode.divMainId);
        mgnlDebug("selectNode: divMainId:" + sNode.divMainId, "tree");

        var divMainSelected=document.getElementById(this.selectedNode.divMainId);

        if (divMain && this.selectedNode.divMainId!=sNode.divMainId) {
            if (divMainSelected) {
                divMainSelected.style.backgroundColor="";
                divMainSelected.style.textDecoration="";
            }
            divMain.style.backgroundColor=this.colors.nodeSelected;

            if(this.addressBar){
                this.addressBar.value=id;
            }
            this.selectedNode=sNode;
            // refresh functionBar
            if (window[this.functionBarName]) {
                eval (this.functionBarName).refresh ();
            }
        }
    }


    mgnlTree.prototype.getNode = function(id)
        {
        var node=this.nodes[id];
        if (!node)
            {
            node=new mgnlTreeNode(this,id);
            this.nodes[id]=node;
            }
        return node;
        }


    mgnlTree.prototype.dragColumnStart = function(resizerGif,resizerNumber)
        {
        if (!mgnlDragTreeColumn)
            {
            var line=this.columnResizerLine;
            line.style.left=mgnlGetPosX(resizerGif) + 5;
            line.style.visibility="visible";
            line.style.top=mgnlGetPosY(this.divMain);
            line.style.height=parseInt(this.divMain.style.height)+1;

            this.columnResizerGif=resizerGif;
            this.columnResizerLine=line;
            this.columnResizerNumber=resizerNumber;

            mgnlDragTreeColumn_Tree=this;
            mgnlDragTreeColumn=true;
            }
        }

    mgnlTree.prototype.dragColumnStop = function(e){
        //todo: resize edit control!

        mgnlDragTreeColumn=false;
        this.columnResizerLine.style.visibility="hidden";

        var lastLeft=0;
        // true if more than one chanaged
        var resizeAll=true;

        // loop over all columns
        // the resizer gif is already at the new position
        for (var i=0;i<this.columns.length-1;i++) {
            // get the gif div
            var colReGif=document.getElementById(this.name+"ColumnResizer"+(i+1));

            // get the position of the middle  of this resizre
            var left=parseInt(colReGif.style.left)+5;
            // if a column is smaller than the minimal width
            if (left<lastLeft+this.columnMinimumWidth) {
                left=lastLeft+this.columnMinimumWidth;
                resizeAll=true;
            }

            // clac the width of this column
            var w=left-lastLeft;
            this.columns[i].width=w;
            lastLeft=left;

            // if the last column is smaller than the the minimal width
            if (i==this.columns.length-2) {
                var w=parseInt(this.divMain.style.width)-left;
                if (w<this.columnMinimumWidth) {
                    w=this.columnMinimumWidth;
                    resizeAll=true;
                }
                this.columns[i+1].width=w;
            }
        }

        if (resizeAll)
            this.resize();
        else
            this.resize(this.columnResizerNumber);
    }


    mgnlTree.prototype.dragColumn = function(x,y)
        {
        //todo: stop at next dragger
        this.columnResizerGif.style.left=x-this.columnResizerGifWidthHalf-2;
        this.columnResizerLine.style.left=x-1;
        }

    mgnlTree.prototype.getColumnsWidth = function()
        {
        var w=0;
        for (var elem in this.columns)
            {
            w+=this.columns[elem].width;
            }
        return w;
        }

    mgnlTree.prototype.resize = function(columnNumber){
        //no columnNumber passed: resize all columns (@ resizing window)
        //columnNumber passed: resize only this column and re-clip the one before (@ resizing column)

        if (this.divMain){
            var sizeObj=mgnlGetWindowSize();

            //resize tree div
            var agent=navigator.userAgent.toLowerCase();
            //todo: to be tested!
            if (agent.indexOf("msie")!=-1)
                    this.divMain.style.width=sizeObj.w;
            else
                this.divMain.style.width=sizeObj.w-this.paddingLeft-this.paddingRight-2;

            if(this.browseMode)
                this.divMain.style.height=sizeObj.h - 60;
            else
                this.divMain.style.height=sizeObj.h - 68;

            //resize columns
            var quotient=sizeObj.w/this.getColumnsWidth();
            var sizeObjX=sizeObj;

            //todo: move to init (tree or column?)!!!

            //rules property differs in browsers
            var rulesKey;
            if (document.all){
                rulesKey="rules";
            }
            else if (document.getElementById){
                rulesKey="cssRules";
            }
            mgnlDebug("mgnlTree.resize: running with rules: " + rulesKey, "tree");

            // for each stylesheet included
            var treeColumnClasses=new Object();

            //to do: define break point!
            for (var elem0 = document.styleSheets.length-1; elem0>=0; elem0--) {
                mgnlDebug("mgnlTree.resize: styleSheets[elem0].href = " + document.styleSheets[elem0].href, "tree");

                var rules=document.styleSheets[elem0][rulesKey];
                mgnlDebug("mgnlTree.resize: rules", "tree", rules);

                //for (var elem1 in rule) //does not work in firebird 0.8, safari 1.2
                for (var elem1=0; elem1<rules.length; elem1++){

                    var cssClass=rules[elem1].selectorText;
                    // in safar 1.3 the selectorText is in lower case
                    if (cssClass && cssClass.toLowerCase().indexOf("." + this.name.toLowerCase() + "cssclasscolumn")!=-1){
                        treeColumnClasses[cssClass.toLowerCase()]=rules[elem1];
                    }
                }
            }

            mgnlDebug("mgnlTree.resize: treeColumnClasses", "tree", treeColumnClasses);

            var left=0;
            for (var elem in this.columns){
                // in safari is it lowercase
                var cssClass="."+this.name.toLowerCase()+"cssclasscolumn"+elem;
                var cssClassObj=treeColumnClasses[cssClass];
                var columnWidth=parseInt(this.columns[elem].width*quotient);
                //resize columne (by setting the left and clip attribute of its css class
                if (cssClassObj){
                    if (!columnNumber || elem==columnNumber){
                        cssClassObj.style.left=left;
                    }
                    if (!columnNumber || elem==columnNumber || elem==columnNumber-1){
                        cssClassObj.style.clip="rect(0 " + (columnWidth-8) + " 100 0)";
                    }
                    this.columns[elem].width=columnWidth;

                }

                //place the column resizer
                var columnResizer=document.getElementById(this.name+"ColumnResizer"+elem);
                var columnResizerLine=document.getElementById(this.name+"ColumnLine"+elem);

                if (columnResizer){
                    if (!columnNumber || elem==columnNumber){
                        columnResizer.style.left=left-this.columnResizerGifWidthHalf-1;
                     }
                }

                if (columnResizerLine){
                    if (!columnNumber || elem==columnNumber){
                        columnResizerLine.style.left=left;
                        columnResizerLine.style.height=this.divMain.style.height;
                     }
                }

                left+=columnWidth;
            }
        }
    }


    mgnlTree.prototype.nodeHighlight = function(htmlObject,id,permissionWrite)
        {
        var doHighlight=true;
        if (mgnlTreeMoveNode)
            {
            //only highlight first column (_Name)
            var idPost=htmlObject.id.substring(htmlObject.id.lastIndexOf("_"));
            if (idPost!="_Name" || !permissionWrite) doHighlight=false;
            }

        //if (!mgnlTreeMoveNode || permissionWrite)
        if (doHighlight)
            {
            //note: this.nodes[i] may not be initialized yet; therefor build mainDiv manualy
            var mainDivId=this.name+"_"+id+"_DivMain";
            var mainDiv=document.getElementById(mainDivId);
            if (mainDivId!=this.selectedNode.divMainId)
                {
                mainDiv.style.backgroundColor=this.colors.nodeHighlight;
                }

            if (mgnlTreeMoveNode)
                {
                this.moveLastMouseoverId=htmlObject.id;
                this.moveDenied=false;
                this.divMoveDenied.style.visibility="hidden";
                }
            }
        }

    mgnlTree.prototype.nodeReset = function (htmlObject,id)
        {
        //note: this.nodes[i] may not be initialized yet
        var mainDivId=this.name+"_"+id+"_DivMain";
        var mainDiv=document.getElementById(mainDivId);
        if (mainDivId!=this.selectedNode.divMainId)
            {
            mainDiv.style.backgroundColor="";
            }
        if (mgnlTreeMoveNode)
            {
            //to avoid flickering show the denied icon after a short timeout
            this.moveDenied=true;
            setTimeout("mgnlTreeMoveDeniedHide('"+this.name+"','"+htmlObject.id+"')",this.moveDeniedTimeout);
            //this.divMoveDenied.style.visibility="visible";
            }
        }
    function mgnlTreeMoveDeniedHide(treeName,mouseOutId)
        {
        var tree=eval(treeName);
        if (tree.moveDenied && tree.moveLastMouseoverId==mouseOutId)
            {
            tree.divMoveDenied.style.visibility="visible";
            }
        }

    mgnlTree.prototype.selectedNodeReset = function() {
        var divMain=document.getElementById(this.selectedNode.divMainId);
        divMain.style.backgroundColor="";
        this.selectedNode=this.getNode(this.path); //root

        // refresh functionBar
        if (window[this.functionBarName]) {
            eval (this.functionBarName).refresh ();
        }
    }


    mgnlTree.prototype.mainDivReset = function()
        {
        this.menuHide();
        this.moveReset();
        }

    mgnlTree.prototype.menuShow = function(event)
        {
        if (this.menu)
            {
            this.menu.show(event);
            }
        }

    mgnlTree.prototype.menuHide = function()
        {
        if (this.menu)
            {
            this.menu.hide();
            }
        }

    mgnlTree.prototype.createRootNode = function(createItemType)
        {
        this.selectedNode=this.getNode(this.path);
        this.createNode(createItemType);
        }


    mgnlTree.prototype.createNode = function(createItemType)
        {
        //todo: select root / ...
        var parentNode=this.selectedNode;

        //todo:fix
        //if (!parentNode) parentNode=this.nodes["/"];


        var params=new Object();
        params.forceReload=true;
        params.createItemType=createItemType;

        parentNode.expand(params);
        //parentNode.expand(true,'','',createItemType,'');

        var shifter=document.getElementById(parentNode.shifterId);
        if (shifter) shifter.src=shifter.src.replace("EMPTY","COLLAPSE");
        }


    mgnlTree.prototype.deleteNode = function()
        {
        var text;
        if(this.getNode(this.selectedNode.id).isActivated){
            text = mgnlMessages.get('tree.deletenode.confirm.deactivation.text.js', null, [this.selectedNode.id]);
        }
        else{
            text = mgnlMessages.get('tree.deletenode.confirm.text.js', null, [this.selectedNode.id]);
        }

        var title=mgnlMessages.get('tree.deletenode.confirm.title.js');
        if (mgnlConfirm(text,title))
            {
            var parentNode=this.getNode(this.selectedNode.parentId);
            var deleteNode=this.selectedNode.label;

            //reset to tree's root path
            this.selectedNodeReset();


            var params=new Object();
            params.forceReload=true;
            params.deleteNode=deleteNode;

            parentNode.expand(params);
            //parentNode.expand(true,'','',null,deleteNode);
            }
        }

    mgnlTree.prototype.exportNode = function(keepVersions)
        {
        var text=mgnlMessages.get('tree.exportnode.confirm.text.js');
        var title=mgnlMessages.get('tree.exportnode.confirm.title.js', null, [this.selectedNode.id]);

        if (mgnlConfirm(text,title))
            {

            keepVersions = keepVersions!=null ? keepVersions: false;
            var url= contextPath + "/.magnolia/pages/export.xml?exportxml=true&mgnlFormat=true&mgnlRepository=" + this.repository + "&mgnlPath=" + this.selectedNode.id + "&mgnlKeepVersions=" + keepVersions;

            location.href=url;
            }
        }

    mgnlTree.prototype.importNode = function(link, keepVersions, uuidBehavior)
        {
            keepVersions = keepVersions!=null ? keepVersions: false;
            // create new uuid
            uuidBehavior = uuidBehavior!=null ? uuidBehavior: 0;

            var strDiv ='<form method="post" enctype="multipart/form-data" action="' + contextPath + '/.magnolia/pages/import.html">';
            strDiv +='<input type="hidden" name="mgnlRepository" value="' + this.repository + '">';
            strDiv +='<input type="hidden" name="mgnlPath" value="' + this.selectedNode.id + '">';
            strDiv +='<input type="hidden" name="mgnlKeepVersions" id="mgnlKeepVersions" value="'+keepVersions+'"/>';
            strDiv +='<input type="hidden" name="mgnlUuidBehavior" id="mgnlUuidBehavior" value="'+uuidBehavior+'"/>';

            strDiv +='<input type="hidden" name="mgnlRedirect" value="' + contextPath + '/.magnolia/trees/' + this.handlerName + '.html?pathSelected=' + this.selectedNode.id + '&pathOpen=' + this.selectedNode.id + '">';
            strDiv +='<input type="file" name="mgnlFileImport" id="mgnlFileImport" /><br/>';

            strDiv +='<input type="submit" class="mgnlImportButton" name="importxml" value="' + mgnlMessages.get('import.button.js') + '" />';
            strDiv +='<input type="button" class="mgnlImportButton" value="' + mgnlMessages.get('import.button.close.js') + '" onclick="document.body.removeChild(this.parentNode.parentNode)" />';
            strDiv +='</form>';

            var resDiv = document.createElement('div');
            resDiv.id= "mgnlImportdiv";
            document.body.appendChild(resDiv);
            resDiv.innerHTML = strDiv;

            $('mgnlImportdiv').style.left = (mgnlGetPosX(link) + 20) + "px";
            $('mgnlImportdiv').style.top = mgnlGetPosY(link) + "px";

        }


    mgnlTree.prototype.copyNode = function()
        {
        mgnlTreeMoveNode=true;
        mgnlTreeMoveNode_Tree=this;
        this.clipboardNode=this.selectedNode;
        this.clipboardMethod=1; //Tree.ACTION_COPY
        }

    mgnlTree.prototype.cutNode = function()
        {
        mgnlTreeMoveNode=true;
        mgnlTreeMoveNode_Tree=this;
        this.clipboardNode=this.selectedNode;
        this.clipboardMethod=0; //Tree.ACTION_MOVE

        var divMain=document.getElementById(this.selectedNode.divMainId);
        divMain.style.textDecoration="line-through";
        }

    mgnlTree.prototype.pasteNode = function(id,pasteType,permissionWrite,lineDivId){
        if (mgnlTreeMoveNode && permissionWrite){
            if (this.clipboardMethod==0 && id.indexOf(this.clipboardNode.id)==0 && pasteType!=0){
                //move into itself is not possible
                mgnlAlert(mgnlMessages.get('tree.pastenode.itself.js'));
            }
            else if (this.clipboardMethod==1 && id.indexOf(this.clipboardNode.id)==0 && pasteType!=0){
                //move into itself is not possible
                mgnlAlert(mgnlMessages.get('tree.pastenode.itself.js'));
            }
            else{
                // confirm deactivation

                var text=mgnlMessages.get('tree.movenode.confirm.text.js', null, [this.clipboardNode.id]);
                var title=mgnlMessages.get('tree.movenode.confirm.title.js');

                if (!this.getNode(this.clipboardNode.id).isActivated || this.clipboardMethod==1 || mgnlConfirm(text,title)){
                    if (lineDivId){
                        //for last line on root level
                        var lineDiv=document.getElementById(lineDivId);
                        lineDiv.style.backgroundImage="";
                    }
                    this.moveReset();

                    this.selectedNode=this.getNode(id);
                    var parentPath=this.selectedNode.id.substring(0,this.selectedNode.id.lastIndexOf("/"));
                    if (parentPath=="") parentPath="/";

                    var pathToReload;
                    if (this.clipboardMethod==0){
                        //paste after cut
                        if (this.clipboardNode.id.indexOf(parentPath)==0){
                             //e.g. sort inside a directory or paste into sister: reload selected
                             pathToReload=parentPath;
                        }
                        else{
                            //no hokums, reload root
                            pathToReload=this.path;
                        }
                    }
                    else{
                        //paste after copy
                        if (pasteType==2){
                            //Tree.PASTETYPE_SUB: reload selected
                            pathToReload=this.selectedNode.id;

                            var shifter=document.getElementById(this.selectedNode.shifterId);
                            if (shifter){
                                var src=shifter.src;
                                src=src.replace("EMPTY","COLLAPSE");
                                src=src.replace("EXPAND","COLLAPSE");
                                shifter.src=src;
                            }
                        }
                        else {
                            //reload parent of selected
                            pathToReload=parentPath;
                        }
                    }

                    var nodeToReload=this.getNode(pathToReload);

                    var params=new Object();
                    params.forceReload=true;
                    params.treeAction=this.clipboardMethod;
                    params.pathClipboard=this.clipboardNode.id;
                    params.pathSelected=this.selectedNode.id;
                    params.pasteType=pasteType;

                    nodeToReload.expand(params);
                }
            }
            this.clipboardNode=null;
            this.clipboardMethod=null;
            this.moveReset();
        }
    }

    mgnlTree.prototype.moveNode = function(x,y)
        {
        if (this.divMoveShadow.style.visibility=="hidden")
            {
            //initalize
            var icon=document.getElementById(this.selectedNode.iconId);
            var shadowSrc=icon.src;
            var label=document.getElementById(this.selectedNode.labelId).innerHTML;

            this.divMoveShadow.innerHTML='<img src="'+shadowSrc+'"><span class="mgnlTreeText">'+label+'</span>';
            this.divMoveShadow.style.visibility="visible";
            this.divMoveDenied.style.visibility="visible";
            }
        this.divMoveShadow.style.left=x+6;
        this.divMoveShadow.style.top=y+11;
        this.divMoveDenied.style.left=x+10;
        this.divMoveDenied.style.top=y+2;
        }

    mgnlTree.prototype.moveNodeHighlightLine = function(divId)
        {
        if (mgnlTreeMoveNode)
            {
            mgnlDebug("highlight line" + divId, "tree");
            div=document.getElementById(divId);
            div.style.backgroundImage="url(" + contextPath + "/.resources/controls/tree/line_internode.gif)";
            this.divMoveDenied.style.visibility="hidden";
            this.moveLastMouseoverId=div.id;
            this.moveDenied=false;
            }
        }

    mgnlTree.prototype.moveNodeResetLine = function(divId)
        {
        if (mgnlTreeMoveNode)
            {
            div=document.getElementById(divId);
            div.style.backgroundImage="";

            //to avoid flickering show the denied icon after a short timeout
            this.moveDenied=true;
            setTimeout("mgnlTreeMoveDeniedHide('"+this.name+"','"+div.id+"')",this.moveDeniedTimeout);
            }
        }

    mgnlTree.prototype.moveReset = function()
        {
        if (mgnlTreeMoveNode && !this.moveDontReset)
            {
            mgnlTreeMoveNode=false;
            mgnlTreeMoveNode_Tree=null;
            this.moveDenied=false;
            this.divMoveShadow.style.visibility="hidden";
            this.divMoveDenied.style.visibility="hidden";
            var divMain=document.getElementById(this.selectedNode.divMainId);
            divMain.style.textDecoration="";
            divMain.style.backgroundColor="";
            }
        }

    mgnlTree.prototype.activateNode = function(action,recursive)
        {
        var nodeToReload=this.selectedNode.getParent();

        var params=new Object();
        params.forceReload=true;
        params.treeAction=action;
        params.pathSelected=this.selectedNode.id;
        if (recursive) params.recursive=recursive;

        nodeToReload.expand(params);
        }

    mgnlTree.prototype.deactivateNode = function(action)
        {
        var nodeToReload=this.selectedNode.getParent();

        var params=new Object();
        params.forceReload=true;
        params.treeAction=action;
        params.pathSelected=this.selectedNode.id;

        nodeToReload.expand(params);
        }



    mgnlTree.prototype.editNodeData = function(span,id,columnNumber)
        {
        var column=this.columns[columnNumber];
        var htmlEdit=column.htmlEdit;
        if (htmlEdit!="")
            {
            var value=span.innerHTML;
            value = value.replace(/&lt;/g,"<");
            value = value.replace(/&gt;/g,">");
            value = value.replace(/&amp;/g,"&");

            if (value.toLowerCase().indexOf("<input")!=0 && value.toLowerCase().indexOf("<select")!=0)
            //else: already in edit mode!
                {
                span.innerHTML=htmlEdit;

                var control=document.getElementById(this.name+"_EditNodeData");
                if (value!=this.strings.saving && value!=this.strings.empty)
                    {
                    if (control.type=="select-one")
                        {
                        for (var i=0;i<control.options.length;i++)
                            {
                            var text=control.options[i].innerHTML;
                            //alert(text+"::"+value+"::"+i);
                            if (text==value)
                                {
                                control.selectedIndex=i;
                                break;
                                }
                            }
                        }
                    else
                        {
                        control.value=value;
                        }
                    }

                //resize control
                var controlWidth=this.columns[columnNumber].width-10;
                if (columnNumber==0)
                    {
                    //first column, subtract padding and 30 for switcher and icon
                    var outerSpan=document.getElementById(this.name+"_"+id+"_Column0Outer");
                    var padding=outerSpan.style.paddingLeft;
                    if (padding) padding=parseInt(padding);
                    else padding=0;
                    controlWidth=controlWidth-padding-30;
                    }
                if (controlWidth<10) controlWidth=10;
                control.style.width=controlWidth;

                control.focus();

                this.lastEditedHtmlObject=span;
                this.lastEditedOriginalValue=value;
                this.lastEditedName=column.name;
                this.lastEditedIsMeta=column.isMeta;
                this.lastEditedIsLabel=column.isLabel;
                this.lastEditedIsNodeDataValue=column.isNodeDataValue;
                this.lastEditedIsNodeDataType=column.isNodeDataType;
                this.lastEditedNode=this.nodes[id];
                }
            }
        }

    mgnlTree.prototype.resetNodeData = function()
        {
        if (this.lastEditedHtmlObject)
            {
            this.lastEditedHtmlObject.innerHTML=this.lastEditedOriginalValue;
            this.lastEditedHtmlObject=null;
            this.lastEditedOriginalValue="";
            this.lastEditedName="";
            this.lastEditedIsMeta=false;
            this.lastEditedIsLabel=false;
            this.lastEditedIsNodeDataValue=false;
            this.lastEditedIsNodeDataLabel=false;
            this.lastEditedNode=null;
            }
        }

    mgnlTree.prototype.editNodeDataKeydown = function(event,control)
        {
        if (mgnlIsKeyEscape(event))
            {
            this.resetNodeData();
            }
        else if (mgnlIsKeyEnter(event))
            {
            control.blur(); //blur event calls saveNodeData!
            }
        }


    // display is optional. use it if the column display is not the same as the saved value
    // this is not a good solution, because the system should return the label instead of passing it

    mgnlTree.prototype.saveNodeData = function(value, displayValue)
        {
        var exit=false;
        if (value==this.lastEditedOriginalValue || displayValue==this.lastEditedOriginalValue ||(value=="" && this.lastEditedOriginalValue==this.strings.empty))
            {
            exit=true;
            }
        else if (this.lastEditedIsLabel && this.lastEditedNode.isActivated)
            {
            if (!mgnlConfirm(mgnlMessages.get('tree.savenode.confirmDeactivation.text.js'),
                                mgnlMessages.get('tree.savenode.confirmDeactivation.title.js')))
                {
                exit=true;
                }
            }

        if (exit)
            {
            this.resetNodeData();
            return;
            }
        else
            {
            //todo: create params object (see node.expand()
            var node=this.lastEditedNode;
            var htmlObject=this.lastEditedHtmlObject;
            if (htmlObject == null) {
              return;
            }
            var name=this.lastEditedName;
            var isMeta=this.lastEditedIsMeta;
            var isLabel=this.lastEditedIsLabel;
            var isNodeDataValue=this.lastEditedIsNodeDataValue;
            var isNodeDataType=this.lastEditedIsNodeDataType;
            if(displayValue==null) {
                displayValue="";
            }
            this.lastEditedHtmlObject=null;
            this.lastEditedOriginalValue="";
            this.lastEditedName="";
            this.lastEditedIsMeta=false;
            this.lastEditedIsLabel=false;
            this.lastEditedIsNodeDataType=false;
            this.lastEditedIsNodeDataValue=false;
            this.lastEditedNode=null;

            htmlObject.innerHTML=this.strings.saving;
            setTimeout("mgnlTreeSaveNodeData('"+htmlObject.id+"','"+node.id+"','"+this.name+"','"+name+"','"+escape(value)+"',"+isMeta+","+isLabel+","+isNodeDataValue+","+isNodeDataType+",'" + escape(displayValue)+"');",10);
            }
        }

    mgnlTree.prototype.refresh = function()
        {
        var rootNode=this.getNode(this.path);
        var params=new Object();
        params.forceReload=true;
        params.pathSelected=this.selectedNode.id;
        rootNode.expand(params);
        }

    mgnlTreeSaveNodeData = function (lastEditedHtmlObjectId,id,treeName,saveName,saveValue,isMeta,isLabel,isNodeDataValue,isNodeDataType, displayValue)
        {
        var tree=eval(treeName);

        var params=new Object();
        params.saveName=saveName;
        params.saveValue=saveValue;
        params.isMeta=isMeta;
        params.isLabel=isLabel;
        params.isNodeDataValue=isNodeDataValue;
        params.isNodeDataType=isNodeDataType;
        params.pathSelected='';
        params.pathOpen='';
        params.displayValue=displayValue;

        var callBackParams=new Object();
        callBackParams.id = id;
        callBackParams.treeName = treeName;
        callBackParams.lastEditedHtmlObjectId = lastEditedHtmlObjectId;
        callBackParams.isLabel = isLabel;

        // async
        tree.nodes[id].httpRequest(params, callBackParams, mgnlTreeSaveNodeDataCallback);
        }

    /**
    callback for mgnlTreeSaveNodeData
    **/
    mgnlTreeSaveNodeDataCallback = function (params, html)
        {

        var id = params.id;
        var treeName = params.treeName;
        var lastEditedHtmlObjectId = params.lastEditedHtmlObjectId;

        var tree=eval(treeName);
        var isLabel=params.isLabel;


        if (html=="") html=tree.strings.empty;

        html = mgnlAlertCallbackMessage(html);

        html = html.replace(/&/g,"&amp;");
        html = html.replace(/</g,"&lt;");
        html = html.replace(/>/g,"&gt;");

        document.getElementById(lastEditedHtmlObjectId).innerHTML=html;

        if (isLabel)
            {
            //reload parent

            //todo: highlight renamed (s. copy/move; hidden field mgnlSelectNode)
            var parentPath=id.substring(0,id.lastIndexOf("/"));
            var selectedPath=parentPath+"/"+html;

            if (!parentPath) parentPath="/";

            var parent=tree.getNode(parentPath);

            var nodeParams=new Object();
            nodeParams.forceReload=true;
            nodeParams.pathSelected=selectedPath;

            parent.expand(nodeParams);

            //reset tree nodes
            tree.nodes=new Object();
            }
        }



    function mgnlTreeResize()
        {
        for (var elem in mgnlTreeControls)
            {
            var tree=mgnlTreeControls[elem];
            mgnlTreeControls[elem].resize();
            }
        }





    //#################
    //### TreeColumn
    //#################

    function mgnlTreeColumn(width,htmlEdit,name,isMeta,isLabel,isNodeDataValue,isNodeDataType)
        {
        this.width=width;
        this.htmlEdit=htmlEdit;
        this.name=name;
        this.isMeta=isMeta;
        this.isLabel=isLabel;
        this.isNodeDataValue=isNodeDataValue;
        this.isNodeDataType=isNodeDataType;
        }


    //#################
    //### TreeNode
    //#################

    function mgnlTreeNode(treeControl,id)
        {
        this.id = id;
        this.path = id;

        if (id.lastIndexOf("/")==0) this.parentId="/"; //parent is root
        else this.parentId=id.substring(0,id.lastIndexOf("/"));

        this.label=id.substring(id.lastIndexOf("/")+1);

        this.idPre=treeControl.name+"_"+id;
        this.repository=treeControl.repository;
        this.treeName=treeControl.name;
        this.tree=treeControl;

        if (document.getElementById(this.idPre+"_ItemType"))
            {
            this.itemType=document.getElementById(this.idPre+"_ItemType").value;
            }
        if (document.getElementById(this.idPre+"_IsActivated"))
            {
            if (document.getElementById(this.idPre+"_IsActivated").value=="true") this.isActivated=true;
            else this.isActivated=false;
            }
        if (document.getElementById(this.idPre+"_PermissionWrite"))
            {
            if (document.getElementById(this.idPre+"_PermissionWrite").value=="true") this.permissionWrite=true;
            else this.permissionWrite=false;
            }

        //html objects get lost, therefore use id and getElement on the float
        this.divMainId=this.idPre+"_DivMain";
        this.shifterId=this.idPre+"_Shifter";
        this.divSubId=this.idPre+"_DivSub";
        this.iconId=this.idPre+"_Icon";
        this.labelId=this.idPre+"_Column0Main";
        if(document.location.href.indexOf("?")!=-1)
                this.url=document.location.href.substring(0,document.location.href.indexOf("?"));
        else
            this.url=document.location.href;
    }

    mgnlTreeNode.prototype.getParent = function(){
        var parentPath=this.id.substring(0,this.id.lastIndexOf("/"));
        if (parentPath == ""){
            parentPath = this.tree.path; //root
        }
        return this.tree.getNode(parentPath);
    }

    mgnlTreeNode.prototype.getHttpRequest = function()
        {
        var httpReq;
        if (window.XMLHttpRequest) httpReq = new XMLHttpRequest();
        else if (window.ActiveXObject) httpReq = new ActiveXObject("Microsoft.XMLHTTP"); //IE/Windows ActiveX
        return httpReq;
        }

    mgnlTreeNode.prototype.httpRequest = function(params, callBackParams, callback)
        {
        /*
        //todo: clean up ... (e.g. isMeta, isLabel etc. to treeAction)

        * params is object of key/value pairs
        * possible keys:
        --------------------------------------------------------------------
        pathOpen: path to open
        //check! and remove? pathSelected: path to select -> does not work (js is not executed at remote scripting);
        --------------------------------------------------------------------
        * create and remove nodes
        createItemType: String; type of the item [NT_CONTENT | NT_CONTENTNODE | NT_NODEDATA]
        deleteNode: node to delete
        --------------------------------------------------------------------
        * save node data values
        * save node data types
        * save names (label) of data or nodes (rename)
        saveName: name of the item which has to be saved
        saveValue: value to be saved
        isMeta: boolean - nodeData 'saveName' is meta data
        isLabel: boolean -> move 'this.path' to 'saveValue' (rename)
        isNodeDataValue: boolean - item to save is value of node data 'saveName' ('config admin')
        isNodeDataType: boolean - item to save is type of node data 'saveName' ('config admin')
        --------------------------------------------------------------------
        * paste nodes
        treeAction: [ MOVE | COPY ]
        pathClipboard: path to move or copy //todo: mutliple selection
        pathSelected: path to move to
        pasteType: put pathOrigin [ ABOVE | BELOW | SUB ] of pathDestination
        --------------------------------------------------------------------
        * activate
        recursive: activate selected and sub nodes

        */

        var httpReq=this.getHttpRequest();
        if (httpReq)
            {
            var paramString = "treeMode=snippet";
            paramString+="&path="+this.path;
            paramString+="&browseMode="+this.tree.browseMode;
            paramString+="&mgnlCK="+mgnlGetCacheKiller();
            for (var elem in params)
                {
                if (params[elem] || params[elem]=="0") {
                    // ="0": createItemType; MAGNOLIA_NODE_DATA is 0
                    paramString+="&"+encodeURIComponent(elem)+"="+encodeURIComponent(unescape(params[elem])); //values seems to be passed escaped ...
                    }
                }
            mgnlDebug("node.httpRequest: paramString: " + paramString, "tree");
            // paramters need to be passed in body to allow utf8 encoding (query string is always ISO-88591)
                mgnlDebug("node.httpRequest: url: " + this.url, "tree");
            httpReq.open("POST",encodeURI(this.url),true);
            httpReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");

            // register handler after the the request called after the request returned
            httpReq.onreadystatechange=function() {
               if (httpReq.readyState==4) {
                var returnText=httpReq.responseText;
                callback(callBackParams, returnText);
               }
            }

            httpReq.send(paramString);
            return;
            }

        else return;
        }

    mgnlTreeNode.prototype.shift = function()
        {
        var shifter=document.getElementById(this.shifterId);

        if (shifter && shifter.src.indexOf("EMPTY")==-1)
            {
            var divSub=document.getElementById(this.divSubId);
            if (divSub.style.display=="none") this.expand();
            else this.collapse();
            }
        }

    mgnlTreeNode.prototype.collapse = function()
        {
        mgnlDebug('node.collapse','tree');
        var divSub=document.getElementById(this.divSubId);
        if (divSub.style.display!="none")
            {
            divSub.style.display="none";
            var shifter=document.getElementById(this.shifterId);
            if (shifter) shifter.src=shifter.src.replace("COLLAPSE","EXPAND");

            if (this.tree.selectedNode.id.indexOf(this.id+"/")==0)
                {
                this.tree.selectedNodeReset();
                }
            }
        }



    mgnlTreeNode.prototype.expand = function(params)
        {
        mgnlDebug('node.expand','tree');
        /*
        * params is object of key/value pairs
        * see mgnlTreeNode.prototype.httpRequest
        */

        if (!params) params=new Object();

        var shifter=document.getElementById(this.shifterId);
        var divSub=document.getElementById(this.divSubId);

        if (!params.forceReload && shifter && shifter.src.indexOf("EMPTY")!=-1) return;
        if (params.forceReload || (divSub && divSub.style.display=="none"))
            {
            //todo: find out, why divSub is not available always ...
            if (divSub) divSub.style.display="block";
            if (shifter) shifter.src=shifter.src.replace("EXPAND","COLLAPSE");
            if (params.forceReload || divSub.innerHTML=="")
                {
                var left=0;
                if (document.getElementById(this.idPre+"_Column0Main"))
                    {
                    left=parseInt(document.getElementById(this.idPre+"_Column0Outer").style.paddingLeft);
                    if (left) left+=30;
                    else left=30;
                    }
                //todo: find out, why divSub is not available always ...
                if (divSub) divSub.innerHTML="<div class=mgnlTreeTextLoading style=padding-left:"+left+";>"+this.tree.strings.loading+"</div>";

                this.params=params;

                setTimeout("mgnlTreeDrawNodes('"+this.id+"','"+this.treeName+"');",10);
                }
            }
        }

    mgnlTreeDrawNodes = function (id,treeName)
        {
        var div=document.getElementById(treeName+"_"+id+"_DivSub");
        var tree=eval(treeName);

        var node=tree.getNode(id);
        var params=node.params;
        if (!params) params=new Object();

        var callBackParams=new Object();
        callBackParams.id = id;
        callBackParams.treeName = treeName;

        mgnlDebug('mglnTreeDrawNodes with treeName: ' + treeName, "tree");
        mgnlDebug('mglnTreeDrawNodes used params', "tree", params);
        mgnlDebug('mglnTreeDrawNodes used callBackParams', "tree", callBackParams);

        node.httpRequest(params, callBackParams, mgnlTreeDrawNodesCallback);

        }

/**
callback
**/
    mgnlTreeDrawNodesCallback = function (params, html) {

        var id = params.id;
        var treeName = params.treeName;

        var div=document.getElementById(treeName+"_"+id+"_DivSub");
        var tree=eval(treeName);

        if (div) div.innerHTML=html;

        if (id==tree.path){
            //reset tree
            tree.nodes=new Object();
            tree.selectedNode=tree.getNode(tree.path);
            tree.clipboardNode=null;
            tree.clipboardMethod=null;
        }

        html = mgnlAlertCallbackMessage(html);

        var selectPath=params.pathSelected;
        var selectNodePattern='<input type="hidden" id="mgnlSelectNode" value="';

        if (html.indexOf(selectNodePattern)==0)
            {
            mgnlDebug('mgnlTreeDrawNodesCallback', "tree");
            var tmp=html.substring(0,html.indexOf("\" />"));
            tmp=tmp.replace(selectNodePattern,"");

            if (tmp!="") selectPath=tmp;
            }

        if (selectPath)
            {
            mgnlDebug('selectPath: ' + selectPath, "tree")
            //tree.selectNode(tree.path);
            tree.selectNode(selectPath);
            }

        if (html=="")
            {
            var shifter=document.getElementById(tree.nodes[id].shifterId);
            if (shifter)
                {
                shifter.src=shifter.src.replace("COLLAPSE","EMPTY")
                }
            }

}

    function mgnlAlertCallbackMessage(html){
        var messagePattern='<input type="hidden" id="mgnlMessage" value="';

        // check if alert message was sent back
        if (html.indexOf(messagePattern) != -1){
            var start = html.indexOf(messagePattern);
            var end = html.indexOf("\" />", start);
            var msg = html.slice(start + messagePattern.length, end);
            alert(msg);
            html = html.slice(end);
        }
        return html;
    }/* ###################################
### contextmenu.js
################################### */

/* ###################################
### ContextMenu Class
################################### */

/* ###################################
### Constructor
################################### */

function mgnlContextMenu(name){
    this.divMenu=document.getElementById(name+"_DivMenu");
    this.menuItems=new Array();
    this.colors=new Object();
    this.colors.menuHighlight="#F0F2E6";
    // true if this is keep showing
    this.showing = false;

    if(!this.divMenu){
        alert('no div for the context [' + name + '] menu found');
    }
}

mgnlContextMenu.prototype.show = function(event){
    if (this.divMenu)
        {
        //todo: (hack) find out height/width of div
        var divMenuHeight=0;
        var divMenuWidth=150;
        for (var i=0;i<this.menuItems.length;i++)
            {
            divMenuHeight+=18; //17: item height; 1: possible line
            var item=this.menuItems[i];

            //reset class name: remove _DISABLED (if existing)
            item.div.className=item.div.className.replace("_DISABLED","");
            var disabled=false;
            for (var elem in item.conditions) {
                var condition = item.conditions[elem];
                var testResult;
                if(typeof condition == "function"){
                    testResult = condition();
                }
                else{
                    testResult = condition.test();
                }
                if (testResult == false){
                    disabled=true;
                    break;
                }
            }

            img = item.div.firstChild;
            if (disabled) {
                item.div.className+="_DISABLED";
                item.div.onclick="";
                // change image path to disabled
                if (img && img.tagName && img.tagName.toUpperCase () == 'IMG') {
                    if (img.src.substr (img.src.length - '_inactive.gif'.length) != '_inactive.gif') {
                        img.src = img.src.substr (0, img.src.length - '.gif'.length) + '_inactive.gif';
                    }
                }
            }
            else {
                item.div.onclick=item.onclick;
                // change image path to enabled
                if (img && img.tagName && img.tagName.toUpperCase () == 'IMG') {
                    if (img.src.substr (img.src.length - '_inactive.gif'.length) == '_inactive.gif') {
                        img.src = img.src.substr (0, img.src.length - '_inactive.gif'.length) + '.gif';
                    }
                }
            }
        }
        var pos=mgnlGetMousePos(event);

        var left=pos.x-4;
        var top=pos.y-4;
        var windowSize=mgnlGetWindowSize();
        if (windowSize.h<top+divMenuHeight+25)
            {
            top=windowSize.h-divMenuHeight-25;
            if (top<0) top=0;
            }
        if (windowSize.w<left+divMenuWidth+30)
            {
            left=windowSize.w-divMenuWidth-30;
            if (left<0) left=5;
            }

        this.divMenu.style.left=left;
        this.divMenu.style.top=top;
        this.divMenu.style.visibility="visible";
        }
    this.showing = true;
    event.returnValue=false;
    event.cancelBubble = true;
    if (event.stopPropagation) event.stopPropagation();
}

mgnlContextMenu.prototype.keepShowing = function(){
    this.showing = true;
}

mgnlContextMenu.prototype.hide = function(){
    this.showing = false;
    var tmp = this;
    _mgnlContextMenuHide = function(){
        if(tmp.showing == true)
            return;
        if (tmp.divMenu){
            tmp.divMenu.style.visibility="hidden";
        }
    }
    window.setTimeout("_mgnlContextMenuHide();",1000);
}


mgnlContextMenu.prototype.menuItemHighlight = function(item)
    {
    if (item.className.indexOf("_DISABLED")==-1)
        {
        item.style.backgroundColor=this.colors.menuHighlight;
        }
    }

mgnlContextMenu.prototype.menuItemReset = function(item)
    {
    item.style.backgroundColor="";
    }

//#################
//### TreeMenuItem
//#################

function mgnlContextMenuItem(id){
    this.id=id;
    this.div=document.getElementById(id);
    this.onclick=this.div.onclick;
}


//##########################################
//### Conditions for coloring the menu items
//##########################################

function mgnlTreeMenuItemConditionBoolean(bool){
    this.bool = bool;

    this.test = function(){
        return bool;
    }
}

function mgnlTreeMenuItemConditionSelectedRoot(tree){
    this.tree = tree;

    this.test = function(){
        if (this.tree.selectedNode.id==this.tree.path) return true;
        else return false;
    }
}

function mgnlTreeMenuItemConditionSelectedNotRoot(tree){
    this.tree = tree;

    this.test = function(){
        if (this.tree.selectedNode.id!=this.tree.path) return true;
        else return false;
    }
}

function mgnlTreeMenuItemConditionSelectedRootOrItemType(tree, itemType){
    this.tree = tree;
    this.itemType = itemType;

    this.test = function(){
        return ((this.tree.selectedNode.itemType==this.itemType)
         || (this.tree.selectedNode.id==this.tree.path));
    }
}

function mgnlTreeMenuItemConditionSelectedNotItemType(tree, itemType){
    this.tree = tree;
    this.itemType = itemType;

    this.test = function(){
        if (this.tree.selectedNode.itemType!=this.itemType)
            return true;
        else
            return false;
    }
}

function mgnlTreeMenuItemConditionSelectedItemType(tree, itemType){
    this.tree = tree;
    this.itemType = itemType;

    this.test = function(){
        if (this.tree.selectedNode.itemType==this.itemType)
            return true;
        else
            return false;
    }
}

function mgnlTreeMenuItemConditionSelectedNotNodeData(tree)
    {
    this.tree = tree;

    this.test = function(){
        if (this.tree.selectedNode.itemType!="mgnl:nodeData") return true;
        else return false;
    }
}

function mgnlTreeMenuItemConditionSelectedNotContentNode(tree)
    {
    this.tree = tree;

    this.test = function(){
        if (this.tree.selectedNode.itemType!="mgnl:contentNode") return true;
        else return false;
    }
}

function mgnlTreeMenuItemConditionSelectedNotContent(tree)
    {
    this.tree = tree;

    this.test = function(){
        if (this.tree.selectedNode.itemType!="mgnl:content") return true;
        else return false;
    }
}

function mgnlTreeMenuItemConditionPermissionWrite(tree)
    {
    this.tree = tree;

    this.test = function(){
        if (this.tree.selectedNode.permissionWrite) return true;
        else return false;
    }
}

//#################
//### Common Commands
//#################

function mgnlTreeMenuItemOpen(tree){
    var url= contextPath + tree.selectedNode.path+".html";
    var w=window.open(url,"mgnlInline","");
    if (w)
        w.focus();
}

function mgnlTreeMenuOpenDialog(tree,dialogPath){
    var path=tree.selectedNode.id;
    mgnlOpenDialog(path,'','','',tree.repository,dialogPath);
}

/* ###################################
### inline.js
################################### */


/* ###################################
### preview
################################### */

function mgnlPreview(prev)
    {
    var href=mgnlUpdateCK(document.location.href)


    href=mgnlRemoveParameter(href,"mgnlIntercept");
    href=mgnlAddParameter(href,"mgnlIntercept","PREVIEW");

    href=mgnlRemoveParameter(href,"mgnlPreview");
    if (prev) href=mgnlAddParameter(href,"mgnlPreview","true");
    else href=mgnlAddParameter(href,"mgnlPreview","false");

    document.location.href=href;
    }



/* ###################################
### delete paragraph
################################### */

function mgnlDeleteNode(path,paragraphName,nodeName)
    {
    var alertText = mgnlMessages.get("inline.delete.text.js");
    if (mgnlConfirm(alertText,mgnlMessages.get("inline.delete.title.js")))
        {
        var href=mgnlUpdateCK(document.location.href)

        href=mgnlRemoveParameter(href,"mgnlIntercept");
        href=mgnlAddParameter(href,"mgnlIntercept","NODE_DELETE");

        href=mgnlRemoveParameter(href,"mgnlPath");
        if (paragraphName == "") {
            href=mgnlAddParameter(href,"mgnlPath",path+"/"+nodeName);
        } else {
            href=mgnlAddParameter(href,"mgnlPath",path+"/"+paragraphName+"/"+nodeName);
        }

        window.location.href=href;
        }
    else return;
    }




/* ###################################
### move paragraphs
################################### */

var mgnlMoveNode; //selected container name
var mgnlMoveNodeCollection; //selected container list name

//divs which will be placed onMouseMove
//shadow: half transparent and scaled down editBar
document.write('<div id="mgnlMoveDivShadow"></div>');
//denied: denied sign
document.write('<div id="mgnlMoveDivDenied"></div>');
//allowed: text 'Move above here'
document.write('<div id="mgnlMoveDivAllowed" style="visibility:hidden">' + mgnlMessages.get('inline.move.aboveThisOne.js') + '</div>');

var mgnlMoveDont=false;
//move will not start as long as mgnlMoveDont is true
//set true when clicking a button on a editBar ((and on timeout at mgnlMoveReset()))

//var mgnlMove=false; //true as long as a container is selected
// -> moved to general.js

function mgnlMoveNodeStart(containerList,container,barId)
    {
    if (!mgnlMoveDont && !mgnlMove)
        {
        var bar=document.getElementById(barId);
        mgnlMoveNodeSetClassName(bar,"PUSHED");

        //var tmp=bar.id.split('__');
        mgnlMoveNodeCollection=containerList;
        mgnlMoveNode=container;

        var divShadow=document.getElementById('mgnlMoveDivShadow');
        divShadow.style.visibility='visible';

        var divDenied=document.getElementById('mgnlMoveDivDenied');
        var divAllowed=document.getElementById('mgnlMoveDivAllowed');
        if (divAllowed.style.visibility=='hidden') divDenied.style.visibility='visible'; // only if new selection

        mgnlMove=true;
        }
    }


function mgnlMoveNodeSetClassName(bar,state)
    {
    if (!state) state="NORMAL";
    var base=bar.className;
    if (base.indexOf("_")!=-1) base=base.substring(0,base.indexOf("_"));
    if (state=="NORMAL") bar.className=base;
    else if (state=="PUSHED") bar.className=base+"_PUSHED";
    else if (state=="MOUSEOVER") bar.className=base+"_MOUSEOVER";
    }

 function mgnlMoveNodeHigh(bar)
    {
    var tmp=bar.id.split('__');
    if (mgnlMove)
        {
        if (tmp[0]==mgnlMoveNodeCollection && tmp[1]!=mgnlMoveNode)
            {
            //same container list and not the container to move: highlight this bar
            mgnlMoveNodeSetClassName(bar,"MOUSEOVER");
            var divDenied=document.getElementById('mgnlMoveDivDenied');
            divDenied.style.visibility='hidden';
            var divAllowed=document.getElementById('mgnlMoveDivAllowed');
            divAllowed.style.visibility='visible';
            }
        }
    }

function mgnlMoveNodeReset(bar)
    {
    tmp=bar.id.split('__');
    if (mgnlMove)
        {
        if (tmp[0]==mgnlMoveNodeCollection)
            {
            //same containre list
            if (tmp[1]!=mgnlMoveNode)
                {
                //not the container to move: reset this bar
                mgnlMoveNodeSetClassName(bar,"NORMAL");
                }
            var divDenied=document.getElementById('mgnlMoveDivDenied');
            divDenied.style.visibility='visible';
            var divAllowed=document.getElementById('mgnlMoveDivAllowed');
            divAllowed.style.visibility='hidden';
            }
        }
    }

 function mgnlMoveNodeEnd(bar,path)
    {
    if (mgnlMove)
        {
        var tmp=bar.id.split('__');
        if (mgnlMoveNodeCollection==tmp[0] && mgnlMoveNode!=tmp[1])
            {
            //same container list and not container to move
            mgnlMoveNodeSetClassName(bar,"PUSHED");
            var href=document.location.href;
            var pathSelected=path+"/"+mgnlMoveNodeCollection+"/"+mgnlMoveNode;
            var pathSortAbove=path+"/"+mgnlMoveNodeCollection+"/"+tmp[1];


            //'MoveNodeCollection='+mgnlMoveNodeCollection+'&MoveNode='+mgnlMoveNode+'&MoveNodeAbove='+tmp[1]+'&path='+path+'&actions=moveNode';
            //var href='/.CMSadmin/tagRequestHandler.html?MoveNodeCollection='+mgnlMoveNodeCollection+'&MoveNode='+mgnlMoveNode+'&MoveNodeAbove='+tmp[1]+'&path='+path+'&actions=moveNode';
            href=mgnlUpdateCK(href)

            href=mgnlRemoveParameter(href,"mgnlIntercept");
            href=mgnlAddParameter(href,"mgnlIntercept","NODE_SORT");

            href=mgnlRemoveParameter(href,"mgnlPathSelected");
            href=mgnlAddParameter(href,"mgnlPathSelected",pathSelected);

            href=mgnlRemoveParameter(href,"mgnlPathSortAbove");
            href=mgnlAddParameter(href,"mgnlPathSortAbove",pathSortAbove);

            document.location.href=href;
            }
        }
    }




/**
 *
 * Magnolia and its source-code is licensed under the LGPL.
 * You may copy, adapt, and redistribute this file for commercial or non-commercial use.
 * When copying, adapting, or redistributing this document in keeping with the guidelines above,
 * you are required to provide proper attribution to obinary.
 * If you reproduce or distribute the document without making any substantive modifications to its content,
 * please use the following attribution line:
 *
 * Copyright 1993-2006 obinary Ltd. (http://www.obinary.com) All rights reserved.
 *
 */

// we can not use package command yet: make sure that the var mgnl exists
var mgnl = mgnl ? mgnl : new Object();

// used to set the browser flags
var agent = navigator.userAgent.toLowerCase() ;

/**
 * This is the main class which must be loaded to use the importClass method.
 */
MgnlRuntime = mgnl.Runtime = {

    /**
     * This flag is false if all classes are loaded in one file in a final version.
     */
    loadingOn: true,

    /**
     * If one script is loading synchronized. The others mast load synchronized too.
     */
    loadSynchronized: false,

    /**
     * Remember allready loaded scripts (do not load twice)
     */
    loaded: new Object(),

    /**
     * Check the browser
     */
    isIE       : ( agent.indexOf("msie") != -1 ),
    isGecko    : !( agent.indexOf("msie") != -1 ),     // Firefox and others
    isSafari   : ( agent.indexOf("safari") != -1 ),
    isNetscape : ( agent.indexOf("netscape") != -1 ),

    /**
     * Creates the package object structure if not yet existing and register the class.
     * classDef(name, object)
     * classDef(name, constructor, [members], [static])
     * classDef(name, superClass, constructor, [members], [static])
     * @param name the full name (including the class name)
     * @param superKlass (optional) the supper class or an object used as prototype
     * @param klass a constructor or an object defining the class
     * @param members (optional) an object containing the members (methods/properties)
     * @param statics (optional) an object containing the static members
     */
    classDef: function(name, superKlass, klass, members, statics ){
        var names = name.split(".");
        var current = window;

        // if super was not passed change the parameters
        if(arguments.length <= 2 || typeof klass != "function"){
            statics = members;
            members = klass;
            klass = superKlass;
            superKlass = null;
        }

        if(superKlass){
            // if this is a constructor
            if(typeof superKlass == "function"){
                klass.superKlass = superKlass;

                // clone prototype of the supper
                for (var property in klass.superKlass.prototype) {
                    klass.prototype[property] = klass.superKlass.prototype[property];
                }

                // add nice shortcut to call the super method(s)
                klass.prototype.parentConstructor = function(){
                    // remember latest constructor to follow the chain
                    var superKlass = klass.superKlass;
                    if(this.nextSuperKlass){
                        superKlass = this.nextSuperKlass;
                    }
                    this.nextSuperKlass = superKlass.superKlass;
                    superKlass.apply(this, arguments);
                }
            }
            // in case this is an object
            else{
                klass.prototype = superKlass;
            }
        }

        // create package structure
        for(i=0; i<names.length; i++){
            var varName = names[i];
            if(i == names.length -1){
                current[varName] = klass;
            }
            else if(current[varName] == null){
                current[varName] = new Object;
            }
            current = current[varName];
        }

        // add the the class name
        if(klass.prototype){
            klass.prototype._class = name;
        }
        else{
            klass._class = name;
        }

        // add members (prototype)
        if(members){
            for (var property in members) {
                klass.prototype[property] = members[property];
            }
        }

        // add statics
        if(statics){
            for (var property in statics) {
                klass[property] = statics[property];
            }
        }

        return klass;
    },

    /**
     * Loads a script if needed and make the class avaiable under it's name. A
     * shortcut with a Mgnl prefix is created. Set sync = true if you load
     * a script after the page was loaded.<b>
     * Pest practise
     * <ul>
     *  <li>load scripts in the header
     *  <li>start using them in the onload method
     * </ul>
     * @see the load functions documentation
     */
    importClass: function(name, sync){
        var names = name.split(".");
        var className = names[names.length-1];

        if(!this.existVariable(name)){
            if(this.loadingOn){
                var url = name.replace(/\./g,"/");
                // load the script and set the shortcut after the script is loaded
                this.load(contextPath + "/admindocroot/js/classes/" + url + ".js", sync,
                    function(){
                        window["Mgnl" + className] = eval(name);
                    }
                 );
             }
             else{
                alert('not imported class [' + name + ']');
             }
        }
        // make sure that the shortcut exists
        else{
            window["Mgnl" + className] = eval(name);
        }
    },

    /**
     * Checks savely if this variable exists or not.
     */
    existVariable: function(name){
        try{
            var test = eval(name);
            if(test != null){
                return true;
            }
        }
        catch(e){
        }
        return false;
    },

    /**
     * This method loads a script dynamically. Set sync only to true if you load
     * a script after the page was loaded. If you load scripts in the header you
     * and use them after the onload event is fired (in the onload method for example)
     * you can savely load in the faster async mode.
     *
     * @param url the url to load (must be a javascript)
     * @param sync true if the method should wait until the script was loaded (optional)
     * @param callback the method called after async call (optional)
     */
    load: function(url, sync, callback){
        if(this.loaded[url] == null){
            // do not load twice, but is not yet loaded
            this.loaded[url]=false;

            // if this is a synchronized call we must synchronize until this is finished
            var oldSynchronization;
            if(sync){
                oldSynchronization = this.loadSynchronized;
                this.loadSynchronized = true;
            }
            else{
                sync = this.loadSynchronized;
            }

            this.debug("load " + url + "(snc: " + sync + ")");

            // save this for the follwing function
            var myRuntime = this;

            // create the function called after the script is loaded
            var onLoad =  function(){
                myRuntime.loaded[url] = true;

                // set to the original mode again
                if(oldSynchronization != null){
                    myRuntime.loadSynchronized = oldSynchronization;
                }

                // call callback function
                if(callback){
                    callback();
                }
            }

           // in safari we must make a sync AJAX call
           // ie does not give a onload event if the page is already loaded
           // therfore we make a AJAX call if the page was loaded
           if(sync || this.isSafari || (this.isIE && document.readyState == "complete")){

                var xmlRequest;
                if(this.isIE){
                    try{
                        xmlRequest = new ActiveXObject('Msxml2.XMLHTTP');
                    }
                    catch(e){
                            xmlRequest = new ActiveXObject('Microsoft.XMLHTTP');
                    }
                }
                else{
                    xmlRequest = new XMLHttpRequest() ;
                }

                // Load the script synchronously.
                xmlRequest.open( "GET", url, false ) ;
                xmlRequest.send( null ) ;

                // Evaluate the script.
                if ( xmlRequest.status == 200 ){
                    try{
                        eval( xmlRequest.responseText ) ;
                        onLoad();

                    }
                    catch ( e ){
                        alert( 'Error parsing ' + url + ': ' + e.message ) ;
                    }
                }
                else{
                    alert( 'Error loading ' + url ) ;
                }
           }

           // async load
           else{
               var e = document.createElement("script");
               e.src = url;
               e.type="text/javascript";

               e.onload = e.onreadystatechange = function (){
                    // Gecko doesn't have a "readyState" property
                    if ( !this.readyState || this.readyState == 'loaded' ){
                        onLoad();
                    }
               }
               document.getElementsByTagName("head")[0].appendChild(e);
           }
       }
    },

    /**
     * Cache for not yet printed messages
     */
    notYetDebuged: new Array(),

    /**
     * Debug the message. Check if the debug class is already loaded. If not cache.
     */
    debug: function(msg, o ,level){
        if(window.MgnlDebug){
            if(notYetDebugged.length>0){
                for(i=0; i < notYetDebugged.length; i++){
                    MgnlDebug.debug(notYetDebuged[i].msg, this, notYetDebuged[i].o, notYetDebuged[i].level);
                }
                notYetDebugged = new Array();
            }
            MgnlDebug.debug(msg, this, o, level);
        }
        else{
            notYetDebuged.append({msg: msg, o:o, level:level});
        }
    }

};

// define shortcuts: the wrapping function is used to save the this variable
classDef = function(name, superKlass, klass, members, statics){mgnl.Runtime.classDef(name, superKlass, klass, members, statics)};
importClass = function(name, sync){mgnl.Runtime.importClass(name,sync)};

// define this class properly
classDef("mgnl.Runtime", MgnlRuntime);
MgnlRuntime.loadingOn=false;
/**
 *
 * Magnolia and its source-code is licensed under the LGPL.
 * You may copy, adapt, and redistribute this file for commercial or non-commercial use.
 * When copying, adapting, or redistributing this document in keeping with the guidelines above,
 * you are required to provide proper attribution to obinary.
 * If you reproduce or distribute the document without making any substantive modifications to its content,
 * please use the following attribution line:
 *
 * Copyright 2008 obinary Ltd. (http://www.obinary.com) All rights reserved.
 *
 */
classDef("mgnl.admininterface.Dialog",
    {
        open: function(dialogName, repository, path, nodeName){
            mgnlOpenDialog(path, null , nodeName, null, repository, ".magnolia/dialogs/" + dialogName + ".html");
        }
    }
);
/**
 *
 * Magnolia and its source-code is licensed under the LGPL.
 * You may copy, adapt, and redistribute this file for commercial or non-commercial use.
 * When copying, adapting, or redistributing this document in keeping with the guidelines above,
 * you are required to provide proper attribution to obinary.
 * If you reproduce or distribute the document without making any substantive modifications to its content,
 * please use the following attribution line:
 *
 * Copyright 1993-2006 obinary Ltd. (http://www.obinary.com) All rights reserved.
 *
 */
 
 /**
  * 
  */
 classDef("mgnl.admininterface.VersionsList", function(onShowItem){
 
    /**
     * The current selected items version label
     */
    this.currentVersionLabel = null;

    /**
     * The function called to show the lists item
     */
    this.onShowItem = onShowItem;
    
    this.restore = function(versionLabel){
        versionLabel = versionLabel==null ? this.currentVersionLabel : versionLabel;
        document.mgnlForm.command.value="restore";
        document.mgnlForm.versionLabel.value=versionLabel;
        document.mgnlForm.submit();
    };

    this.showItem = function(versionLabel){
        versionLabel = versionLabel==null ? this.currentVersionLabel : versionLabel;
        // on show must be set by the user of this class
        onShowItem(versionLabel);
    };

 });
 
/**
 * Show versions of a page
 */
mgnl.admininterface.VersionsList.show = function(repository, path){
    url = "/.magnolia/pages/" + repository + "VersionsList.html";
    url = MgnlURLUtil.addParameter(url, "repository", repository);
    url = MgnlURLUtil.addParameter(url, "path", path);
    
    mgnlOpenWindow(url, 1000, 600);
};
/**
 *
 * Magnolia and its source-code is licensed under the LGPL.
 * You may copy, adapt, and redistribute this file for commercial or non-commercial use.
 * When copying, adapting, or redistributing this document in keeping with the guidelines above,
 * you are required to provide proper attribution to obinary.
 * If you reproduce or distribute the document without making any substantive modifications to its content,
 * please use the following attribution line:
 *
 * Copyright 1993-2006 obinary Ltd. (http://www.obinary.com) All rights reserved.
 *
 */
importClass("mgnl.admininterface.VersionsList");

classDef("mgnl.admininterface.WebsiteTree", {

    showVersions: function(tree){
        mgnl.admininterface.VersionsList.show('website', tree.selectedNode.path);
    },
    
    search: function(value){
        document.location = contextPath +"/.magnolia/pages/websiteSearchList?searchStr=" + value;
    }
            
});

classDef("mgnl.admininterface.Tree", {

    showVersions: function(repo, tree){
        mgnl.admininterface.VersionsList.show(repo, tree.selectedNode.path);
    },
    
    search: function(value){
        document.location = contextPath +"/.magnolia/pages/websiteSearchList?searchStr=" + value;
    }
            
});
/**
 *
 * Magnolia and its source-code is licensed under the LGPL.
 * You may copy, adapt, and redistribute this file for commercial or non-commercial use.
 * When copying, adapting, or redistributing this document in keeping with the guidelines above,
 * you are required to provide proper attribution to obinary.
 * If you reproduce or distribute the document without making any substantive modifications to its content,
 * please use the following attribution line:
 *
 * Copyright 1993-2006 obinary Ltd. (http://www.obinary.com) All rights reserved.
 *
 */

classDef("mgnl.util.Debug", {

    /**
     * True if the debuggin is working
     */
    on: false,

    /**
     * the context which can be switched on and of
     */
    contextes : {
        "mgnl.Runtime": true,
        tree: true,
        dialog: true,
        acl: true,
        debug: true
    },

    debug: function(msg, context, o, level){
        if(!this.on)
            return;
        if(!level)
            level = 1;
        
        if(context && context._class)
            context=context._class;
            
        // is the context in debug mode?
        if(context != null && (this.contextes[context] == null || !this.contextes[context]))
            return;
            
        var console = this.getRootWindow().mgnlDebugConsole;

        var doc = null;
        // create new window if not allready done
        if(console == null){
            console = window.open('','mgnlDebugConsole');
            this.getRootWindow().mgnlDebugConsole = console;
            doc = console.document;
            doc.write('<html><body><input type="button" value="Clear" onclick="document.getElementById(\'consoleDiv\').innerHTML=\'\';" > <p>');
            doc.write('<div id="consoleDiv" style="font-family: sans-serif; font-size: 10pt">');
            doc.write('</div></body></html>');
            doc.close();
            
            // reset the focus
            window.focus();
        }
        else{
            doc = console.document;
        }
        
        if(doc == null)
            return;
        
        // get the div to write in
        var div = doc.getElementById('consoleDiv');
        
        if(o){
            msg += ":" + this.debugObject(o, level, "");
        }
        
        if(context != null)
            msg = context + ": " + msg;
            
        div.appendChild(doc.createTextNode(msg));
        div.appendChild(doc.createElement("br"));
    },
    
    /**
     * Write out the objects values
     * @obj the object to debug
     * @param level level of recursion (default is 1)
     * @spaces used for the recursion to shift the content
     */
    debugObject: function(o, level, spaces){
        var res = "";
        switch(typeof o){
            case "object":
                if(level<=0)
                    return "object";
                res = "<br>" + spaces + "{<br>";
                for(var key in o){
                    if(!res.match(/\{<br>$/))
                        res += ",<br>";
                    res += spaces + "&nbsp;&nbsp;&nbsp;" + key + ":";
                    res += this.debugObject(o[key], level-1, spaces + "&nbsp;&nbsp;&nbsp;"); 
                }
                res += "<br>" + spaces + "}";
                break;
            case "function":
                return "function"
                break;
            
            default:
                return o;
        }
        return res;
    },
    
    /**
     * Copied from the dhtml util to avoid dependencies
     */
    getRootWindow: function(current){
        current = current?current:window;
        
        if(current.top != current)
            return this.getRootWindow(current.top);
        if(current.opener != null)
            return this.getRootWindow(current.opener);
        return current;
    }
});
/**
 *
 * Magnolia and its source-code is licensed under the LGPL.
 * You may copy, adapt, and redistribute this file for commercial or non-commercial use.
 * When copying, adapting, or redistributing this document in keeping with the guidelines above,
 * you are required to provide proper attribution to obinary.
 * If you reproduce or distribute the document without making any substantive modifications to its content,
 * please use the following attribution line:
 *
 * Copyright 1993-2006 obinary Ltd. (http://www.obinary.com) All rights reserved.
 *
 */

classDef("mgnl.controls.FunctionBar", MgnlFunctionBar);

MgnlFunctionBar.classActive = 'mgnlFunctionBarButton';
MgnlFunctionBar.classInactive = 'mgnlFunctionBarButtonInactive';

function MgnlFunctionBar (name, active, iconActive, iconInactive, onClick) {
    var parent = null;
    var nodes = new Array ();
    var img = null;
    var td = null;
    var div = null;
    var conditions = new Array ();

    this.addNode = function (name, active, iconActive, iconInactive, onClick) {
        var n = new MgnlFunctionBar (name, active, iconActive, iconInactive, onClick);
        n.setParent (this);
        nodes.push (n);
    }

    this.refresh = function () {
        if (parent != null) {
            // div must be present, img not necesseraly
            if (div == null) {
                td = document.getElementById (this.getFullName ());
                div = document.getElementById (this.getFullName () + '_div');
                img = document.getElementById (this.getFullName () + '_img');
            }
            // determine the items state using javascript conditions
            active = true;
            for (var i = 0; i < conditions.length; i++) {
                //var condition = eval (conditions[i]);
                condition = conditions[i];

                var testResult;
                if(typeof condition == "function"){
                    testResult = condition();
                }
                else{
                    testResult = condition.test();
                }

                active = (active && testResult);
            }
            // set icon and css-class corresponding to the nodes state
            if (active) {
                if (img) img.src = iconActive;
                td.className = MgnlFunctionBar.classActive;
            }
            else {
                if (img) img.src = iconInactive;
                td.className = MgnlFunctionBar.classInactive;
            }
        }
        for (var i = 0; i < nodes.length; i++) {
            nodes[i].refresh ();
        }
    }

    this.getName = function () {
        return name;
    }

    this.getParent = function () { return parent; }

    this.setParent = function (p) { parent = p; }

    this.getFullName = function () {
        if (parent != null) {
            return (parent.getFullName () + '_' + this.getName ());
        }
        else return this.getName ();
    }

    this.getNode = function (nodeName) {
        var n = this.getNodes ();
        if (this.getName () == nodeName) return this;
        for (var i = 0; i < n.length; i++) {
            var ret = n[i].getNode (nodeName);
            if (ret) return ret;
        }
        return null;
    }

    this.getNodes = function () {
        return nodes;
    }

    this.setActive = function (nodeName, state) {
        if (this.getName () == nodeName) {
            active = state;
        }
        else {
            var n = this.getNode (nodeName);
            if (n) n.setActive (nodeName, state);
        }
    }

    this.isActive = function () { return active; }

    this.getOnClick = function () { return onClick; }

    this.addCondition = function (condition) {
        conditions.push (condition);
    }

    this.clicked = function (nodeName) {
        var n = this.getNode (nodeName);
        // only execute if node is found and node is active
        if (n && n.isActive ()) {
            var c = n.getOnClick ();
            if (c) {
                var f = new Function ('a ', c + '');
                f();
            }
        }
    }
}

/**
 *
 * Magnolia and its source-code is licensed under the LGPL.
 * You may copy, adapt, and redistribute this file for commercial or non-commercial use.
 * When copying, adapting, or redistributing this document in keeping with the guidelines above,
 * you are required to provide proper attribution to obinary.
 * If you reproduce or distribute the document without making any substantive modifications to its content,
 * please use the following attribution line:
 *
 * Copyright 1993-2006 obinary Ltd. (http://www.obinary.com) All rights reserved.
 *
 */
 
 /**
  * Functions to handle the js in the website search result
  */
 classDef("mgnl.admininterface.WebsiteSearchList", {
    selected: null,
    
    search: function(value){
        $('searchStr').value = value;
        document.mgnlForm.submit();
    },
    
    show: function(){
        var url= contextPath + this.selected + ".html";
        var w = window.open(url, "mgnlInline", "");
            if (w) w.focus();
    },
    
    navigate: function(){
        MgnlAdminCentral.showTree('website', this.selected);
    }
 });
/**
 *
 * Magnolia and its source-code is licensed under the LGPL.
 * You may copy, adapt, and redistribute this file for commercial or non-commercial use.
 * When copying, adapting, or redistributing this document in keeping with the guidelines above,
 * you are required to provide proper attribution to obinary.
 * If you reproduce or distribute the document without making any substantive modifications to its content,
 * please use the following attribution line:
 *
 * Copyright 1993-2006 obinary Ltd. (http://www.obinary.com) All rights reserved.
 *
 */
 
classDef("mgnl.controls.ListColumn", function (list, width, index){

    this.list = list;

    this.index = index;
    
    this.fixed;
    
    this.width;
    
    this.cssClass = mgnl.util.DHTMLUtil.getCSSClass(list.name + "CssClassColumn" + index);
    
    this.line = $(list.name + "ColumnLine" + index);
    
    this.resizer = $(list.name + "ColumnResizer" + index);

    this.list.columns[index] = this;
    
    if(width.indexOf("px")!=-1){
        this.width = parseInt(width.substr(0, width.length-2));
        this.fixed=true;
    }
    else{
        this.width = parseInt(width);
        this.fixed=false;
    }
    
    this.resize = function(left, width){
        this.cssClass.style.left = left + "px";
        this.cssClass.style.width = width;
        this.cssClass.style.clip="rect(0 " + width + " 20 0)";
        
        if(this.resizer){
            this.resizer.style.left = left + "px";
        }
        if(this.line){
            this.line.style.left = (left + 5) + "px";
            this.line.style.height = (this.list.height - 20) + "px";
        }
        this.width = width;
        this.left = left;
    }
 });
/**
 *
 * Magnolia and its source-code is licensed under the LGPL.
 * You may copy, adapt, and redistribute this file for commercial or non-commercial use.
 * When copying, adapting, or redistributing this document in keeping with the guidelines above,
 * you are required to provide proper attribution to obinary.
 * If you reproduce or distribute the document without making any substantive modifications to its content,
 * please use the following attribution line:
 *
 * Copyright 1993-2006 obinary Ltd. (http://www.obinary.com) All rights reserved.
 *
 */

classDef("mgnl.controls.List",

    // contstuctor
    function(name, form){
        this.name = name;
        this.form = form;

        // the row of the list
        this.selected = -1;

        this.mainDiv = $(name + "Div");
        this.sortGroupDiv = $(name + "SortGroupDiv");
        this.contentDiv = $(name + "ContentDiv");
        this.innerContentDiv = $(name + "InnerContentDiv");
        this.resizerLine = $(name + "ColumnResizerLine");

        this.columns = new Array();

        this.items = new Object();
    },

    // members
    {

        // css classes used
        css: {
            row:{
                selected: 'mgnlListRowSelected',
                hover: 'mgnlListRowHover',
                normal: 'mgnlListRow'
            }
        },

        addColumn: function(column){
            this.columns.push(column);
        },

        select: function(index, id){
            this.unselect();
            this.selected = index;

            var row = $(this.name + 'Row' + this.selected);
            row.className = this.css.row.selected;

            // refresh function bar if any
            if(window["mgnlFunctionBar"]){
                window["mgnlFunctionBar"].refresh();
            }
        },

        unselect: function(){
            if(this.selected == -1)
                return;
            var row = $(this.name + 'Row' + this.selected);
            row.className= this.css.row.normal;
            this.selected = -1;
        },

        show: function(){
            alert(this.getSelectedItem().id);
        },

        getSelectedItem: function(){
            return this.items[this.selected];
        },

        startResizeColumn: function(index){
            this.resizerLine.style.visibility="visible";
            this.resizerLine.style.left = this.columns[index].left + 5;
            this.resizerLine.style.height = this.height;
            var list = this;

            this.contentDiv.onmousemove = function(event){
                    list.onResizeColumn(event, index);
            };

            this.contentDiv.onmouseup = function(event){
                    list.stopResizeColumn(event, index);
            };

            mgnl.util.Debug.debug("start column resizing");
        },

        onResizeColumn: function(event, index){
            var pos = mgnl.util.DHTMLUtil.getMousePos(event);
            this.resizerLine.style.left = pos.x-1;
        },

        stopResizeColumn: function(event, index){
            var newLeft = mgnl.util.DHTMLUtil.getMousePos(event).x -6;
            var column = this.columns[index];

            column.resize(newLeft, column.width + (column.left - newLeft));
            // resize also column to the left
            if(index >= 1){
                column = this.columns[index-1];
                column.resize(column.left, newLeft -column.left);
            }

            this.resizerLine.style.visibility="hidden";
            this.contentDiv.onmousemove = null;
            this.contentDiv.onmouseup = null;

            mgnl.util.Debug.debug("stop column resizing");
        },

        mouseover: function(id){
            if(id != this.selected){
                var row = $(this.name + 'Row' + id);
                row.className= this.css.row.hover;
            }
        },

        mouseout: function(id){
            if(id != this.selected){
                var row = $(this.name + 'Row' + id);
                row.className= this.css.row.normal;
            }
        },

        resize: function(){
            this.height = MgnlDHTMLUtil.getHeight(this.mainDiv);
            this.width = MgnlDHTMLUtil.getWidth(this.mainDiv);

            if(this.sortGroupDiv){
                var sortWidth = MgnlDHTMLUtil.getWidth(this.sortGroupDiv);
                this.sortGroupDiv.style.left = this.width - sortWidth + "px";
                this.sortGroupDiv.style.height = this.height -1 + "px";
                this.sortGroupDiv.style.visibility = "visible";
                this.width -= sortWidth;
            }

            MgnlDebug.debug("new total widht:" + this.width, this);

            MgnlDHTMLUtil.setWidth(this.contentDiv, this.width);
            MgnlDHTMLUtil.setHeight(this.contentDiv, this.height);
            this.innerContentDiv.style.height = this.height - 20;

            // columns
            var factor = this.getWidthFactor(this.width);
            MgnlDebug.debug("factor is:" +factor, this);
            left=0;
            for(i=0; i< this.columns.length;i++){
                var column = this.columns[i];
                var newColumnWidth;
                if(column.fixed){
                    newColumnWidth  = column.width;
                }
                else{
                    newColumnWidth  = factor * column.width;
                }
                column.resize(left, newColumnWidth)
                left += newColumnWidth; // next start
            }
        },

        /**
        * Calculate the factor to use for resizing the dynamic columns.
        */
        getWidthFactor: function(){
            var sum = 0;
            var fixSum = 0;
            for(i=0; i<this.columns.length; i++){
                if(!this.columns[i].fixed){
                    sum += this.columns[i].width;
                }
                else{
                    fixSum += this.columns[i].width;
                }
            }
            // this subtraction is found due experiments
            return (this.width - fixSum - 2*this.columns.length - 4) / sum;
        },

        sort: function(name, direction){
            this.form.sortBy.value = name;
            this.form.sortByOrder.value = direction;
            this.form.submit();
        },

        group: function(name, direction){
            this.form.groupBy.value = name;
            this.form.groupByOrder.value = direction;
            this.form.submit();
        },

        search: function(value){
            this.form.searchStr.value = value;
            this.form.submit();
        },

        isSelected: function(){
            return this.selected != -1;
        }
    }
);
/**
 *
 * Magnolia and its source-code is licensed under the LGPL.
 * You may copy, adapt, and redistribute this file for commercial or non-commercial use.
 * When copying, adapting, or redistributing this document in keeping with the guidelines above,
 * you are required to provide proper attribution to obinary.
 * If you reproduce or distribute the document without making any substantive modifications to its content,
 * please use the following attribution line:
 *
 * Copyright 1993-2006 obinary Ltd. (http://www.obinary.com) All rights reserved.
 *
 */
 

/**
 * This class exist only to find the check easely since they are in the Runtime itself.
 */
classDef("mgnl.util.BrowserCheck", {
    isIE            : mgnl.Runtime.isIE,
    // Firefox and others
    isGecko     : !( agent.indexOf("msie") != -1 ),
    isSafari    : ( agent.indexOf("safari") != -1 ),
    isNetscape  : ( agent.indexOf("netscape") != -1 )
});


/**
 *
 * Magnolia and its source-code is licensed under the LGPL.
 * You may copy, adapt, and redistribute this file for commercial or non-commercial use.
 * When copying, adapting, or redistributing this document in keeping with the guidelines above,
 * you are required to provide proper attribution to obinary.
 * If you reproduce or distribute the document without making any substantive modifications to its content,
 * please use the following attribution line:
 *
 * Copyright 1993-2006 obinary Ltd. (http://www.obinary.com) All rights reserved.
 *
 */
importClass("mgnl.util.BrowserCheck");

/**
 * Util to get the window size, inner document of IFrames and similar things
 */
classDef("mgnl.util.DHTMLUtil", {

    /**
     * Returns the an object containing a .w and .h property
     */
    getWindowSize: function()   {
        var obj=new Object();
        if( typeof (window.innerWidth) == 'number' ){
            //Non-IE
            obj.w=window.innerWidth;
            obj.h=window.innerHeight;
        }
        else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight ) ){
            //IE 6+ in 'standards compliant mode'
            obj.w=document.documentElement.clientWidth;
            obj.h=document.documentElement.clientHeight;
        }
        else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ){
            //IE 4 compatible
            obj.w=document.body.clientWidth;
            obj.h=document.body.clientHeight;
        }
        return obj;
    },

    /**
     * Returns the inner document of an iframe
     */
    getIFrameDocument: function(iFrameName){
        if ($(iFrameName))
            return $(iFrameName).contentDocument;
        else
            if (document.frames && document.frames[iFrameName])
            return document.frames[iFrameName].document;
        else
                return null;
    },

    /**
     * Get the x position of the element
     */
    getPosX: function(obj){
        if (!obj) return 0;

          var x=document.body.scrollLeft;
          while (obj.offsetParent){
              x+=obj.offsetLeft;
              obj=obj.offsetParent;
          }
        return x;
    },

    /**
     * Get the y position of the element
     */
    getPosY: function(obj){
        if (!obj)
            return 0;

        var y=document.body.scrollTop;
          while (obj.offsetParent){
              y+=obj.offsetLeft;
              obj=obj.offsetParent;
          }
        return y;
    },

    /**
     * Get .x and .y of the mouse event (if scrolled)
     */
    getMousePos: function(event){
        var pos=new Object();
        if (document.all){
            pos.x=window.event.clientX + document.body.scrollLeft;
            pos.y=window.event.clientY + document.body.scrollTop;
        }
        else{
            pos.x=event.pageX;
            pos.y=event.pageY;
        }
        return pos;
    },

    /**
     * Get the root window (including opener)
     * @param current current window (optional)
     */
    getRootWindow: function(current){
        current = current?current:window;

        if(current.top != current)
            return this.getRootWindow(current.top);
        if(current.opener != null)
            return this.getRootWindow(current.opener);
        return current;
    },

    findVariable:  function(name, current){
        current = current?current:window;
        if(current[name]!=null)
            return current[name];

        if(current.top != current)
            return this.findVariable(name, current.top);
        if(current.opener != null)
            return this.findVariable(name, current.opener);
        return null;
    },

    /**
     * Hide the element
     */
    hide: function(element){
        element.style.visibility='hidden';
        element.style.display='none';
    },

    /**
     * Show the element
     */
    show: function(element){
        element.style.visibility='visible';
        element.style.display='block';
    },

    addOnLoad: function(handler){
        var orgHandler = window.onload;
        window.onload = function(){
            if(orgHandler)
                orgHandler();
            handler();
        };
    },

    addOnResize: function(handler){
        var orgHandler = window.onresize;
        window.onresize = function(){
            if(orgHandler)
                orgHandler();
            handler();
        };
    },

    getHeight: function(element){
        return element.offsetHeight;
    },

    /**
     * Get the width including borders, margins, ...
     */
    getWidth: function(element){
        return element.offsetWidth;
    },

    /**
     * Set the width. In case of borders this width includes the borders.
     */
    setWidth: function(element, width){
        // a very simple first approach
        var border = 0;
        if(element.style.borderLeftStyle && element.style.borderLeftStyle != "hidden"){
            border +=1;
        }
        if(element.style.borderRightStyle && element.style.borderRightStyle != "hidden"){
            border +=1;
        }
        element.style.width = width - border;
    },

    setHeight: function(element, height){
        // a very simple first approach
        var border = 0;
        if(element.style.borderTopStyle && element.style.borderTopStyle != "hidden"){
            border +=1;
        }
        if(element.style.borderBottomStyle && element.style.borderBottomStyle != "hidden"){
            border +=1;
        }
        element.style.height = height - border;
    },


    getCSSClass: function(name){
        var rulesKey;
        if (document.all){
            rulesKey="rules";
        }
        else if (document.getElementById){
            rulesKey="cssRules";
        }
        for (var elem0 = document.styleSheets.length-1; elem0>=0; elem0--) {
            var rules=document.styleSheets[elem0][rulesKey];

            //for (var elem1 in rule) //does not work in firebird 0.8, safari 1.2
            for (var elem1=0; elem1<rules.length; elem1++){
                var cssClass=rules[elem1].selectorText;
                // in safar 1.3 the selectorText is in lower case
                if (cssClass && cssClass.toLowerCase().indexOf("." + name.toLowerCase())!=-1){
                    return rules[elem1];
                }
            }
        }
    }

});

/**
 *
 * Magnolia and its source-code is licensed under the LGPL.
 * You may copy, adapt, and redistribute this file for commercial or non-commercial use.
 * When copying, adapting, or redistributing this document in keeping with the guidelines above,
 * you are required to provide proper attribution to obinary.
 * If you reproduce or distribute the document without making any substantive modifications to its content,
 * please use the following attribution line:
 *
 * Copyright 1993-2006 obinary Ltd. (http://www.obinary.com) All rights reserved.
 *
 */

 /**
  * This is a Util to create proper urls
  */
classDef( "mgnl.util.URLUtil", {
    
    /**
     * Used to construct everytime a new url so that it is impossilbe to cache the site
     */
    getCacheKiller: function() {
            var now = new Date();
            return now.getTime();
    },
    
    /**
     * Add a parameter to the url so that it is impossilbe to cache the site
     */
    addCacheKiller: function(url) {
        return this.addParameter(url, "mgnlCK", this.getCacheKiller());
    },

    /**
     * Add a parameter to the url
     */
    addParameter: function(href, name, value) {
        var delimiter;
        if (href.indexOf("?")==-1)
             delimiter="?";
        else 
            delimiter="&";
        return href+delimiter+name+"="+value;
    },

    /** 
     * remove the parameter from an url
     */
    removeParameter: function(href, name){
        //works only for a single paramter

        var tmp = href.split("?");
    
        var newHref=tmp[0];
        var query= new Array();
        if (tmp[1]) {
            var paramObj=tmp[1].split("&");
    
            for (var i=0;i<paramObj.length;i++) {
                if (paramObj[i].indexOf(name+"=")!=0) {
                        query.push(paramObj[i]);
                }
            }
        }
            
        if(query.length > 0) {
            newHref += "?";
                
            for(var i=0; i < query.length; i++) {
                newHref += query[i];
                    
                if(i + 1 < query.length) {
                    newHref += "&";
                }
            }
        }
        
        return newHref;
    },
    
    /**
     * Is this an external URL containing ://
     */
     isExternal: function(url){
        return url.indexOf("://") != -1;
     }
 });
 
/**
 *
 * Magnolia and its source-code is licensed under the LGPL.
 * You may copy, adapt, and redistribute this file for commercial or non-commercial use.
 * When copying, adapting, or redistributing this document in keeping with the guidelines above,
 * you are required to provide proper attribution to obinary.
 * If you reproduce or distribute the document without making any substantive modifications to its content,
 * please use the following attribution line:
 *
 * Copyright 1993-2006 obinary Ltd. (http://www.obinary.com) All rights reserved.
 *
 */

importClass("mgnl.util.DHTMLUtil");
importClass("mgnl.util.URLUtil");
importClass("mgnl.util.Debug");

/**
 * This is the singleton object defining the admin central
 **/
classDef("mgnl.admininterface.AdminCentral", MgnlAdminCentral);

function MgnlAdminCentral(){

    // only one instance is allowed
    window.mgnlAdminCentral = this;

    this.divContent = $("mgnlAdminCentralContentDiv");
    this.divScrolledContent = $("mgnlAdminCentralScrolledContentDiv");
    this.divMenu = $("mgnlAdminCentralMenuDiv");
    this.divMessageBox = $("mgnlAdminCentralMessageBoxDiv");
    this.divFooter =$('mgnlAdminCentralFooterDiv');
    this.iframeContent = $("mgnlAdminCentralContentIFrame");
    this.iframeScrolledContent = $("mgnlAdminCentralScrolledContentIFrame");

    /**
     * Used if this instance is called from an other window
     */
    this.window = window;

    /**
     * Set message displayed below the menu
     */
    this.setMessage = function(msg, className){
        this.divMessageBox.innerHTML = msg;
        this.divMessageBox.className = className;
        MgnlDHTMLUtil.show(this.divMessageBox);
    }

    this.resetMessage = function(){
        this.divMessageBox.innerHTML = "";
        MgnlDHTMLUtil.hide(this.divMessageBox);
    }

    /**
     * Resize
     */
    this.resize = function(){
        if (this.divContent && this.divMenu){
            var sizeObj=mgnlGetWindowSize();

            var h=sizeObj.h-60-25;
            var w=sizeObj.w-195-20;

            this.divMenu.style.height=h + "px";

            this.divContent.style.width=w + "px";
            this.divContent.style.height=h + "px";
            this.divScrolledContent.style.width=w + "px";
            this.divScrolledContent.style.height=h + "px";

            this.iframeContent.style.height=(h+2) + "px";
            this.iframeScrolledContent.style.height=(h+2) + "px";

            // set the position of the footer
            this.divFooter.style.top = (sizeObj.h - 17) + "px";
            this.divFooter.style.width = w + "px";
        }
    };

    /**
     * Show the url in the content div (iframe)
     * @param url the url to call
     * @param border set a border on the div
     * @param scrolled show scrollbars (a different div will be used)
     */
    this.showContent = function(url, border, scrolled){
            scrolled = scrolled!=null?scrolled: true;
            border = border!=null?border: true;

        var name = scrolled? "mgnlAdminCentralScrolledContentIFrame": "mgnlAdminCentralContentIFrame";

        MgnlDHTMLUtil.hide(this.divContent);
        MgnlDHTMLUtil.hide(this.divScrolledContent);

        // if loading of the new page takes a while the user should not see the old page in the meantime
        $(name).src = "about:blank";

        url = MgnlURLUtil.addCacheKiller(url);
        if(!MgnlURLUtil.isExternal(url)){
            url = contextPath + url;
        }

        $(name).src = url;

        var div = scrolled? this.divScrolledContent : this.divContent;
        // border?
        if(border){
            div.style.border= 'solid 1px';
            div.style.borderTopColor = "#999";
            div.style.borderLeftColor = "#999";
            div.style.borderRightColor = "#ccc";
            div.style.borderBottomColor = "#ccc";
        }
        else{
            div.style.border= 'none';
        }

        MgnlDHTMLUtil.show(div);
    };

    /**
     * Show the tree
     */
    this.showTree = function(name, path, usePathAsRoot){
        usePathAsRoot = usePathAsRoot!=null?true:false;

        var url = "/.magnolia/trees/" + name + ".html";
        if(path && path.length >0) {
            if (!usePathAsRoot) {
                url += "?pathSelected="+path +"&pathOpen="+path;
            } else {
                url += "?pathSelected="+path +"&pathOpen="+path+"&path="+path;
            }
        }
        this.showContent(url, false, false);
    }

}

/**
 * Set this method to execute after the admin central is opened in a new window
 */
MgnlAdminCentral.onOpenedInNewWindow = null;

/**
 * Open the admin central in a new window (used for example for the admin central button in the templates)
 */
MgnlAdminCentral.openInNewWindow = function(onOpenedInNewWindow){
    src = contextPath + "/.magnolia/adminCentral.html";
    src = MgnlURLUtil.addCacheKiller(src);

    w = window.open(src,"mgnlAdminCentral","");
    MgnlAdminCentral.onOpenedInNewWindow = onOpenedInNewWindow;

    if (w) {
        w.focus();
    }
    return w;
}

/**
 * Some static methods useabe from everywhere.
 */
MgnlAdminCentral.showTree = function(name, path, usePathAsRoot){
    mgnlAdminCentral = MgnlDHTMLUtil.findVariable("mgnlAdminCentral")
    if(mgnlAdminCentral){
        mgnlAdminCentral.showTree(name, path, usePathAsRoot);
        mgnlAdminCentral.window.focus();
    }
    else{
        this.openInNewWindow(function(mgnlAdminCentral){
            mgnlAdminCentral.showTree(name, path, usePathAsRoot);
            // remove the handler again
            MgnlAdminCentral.onOpenedInNewWindow = null;
        });
    }
}

MgnlAdminCentral.showContent = function(url, border, scrolled){
    MgnlDHTMLUtil.findVariable("mgnlAdminCentral").showContent(url, border, scrolled);
}

/**
 *
 * Magnolia and its source-code is licensed under the LGPL.
 * You may copy, adapt, and redistribute this file for commercial or non-commercial use.
 * When copying, adapting, or redistributing this document in keeping with the guidelines above,
 * you are required to provide proper attribution to obinary.
 * If you reproduce or distribute the document without making any substantive modifications to its content,
 * please use the following attribution line:
 *
 * Copyright 1993-2006 obinary Ltd. (http://www.obinary.com) All rights reserved.
 *
 */
 
classDef("mgnl.controls.TextField", MgnlTextField);
 
function MgnlTextField(name, value, width, imageLeft, imageLeftWidth, attributes){
	this.attributes = attributes!=null?attributes:{};

	this.name = name;
	this.value = value;

	if (width == undefined) {
		this.width = 150;
	} else {
		this.width = width;
	}
	if (imageLeft == undefined) {
		this.imageLeft = contextPath + '/.resources/controls/textfield/left.gif';
		this.imageLeftWidth = 5;
	} else {
		this.imageLeft = imageLeft;this.imageLeftWidth = (imageLeftWidth == undefined ? '20' : imageLeftWidth);
	}
	
	this.widthSearchField = this.width - (5 + this.imageLeftWidth);
	
	// register control
	MgnlTextField.prototype.all[this.name] = this;
}

MgnlTextField.prototype.render = function() {
	// create other attributes
	var attributes="";
	for(name in this.attributes){
		attributes += " " + name + '="' + this.attributes[name] + '"';
	}

	if (window.navigator.userAgent.indexOf("Safari") == -1) {
		var html = '<table border="0" cellspacing="0" cellpadding="0" style="width: ' + this.width + 'px;"><tr>';
		html += '<td width="5"><img src="'+ this.imageLeft +'" width="'+ this.imageLeftWidth +'" border="0"></td>'
		html += '<td width="100%" class="smothTextFieldTD" background="'+contextPath+'/.resources/controls/textfield/middle.gif">'
		html += '<input class="smothTextField" style="width: ' + this.widthSearchField + 'px;" type="text" id="' + this.name + '" value="' + this.value + '" ' + attributes + '></td>';
		html += '<td width="5"><img src="'+ contextPath +'/.resources/controls/textfield/right.gif" width="5" border="0"></td>';
		html += '</tr></table>'
	} else {
		var html = '<input type="search" style="width: ' + this.width + 'px;" id="' + this.name + '" value="' + this.value + '" ' + attributes + '>';
	}
	return html
}

// collection of all instantiated controls
MgnlTextField.prototype.all = new Object();

/**
 *
 * Magnolia and its source-code is licensed under the LGPL.
 * You may copy, adapt, and redistribute this file for commercial or non-commercial use.
 * When copying, adapting, or redistributing this document in keeping with the guidelines above,
 * you are required to provide proper attribution to obinary.
 * If you reproduce or distribute the document without making any substantive modifications to its content,
 * please use the following attribution line:
 *
 * Copyright 1993-2006 obinary Ltd. (http://www.obinary.com) All rights reserved.
 *
 */
 
 /**
  * A util to manage the prototypes in javascripts. Used to extend allready existing prototype for example.
  */
  
 classDef("mgnl.util.PrototypeUtil",{
    /**
     * Add the properties from src to dest.<b> 
     * <code> extend(obj.prototype, myOtherParent) </code>
     * @parma dst the target
     * @parma src the object whichs properties will get copied to dst
     * @parma overwrite true if existing properties get overwritten (default is true)
     */
    extend: function(dst, src, overwrite){
        // default is false
        overwrite = overwrite?overwrite: false;
        
        for(name in src){
            if(overwrite || dst[name] == null){
                dst[name] = src[name];
            }
        }
        return dst;
    }
 });
/**
 * MgnlNavigation
 * creates a hierarchical menu
 * Usage:
 *   include this file in any html/xhtml file
 *   link the corresponding css file
 *
 *   create navigation:
 *       mgnlNavigation = new MgnlNavigation ();
 *
 *   add a node:
 *       mgnlNavigation.addNode ('node1', 'Website', 'alert (\'blau\');', './.resources/icons/24/earth.gif');
 *           Parameters for addNode:
 *             id:     the nodes id (must be unique!)
 *             title:  the txt to display
 *             action: javascript function as string
 *             icon:   path to the icon shown on the left
 *
 *   add a subnode:
 *       mgnlNavigation.getNode ('node1').addNode ('node11', 'Test', '', './.resources/icons/16/folder.gif');
 *
 *   to activate a node from wherever (without a user's click) without triggering its action:
 *       mgnlNavigation.activate ('node2346');
 *
 *   to activate a node from wherever (without a user's click) and execute its action:
 *       mgnlNavigation.activate ('node2346', true);
 *
 */
 
classDef("mgnl.admininterface.Navigation", MgnlNavigation);

/**
 * static variables
 */
// path to the images
MgnlNavigation.imagesPath = contextPath + "/.resources/controls/navigation/";

// path to the expandable-icon on the left
MgnlNavigation.openIcon = MgnlNavigation.imagesPath + 'mgnlNavigationArrow.gif';
// specify animation step speed in milliseconds
MgnlNavigation.navTimeoutOpen = 30;
MgnlNavigation.navTimeoutClose = 20;

/**
 * Parameters:
 *   id:     the nodes id (must be unique!)
 *   title:  the txt to display
 *   action: javascript function as string
 *   icon:   path to the expandable-icon on the left
 *   parent: either MgnlNavigation or MgnlNavigationNode
 *   depth:  int
 */
function MgnlNavigation (id, title, action, icon, parent, depth) {
    // holds all top-level navigation nodes
    var nodes = new Array ();
    // holds all open nodes, i.e. where the children are shown
    var openNodes = new Array ();
    // holds all nodes where mouse is moved over
    var hoverNodes = new Array ();
    // holds the currently selected/clicked node
    var activeNode = null;
    // background: the table-element in the dom-tree, this holds the background color/image that reacts on mouse-events
    var background = null;
    // whether the menu is opened or not, i.e. children visible or hidden.
    var isOpen = false;

    // obvious getters and setters
    this.getDepth = function () {
        if (depth) return depth;
        else return 0;
    }
    this.getId = function () { return id; }
    this.getTitle = function () { return title; }
    this.getIcon = function () { return icon; }
    this.hasIcon = function () { return (icon ? true : false); }
    this.getParent = function () { return parent; }

    /**
     * adds a navigation node
     * Parameters:
     *   id:     the nodes id (must be unique!)
     *   title:  the txt to display
     *   action: javascript function as string
     *   icon:   path to the icon shown on the left
     */
    this.addNode = function (id, title, action, icon) {
        // only add node if there is no such id yet
        if (!this.getNavigation ().getNode (id)) nodes[nodes.length] = new MgnlNavigation (id, title, action, icon, this, this.getDepth () + 1);
    }
    this.hasNodes = function () { return (nodes.length > 0); }
    this.getNodes = function () { return nodes; }
    this.getNode = function (id) {
        var n = this.getNodes ();
        if (this.getId () == id) return this;
        for (var i = 0; i < n.length; i++) {
            var ret = n[i].getNode (id);
            if (ret) return ret;
        }
        return null;
    }

    // open the menu tree
    this.showChildren = function () {
        // nothing to do on top-level
        if (this.getDepth () > 0) {
            this.closeOpenNodes (this);
            if (!isOpen) {
                if (this.hasNodes ()) {
                    // hide all children
                    // and set show timeout for animation
                    if (MgnlNavigation.navTimeoutOpen && 1 * MgnlNavigation.navTimeoutOpen > 0) {
                        if (c = this.background.parentNode.nextSibling.firstChild) {
                            var n = this.getNodes ();
                            var i = 0;
                            do {
                                c.style.display = 'none';
                                window.setTimeout ('document.mgnlNavigationSelf.showChild (\'' + n[i++].getId () + '\')', i * MgnlNavigation.navTimeoutOpen);
                            } while (c = c.nextSibling);
                        }
                    }
                    // display wrapper
                    this.background.parentNode.nextSibling.style.display = 'block';
                }
                this.addOpenNode (this);
                isOpen = true;
            }
        }
    }

    // close the menu tree
    this.hideChildren = function () {
        // nothing to do on top-level
        if (this.getDepth () > 0) {
            if (isOpen) {
                if (MgnlNavigation.navTimeoutClose && 1 * MgnlNavigation.navTimeoutClose > 0) {
                    var n = this.getNodes ();
                    for (var i = 0; i < n.length; i++) {
                        // pretty animation...
                        window.setTimeout ('document.mgnlNavigationSelf.hideChild (\'' + n[i].getId () + '\')', (i + 1) * MgnlNavigation.navTimeoutClose);
                    }
                }
                // display wrapper
                else this.background.parentNode.nextSibling.style.display = 'none';
            }
            isOpen = false;
        }
    }

    // open/close menus
    // these two functions are used in animation, they get called asynchronously
    this.showChild = function (idShow) {
        if (n = this.getNode (idShow)) n.background.parentNode.parentNode.style.display = 'block';
    }
    this.hideChild = function (idHide) {
        if (n = this.getNode (idHide)) {
            n.background.parentNode.parentNode.style.display = 'none';
            // if this is the last child hide the wrapper too
            if (!n.background.parentNode.parentNode.nextSibling) {
                n.background.parentNode.parentNode.parentNode.style.display = 'none';
            }
        }
    }

    // changes the css-styles of the node
    this.setStyle = function (style) {
        // nothing to do on top-level
        if (style.length > 0) {
            style = style.charAt (0).toUpperCase () + style.substring (1, style.length);
            if (this.getDepth () > 0) {
                // apply styles
                if (this.background) this.background.className = 'mgnlNavigation' + this.getDepth () + style;
        
                if (this.hasNodes ()) {
                    var n = this.getNodes ();
                    if (n[0].background) n[0].background.parentNode.parentNode.parentNode.className = 'mgnlNavigationWrapper' + (this.getDepth () + 1) + style;
                }
            }
        }
    }

    // returns the navigationobject itself
    this.getNavigation = function () {
        // only do it on top-level-parent
        if (parent) return parent.getNavigation ();
        else return this;
    }

    // adds the node to the hoverNodes array
    this.addHoverNode = function (n) {
        // only do it on top-level-parent
        if (parent) parent.addHoverNode (n);
        else {
            var exists = false
            for (var i = 0; i < hoverNodes.length; i++) if (hoverNodes[i] == n) exists = true;
            if (!exists) hoverNodes.push (n);
        }
    }

    // used to reset the hover css style
    // loops through the hoverNodes array and calls mouseout if it's not the active node
    this.removeHoverNodes = function () {
        // only do it on top-level-parent
        if (parent) parent.removeHoverNodes ();
        else {
            for (var i = 0; i < hoverNodes.length; i++) {
                if (this.getActiveNode () == null || this.activeNode != hoverNodes[i]) {
                    hoverNodes[i].mouseOut ();
                    hoverNodes.splice (i, 1);
                }
            }
        }
    }

    // adds a node to the openNodes array
    this.addOpenNode = function (n) {
        // only do it on top-level-parent
        if (parent) parent.addOpenNode (n);
        else {
            var exists = false
            for (var i = 0; i < openNodes.length; i++) if (openNodes[i] == n) exists = true;
            if (!exists) openNodes.push (n);
        }
    }

    // loops through the openNodes array and closes all nodes with greater depth expect for the given one
    this.closeOpenNodes = function (n) {
        // only do it on top-level-parent
        if (parent) parent.closeOpenNodes (n);
        else {
            for (var i = 0; i < openNodes.length; i++) {
                // close them if they are less deep or a child
                if (openNodes[i].getDepth () >= n.getDepth () || n.getNode (openNodes[i].getId ())) {
                    // only close it if it's NOT a parent of the active node
                    if (openNodes[i].getNode (n.getId ()) == null) {
                        openNodes[i].hideChildren ();
                        openNodes.splice (i);
                    }
                }
            }
        }
    }

    // the node that was clicked
    this.setActiveNode = function (n) {
        // only do it on top-level-parent
        if (parent) parent.setActiveNode (n);
        else this.activeNode = n;
    }
    this.getActiveNode = function () {
        // only do it on top-level-parent
        if (parent) return parent.activeNode;
        else return this.activeNode;
    }

    // set active style and show children
    // if it get's called with id set it's an external call
    // and we need to make sure the parents are open!
    this.activate = function (idActivate, execute) {
        if (idActivate) {
            var n = this.getNode (idActivate);
            if (n) {
                var p = n.getParent ();
                while (p && p.getDepth () > 0) {
                    if (!p.isOpen) p.showChildren ();
                    p = p.parent;
                }
            }
            this.addHoverNode (n);
            n.activate ();
            if (execute) n.execute ();
        }
        if (this.getDepth () > 0) {
            this.setActiveNode (this);
            this.removeHoverNodes ();
            if (!isOpen) this.showChildren ();
            this.setStyle ('active');
        }
    }

    // call the action that was given to the constructor
    this.execute = function () {
        if (action.length > 0) {
            var f = new Function ('a ', action + '');
            f ();
        }
    }

    this.mouseOver = function (idOver) {
        if (n = this.getNode (idOver)) {
            if (this.getActiveNode () == null || this.getActiveNode () != n) {
                this.addHoverNode (n);
                n.setStyle ('hover');
            }
        }
    }

    this.mouseOut = function (idOut) {
        if (idOut && this.getDepth () == 0) this.removeHoverNodes ();
        else {
            if (this.getActiveNode () == null || this.getActiveNode () != this) {
                this.setStyle ('inactive');
            }
        }
    }
    
    this.mouseClick = function (idClick) {
        var n = this.getNode (idClick);
        if (n) {
            n.activate ();
            n.execute ();
        }
    }
}

/**
 * static method to init the menus html -> dom
 * creates the node as dom-element and appends it to container
 *   container: the surrounding element of the parent
 */
MgnlNavigation.prototype.create = function (container) {
    // create navigation root
    if (this.getDepth () == 0) {
        // craete variable to itself
        document.mgnlNavigationSelf = this;
        var c = document.getElementById (container);
        if (c) {
            var n = this.getNodes ();
            var d = document.createElement ('div');
            d.className = 'mgnlNavigationBox';
            if (n && d) { for (var i = 0; i < n.length; i++) n[i].create (d); }
            c.appendChild (d);
        }
    }
    // create menu-entry
    else {
        // wrapper div
        var wrapper = document.createElement ('div');
        wrapper.className = 'mgnlNavigationWrapper' + this.getDepth ();
        var inner = document.createElement ('div');
        // table
        table = document.createElement ('table');
        // get the navigation object an put it into this closure to pass it in the functions
        var myNavigation = this.getNavigation();
        table.className = 'mgnlNavigation' + this.getDepth () + 'Inactive';
        table.appendChild (document.createElement ('tbody'));
        table.firstChild.appendChild (document.createElement ('tr'));

        var cell = document.createElement ('td');
        cell.className = 'mgnlNavigation' + this.getDepth () + 'Cell mgnlNavigationText';
        if (this.hasIcon ()) 
        	cell.style.backgroundImage = 'url(' + this.getIcon () + ')';

        cell.id = this.getId ();

        cell.onmouseover = function () { myNavigation.mouseOver (this.id); };
        cell.onmouseout = function () { myNavigation.mouseOut (this.id); };
        cell.onclick = function () { myNavigation.mouseClick (this.id); };
        
        cell.innerHTML = this.getTitle();

        table.firstChild.firstChild.appendChild (cell);

        inner.appendChild (table);
        wrapper.appendChild (inner);
        container.appendChild (wrapper);
        this.background = table;
        // create children
        if (this.hasNodes ()) {
            // add icon
            if (MgnlNavigation.openIcon) {
                var td = document.createElement ('td');
                td.width = '1%';
                td.appendChild (document.createElement ('img'));
                td.firstChild.src = MgnlNavigation.openIcon;
                td.firstChild.className = 'mgnlNavigation' + this.getDepth () + 'Arrow';
                table.firstChild.firstChild.appendChild (td);
            }
            // create children
            var n = this.getNodes ();
            var c = document.createElement ('div');
            c.className = 'mgnlNavigationWrapper' + (this.getDepth () + 1) + 'Inactive';
            for (var i = 0; i < n.length; i++) n[i].create (c);
            // initially hide all children
            c.style.display = 'none';
            wrapper.appendChild (c);
        }
    }
}

/* ###################################
### DynamicTable.js
################################### */

/* ###################################
This is an example
Header:
<script src="${pageContext.request.contextPath}/admindocroot/js/json.js"></script>
<script src="${pageContext.request.contextPath}/admindocroot/js/dialogs/DynamicTable.js"></script>

Body:
<script>
    // create an object for a new line
    function getNewObject(){
        return {value:''};
    }
    
    // extracts an object from the content
    function getObject(prefix){
        // to get the cell use getElementById(prefix)
        var obj = new Object();
        obj.value = document.getElementById(prefix + "_value").value;
        return obj;
    }
    
    // render a row
    function renderObject(cell, prefix, rowNumber, obj){
        html = '<input type="text" id="' + prefix + '_value" value="' + obj.value + '">';
        html += '<input type="button" onclick="searchTable.addNew();" value="+">';
        html += '<input type="button" onclick="searchTable.del(' + rowNumber + ');" value="-">';
        cell.innerHTML = html;
    }
    
    function validate(obj){
        return true;
    }
</script>

<table id="searchTable"><tr><td></td></tr></table>

Use JSON to parse this returned value<br>
<input type="button" value="save" onclick="searchTable.persist()">
<input type="text" name="persist">

<script>
    // initialize
    var hiddenField = document.formAdvancedSearch.persist;
    var searchTable = new MgnlDynamicTable("searchTable", hiddenField, getNewObject, getObject, renderObject, validate);
    
    // use JSON format to persist
    searchTable.json=true;

    // load the table with the current value
    searchTable.add({value:'hello'});
    searchTable.addNew();
</script>
################################### */

/* ###################################
### DynamicTable Class
################################### */

/* ###################################
### Constructor
################################### */

function MgnlDynamicTable(tableName, hiddenField, getNewObjectFunction, getObjectFunction, renderObjectFunction, validateFunction, objects){
    this.tableName = tableName;
    if(objects == null){
        objects = new Array();
    }
    this.objects = objects;
    
    // object getNewObject()
    this.getNewObject = getNewObjectFunction;

    // object getObject(prefix) returns an object with the content of the fields
    this.getObject = getObjectFunction;

    // string renderObject(cell, prefix, rowNumber, object);
    this.renderObject = renderObjectFunction;
    // boolean validate(object)
    this.validate = validateFunction;
    // used for persistence
    this.hiddenField = hiddenField;
    
    // default persistence is some thing handmade
    this.json=false;
}


/* ###################################
### Add an Object
################################### */

MgnlDynamicTable.prototype.set = function (index, object){
    this.objects = this.getObjects();
    this.objects[index] = object;
    this.render();
}

/* ###################################
### Delete an Object
################################### */

MgnlDynamicTable.prototype.del = function (index){
    var tmp = this.getObjects();
    tmp[index] = null;
    
    this.objects = new Array();
    var newIndex = 0;
    for(oldIndex= 0; oldIndex < tmp.length; oldIndex++){
        if(tmp[oldIndex] != null){
            this.objects[newIndex] = tmp[oldIndex];
            newIndex++;
        }   
    }
    
    this.render();
}

/* ###################################
### Append Object
################################### */

MgnlDynamicTable.prototype.add = function (object){
    this.set(this.objects.length, object);
}

/* ###################################
### Add New
################################### */

MgnlDynamicTable.prototype.addNew = function (){
    this.set(this.objects.length, this.getNewObject());
}

/* ###################################
### Read the objects from the Table
################################### */

MgnlDynamicTable.prototype.getObjects = function(){
    var objects = new Array();
    // get table
    var table = document.getElementById(this.tableName);
    
    // for each row
    var objectCount = 0;
    for(i=0; i < table.rows.length; i++){
        var row = table.rows[i];
        // check if this is realy a row with content
        if (row && row.cells[0] && row.cells[0].innerHTML!=""){
                objects[objectCount] = this.getObject(this.tableName + i, i);
                objectCount++;
        }
    }
    return objects;
}

/* ###################################
### Render the table
################################### */

MgnlDynamicTable.prototype.render = function (update){
    if(update==null){
        update = false;
    }
    
    if(update){
        this.objects = this.getObjects();
    }

    // delte all
    var table = document.getElementById(this.tableName);

    //table.innerHTML=""; does not work with safari
    for(i=table.rows.length-1; i>=0 ; i--){
        table.deleteRow(i);
    }
    
    for(i=0; i < this.objects.length; i++){
        var row = table.insertRow(table.rows.length);
        var cell = row.insertCell(0);
        cell.setAttribute("id", this.tableName + i + "Cell");
        this.renderObject(cell, this.tableName + i, i, this.objects[i]);
    }
}

/* ###################################
### persist the table and save it in the hidden field
################################### */

MgnlDynamicTable.prototype.persist = function (){
    var str = "";
    this.objects = this.getObjects();
    
    if(this.json){
        // must include the json javascript
        str = JSON.stringify(this.objects);     
    }
    // old model
    else{
        // persist all
        for(i=0; i < this.objects.length; i++){
            if(i >0)
                str += ";";
            str += this.persistObject(this.objects[i]) ;
        }
    }
    this.hiddenField.value = str;
}
 
MgnlDynamicTable.prototype.persistObject = function (object){
    var str = "";
    var simple = this.objectSize(object) == 1;
    for(key in object){
        if(str.length > 0)
            str += ",";
        if(simple){
            str += object[key];
        }
        else{
            str += key + ":" + object[key];
        }
        first = false;
    }
    return str;
}

MgnlDynamicTable.prototype.objectSize = function (object){
    var size=0;
    for(key in object){
        size++;
    }
    return size;
}
MgnlRuntime.loadingOn=true;

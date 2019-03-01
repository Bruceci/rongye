

var oldSel = "";


function displaySubSel(combo)
{
    selectedArea = combo.value;
    
    regionsDiv = document.getElementById('subSelectionArea');
    isDivVisible = (regionsDiv.style.display == 'none') ? false : true;
    
    
    if (selectedArea == 'it' && !isDivVisible)
    {
        regionsDiv.style.display = 'block';
    } 
    else if (selectedArea != 'it' && isDivVisible)
    {
        regionsDiv.style.display = 'none';
        resetValues(combo);
    }
    
}

function getAree(combo, selReg, selProv)
{

    naz = combo.form.nazione.value;
    reg = combo.form.regione.value;



    strHost = 'http://www.fantoni.it/admintemplates/adminCentral/fantoni/ajax/pv.jsp';
    strHost = strHost.replace("/fantoni/js/pv.js", "");

    //url = "/admintemplates/adminCentral/fantoni/ajax/aree.jsp";
    url = "/fantoni/js/aree.js";
    
    if (naz != '')
    {
        paramString = "nazione="+naz;
        
        if (reg != '')
        {
            paramString += "&regione=" + reg;
        }
        req = getHttpRequest();
        if (req)
        {
            req.open("POST", encodeURI(url), true);
            req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
            req.onreadystatechange=function() {
               if (req.readyState==4) {
                //var returnText=req.responseXML;
                var returnText=req.responseText;
                   returnText = returnText.replace(/\<html.*\<body\>/, "");
                   returnText = returnText.replace(/\<\/body\>.*/, "");
        xmlObj = formatXML(returnText);
                //designCombos(returnText, combo, selReg, selProv);
                designCombos(xmlObj, combo, selReg, selProv);
               }
            }

            req.send(paramString);        
       }
    }
    else
    {
        displaySubSel(combo);
    }
    
}

function formatXML(text)
{
    var xml;
    if (document.implementation && document.implementation.createDocument)
    {
        //xml = document.implementation.createDocument("","",null)
        parser = new DOMParser();
        xml = parser.parseFromString(text, "text/xml");
        
       }
       else if (window.ActiveXObject)
    {
        xml = new ActiveXObject("Microsoft.XMLDOM")
        xml.loadXML(text);
    }

    
    return xml;
}

function designCombos(response, combo, selReg, selProv)
{
    if (response)
    {

        if (combo.id == 'nazione')
        {
            regCombo = document.getElementById('regione');
            regCombo.options.length = 1;
            var regions = response.getElementsByTagName('regione');
            
            for (i = 0; i < regions.length; i++)
            {
                idr = regions[i].getAttribute('id');
                txr = messagesPV.get('area.regione.'+idr, 'com.nbfactory.magnolia.fantoni.resources.messages');    
                sel = false;
                if (selReg == idr)
                {
                    sel = true;
                }
                regCombo.options[regCombo.options.length] = new Option(txr, idr, sel); 
                regCombo.options[regCombo.options.length-1].selected = sel;
                if (sel)
                {
                    getAree(regCombo,selReg, selProv);
                }
            }
        }
        else if (combo.id == 'regione')
        {


            regCombo = document.getElementById('provincia');
            regCombo.options.length = 1;
            var regions = response.getElementsByTagName('provincia');
            for (i = 0; i < regions.length; i++)
            {
                idr = regions[i].getAttribute('id');
                txr = messagesPV.get('area.provincia.'+idr, 'com.nbfactory.magnolia.fantoni.resources.messages');    
                sel = false;
                if (selProv == idr)
                {
                    sel = true;
                }
                regCombo.options[regCombo.options.length] = new Option(txr, idr, sel); 
                regCombo.options[regCombo.options.length-1].selected = sel;
            }
        }
    }
    
    if (combo.id == 'nazione')
    {
        displaySubSel(combo);
    }
}

function resetValues(combo)
{
    combo.form.regione.selectedIndex = 0;
    combo.form.provincia.selectedIndex = 0;
}

        
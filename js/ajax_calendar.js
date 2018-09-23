// JavaScript Document
function ajaxpage(url, containerid){
	var page_request = false
	if (window.XMLHttpRequest) // if Mozilla, Safari etc
		page_request = new XMLHttpRequest()
	else if (window.ActiveXObject)
	{ // if IE
		try
		{
			page_request = new ActiveXObject("Msxml2.XMLHTTP")
		}
		catch (e)
		{
			try{
					page_request = new ActiveXObject("Microsoft.XMLHTTP")
				}
			catch (e){}
		}
	}
	else return false
	//alert(url);
	//Show page is loading
    document.getElementById(containerid).innerHTML = '<div style="padding:20px 0 20px 0; background:#fff" align="center"><img src="../images/ajax-loader.gif" border="0" /></div>';
	//document.getElementById(containerid).style.display='inline';
    //scroll to top
    //scroll(0,0);
	//get data
	page_request.onreadystatechange=function()
	{
		loadpage(page_request, containerid)
	}
 	page_request.open('GET', url, true)
	page_request.send(null)
}
 
function loadpage(page_request, containerid)
{
	if (page_request.readyState == 4 && (page_request.status==200 || window.location.href.indexOf("http")==-1))
	document.getElementById(containerid).innerHTML=page_request.responseText
}


/*** Horoscope **/
function ajax_horoscope(url,horo_tab){
	var page_request = false
	if (window.XMLHttpRequest) // if Mozilla, Safari etc
		page_request = new XMLHttpRequest()
	else if (window.ActiveXObject)
	{ // if IE
		try
		{
			page_request = new ActiveXObject("Msxml2.XMLHTTP")
		}
		catch (e)
		{
			try{
					page_request = new ActiveXObject("Microsoft.XMLHTTP")
				}
			catch (e){}
		}
	}
	else return false
	
	//Show page is loading
    document.getElementById(horo_tab).innerHTML = '<div style="padding:20px 0 20px 0" align="center"><img src="images/horoscope-loader.gif" border="0" /></div>';
	//document.getElementById(containerid).style.display='inline';
    //scroll to top
    //scroll(0,0);
	//get data
	page_request.onreadystatechange=function()
	{
		if (page_request.readyState == 4 && (page_request.status==200 || window.location.href.indexOf("http")==-1))
		document.getElementById(horo_tab).innerHTML=page_request.responseText
	}
 	page_request.open('GET',url, true)
	page_request.send(null)
}
/*** slideshow **/
function slide_show(url,content,load_content){
	var page_request = false
	if (window.XMLHttpRequest) // if Mozilla, Safari etc
		page_request = new XMLHttpRequest()
	else if (window.ActiveXObject)
	{ // if IE
		try
		{
			page_request = new ActiveXObject("Msxml2.XMLHTTP")
		}
		catch (e)
		{
			try{
					page_request = new ActiveXObject("Microsoft.XMLHTTP")
				}
			catch (e){}
		}
	}
	else return false
	
	//Show page is loading
    document.getElementById(load_content).innerHTML = '<div style="padding:20px 0 20px 0" align="center"><img src="images/ajax-loader.gif" border="0" /></div>';
	//document.getElementById(containerid).style.display='inline';
    //scroll to top
    //scroll(0,0);
	//get data
	page_request.onreadystatechange=function()
	{
		if (page_request.readyState == 4 && (page_request.status==200 || window.location.href.indexOf("http")==-1))
		document.getElementById(content).innerHTML=page_request.responseText
	}
 	page_request.open('GET',url, true)
	page_request.send(null)
}
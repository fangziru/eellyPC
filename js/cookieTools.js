//添加cookie
//参数：键、值、时长（访问路径）、访问的路径、访问的主机
function addCookie(key,value,dayCount,path,domain){
	var d=new Date();
	d.setDate(d.getDate()+dayCount);
	var cookieStr=key+"="+escape(value)+";expires="+d.toGMTString();
	if(path){
		cookieStr+=";path="+path;
	}
	if(domain){
		cookieStr+=";domain="+domain;
	}
	document.cookie=cookieStr;	
}

//删除cookie
//参数：键
function removeCookie(key){
	addCookie(key,"",-1);
}

//获取cookie
//参数：键
//返回值：键对应的值，如果是null，表示cookie没有存储该键
function getCookie(key){
	var cookieStr=unescape(document.cookie);
	var arr=cookieStr.split("; ");
	for(var i=0;i<arr.length;i++){
		if(arr[i].indexOf(key+"=")==0){
			return arr[i].substring(key.length+1);
		}
	}
	return null;
}

//修改cookie
//参数：键、值、时长（访问路径）、访问的路径、访问的主机
//返回值：无
function updateCookie(key,value,dayCount,path,domain){
	addCookie(key,value,dayCount,path,domain);
}
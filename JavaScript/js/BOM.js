function test1(){
	window.alert("这是window警告框");
}

//打开新窗口
function test2(){
	window.open("http://www.baidu.com");	
}

//关闭窗口
function test3(){
	window.close();
}
//弹出输入框
function test4(){
	prompt("请输入你的名字","听说你姓王？？？");
}
function test5(){
	confirm("你确定你姓王？？？");
	confirm("你确定你真的姓王？？？");
	confirm("你确定你真的真的姓王？？？");
	confirm("你确定你真的真的真的姓王？？？");
	confirm("你是不是隔壁老王？？？");
}
function test6(){
	location.href="http://www.baidu.com";
	
}

function test7(){
	window.setTimeout("alert('chaoshile')",3000);
}

function test8(){
	setInterval("showTime()",1000);
}
function showTime(){
	var sp=document.getElementById("sp");
	//alert("这还是对的");
	sp.innerHTML=new Date();
}
function test1(){
	window.alert("����window�����");
}

//���´���
function test2(){
	window.open("http://www.baidu.com");	
}

//�رմ���
function test3(){
	window.close();
}
//���������
function test4(){
	prompt("�������������","��˵������������");
}
function test5(){
	confirm("��ȷ��������������");
	confirm("��ȷ�����������������");
	confirm("��ȷ��������������������");
	confirm("��ȷ�����������������������");
	confirm("���ǲ��Ǹ�������������");
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
	//alert("�⻹�ǶԵ�");
	sp.innerHTML=new Date();
}
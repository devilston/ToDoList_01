function example(){	
	// �ɹ����� ����
	this.table;
	this.tr_table;
	this.td_table_count;
	this.td_table_data;
	this.chkbox;
	this.count;
	
}
//��Ű���� �б�
example.readCookie = function(){
	var cookie = document.cookie;
	var first = cookie.indexOf("save=");
	if(first >= 0){
		var str = cookie.substring(first, cookie.length);
		table.innerHTML = str;
		var last = str.indexOf(";");
		if(last <0)
			last = str.length;
		
		//��Ű���� �����´�.
		str = str.substring(0, last).split("=");
		return unescape(str[1]);
	}else{
		return null;
	}
};

example.prototype.saveCookie = function(){
	table = document.getElementById("todo_list");
	count = table.rows.length;

	var cookieDate = new Date(2012,11,10,19,30,30);
	document.cookie = "save=" + escape(table.innerHTML) +"; expires=" + cookieDate.toGMTString() + "; path-/";
};

example.prototype.eraseCookie = function(){
	var cookieDate = new Date(2010,11,10,19,30,30);
	
	document.cookie = "save=; expires=" + cookieDate.toGMTString() + "; path-/";
};

//�޼ҵ�����
example.prototype.initParam = function(){
	table = document.getElementById("todo_list");
	table.border = 1;
	table.innerHTML=example.readCookie();
	// ��� ����
	count = table.rows.length;
	if(count >1){
		for(var i=0; i<table.rows.length; i++){
			table.rows[i].onmouseover = example.tdMouseOverEventhandle;
			table.rows[i].onmouseout = example.tdMouseOutEventhandle;
			table.rows[i].cells[0].childNodes[1].onchange = example.chkOnChangeEventhandle;
		}
	}
	

};


example.prototype.exe= function(param){
	
	if(param.value == ""){
		alert("���� �߷��ϼ���!");
		return;
	}
	
	// ���̺��� �� ����
	tr_table = document.createElement("tr");
	tr_table.id = "tr"+count;
	tr_table.onmouseover = example.tdMouseOverEventhandle;
	tr_table.onmouseout = example.tdMouseOutEventhandle;
	td_table_count = document.createElement("td");
	td_table_count.setAttribute("width", "200");
	
	// ýũ�ڽ� ����
	chkbox = document.createElement("input");
	chkbox.type = "checkbox";
	chkbox.id = "chk"+count;
	chkbox.onchange = example.chkOnChangeEventhandle;
	td_table_count.style.backgroundColor = "#FFE3EE";
	td_table_count.setAttribute("width", "50");
	td_table_count.setAttribute("align", "center");
	td_table_count.innerHTML = count;
	
	// ýũ�ڽ� ���̺� ���
	
	td_table_count.appendChild(chkbox);
	
	// ���̺��� �������� ����
	td_table_data = document.createElement("td");
	td_table_data.id =count;
	td_table_data.style.backgroundColor = "#FFE3EE";
	td_table_data.setAttribute("width", "200");
	td_table_data.setAttribute("align", "center");
	// ���� �Է°� �Է�
	td_table_data.innerHTML =  param.value;

	
	// �Է°� ����
	param.value = "";
	// ���� ���̺� �� ���
	tr_table.appendChild(td_table_count);
	tr_table.appendChild(td_table_data);
	table.appendChild(tr_table);
	count++;
};


//�̺�Ʈ �޼ҵ�
	//���̺� ���� ���콺�� �ö����� ����ƺ���
	example.tdMouseOverEventhandle = function(){
		var tr_able = document.getElementById(this.id);
		tr_able.cells[0].style.backgroundColor = "#F457EE";
		tr_able.cells[1].style.backgroundColor = "#F457EE";
	
	};
	
	//���̺� ���� ���콺�� ���������� ����ƺ���
	example.tdMouseOutEventhandle = function(){
		var tr_able = document.getElementById(this.id);
		tr_able.cells[0].style.backgroundColor = "#FFE3EE";
		tr_able.cells[1].style.backgroundColor = "#FFE3EE";
	};
	
	//ýũ�ڽ� ���� ��ȭ��
	example.chkOnChangeEventhandle = function(){
	//	ýũ�ڽ� ��ü�� �����´�
		var chk = document.getElementById(this.id);
	//	���̺�ü�� �����´�.
		var tr_table = chk.parentNode.parentNode;
		
		if(chk.checked){
			//���̺��� �����Ͱ��� �о�´�
			var txt = tr_table.cells[1].innerHTML;
			//delete��ư�� ����
			btn_del = document.createElement("input");
			btn_del.type = "button";
			btn_del.id = "btn_del"+this.id;
			btn_del.value = "delete";
			btn_del.onclick = example.btnOnClickEventhandle;
			//������ ǥ�� �±� �߰� �Ͽ� ���̺��� �߰�
			txt = '<strike>' + txt + '</strike>';
			tr_table.cells[1].innerHTML = txt;
			//���̺��� ��ư �߰�
			tr_table.cells[1].appendChild(btn_del);
		}else{		
			//�ڽĳ�带 �����´�.
			btn = tr_table.cells[1].childNodes[1];
			//��ư�� �����Ѵ�.
			tr_table.cells[1].removeChild(btn);
			//���������� ����
			var txt = tr_table.cells[1].innerHTML;
			txt = txt.replace('<strike>', "");
			txt = txt.replace('</strike>', "");
			tr_table.cells[1].innerHTML = txt;
		}
	};
	
	//��ư�̺�Ʈ Ŭ��
	example.btnOnClickEventhandle = function(){
		var table = document.getElementById("todo_list");
		var node = document.getElementById(this.id);
		var tr_table = node.parentNode.parentNode;
		table.removeChild(tr_table);
	};


function example(){	
		// �ɹ����� ����
		this.table;
		this.tr_table;
		this.td_table_count;
		this.td_table_data;
		this.chkbox;
		this.count;
		
		//�޼ҵ� �ʱ�ȭ
		this.initParam = function(){
		table = document.getElementById("todo_list");
		table.border = 1;
		// ��� ����
		count = table.rows.length;
		
		};
		
		//	�ɹ� �޼ҵ� ����
		this.exe = function(param){
		
		if(param.value == ""){
			alert("���� �߷��ϼ���!");
			return;
		}
	
		// ���̺��� �� ����
		tr_table = document.createElement("tr");
		tr_table.id = "tr"+count;
		tr_table.onmouseover = tdMouseOverEventhandle;
		tr_table.onmouseout = tdMouseOutEventhandle;
		
		td_table_count = document.createElement("td");
		td_table_count.setAttribute("width", "50");
		
		// ýũ�ڽ� ����
		chkbox = document.createElement("input");
		chkbox.type = "checkbox";
		chkbox.id = "chk"+count;
		chkbox.onchange = chkOnChangeEventhandle;
		td_table_count.style.backgroundColor = "#FFE3EE";
		td_table_count.innerHTML = count;
		// ýũ�ڽ� ���̺� ���
		
		td_table_count.appendChild(chkbox);
		
		// ���̺��� �������� ����
		td_table_data = document.createElement("td");
		td_table_data.id =count;
		td_table_data.style.backgroundColor = "#FFE3EE";
		// ���� �Է°� �Է�
		td_table_data.innerHTML =  param.value;
		td_table_data.setAttribute("width", "300");
		td_table_data.setAttribute("align", "center");
		
		// �Է°� ����
		param.value = "";
		// ���� ���̺� �� ���
		tr_table.appendChild(td_table_count);
		tr_table.appendChild(td_table_data);
		table.appendChild(tr_table);
		count++;
		};
	
		//�̺�Ʈ �ڵ鷯
		//���̺� ���콺�� �ö�����
		this.tdMouseOverEventhandle = function(){
		var tr_able = document.getElementById(this.id);
		tr_able.cells[0].style.backgroundColor = "#F457EE";
		tr_able.cells[1].style.backgroundColor = "#F457EE";
	
		};
		//���̺� ���콺�� ����������
		this.tdMouseOutEventhandle = function(){
		var tr_able = document.getElementById(this.id);
		tr_able.cells[0].style.backgroundColor = "#FFE3EE";
		tr_able.cells[1].style.backgroundColor = "#FFE3EE";
	};
		//üũ�ڽ� Ŭ����
		this.chkOnChangeEventhandle = function(){
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
		//delete��ư Ŭ���� �̺�Ʈ
		this.btnOnClickEventhandle = function(){
		var table = document.getElementById("todo_list");
		var node = document.getElementById(this.id);
		var tr_table = node.parentNode.parentNode;
		table.removeChild(tr_table);
	};

}


function example(){	
	// 맴버변수 선언
	this.table;
	this.tr_table;
	this.td_table_count;
	this.td_table_data;
	this.chkbox;
	this.count;
	
}
//쿠키정보 읽기
example.readCookie = function(){
	var cookie = document.cookie;
	var first = cookie.indexOf("save=");
	if(first >= 0){
		var str = cookie.substring(first, cookie.length);
		table.innerHTML = str;
		var last = str.indexOf(";");
		if(last <0)
			last = str.length;
		
		//쿠키값을 가져온다.
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

//메소드정의
example.prototype.initParam = function(){
	table = document.getElementById("todo_list");
	table.border = 1;
	table.innerHTML=example.readCookie();
	// 행수 지정
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
		alert("값을 읿력하세요!");
		return;
	}
	
	// 테이블의 열 셋팅
	tr_table = document.createElement("tr");
	tr_table.id = "tr"+count;
	tr_table.onmouseover = example.tdMouseOverEventhandle;
	tr_table.onmouseout = example.tdMouseOutEventhandle;
	td_table_count = document.createElement("td");
	td_table_count.setAttribute("width", "200");
	
	// 첵크박스 생성
	chkbox = document.createElement("input");
	chkbox.type = "checkbox";
	chkbox.id = "chk"+count;
	chkbox.onchange = example.chkOnChangeEventhandle;
	td_table_count.style.backgroundColor = "#FFE3EE";
	td_table_count.setAttribute("width", "50");
	td_table_count.setAttribute("align", "center");
	td_table_count.innerHTML = count;
	
	// 첵크박스 테이블 등록
	
	td_table_count.appendChild(chkbox);
	
	// 테이블의 데이터행 셋팅
	td_table_data = document.createElement("td");
	td_table_data.id =count;
	td_table_data.style.backgroundColor = "#FFE3EE";
	td_table_data.setAttribute("width", "200");
	td_table_data.setAttribute("align", "center");
	// 행의 입력값 입력
	td_table_data.innerHTML =  param.value;

	
	// 입력값 지움
	param.value = "";
	// 만든 테이블 행 등록
	tr_table.appendChild(td_table_count);
	tr_table.appendChild(td_table_data);
	table.appendChild(tr_table);
	count++;
};


//이벤트 메소드
	//테이블 행의 마우스가 올라갔을때 생사아변함
	example.tdMouseOverEventhandle = function(){
		var tr_able = document.getElementById(this.id);
		tr_able.cells[0].style.backgroundColor = "#F457EE";
		tr_able.cells[1].style.backgroundColor = "#F457EE";
	
	};
	
	//테이블 행의 마우스가 떠나갔을때 생사아변함
	example.tdMouseOutEventhandle = function(){
		var tr_able = document.getElementById(this.id);
		tr_able.cells[0].style.backgroundColor = "#FFE3EE";
		tr_able.cells[1].style.backgroundColor = "#FFE3EE";
	};
	
	//첵크박스 상태 변화시
	example.chkOnChangeEventhandle = function(){
	//	첵크박스 객체를 가져온다
		var chk = document.getElementById(this.id);
	//	데이블객체를 가져온다.
		var tr_table = chk.parentNode.parentNode;
		
		if(chk.checked){
			//테이블의 데이터값을 읽어온다
			var txt = tr_table.cells[1].innerHTML;
			//delete버튼을 생성
			btn_del = document.createElement("input");
			btn_del.type = "button";
			btn_del.id = "btn_del"+this.id;
			btn_del.value = "delete";
			btn_del.onclick = example.btnOnClickEventhandle;
			//삭제줄 표시 태그 추가 하여 테이블의 추가
			txt = '<strike>' + txt + '</strike>';
			tr_table.cells[1].innerHTML = txt;
			//테이블의 버튼 추가
			tr_table.cells[1].appendChild(btn_del);
		}else{		
			//자식노드를 가져온다.
			btn = tr_table.cells[1].childNodes[1];
			//버튼을 삭제한다.
			tr_table.cells[1].removeChild(btn);
			//기존삭제줄 제거
			var txt = tr_table.cells[1].innerHTML;
			txt = txt.replace('<strike>', "");
			txt = txt.replace('</strike>', "");
			tr_table.cells[1].innerHTML = txt;
		}
	};
	
	//버튼이벤트 클릭
	example.btnOnClickEventhandle = function(){
		var table = document.getElementById("todo_list");
		var node = document.getElementById(this.id);
		var tr_table = node.parentNode.parentNode;
		table.removeChild(tr_table);
	};


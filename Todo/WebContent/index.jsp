<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">

<script language="javascript" type="text/javascript"
	src="js/examMethod.js"></script>

<script type="text/javascript">
	var exe = new example();
</script>

<title>Insert title here</title>
</head>
<body onload="javascript:exe.initParam()">


	<form id="ex" onsubmit="return false">

		<h1>TODO LIST</h1>
		<input type="text" name="txtbox"
			onkeypress="javascript:if(window.event.keyCode == 13) exe.exe(this)">
			
		<input type="button" value="내용정보 저장"
			onclick="javascript:exe.saveCookie()">
			
		<input type="button" value="쿠키삭제"
			onclick="javascript:exe.eraseCookie()">
		<table border="1">
		<tr>
		
			<td width="50" align="center">No.</td>
			<td width="200" align="center">content</td>
		</tr>
		</table>	
		
		<TABLE id="todo_list">	
		

		</TABLE>

	</form>
</body>
</html>
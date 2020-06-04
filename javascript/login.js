var attemp = 10;
dashLogin = function(){
	//var user = document.getElementById("username").value;
	var pw = document.getElementById("password").value;
	
	if(pw == "Huy<3Vy") //user == "admin" && 
	{
		
		window.location = "love.html";
		
	}
	else{
		//window.location = "?login=false";
		//document.getElementById('loginStatus').innerHTML = 'Sai tên đăng nhập hoặc mật khẩu. Xin hãy điền chính xác lêu lêu';
		
		if(attemp >= 0){
			attemp--;
			document.getElementById('loginStatus').innerHTML = 'Sai tên đăng nhập hoặc mật khẩu. Xin hãy điền chính xác lêu lêu';
		}
		else{
			document.getElementById('loginStatus').innerHTML = 'Nhập sai tài khoản với mật khẩu quài dị bà~!. Quên tài khoản thì liên hệ tui nhen!';
		}
	}
	
}
loadClasses = function(){
	
	if(window.location.search == "?login=true"){
		window.location = "love.html";
	}
	if(window.location.search == "?login=false"){
		if(attemp >= 0){
			attemp--;
			document.getElementById('loginStatus').innerHTML = 'Sai tên đăng nhập hoặc mật khẩu. Xin hãy điền chính xác lêu lêu';
		}
		else{
			document.getElementById('loginStatus').innerHTML = 'Nhập sai tài khoản với mật khẩu quài dị bà~!. Quên tài khoản thì liên hệ tui nhen!';
		}
	}
}

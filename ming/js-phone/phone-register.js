var pn=/^[a-zA-Z]{1}[A-Za-z0-9_-]{3,15}$/
function checkUserName(name) {
	if(name.match(pn)) {
		return 1;
	} else {
		return 0;
	}
}
var pw=/^[a-zA-Z0-9]{4,10}$/
var ps=/(?=^.{6,16}$)(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*]).*$/
function checkPassword(password) {
	if(password.match(pw)) {
		return 1;
	} else {
		return 0;
	}
}
var ph=/^1\d{10}$/
function checkPhone(phone) {
	if(phone.match(ph)) {
		return 1;
	} else {
		return 0;
	}
}
var look = document.getElementsByClassName("look")[0];
var register = look.children[1];
register.onclick = function() {
	var una = document.getElementsByName("username")[0].value;
	var up1 = document.getElementsByName("up1")[0].value;
	var up2 = document.getElementsByName("up2")[0].value;
	var uph = document.getElementsByName("userphone")[0].value;
	var message = document.getElementsByClassName("message")[0];
	var span = message.children[0];
//	console.log(una + "\n" + up1 + "\n" + up2 + "\n" + uph);
	
	if(una == "" || up1 == "" || up2 == "" || uph == "") {
		message.style.display = "block";
		span.innerHTML = "用户名或密码或手机号为空";
	} else {
		if(checkUserName(una) == 0) {
			message.style.display = "block";
			span.innerHTML = "用户名只能包含字母数字下划线和减号，4到16位";
		}
		if(checkPassword(up1) == 0) {
			message.style.display = "block";
			span.innerHTML = "密码至少有一个数字，一个大写字母"
		}
		if(up1!=up2){
			     message.style.display = "block";
			     span.innerHTML = "密码不相同";
		}
		if(checkPhone(uph) == 0) {
			message.style.display = "block";
			span.innerHTML = "手机号码为11位";
			console.log(uph.length);
		}
        if(checkUserName(una) == 1&&checkPassword(up1) == 1&&checkPhone(uph) == 1){
        	window.alert("注册成功");
        	var obj={name:una,pawo:up1,phone:uph};
        	var json=JSON.stringify(obj);
        	localStorage.setItem("name",json);
        }
	}
	
}
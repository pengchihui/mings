var look = document.getElementsByClassName("look")[0];
var login = look.children[0];

var json = localStorage.getItem("name");
var obj = JSON.parse(json);

console.log(obj)

login.onclick = function() {
	var una = document.getElementsByName("username")[0].value;
	var up1 = document.getElementsByName("up1")[0].value;
	var up2 = document.getElementsByName("up2")[0].value;
	var message = document.getElementsByClassName("message")[0];
	var span = message.children[0];
//	console.log(up1+"\n"+up2)
	 if(una!=obj.name){
			message.style.display = "block";
			span.innerHTML = "用户账号不存在";
	}else {
		if(up1!=up2){
			message.style.display = "block";
			span.innerHTML = "两次密码不一致";
	    }else{
		    if(una==obj.name&&up1==obj.pawo&&up2== obj.pawo) {
			    window.alert("登入成功");
		    }else{
		    	message.style.display = "block";
			    span.innerHTML = "此账号密码错误";
		    }
	    }
	   
    } 
}
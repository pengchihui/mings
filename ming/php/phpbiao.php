<?php

function reslut(){
	
	global $message;
	if(empty($_POST['username'])){
		$GLOBALS['message']="用户名不能为空";
		return;
	}
	if(empty($_POST['password'])){
		$message="请输入密码";
		return;
	}
	if(empty($_POST['passwords'])){
		$message="请输入确认密码";
		return;
	}
	if($_POST['password']!=$_POST['passwords']){
		$message="两次输入的密码不一致";
		return;
	}
	if(isset($_POST['agree'])&&$_POST['agree']==='true'){
		$message="必须同意用户注册协议";
		return;
	}
	
	$username=$_POST['username'];
	$password=$_POST['password'];
	$message="注册成功";
	file_put_contents('user.txt', $username."|".$password."\n",FILE_APPEND);
	
}


if($_SERVER["REQUEST_METHOD"] == "POST"){
	reslut();
}
 ?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<!---->
		<form action="<?php echo $_SERVER["PHP_SELF"];?>" method="post">
			<label for="username"  >用户名</label>
			<input id="username" type="text" name="username" value="<?php echo isset($_POST['username'])?$_POST['username']:"";  ?>"/>
			<br/>
			<label for="password" >密码</label>
			<input id="password" type="password"  name="password" value="" />
			<br/>
			<label for="passwords" >确认密码</label>
			<input id="passwords" type="password"  name="passwords" value="" />
			<br/>
			<label>
				<input type="checkbox" name="agree" value="true" />
				同意 <a href="#" target="_blank">用户协议</a>
			</label>
			<br />
			<?php echo isset($message) ? "<p>".$message."</p>":"" ;?>
			<input  type="submit" value="提交" />
		</form>
	</body>
</html>


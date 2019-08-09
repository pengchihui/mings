<?php
    global $avator;
	if($_SERVER['REQUEST_METHOD']==='POST'){
		//接收一个上传文件
		/*文件详细信息 var_dump($_FILES);*/
		$avator=$_FILES['avator'];
        upload();
        echo $message;
	}
	function upload(){
		if(!$avator['error']===UPLOAD_ERR_OK){
			$GLOBALS['message'] = "上传失败";
		}
//		echo $GLOBALS["avator"]['name'];
		$bools=move_uploaded_file( $GLOBALS["avator"]["tmp_name"] ,'./file/'.$GLOBALS["avator"]["name"]);
	    if(!$bools){
	       $GLOBALS['message'] = "88上传失败88";
	    }else{
	       $GLOBALS['message'] = "上传成功";
	    }
	    
	 }
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<form action="<?php echo $_SERVER["PHP_SLEF"]; ?>" method="post" enctype="multipart/form-data">
			<label>上传头像：</label>
			<input type="file" name="avator" id="avator"/>
			<input type="submit" value="提交"/>
		</form>
    </body>
</html>
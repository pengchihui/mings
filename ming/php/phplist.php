<?php
	$contents=file_get_contents("target.txt");//文件读取到字符串
	$lines=explode("\n", $contents);/*通过换行分割为数组*/
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<table border="" cellspacing="" cellpadding="">
			<caption>全员信息表</caption>
			<thead>
				<tr>
					<th>编号</th>
					<th>姓名</th>
					<th>年龄</th>
					<th>邮箱</th>
					<th>网址</th>
				</tr>
			</thead>
			<tbody>
				<?php foreach($lines as $value){if(!$value) continue;$cols=explode('|',$value); ?>
				<tr>
					<?php foreach($cols as $ge){ ?>
				         <td><?php echo($ge);?></td>
				    <?php } ?> 
			    </tr>
			   <?php } ?> 
			</tbody>
			
		</table>
		
		
	</body>
</html>
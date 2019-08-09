<?php
//echo "好球<br/>";
//echo "内置对象的实例<br/>";
//printf("%s 你好  %d<br/>","tom",123456);
//$a=sprintf("%s 你好  %d","tom",123456);
//echo $a,"<br/>";
////日期函数
//echo "<br/>百灵鸟《金银岛》<br/>";
//$date=date("Y-m-d");//带时分秒
//print("时间戳:");
//echo time();
//echo 'Now:'.date('Y-m-d',$nextWeek)."<br/>";
//echo mktime(1,1,2019),"<br/>";
//echo date("Y-m-d"),"<br/>";
//echo date("Y/m/d");
//echo "<br/>";
//echo date("Y-m-d H:i:s");
//echo "<br/>";
//
//$nextWeek=time()+(7*24*60*60);
////由于时区少了八小时
//echo 'NextWeek'.date('y-m-d H:i:s',$nextWeek);
//echo pi();
//
//  超全局变量
	  
//	$GLOBALS
//	$_SERVER
//	$_REQUEST
//	$_POST
//	$_GET
//	$_FILES
//	$_ENV
//	$_COOKIE
//	$_SESSION
 //升序于降序 sort() rsort()
 echo date("");
 $arry=array(0,12,34,45,7,10,12,0);
 sort($arry);
 echo "升序排列："." $arry[2]"."\t";
 rsort($arry);
 echo "降序排列：","$arry[2]"."\t";
 echo "<br/>";
 var_dump(key($arry));
 echo "<br/>";
 var_dump(current($arry));
 echo "<br/>";
$str="123456789klasb hello world";
  //字符串
  echo strlen($str); //函数返回字符串的长度，以字符计
  echo str_word_count($str); //函数对字符串中的单词进行计数
  echo strrev("hello world!"); //函数反转字符串 
  echo strpos("hello world","world");//于检索字符串内指定的字符或文本 位置
  echo str_replace("world","Jim",$str);//数用一些字符串替换字符串中的另一些字符
  echo "<br/>";
  echo substr($str,2);
  echo "<br/>";
  echo htmlentities("<hr/>");  //原汁原味的打印
  echo "<br/>";
  echo strrchr("Hello world! What a beautiful day!",'k');
  echo "<br/>";
  echo str_pad("abcdefgh",12,"at",2);
  echo "<br/>";
  echo strstr("abcdefgh","fg");
  echo "<br/>";
  
  //常量    常量类似变量，但是常量一旦被定义就无法更改或撤销定义、
  //    常量是自动全局的，而且可以贯穿整个脚本使用
  define("name","Welcome to W3School.com.cn!");
  echo name;
  
  //数字
  echo "<br/>";
  echo pow(2,6);
  echo "<br/>";
  echo rand(2,6);
  echo "<br/>";
  echo number_format(123.456478,3,"d","d");
  echo "<br/>";
  //类的声明class
  
  //空值 null 用来区分
  
  
  
  
  
?>
<script>
	
	document.write("<br/>百灵鸟<br/>");
	var str="百灵鸟   九尾狐";
		document.write("<br/>"+str.indexOf("灵","尾")+"<br/>");
	
</script>
<?php
echo 123,"<br>中文";//echo是一个语法结构，带输出功能，只能输出简单数据(可以多个输出)
@print(["a","b"]);//print()是一个函数，带输出功能，只能输出简单数据
print_r(true);//能输出一些复杂的数据
var_dump(["asd",123,true]);//更详细的输出数据


echo "<hr>";
	
$a=5;
//$b=$a;传值
$b=&$a;//传址
$b=6;
echo $a,"<br>";

for($i=0;$i<5;$i++){
	echo $i,"<br>";
}



//单引号字符串中出现的变量不会被变量的值替代;
//双引号字符串中最重要的一点是其中的变量会被变量值替代

$str="hello";
$str123="6666";
echo '$str<br>';
echo "$str<br>";
echo "{$str}123<br>";



//运算 js中的"+"，在php中要用"."
$c=5;
$d="6asd";	
echo $c.$d;

//函数不支持重载
$asd=123;
function test($val1,$val2){
	global $asd;
	return $val1*$val2+$asd;
}
echo test(5,6);

//数组（索引数组，关联数组）
$arr1=["a","b","c"];
var_dump($arr1);

//关联数组类似js中的对象
$arr2=["name"=>"张三","age"=>19];
var_dump($arr2);


//php对象
class Pic{
	public $m=5;
	function x(){
		global $m;
		return $m+3;
	}
}
$n=new Pic;
echo $n->m;
echo $n->x();


$y;
var_dump($y);

for($i=0;$i<count($arr1);$i++){
	echo $arr1[$i];
}

foreach($arr2 as $key=>$val){
	echo $key.":".$val.",";
}


?>

<script>
	var a=5;
	console.log(a)
</script>
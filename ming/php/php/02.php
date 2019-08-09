<?php
	
echo sprintf("你好%%,%b要我向你问好",3);	
echo "<br>";
echo time(); 
echo "<br>";
echo mktime(0,0,0,1,1,2019); 
echo "<br>";	
echo date("Y/m/d H:i:s",time()+(60*60*8));
echo "<br>";	
echo abs(round(-3.1415926,2));	
echo "<br>";
echo min(["a","b","c","A"]);
echo "<br>";
echo mt_rand(0,100)/100;

$str="heLLo word!!!";
echo "<br>";
echo strlen($str);
var_dump(explode("o",$str,2));	
echo trim($str,"!");
echo "<br>";
echo str_ireplace("l","x",$str);
echo "<br>";	
echo ucfirst(explode(" ",$str)[0]);
echo htmlentities("<h1>标题</h1><p><a href='#'>666</a></p>");
echo "<br>";
echo number_format(1231233.1415,2,".",",");


$arr0=array("k0"=>"a","k1"=>"b","k2"=>"c");
var_dump($arr0);
var_dump(array_keys($arr0));//["k0","k1","k2"]
echo key($arr0);
echo current($arr0);
echo next($arr0);
echo key($arr0);
echo current($arr0);
var_dump(array_combine(["a","b","c"],[1,2,3]));
var_dump(range(3,9,2));//[3,5,7,9]

$arr1 = array('k1'=>'中文','k2'=>'val2','k3'=>array('v3','v4'));
echo json_encode($arr1,JSON_UNESCAPED_UNICODE);


echo "<hr>";
$arr=["a",['name'=>"张三",'age'=>19],"c","c","c","c","c","c"];
var_dump($arr);
?>

<ul>
<?php for($i=0;$i<count($arr);$i++){ ?>
	<li><?php @print($arr[$i]); ?></li>
<?php } ?>
</ul>






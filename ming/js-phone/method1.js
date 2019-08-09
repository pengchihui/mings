
/*调用此函数获得html中的id属性*/
function $(str) {
	return document.getElementById(str);
}

var addrShow = $('addr-show');  
var btn = document.getElementsByClassName('met1')[0]; //提交按钮
var prov = $('prov'); //省
var city = $('city'); //市
var country = $('country'); //区县

/*用于保存当前所选的省市区值*/
var current = {
	prov: '',
	city: '',
	country: ''
};

/*自运行匿名函数*/
/*自动加载省份列表*/
!function showProv() {
	var len = provice.length; /*加载json数据*/
	for(var i = 0; i < len; i++) { /*遍历json数据*/
		var provOpt = document.createElement('option'); 
		provOpt.innerText = provice[i]['name'];
		provOpt.value = i;
		prov.appendChild(provOpt); 
	}
}();

/*根据所选的省份来显示城市列表*/
function showCity(obj) {
	//options是个数组,里面可以存放多个<option value="值">文本</option>这样的标签
	//selectedIndex属性--------当前被选中的框中的文本的索引值,此索引值是内存自动分配的(0,1,2,3.....)对应(第一个文本值,第二个文本值,第三个文本值,第四个文本值..........) 
	var val = obj.options[obj.selectedIndex].value; /*这里得到的是所选择省份在所有下拉项中为第几项*/
	if(val != null) { 
		current.prov = val; 
		city.length = 1;
		var cityLen = provice[val]["city"].length;
		for(var j = 0; j < cityLen; j++) {
			var cityOpt = document.createElement('option');
			cityOpt.innerText = provice[val]["city"][j].name;
			cityOpt.value = j;
			city.appendChild(cityOpt); 
		}
	}
}

/*根据所选的城市来显示县区列表*/
function showCountry(obj) {
	var val = obj.options[obj.selectedIndex].value;
	current.city = val;
	if(val != null) {
		country.length = 1; 
		var countryLen = provice[current.prov]["city"][val].districtAndCounty.length;
		for(var n = 0; n < countryLen; n++) {
			var countryOpt = document.createElement('option');
			countryOpt.innerText = provice[current.prov]["city"][val].districtAndCounty[n];
			countryOpt.value = n;
			country.appendChild(countryOpt);
		}
	}
}

/*选择县区之后的处理函数*/
function selecCountry(obj) {
	current.country = obj.options[obj.selectedIndex].value;
	if((current.city != null) && (current.country != null)) {
		btn.disabled = false;
	}
}

/*点击确定按钮显示用户所选的地址*/
function showAddr() {
	//提交时把这三个参数用ajax传递给后台
	//省
	var a = provice[current.prov].name; 
	//市
	var b = provice[current.prov]["city"][current.city].name; 
	//区县
	var c = provice[current.prov]["city"][current.city].districtAndCounty[current.country];
	//提交时输出到addrShow中
	addrShow.value = a + '-' + b + '-' + c;
}
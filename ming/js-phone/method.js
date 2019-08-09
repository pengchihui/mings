//****************针对第一种方式的具体js实现部分******************//
//****************所使用的数据是city.js******************//

/*根据id获取对象*/
function $(str) {
	return document.getElementById(str);
}

var addrShow = $('addr-show');
var btn = document.getElementsByClassName('met1')[0];
var prov = $('prov');
var city = $('city');
var country = $('country');

/*用于保存当前所选的省市区*/
var current = {
	prov: '',
	city: '',
	country: ''
};

/*自动加载省份列表*/
(function showProv() {
	btn.disabled = true; /*自动加载后提交按钮不能点击*/
	var len = provice.length; /*加载json数据*/
	for(var i = 0; i < len; i++) { /*遍历json数据*/
		var provOpt = document.createElement('option'); /*创建option标签*/
		provOpt.innerText = provice[i]['name']; /*option标签中内容为json数据里的省份名*/
		provOpt.value = i; /*option标签值为当前遍历的下标值*/
		prov.appendChild(provOpt); /*把当前这个option标签添加到省选择事件中*/
	}
})();

/*根据所选的省份来显示城市列表*/
function showCity(obj) {
	//options是个数组,里面可以存放多个<option value="值">文本</option>这样的标签
	//selectedIndex属性--------当前被选中的框中的文本的索引值,此索引值是内存自动分配的(0,1,2,3.....)对应(第一个文本值,第二个文本值,第三个文本值,第四个文本值..........) 
	var val = obj.options[obj.selectedIndex].value; /*这里得到的是所选择省份在所有下拉项中为第几项*/

	if(val != current.prov) { /*如果当前选择的省份值等于用来保存省份中的空值*/
		current.prov = val; /*省值保存起来*/
		addrShow.value = '';
		btn.disabled = true;
	}
	//alert(val);
	if(val != null) { /*如果当前选择的省份值不为空*/
		city.length = 1;
		var cityLen = provice[val]["city"].length;
		for(var j = 0; j < cityLen; j++) {
			var cityOpt = document.createElement('option');
			cityOpt.innerText = provice[val]["city"][j].name;
			cityOpt.value = j;
			city.appendChild(cityOpt); /*把当前这个option标签添加到市中*/
		}
	}
}

/*根据所选的城市来显示县区列表*/
function showCountry(obj) {
	var val = obj.options[obj.selectedIndex].value;
	current.city = val; /*市值保存起来*/
	if(val != null) {
		country.length = 1; //清空之前的内容只留第一个默认选项
		var countryLen = provice[current.prov]["city"][val].districtAndCounty.length;
		if(countryLen == 0) {
			addrShow.value = provice[current.prov].name + '-' + provice[current.prov]["city"][current.city].name;
			return;
		}
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
	var a = provice[current.prov].name;
	var b = provice[current.prov]["city"][current.city].name;
	var c = provice[current.prov]["city"][current.city].districtAndCounty[current.country];
	addrShow.value = provice[current.prov].name + '-' + provice[current.prov]["city"][current.city].name + '-' + provice[current.prov]["city"][current.city].districtAndCounty[current.country];
}
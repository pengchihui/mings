var ak=document.getElementsByTagName("a");

for(var i=0;i<ak.length;i++){
	ak[i].bin=i;
	ak[i].onclick=function(){
		for(var j=0;j<ak.length;j++){
			ak[j].style.background="#ffffff";
			ak[j].style.color="#222121";
		}
		ak[this.bin].style.background=" #cc0033";
		ak[this.bin].style.color="#fcf9f9"
	}
}











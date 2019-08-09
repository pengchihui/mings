$.fn.changeColor=function(data){
    // console.log(this);//调用这个方法的对象
     this.click(function(){
        // console.log(this);  //当前产生点击事件的DOM对象
        $(this).parent().next().children('div').css('backgroundColor',$(this).val());
    });
};
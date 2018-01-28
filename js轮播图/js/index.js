//功能需求：
//1、生成对应的span，而且点亮第一个span
//2、第一张图片放在left=0;其他图片放在右边left=imgWidth+“px”；
//3、为每一个span绑定click事件后，判断点击的是哪一个按钮
//4、如果是向左的给定一种程序，向右的给定一种程序，其他的一种程序。
//5、加上定时器
window.onload=function(){
	//获取相关信息
	var Slider = document.getElementById('slider');
	var imgWidth = Slider.offsetWidth;
	var Lis = document.getElementsByTagName('li');
	var prev = document.getElementById('prev');
	var next = document.getElementById('next');
	var ctrl = prev.parentNode;//定义一个prev的父节点
	var num = 0;//记录当前li的索引
	for(var i = 0;i<Lis.length;i++){
		//1.生成对用的小圆点
		var newSpan=document.createElement('span');
		newSpan.innerHTML = i;//text-index:-99999px,不用显示
		newSpan.className = "slider-ctrl-con";
		ctrl.insertBefore(newSpan,prev);//把生成的小圆点插入prev前
		//2.将其他图片放在右边，先不显示letf=imgWidth+'px'
		Lis[i].style.left = imgWidth + "px";
	}
	//获取span标签
	var spanArr = document.getElementsByTagName('span');
	//点亮第一个span
	spanArr[0].className += "current";
	Lis[0].style.left = 0;
}

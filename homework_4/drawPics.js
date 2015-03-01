window.onload = function(){
	var canvas = document.getElementById("draw");
    var context = canvas.getContext("2d");
    //获取绘图上下文

	context.strokeStyle = 'black';
    context.lineWidth = 3;
    context.linCap = 'round';
    //设置上下文的一些属性

    var pen_color = context.strokeStyle;
    var pen_size = context.lineWidth;


    var isDown = false;
    //判断鼠标按下

    var mouseDown = function(e){
		isDown = true;
		context.beginPath();
		var mouseX = e.pageX-this.offsetLeft;
		var mouseY = e.pageY-this.offsetTop;
		context.moveTo(mouseX, mouseY);
		context.lineTo(mouseX, mouseY);
		context.stroke();
	}

	var mouseMove = function(e){
		if(isDown == true){
		var mouseX = e.pageX-this.offsetLeft;
		var mouseY = e.pageY-this.offsetTop;
		context.lineTo(mouseX, mouseY);
		context.stroke();
		}
	}

	var mouseUp = function(e){
		context.closePath();
		isDown = false;
	}	
//鼠标按下，移动，抬起的事件
	canvas.onmousedown = mouseDown;
	canvas.onmouseup = mouseUp;
	canvas.onmousemove = mouseMove;
    
	var oBtn = document.getElementById("btn1");
	oBtn.onclick = function(){
		context.clearRect(0, 0, 800, 800);
	}

	var col = new Array();
    var choose_colors = document.getElementsByClassName("colors");
	var reserved_colors = ["#FF0000", "#00FFFF", "#00FF00", "#FFFF00", "#000000"];
	for(var i=0;i<5;i++){
		col[i]=choose_colors[i];
	}

//这里for循环会出问题，需要优化
	col[0].onclick = function(){
		context.strokeStyle = reserved_colors[0];
	}
	col[1].onclick = function(){
		context.strokeStyle = reserved_colors[1];
	}
	col[2].onclick = function(){
		context.strokeStyle = reserved_colors[2];
	}
	col[3].onclick = function(){
		context.strokeStyle = reserved_colors[3];
	}
	col[4].onclick = function(){
		context.strokeStyle = reserved_colors[4];
	}
//问题同上
	var siz = new Array();
	var choose_size = document.getElementsByClassName("pens");	
	for(var i=0;i<3;i++){
		siz[i] = choose_size[i];
	}
	siz[0].onclick = function(){
		context.lineWidth = 1;
	}
	siz[1].onclick = function(){
		context.lineWidth = 3;
	}
	siz[2].onclick = function(){
		context.lineWidth = 5;
	}
}	
$(document).reday(function(){
	var $BigPic = $(".picture_container"),
		$L = $(".cli-btn1"),
		$R = $(".cli-btn2"),
		$Num = $(".num_pointer li"),
		i=0;

	$L.click(function(){
		$Num.removeClass("cur");

		if(i==3){
			i=0;
			$Num.eq(i).addClass("cur");
			$BigPic.animate({left:-(i*960)+'px'},100);
		}
		else{
			i++;
			$Num.eq(i).addClass("cur");
			$BigPic.animate({left:-(i*960)+'px'},500);
		}
	});

	$R.click(function(){
		$Num.removeClass("cur");

		if(i==0){
			i=3;
			$Num.eq(i).addClass("cur");
			$BigPic.animate({left:-(i*960)+'px'},100);
		}
		else{
			i--;
			$Num.eq(i).addClass("cur");
			$BigPic.animate({left:-(i*960)+'px'},500);
		}
	});
//以上为手动滚动
	playPic = setInterval(function(){
		$Num.removeClass("cur");

		if(i==3){
			i=0;
			$Num.eq(i).addClass("cur");
			$BigPic.animate({left:-(i*960)+'px'},500);
		}
		else{
			i++;
			$Num.eq(i).addClass("cur");
			$BigPic.animate({left:-(i*960)+'px'},500);
		}
	},2000);

	$(".slider_container").hover(function(){
		clearInterval(playPic);
	},function(){
		playPic = setInterval(function(){
			$Num.removeClass("cur");

			if(i==3){
				i=0;
				$Num.eq(i).addClass("cur");
				$BigPic.animate({left:-(i*960)+'px'},500);
			}
			else{
				i++;
				$Num.eq(i).addClass("cur");
				$BigPic.animate({left:-(i*960)+'px'},500);
			}
		},2000);
	});


});
window.onload=function()
	{
		var oBtn=document.getElementById("btn1");

		oBtn.onclick=function()
		{
			ajax("echo.php", function (str){				
				var unzip = str;
				var data = JSON.parse(unzip);
				//将string转化成JSON对象

				//接下来是取值，赋值				
				var page = data.data.page;	

				var nickname = new Array();		

				for(var i=0; i<data.data.travelers.length; i++)
                {
                    nickname[i] = data.data.travelers[i].nickName;
                }
				
				var travelerCnt = data.data.travelerCnt;
				var size = data.data.size;
				//以上是赋值部分
                
				var chul = document.getElementsByTagName("ul");
				chul[1].dataset.travelercnt = travelerCnt;
				chul[1].dataset.size = size;
				//DOMstringmap

                var chp = document.getElementsByClassName("userName");
                for(var i=0; i<nickname.length; i++)
                {
                    chp[i].innerHTML = nickname[i];
                }
			    //把名字添加上 

                var chpic = document.getElementsByTagName("img");
                chpic[0].src="heads/head1.jpeg";
                chpic[1].src="heads/head2.jpeg";
                chpic[2].src="heads/head3.jpeg";
                chpic[3].src="heads/head4.jpeg";
                //添加图片

			})
		};
	};
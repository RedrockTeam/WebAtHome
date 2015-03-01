window.onload=function()
{
	var oBtn=document.getElementById("oBtn1");
	
	oBtn.onclick=function()
	{
		
        var nickn=new Array();
        var chp = document.getElementsByClassName("userName");
        for(var i=0; i<chp.length; i++)
        {
            nickn[i]=chp[i].innerHTML;
        }  
        //取出所有的名字

       /* var imgs = document.getElementsByTagName("img");
        var imgsrc = new Array();
        for(var i=0; i<imgs.length; i++)
        {
        	imgsrc[i]=imgs[i].src;
        }
       */

        //取出图片的地址,若需显示出真实地址，可以更改设定
        
        var data = new Object();
        data.page= 3;
        data.traveler=new Array();

        for(var i=0; i<nickn.length; i++)
        {
            data.traveler[i]=new Object();
            data.traveler[i].nickname=nickn[i];
            data.traveler[i].Img="...";//这里可以更改显示图片来源路径为imgsrc[i];
        }

        data.size= 20;
        data.travelerCnt= 48;
        //写转化成json函数

        var json = JSON.stringify(data);
        alert(json);
	}
}
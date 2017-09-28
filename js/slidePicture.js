      
       var Li = document.getElementsByClassName("imgLi")[0].offsetWidth;//获取单个图片li的宽
       var btn = document.getElementById("btn").children;//获取底部圆圈
       var obannerimg = document.getElementById("wrap").children;//获取li
       var cbannerimg = obannerimg[0].cloneNode(true);//克隆
       cbannerimg.style.float="left";
       console.log(cbannerimg);
       document.getElementById("wrap").appendChild(cbannerimg);
       document.getElementById("wrap").style.width = Li*obannerimg.length+"px";
       /* 右按钮*/
      var num = 0;
   
       document.getElementById("right").onclick = function(){
       	   num++;
       	  
       	   if(num>=obannerimg.length){
       	   	num=1	;
       	    //$("wrap").style.transition = ""
       	   	document.getElementById("wrap").style.left = 0+"px";
       	   }
       	    //console.log(num)
       	 // $("wrap").style.transition = "left 2s"
       	  // $("wrap").style.left = -Li*num+"px";
       	 move(document.getElementById("wrap"),"left",-Li*num);
       	  
       	   /*底部小圆圈*/
       	 
       	   for (var j in btn) {
     			btn[j].className="ccc";
     		}
       	  if(num==obannerimg.length-1){
       	  	 btn[0].className="black";
       	  }else{
       	  	 btn[num].className="black";
       	  }
       	  
       }
       
         /* 左按钮*/
       document.getElementById("left").onclick = function(){
       	   num--;
       	  
       	   if(num<0){
       	   	num=obannerimg.length-2;
       	   	document.getElementById("wrap").style.left = -Li*(obannerimg.length-1)+"px";
       	   }
       	    console.log(num)
       	   move(document.getElementById("wrap"),"left",-Li*num);
       	  /*底部小圆圈*/
       	   for (var j in btn) {
     			btn[j].className="ccc";
     		}
       	   btn[num].className="black";
       }
       
      /* 底部小圆圈鼠标移入*/
     
     for (var i in btn) {
     	btn[i].className="ccc";
     	btn[0].className="black";
     	btn[i].index = i;
     	btn[i].onclick = function(){
     		for (var j in btn) {
     			btn[j].className="ccc";
     		}
        num=this.index
     		btn[this.index].className="black";
     		console.log(this.index)
     		  move(document.getElementById("wrap"),"left",-Li*this.index);
     	}
     }
    /*让轮播图自己走，设置定时器*/
    var time = null;  
    time = setInterval(document.getElementById("right").onclick,3000)
    
    /* 左右按钮的显示与隐藏*/
       document.getElementById("box").onmouseover= function(){
       	  document.getElementById("left").style.display = "block";
       	  document.getElementById("right").style.display = "block";
       	  clearInterval(time)
       	};
       document.getElementById("box").onmouseout = function(){
       	  document.getElementById("left").style.display = "none";
       	  document.getElementById("right").style.display = "none";
       	  clearInterval(time)
         time = setInterval(document.getElementById("right").onclick,3000);
         console.log("鼠标移出，打开定时器,自动播放")
       };

window.onload=function(){
		$(document).ready(function(){
			var $_ol_img=$(".f_left").find("img");
			var $_or_img=$(".f_right").find('img');
				$_or_img.mouseover(function(index){
					$_or_img.removeClass('bg_kuang');
					$(this).addClass('bg_kuang');
					$_ol_img.attr('src',$(this).attr('src'))
				});
			var $_aT_li=$('.T_top').find('li');
			var $_oT_xian=$('.T_xian');
			var $_aT_Three=$('.T_Three');
			$_aT_li.click(function(ev){
				var oT_width=$(this).width();
				$_oT_xian.width('OT_width');
				$_oT_xian.css('left',96*$(this).index());
			});
			$_aT_li.click(function(){
				var $_aT_width=$_aT_Three.width();
				var $_aT_width1=$_aT_width*$(this).index();
				$_aT_Three.each(function(){
					var ii=[1,2,3,"$(this).index()"];
					var $_Left=$_aT_width*ii[$(this).index()]-$_aT_width-$_aT_width1;
					$(this).css('left',$_Left);
				})
			});
		})


		var arr=[];
		var a=0;	
		setInterval(function(){
			var oT_pl_kuang=document.querySelector(".T_pl_kuang");
			var aHli=oT_pl_kuang.querySelectorAll("li");
			for(var i=0;i<aHli.length;i++){
				aHli[i].style.top=parseInt(getStyle(aHli[i]))+70+'px';
			}
			var oLi=document.createElement("li");
				oLi.className="Js_kuang";
			var oImg=document.createElement("img");
				oImg.src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502252275970&di=5d1ec778efd905941fdbe32b852b044f&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Db9700de5c9cec3fd9f33af36bee1be4a%2Ffd039245d688d43f87f661db771ed21b0ef43bbf.jpg";
				oImg.className="Js_img";
				oLi.appendChild(oImg);
			var oP=document.createElement('P');
					if(a>19){
						a=0;
					}
					oP.className="Js_P";
					oP.innerText=arr[a++];
					oLi.appendChild(oP);
			oLi.style.top=parseInt(getStyle(oLi))+70+"px";
			oT_pl_kuang.appendChild(oLi);
			
		},10000);
		
		var aT_Three=document.querySelectorAll(".T_Three");
	
		
		//图片及文章的自生成
			var getContent=null;
			function getStyle(obj){
				return obj.currentStyle?obj.currentStyle.top:getComputedStyle(obj).top;
			}
			$.ajax({
				url:'http://jsonp.smallfox.cc/module/article/type.php',
				type:'get',
				data:{
					pt:'jsonp',
					ajax:'yes',
					tid:'2',
					page:'1',
				},
				callback:'callback',
				dataType:'jsonp',
				success:function(data){
					var aHref_img=document.querySelectorAll('.Href_img');
					var aHref_title=document.querySelectorAll('.Href_title');
					var aAjax_title=document.querySelectorAll('.Ajax_title');
					var aAjax_content=document.querySelectorAll('.Ajax_content');
					var aAjax_name=document.querySelectorAll('.Ajax_name');
					var aAjax_time=document.querySelectorAll('.Ajax_time');
					var aAjax_alt=document.querySelectorAll('.Ajax_alt');
					var aAjax_Title=document.querySelectorAll('.Ajax_Title');
					var aAjax_Content=document.querySelectorAll('.Ajax_Content');
					var aHref_Photo=document.querySelectorAll('.Href_Photo');
					var aHref_Title=document.querySelectorAll('.Href_Title');
					for(var i=0;i<data.data.length;i++){
						arr.push(data.data[i].j_jianjie.replace(/(^\s+)|(\s+$)/g,''));
					}
					for(var i=0;i<7;i++){
						aAjax_title[i].innerText=data.data[i].j_name;
						aAjax_content[i].innerHTML=data.data[i].j_jianjie.replace(/(^\s+)|(\s+$)/g,'');
						aAjax_name[i].innerText=data.data[i].j_zuozhe;
						aAjax_time[i].innerText=data.data[i].j_time;
						aAjax_alt[i].alt=data.data[i].j_zuozhe;
						aHref_img[i].href="index_fh.html?tid="+data.data[i].j_tid+"&cid="+data.data[i].j_cid+"";
						aHref_title[i].href="index_fh.html?tid="+data.data[i].j_tid+"&cid="+data.data[i].j_cid+"";
					}
					for(var i=0;i<3;i++){
						aAjax_Title[i].innerText=data.data[i+7].j_name;
						aAjax_Content[i].innerHTML=data.data[i+7].j_jianjie.replace(/(^\s+)|(\s+$)/g,'');
						aHref_Photo[i].href="index_fh.html?tid="+data.data[i+7].j_tid+"&cid="+data.data[i+7].j_cid+"";
						aHref_Title[i].href="index_fh.html?tid="+data.data[i+7].j_tid+"&cid="+data.data[i+7].j_cid+"";
					} 
				}
			});	
			$.ajax({
				url:'http://jsonp.smallfox.cc/module/article/type.php',
				type:'get',
				data:{
					pt:'jsonp',
					ajax:'yes',
					tid:'2',
					page:'2',
				},
				callback:'callback',
				dataType:'jsonp',
				success:function(data){
					var aT_kuang=aT_Three[0].querySelectorAll('.T_kuang');
					var aT_kuang1=aT_Three[1].querySelectorAll('.T_kuang');
					var aT_kuang2=aT_Three[2].querySelectorAll('.T_kuang');
					for(var i=0;i<6;i++){
						aT_kuang[i].innerHTML=data.data[i].j_jianjie.replace(/(^\s+)|(\s+$)/g,'');
						aT_kuang1[i].innerHTML=data.data[i+6].j_jianjie.replace(/(^\s+)|(\s+$)/g,'');
						aT_kuang2[i].innerHTML=data.data[i+12].j_jianjie.replace(/(^\s+)|(\s+$)/g,'');
					}
				}
			});
			$.ajax({
				url:'http://jsonp.smallfox.cc/module/article/type.php',
				type:'get',
				data:{
					pt:'jsonp',
					ajax:'yes',
					tid:'2',
					page:'3',
				},
				callback:'callback',
				dataType:'jsonp',
				success:function(data){
					var oBt_tom=document.querySelector('.Bt_tom');
					var aB_span=oBt_tom.querySelectorAll('span');
					for(var i=0;i<6;i++){
						aB_span[i].innerHTML=data.data[i].j_jianjie.replace(/(^\s+)|(\s+$)/g,'');
						aB_span[i+6].innerHTML=data.data[i+6].j_jianjie.replace(/(^\s+)|(\s+$)/g,'');
					}
				}
			});
						


						
			// 360图片API
			$.ajax({
				url:'http://image.so.com/j',
				type:'get',
				data:{
					src:'360pic_strong',
					z:'2',
					cmg:'2f52849d495bb60742a8b46444e77bf8',
					q:'图书',
					correct:'图书',
					sn:'0',
					pn:'40',
					sid:'553ab22c6a3cd0840c0785f3e3b7d582',
					ran:'0',
				},
				callback:'callback',
				dataType:'jsonp',
				success:function(data){
					var aAjax_img=document.querySelectorAll('.Ajax_img');
					var aAjax_photo=document.querySelectorAll('.Ajax_Photo');
					var brr=[];
					for(var i=0;i<data.list.length;i++){
						if(data.list[i].thumbWidth>data.list[i].thumbHeight){
							brr.push(data.list[i].thumb)
						}
					}
					for(var i=0;i<7;i++){
						aAjax_img[i].src=brr[i];
						aAjax_img[i].alt="无图片";
					}
					for(var i=0;i<3;i++){
						aAjax_photo[i].src=brr[i+8];
					}
				}
			});
}	

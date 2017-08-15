
				window.onload=Ger;	
				window.onload=Gtt;	
				var sn=0;
				var pn=16;
				var pd=0;
				var arr_img=[];
				var arr_title=[];
				var arr_name=[];
				var arr_time=[];
				var arr_content=[];
				var arr_tid=[];
				var arr_cid=[];
				var aAjax_img_P=document.querySelectorAll('.Ajax_img_P');
				var aAjax_title_p=document.querySelectorAll('.Ajax_title_p');
				var aAjax_name_P=document.querySelectorAll('.Ajax_name_P');
				var aAjax_time_P=document.querySelectorAll('.Ajax_time_P');
				var aAjax_Content_P=document.querySelectorAll('.Ajax_Content_P');
				var oSPZ_left=document.querySelector('.SPZ_left');
				var aSPZ_li=oSPZ_left.querySelectorAll('li');
				var oSPZ_right=document.querySelector('.SPZ_right');
				var a_SA=oSPZ_left.querySelectorAll('a');
				var oSPZ_yi=document.querySelectorAll('.SPZ_yi');
				
				

				var aContent_li=document.querySelectorAll('.Content_li');
				var arr=["亲情文章","励志文章","人生感悟","友情文章","搞笑笑话","爱情文章"];
				var brr=['亲情漫画','励志漫画','人生感悟','友情漫画','搞笑漫画','爱情漫画'];

				var tid=1;
				var page=1;
				var  a=0;	
		
			
				
			
					var aSPZ_aa=document.querySelectorAll(".SPZ_aa");
					for(var i=0;l=aSPZ_aa.length,i<aSPZ_aa.length;i++){
						aSPZ_aa[i]=document.querySelectorAll(".SPZ_aa");
					}
					var aIMg=[];
					for (var i=0;l=aSPZ_aa.length,i<l;i++)
					{			
						aIMg.push(aSPZ_aa[i].querySelectorAll('img'));		
					}

					var oButton=document.querySelectorAll('.button');
					oButton[0].onclick=function(){
						if(a<arr_img.length-6){
							for(var i=0;l=aSPZ_li.length,i<l;i++){
								aSPZ_li[i].style.display="block";
							};
							a+=6;
							page++;
							Ger()
							oButton[1].style.display="block";

							sn+=pn;
							Gtt();

						}else{
							this.style.display='none';
						}
					}
					oButton[1].onclick=function(){
						if(a>0){
							a-=6;
							Ger()
							for(var i=0;l=aSPZ_li.length,i<l;i++){
								aSPZ_li[i].style.display="block";
							}
							oButton[0].style.display="block";

							sn-=pn;
							Gtt();
						}
						else{
							this.style.display="none";
						}
					}
					var oSPZ_kuang=document.querySelector('.SPZ_kuang');
					var a_Span=oSPZ_kuang.querySelectorAll('span');
					for(var i=0;l=a_Span.length,i<l;i++){
						a_Span[i].index=i;
						a_Span[i].onclick=function(){
							pd=this.index;
							Gtt();
							for(var i=0;l=aSPZ_li.length,i<l;i++){
								aSPZ_li[i].style.display="block";
							}
							a_Span[tid-1].style.color='';
							this.style.color="red";
							page=1;
							a=0;
							arr_img=[];
							arr_title=[];
							arr_name=[];
							arr_time=[];
							arr_content=[];
							arr_tid=[];
							arr_cid=[];
							tid=this.index+1;
							Ger();	
							oButton[0].style.display="block";	
							oButton[1].style.display="none";	
						}
					}


						function fn2(data){
							var W_arr=[];
							var H_arr=[];
							var c=0;
							for(var i=0;l=aSPZ_aa.length,i<l;i++){
								for(var j=0;l=aSPZ_aa.length,j<l;j++){
									aIMg[i][j].src=data.list[c].thumb;
									c++;
								}
							}
						}
						function fn1(data){
							for(var i=0;l=data.data.length,i<l;i++){
								arr_tid.push(data.data[0].j_tid);
								arr_img.push(data.data[i].j_fengmian); 
								arr_title.push(data.data[i].j_name); 
								arr_name.push(data.data[i].j_zuozhe); 
								arr_time.push(data.data[i].j_time); 
								arr_content.push(data.data[i].j_jianjie);
								arr_cid.push(data.data[i].j_cid);
							}
							for(var i=0;i<6;i++){
								oSPZ_left.style.left='0px';
								oSPZ_right.style.left='0px';
								if(arr_title[i+a] != undefined){
									aAjax_img_P[i].src=arr_img[i+a]; 
									aAjax_img_P[i].alt="图片查找中......";
									aAjax_title_p[i].innerText=arr_title[i+a]; 
									aAjax_name_P[i].innerText=arr_name[i+a]; 
									aAjax_time_P[i].innerText=arr_time[i+a]; 
									aAjax_Content_P[i].innerHTML=arr_content[i+a];
									aContent_li[i].innerHTML=arr[tid-1];
								}
								else{
									aSPZ_li[i].style.display="none";
								}
							}
							for(var i=0;i<6;i++){
								a_SA[2*i].href="index_fh.html?tid="+arr_tid[0]+"&cid="+arr_cid[i+a]+"";
								a_SA[2*i+1].href="index_fh.html?tid="+arr_tid[0]+"&cid="+arr_cid[i+a]+"";
							}					
						}
				
			
				function Gtt(){
					var oScript=document.createElement('script');
					oScript.src="http://image.so.com/j?src=360pic_strong&z=2&cmg=2f52849d495bb60742a8b46444e77bf8&q="+brr[pd]+"&correct="+brr[pd]+"&sn="+sn+"&pn="+pn+"&sid=553ab22c6a3cd0840c0785f3e3b7d582&ran=0&ras=0&callback=fn2";
					document.body.appendChild(oScript);
				}
				Gtt();
				function Ger(){
					var oScript=document.createElement('script');
					oScript.src="http://jsonp.smallfox.cc/module/article/type.php?pt=jsonp&ajax=yes&tid="+tid+"&page="+page+"&callback=fn1";
					document.body.appendChild(oScript);
				}
				Ger();
			console.log(1)
		
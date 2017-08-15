		



			var oBT_button=document.querySelector('.BT_button');
		var oLY_kuang=document.querySelector('.LY_kuang');
		var aInput=document.querySelectorAll('input');
		var oTextarea=document.querySelector("textarea");
		oBT_button.onclick=function(){
			document.querySelector("#LiuYan").style.opacity="0.1";
			oLY_kuang.style.transform="scale(1)";
			oLY_kuang.style.webkitTransform="scale(1)";
			oLY_kuang.style.mozTransform="scale(1)";
			oLY_kuang.style.msTransform="scale(1)";
			oLY_kuang.style.oTransform="scale(1)";
		};
		aInput[0].onclick=function(){
			if(oTextarea.value != ''){
				
				var Time=new Date();
				var iYear=Time.getFullYear();
				var iMonth=Time.getMonth()+1;
				var iDate=Time.getDate();
				var iHours=Time.getHours();
				var iMinutes=Time.getMinutes();
				var iSeconds=Time.getSeconds();

				var time=iYear+'-'+iMonth+'-'+iDate+'\t'+iHours+':'+iMinutes+':'+iSeconds;
				
				// console.log(iYear+'-'+iMonth+'-'+iDate+'\t'+iHours+':'+iMinutes+':'+iSeconds)


				var oDiv1=document.createElement('div');
				oDiv1.className='SL_zhong';
				var oH3=document.createElement('h3');
				oH3.innerText='标题';
				oH3.ClassName='SL_title';
				oDiv1.appendChild(oH3);

				var oSpan=document.createElement('span');
				oSpan.ClassName="SL_time";
				oSpan.innerText='时间：';
				oDiv1.appendChild(oSpan);

				var oEm=document.createElement('em');
				oEm.innerText=time;
				oDiv1.appendChild(oEm);

				var oSpan=document.createElement('span');
				oSpan.ClassName="SL_time";
				oSpan.innerText='来源：';
				oDiv1.appendChild(oSpan);

				var oEm=document.createElement('em');
				oEm.innerText="";
				oDiv1.appendChild(oEm);

				var oBr=document.createElement('br');
				oDiv1.appendChild(oBr);

				var oDiv2=document.createElement('div');

				var oImg=document.createElement('img');
				oImg.src='http://p2.so.qhmsg.com/bdr/_240_/t0157de40e63e864a27.jpg';
				oImg.alt='网名';
				oDiv2.appendChild(oImg);

				var oP=document.createElement('p');
				oP.innerText=oTextarea.value;
				oDiv2.appendChild(oP);

				oDiv1.appendChild(oDiv2);
				document.querySelector('.SL_left').appendChild(oDiv1);

				document.querySelector('.SL_content').style.display="none";
				document.querySelector("#LiuYan").style.opacity="1";
				oLY_kuang.style.transform="scale(0)";
				oLY_kuang.style.webkitTransform="scale(0)";
				oLY_kuang.style.mozTransform="scale(0)";
				oLY_kuang.style.msTransform="scale(0)";
				oLY_kuang.style.oTransform="scale(0)";
				oTextarea.value="";
			}
			else{
				oTextarea.placeholder="内容不能为空！";
				// document.querySelector('.SL_content').style.display="none";
			}




				
		}
		aInput[1].onclick=function(){
			document.querySelector("#LiuYan").style.opacity="1";
			oLY_kuang.style.transform="scale(0)";
			oLY_kuang.style.webkitTransform="scale(0)";
			oLY_kuang.style.mozTransform="scale(0)";
			oLY_kuang.style.msTransform="scale(0)";
			oLY_kuang.style.oTransform="scale(0)";
		}
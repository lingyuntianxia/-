


		function fn2(data){
				var oH1=document.querySelector('h2');
				oH1.innerHTML=data.data.wname;
				document.getElementsByClassName('cahru')[0].innerHTML=data.data.wjianjie;
			}

			function getParam(id,_url){
				var url =_url||window.document.location.href;
					
				// var url=url.toString();
				 var u = url.split("?");
				
				 var get = {};
				 if(typeof(u[1])=="string"){
				 	u=u[1].split('&');
				 	for(i in u){
				 		var j = u[i].split("=");
				 		get[j[0]]=j[1];
				 	}
				 }
				 else{
				 	return;
				 }	
				return get[id];
			}
			var tid=getParam('tid');
			var cid=getParam('cid');
			var oScript=document.createElement('script');
			oScript.src="http://jsonp.smallfox.cc/module/article/article.php?tid="+tid+"&aid="+cid+"&pt=jsonp&ajax=yes&callback=fn2";
			document.body.appendChild(oScript);

			var arr=["0","亲情文章","励志文章","人生感悟","友情文章","搞笑笑话","爱情文章"];
			var oDingwei=document.querySelector(".dingwei");
			var oSpan=oDingwei.querySelector("span");
			oSpan.innerHTML="首页>文章推荐>"+arr[tid]+"";
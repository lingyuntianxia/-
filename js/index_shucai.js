


		$(document).ready(function(){
			var q=['父子'];
			$.ajax({
				url:'https://api.douban.com/v2/book/search',
				type:'get',
				data:{
					q:q[0],
					alt:'xd',
					count:'16',
					start:'17',
				},
				callback:'callback',
				dataType:'jsonp',
				success:function(data){
					$('.SC_kuang').each(function(index){
						var add=0;
						$(this).find('img').attr('src',data.books[index].image);
						$(this).find('h4').html(data.books[index].title);
						$(this).find('.author').html('作者：'+data.books[index].author);
						$(this).find('.author_intro').html(data.books[index].author_intro);
						$(this).find('.summary').html(data.books[index].summary);
						$(this).find('.publisher').html(data.books[index].publisher);
						$(this).find('.pubdate').html(data.books[index].pubdate);
						$(this).find('.catalog').html(data.books[index].catalog);
						$(this).find('.price').html(data.books[index].price);
						
								
							
						$(this).click(function(){
							if(add<3){
								add++;
							}else{
								add=0;
							}
							$(this).css('transform','rotateY('+89*add+'deg)')
						})
					})


				}
			})
			
		})
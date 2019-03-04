var  Pag = {
	init(totalPage,thisPag,fn){
		
		Pag.initHtml(totalPage,thisPag,fn);
		
	},
	initHtml(totalPage,thisPag,fn){
		var pagEle = document.getElementById('pag');
		thisPag = parseInt(thisPag);
		if(totalPage <= 1){
			return false;
		}
		var _html = ''; // 上一页
		if(thisPag == 1 || thisPag == 2 ||thisPag == 3){ 
			thisPag == 1?_html += "":_html += '<li class="pag_item pag_left"><img src="img/pag_left.png" /> </li>';
			if(totalPage>5){ // 如果大于6  中间部分用...代替 
				for(var i = 0 ; i < 5 ; i++){
					if((i+1) == thisPag) // 当前选中页
						_html += '<li class="pag_item pag_num active">'+(i+1)+'</li>';
					else // 其他
						_html += '<li class="pag_item pag_num">'+(i+1)+'</li>';
				}
				_html += '<li class="pag_item">...</li>'; // 隐藏页
				_html += '<li class="pag_item pag_num">'+totalPage+'</li>'; // 最后的页数
			}else{
				for(var i = 0 ; i < totalPage ; i++){
					if(i==0)
						_html += '<li class="pag_item pag_num active">'+(i+1)+'</li>';
					else
						_html += '<li class="pag_item pag_num">'+(i+1)+'</li>';
				}
			}
			_html += '<li class="pag_item pag_rihgt"><img src="img/pag_right.png" /></li>';
		}else{
			_html += '<li class="pag_item pag_left"><img src="img/pag_left.png" /> </li>'
			_html += '<li class="pag_item">...</li>'; // 隐藏页
			_html += '<li class="pag_item pag_num">'+(thisPag-2)+'</li>'; // 显示当前页前后5页
			_html += '<li class="pag_item pag_num">'+(thisPag-1)+'</li>';
			_html += '<li class="pag_item pag_num active">'+thisPag+'</li>';
			if(thisPag+1 <= totalPage){
				_html += '<li class="pag_item pag_num">'+(thisPag+1)+'</li>';
				if(thisPag+2 <= totalPage){
					_html += '<li class="pag_item pag_num">'+(thisPag+2)+'</li>';
					if(thisPag+3 <= totalPage){
						_html += '<li class="pag_item">...</li>';// 隐藏中间部分
						_html += '<li class="pag_item pag_num">'+totalPage+'</li>';
					}
				}
				_html += '<li class="pag_item pag_rihgt"><img src="img/pag_right.png" /></li>'; // 下一页图标
					
			}
		}
		pagEle.innerHTML = _html;
		
		
		Pag.addEvent(totalPage,thisPag,fn);
		
	},
	addEvent(totalPage,thisPag,fn){
		var left_btn = document.getElementsByClassName('pag_left'); 
		var num_btn = document.getElementsByClassName('pag_num'); 
		var right_btn = document.getElementsByClassName('pag_left'); 
		
		var thisPage = document.getElementsByClassName('pag_num active')[0].innerText; 
		left_btn.onclick = function(){
			thisPage--;
			fn(thisPage);
			Pag.initHtml(totalPage,thisPag,fn);
		}
		for(var i = 0 ; i < num_btn.length ; i++ ){
			num_btn[i].onclick = function(){
				if(thisPage != this.innerText){
					fn(this.innerText);
					Pag.initHtml(totalPage,this.innerText,fn);
				}
				
			}
		}
		right_btn.onclick = function(){
			thisPage++;
			fn(thisPage);
			Pag.initHtml(totalPage,thisPag,fn);
		}
	},
};
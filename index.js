window.onload = function(){
	//获取元素对象
	var searchInput  = document.getElementById('searchInput');
	var searchTips = document.getElementById('searchTips');
	var tipsTtems = searchTips.getElementsByTagName('li');
	
	var keyIndex = -1;
	//文本框获取焦点之后弹出显示内容的块元素
	searchInput.onfocus = function(){
		searchTips.style.display = 'block';
	}
	//阻止文本框单击事件冒泡
	searchInput.onclick = function(e){
		e = e || window.event;
		e.stopPropagation?e.stopPropagation():e.cancelBubble = true;
	}
	//点击document事件隐藏提示内容
	document.onclick = function(){
		resetSearchTips();
	}
	
	
	document.onkeydown = function(e){
		
		if(searchTips.style.display != 'block' ){
			return;
		}
		
		e = e || window.event;
		//按esc键隐藏提示内容
		if(e.keyCode == 27){
			resetSearchTips();
			searchTips.blur();
		}
		//按下藏提示内容
		if(e.keyCode == 40){
			 keyIndex ++;
		
			 if(keyIndex > tipsTtems.length - 1){
			 	keyIndex = 0;
			 }
			 
			 highlightItem(keyIndex);
		}
		
		//按上藏提示内容
		if(e.keyCode == 38){
			 keyIndex --;
			 if(keyIndex < 0){
			 	keyIndex  = tipsTtems.length-1;
			 }
			 
			 highlightItem(keyIndex);
		}
		
//		按回车键内容追加到文本框

		if(e.keyCode == 13){
			searchInput.value = tipsTtems[keyIndex].getElementsByTagName('span')[0].innerText;
			resetSearchTips();
		}
		
		
		
		
	}
	
	
	//遍历li,循环添加事件
	for(var i = 0;i < tipsTtems.length - 1;i ++) {
		tipsTtems[i].onclick = function(e) {
			searchInput.value = this.getElementsByTagName('span')[0].innerText;
		}
		
		(function(currIndex){
			tipsTtems[i].onmous
		})
		
		
		var a = tipsTtems[i].getElementsByTagName('a')[0];
		a.onclick = function(e){
			e = e || window.event;
			e.stopPropagation?e.stopPropagation():e.cancelBubble = true;
			searchTips.removeChild(this.parentNode);
			keyIndex = -1;
			
		}
		
	}
	
	
	//元素高亮
	function highlightItem(index){
		//去掉所以存在的高亮
		for(var i = 0;i <= tipsTtems.length-1 ;i++ ){
			tipsTtems[i].className = '';	
		}
		
		//给单独的li索引加高亮样式
	/*	try{
		tipsTtems[index].className = 'active';
		}catch(e){
			
		}*/
		tipsTtems[index].className = 'active';
	}
	//重置函数
	function resetSearchTips(){
		searchTips.style.display = 'none';
		//highlightItem(-1);
		
		//重新初始化
		keyIndex = -1;
		
		
	}
	
	
	
	
}

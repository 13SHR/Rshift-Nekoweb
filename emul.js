function dragElement(element) {
	var inX = 0;
	var inY = 0;
	var curX = 0;
	var curY = 0;
	
	head = document.getElementById(element.id + "header");
	
	if (head) {
		head.onmousedown = startDragging;
	} else {
		element.onmousedown = startDragging;
	}

	function startDragging(e) {
		e = e || window.event;
		e.preventDefault();
		inX = e.clientX;
		inY = e.clientY;
		
		document.onmouseup = stopDragging;
		document.onmousemove = dragElement;
	}
	
	function dragElement(e) {
		e = e || window.event;
		e.preventDefault();
		curX = inX - e.clientX;
		curY = inY - e.clientY;
		inX = e.clientX;
		inY = e.clientY;
		
		element.style.top  = (element.offsetTop  - curY) + "px";
		element.style.left = (element.offsetLeft - curX) + "px";
	}
	
	function stopDragging() {
		document.onmouseup = null;
		document.onmousemove = null;
	}
}
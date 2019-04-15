// color the rectangle and move them randomlyi
// Today's goal :
//   - rectangles randomly are colored when the color button is clicked
//   - when the select is changed the number of rectangles changes to match it

// in the next class we will make the move function work 

// here is a road map of the functions you need to implement.

(function() {
	"use strict";

	window.onload = function() {
    
        
		var colorButton = document.getElementById("color");
		colorButton.onclick = colorIt;

		var moveButton = document.getElementById("move");
		moveButton.onclick = moveIt;

		var numSelect = document.getElementById("count");
		numSelect.onchange = createRectangles;

		createRectangles();
		colorIt();
		moveIt();
	};

	// creates the number of rectangles specified in the select.
	function createRectangles() { 
		document.getElementById("rectanglearea").innerHTML = "";
		var count = parseInt(document.getElementById("count").value);
        var posi = document.getElementById("rectanglearea");
            
        for (let i = 0; i < count; i++){
            var newthing = document.createElement("div");
            newthing.className = "rectangle";
            newthing.onclick = remove; //REMOVEEEEEEEEEEEEEEEEEEEEEEEEEEE
            newthing.onmousedown=mouseDown; //MOUSEDOWWNNNNNNNN
            newthing.onmousemove = mouseMove;
            newthing.onmouseup = mouseUp;//MOUSEUPPPPP
            
            posi.appendChild(newthing);     
        }
		
	}

   	// Randomly color all of the rectangles
    function colorIt() {
        var rects = document.querySelectorAll("#rectanglearea .rectangle");
        for(var i = 0; i < rects.length; i++) {
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            rects[i].style.backgroundColor =  "rgba(" + r + ", " + g + ", " + b + ", " + .3 + ")";

        }
    	// your code goes here
    	//you might find the following code snippts useful
    	//var r = Math.floor(Math.random() * 256);
    }

  
 
	function moveIt() {
		var rects = document.querySelectorAll("#rectanglearea .rectangle");
		var area = document.getElementById("rectanglearea");
		for(var i = 0; i < rects.length; i++) {
            rects[i].classList.add("movable");
            //cont wid - rec height 
            var x = Math.floor(Math.random() * (700 - 50)) + "px";
            var y = Math.floor(Math.random() * (500 - 50)) + "px";
            rects[i].style.left = x;
            rects[i].style.top = y;
           
	       
		}
	}
    
   function mouseDown(event){
       this.style.zIndex = 10;
       this.draggable = true;
       this.prevX = event.clientX;
       this.prevY = event.clientY;
       //record mouses original location
      
       //document.getElementById("rectanglearea").append(this);
   }
    
    function remove(event){
        this.parentNode.removeChild(this);
    }
    
    function mouseUp(event){
        //document.getElementById("rectanglearea").append(this);
        this.draggable = false;
    }
    
    function mouseMove(event){
        
        if (this.draggable){
            var dy = event.clientY- this.prevY;
            var dx = event.clientX- this.prevX;
            var oldx = parseInt(window.getComputedStyle(this).left);
            var oldy = parseInt(window.getComputedStyle(this).top);
            
            this.style.top = oldy + dy + "px";
            this.style.left = oldx + dx + "px";
            
            this.prevX = event.clientX;
            this.prevY = event.clientY;
           
            
        }
        
      /*  prevX = event.clientX;
        prevY = event.clientY;*/
        

    }
    
//move the piece and create a blank spot
    
    
   


})();
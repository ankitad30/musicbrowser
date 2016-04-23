
// mobile menu- create function to  expand/collapse when switching viewports

var collapseBtn = document.getElementById("collapse");
if(collapseBtn) {
	collapseBtn.addEventListener("click", function(){
    	var topbar = document.getElementById("topbar");
    	if(topbar) {
    		var displayStyle = topbar.style.display;
    		if(displayStyle == 'block') {
    			topbar.style.display = "none";
    		} else {
    			topbar.style.display = 'block';
    		}
    	} 
    	var collapseClassName = collapseBtn.className;
    	if(collapseClassName) {
    		if(collapseClassName == 'collapse') {
    			collapseBtn.className = 'expand';
    		} else {
    			collapseBtn.className = 'collapse';
    		}
    	}
	});

}

// created a Clickable  expand/collapse menu for the topbar with 
//all the menu options as drop down and can be accessed and hidden as per user needs

document.body.addEventListener("mousedown", function(event) {
	var topbar = document.getElementById("topbar");
	var target = event.target.id;
	// click is not on the collapse/expand button (but outside it anywhere)
	if(target!='collapse') {
    	if(topbar) {
    		var displayStyle = topbar.style.display;
    		if(displayStyle == 'block') {
    			topbar.style.display = "none";
    		}
    	} 
    	var collapseClassName = collapseBtn.className;
    	if(collapseClassName) {
    		if(collapseClassName == 'expand') {
    			collapseBtn.className = 'collapse';
    		}
    	}
	}
});
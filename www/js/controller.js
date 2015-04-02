
var app = new function(app){
	
	app.makeHotSpot = function(assets, pages){
		console.log("hotSpots");
		var hs = new zim.HotSpots([	
			{page:assets.main, rect:[0,0,100,100], call:goHome},
			{page:assets.main, rect:assets.mainThing, call:function(){pages.go(assets.info, "right");}}]
		);
		
		function goHome(){
			console.log("home");	
		}
	}
	app.makeNav = function(vP, vPages, hP, hPages){
		var count = 0;
		vP.main.human.on("click", function(e) {
			count += 1 ;
			console.log (count);
			
			if (count == 5) {
				vPages.go(vP.info,"down");
				count = 0;
				stage.update();
			}
			
		});
				
	
	}
	return app;	
}(app || {});
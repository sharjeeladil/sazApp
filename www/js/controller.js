
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
	
	return app;	
}(app || {});
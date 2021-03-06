
// view
zog("hi from view.js");

var app = function(app) {
	
	app.makeHorizontalPages = function(layoutManager, gridManager, guideManager) {
		
		zog("pages");
		
		p = {};
		
		p.main = new createjs.Container();		
		p.main.name = "main";	
		p.main.setBounds(0,0,stageW,stageH);

		var content = p.main.content = new createjs.Container();
		content.setBounds(0,0,600,600);
		
		var textContainer = p.main.textContainer = new createjs.Container();
		textContainer.x = 100;
		textContainer.y = 100;
		p.main.addChild(textContainer);
		
		var  labelText = "Poke 5 times or he will be Angry";
		var introText = new zim.Label(labelText, 45, "arial", "green");
		console.log (labelText);
		textContainer.addChild(introText);
		
		var human = p.main.human = new createjs.Container();
        p.main.addChild(human);
        human.scaleX =1;
        human.scaleY = 1;

        var humanImg = new createjs.Bitmap("images/human.png");
        human.x = frame.stageW/2;
        human.y = frame.stageH/6;
        human.addChild(humanImg);
		p.main.addChild(human);
	
		var mainParts = [
	//{object:logo, marginLeft:5, maxHeight:100, width:20, valign:"top"},
	{object:content, marginLeft:5, maxHeight:100, valign:"top", align:"middle", backgroundColor:"black"}, 
	//{object:related, marginLeft:5, maxHeight:100, minWidth:20, align:"left", valign:"top"}
			];
		
		var mainLayout = new zim.Layout(p.main, mainParts, 5, "black", false, new createjs.Shape(), stage);
		
		layoutManager.add(mainLayout);	
		
		p.info = new createjs.Container();		
		p.info.name = "info";		
		var infoBacking = new zim.Rectangle(stageW, stageH, "green");	
		infoBacking.setBounds(0,0,stageW,stageH);
		p.info.addChild(infoBacking);
		
		
		
		var hulk = p.info.hulk = new createjs.Container();
        p.info.addChild(hulk);
        hulk.scaleX =1;
        hulk.scaleY = 1;

        var hulkImg = new createjs.Bitmap("images/hulk.png");
        hulk.x = frame.stageW/2;
        hulk.y = frame.stageH/6;
        hulk.addChild(hulkImg);
		p.info.addChild(hulk);
		
		var textContainer = p.info.textContainer = new createjs.Container();
		textContainer.x = 50;
		textContainer.y = 50;
		p.info.addChild(textContainer);
		
		var  labelText = "I will find you and Kill you!";
		var introText = new zim.Label(labelText, 35, "arial", "orange");
		console.log (labelText);
		textContainer.addChild(introText);
		
		return p;
	}
	app.makeVerticalPages = function(layoutManager, gridManager, guideManager) {
		zog("pages");
		p = {};
		p.main = new createjs.Container();		
		p.main.name = "main";	
		p.main.setBounds(0,0,stageW,stageH);
		
		var human = p.main.human = new createjs.Container();
        p.main.addChild(human);
        human.scaleX =1;
        human.scaleY = 1;

        var humanImg = new createjs.Bitmap("images/human.png");
        human.x = frame.stageW/2;
        human.y = frame.stageH/6;
        human.addChild(humanImg);
		p.main.addChild(human);
	
		
		var textContainer = p.main.textContainer = new createjs.Container();
		textContainer.x = 50;
		textContainer.y = 50;
		p.main.addChild(textContainer);
		
		var  labelText = "Poke 5 times or he will be Angry";
		var introText = new zim.Label(labelText, 20, "arial", "green");
		console.log (labelText);
		textContainer.addChild(introText);
		
		var clickCount = 0;
		var displayY = 20;
		var countColor = "red";
		human.on("click", function(e) {
			clickCount += 1 ;
			displayY +=50;
			//console.log (clickCount);
			var countContainer = p.main.countContainer = new createjs.Container();
			countContainer.x = 50;
			countContainer.y = displayY;
			p.main.addChild(countContainer);
			
			var  labelCount = clickCount;
			
			var countText = new zim.Label(labelCount, 40, "arial", countColor);
			countContainer.addChild(countText);
			console.log (labelCount);
			stage.update();
			
			if (clickCount == 5) {
				clickCount = 0;
				if (countColor == "blue") {
					countColor = "red";
				} else {
					countColor = "blue";
				}
				displayY = 20;
			}
			
		});
		
			
		var content = p.main.content = new createjs.Container();
		content.setBounds(0,0,600,600);
				
		var mainParts = [ 
	//{object:logo, marginTop:10, maxWidth:80, minHeight:20, align:"left", valign:"top"},
	{object:content, marginTop:5, maxWidth:95, height:90, backgroundColor:"black"},
	//{object:related, marginTop:5, maxWidth:95, height:90, backgroundColor:"black"}
	 ];
		var mainLayout = new zim.Layout(p.main, mainParts, 5, "green", true, new createjs.Shape(), stage);
		layoutManager.add(mainLayout);	
			
		p.info = new createjs.Container();		
		p.info.name = "info";		
		var infoBacking = new zim.Rectangle(stageW, stageH, "green");	
		infoBacking.setBounds(0,0,stageW,stageH);
		p.info.addChild(infoBacking);
			
		var hulk = p.info.hulk = new createjs.Container();
        p.info.addChild(hulk);
        hulk.scaleX =1;
        hulk.scaleY = 1;

        var hulkImg = new createjs.Bitmap("images/hulk.png");
        hulk.x = frame.stageW/8;
        hulk.y = frame.stageH/4;
        hulk.addChild(hulkImg);
		p.info.addChild(hulk);
		
		hulkImg.on("pressmove", function(e) {
			
			//zim.drag(hulkImg);
			});
				
		var textContainer = p.info.textContainer = new createjs.Container();
		textContainer.x = 50;
		textContainer.y = 50;
		p.info.addChild(textContainer);
		
		var  labelText = "I will find you and Kill you!";
		var introText = new zim.Label(labelText, 20, "arial", "orange");
		console.log (labelText);
		textContainer.addChild(introText);
				
		return p;
		
	}	
	
	
	return app;
	
}(app || {});
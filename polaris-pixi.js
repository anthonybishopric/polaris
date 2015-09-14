// PIXI view bindings for polaris.js

ViewSettings = {
	font: "Monaco"
}

function MasterView(renderer, stage) {
	this.renderer = renderer;
	this.stage = stage;
	this.masterContainer = new PIXI.Container();
	this.stage.addChild(this.masterContainer);
	this.views = [];
	this.addView = function(view) {
		this.masterContainer.addChild(view.container());
		this.views.push(view);
	}
	this.update = function() {
		this.renderer.render(this.stage);
		for (var i = 0; i < this.views.length; i++) {
			this.views[i].update();
		}
	}
}

function StellarView(stellar) {
	this.stellar = stellar;
	
	this.stellarContainer = new PIXI.Container();
	this.stellarContainer.position.set(stellar.x, stellar.y);

	this.stellarSprite = PIXI.Sprite.fromImage("assets/stellar-white.png");
	this.stellarSprite.interactive = true;
	this.stellarSprite.scale.x = 0.1;
	this.stellarSprite.scale.y = 0.1;
	this.stellarSprite.position.set(0,0);
	this.stellarContainer.addChild(this.stellarSprite);
	this.stellarTitle = new PIXI.Text(this.stellar.name, { font: "15px " + ViewSettings.font,  stroke: "#ffffff", strokeThickness: 4});
	this.stellarTitle.position.set(50, 5);
	this.stellarContainer.addChild(this.stellarTitle);
	
	this.updateInfo = function() {
		this.infoPanel.text = "Pop.: " + this.stellar.population + "\n" + "Tech: " + this.stellar.techLevel;
	};

	this.infoPanel = new PIXI.Text("", { font: "14px " + ViewSettings.font, fill: "#ffffff"});
	this.updateInfo();

	this.infoPanel.position.set(50, 25);
	this.stellarContainer.addChild(this.infoPanel);

	this.stellarSprite.on('mouseover', function() {
		
	});
	this.stellarSprite.on('mouseout', function() {
		
	});

	this.container = function() {
		return this.stellarContainer;
	}
	this.update = function() {
		this.updateInfo();
	};
}
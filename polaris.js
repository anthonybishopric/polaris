function Stellar(id, name, techLevel, x, y) {
	this.id = id;
	this.name = name;
	this.population = 5000;
	this.shipProduction = 20;
	this.techLevel = 1;
	this.x = x;
	this.y = y;
	this.ratios = {
		tech: 0.3,
		pop: 0.4,
		build: 0.3
	};
	this.executeTurn = function() {
		// every turn, your population rises by (pop * ratios.pop / 100)

	};
}

function JumpMap() {
	this.map = {}
	this.getConnections = function(stellar) {
		var systems = this.map[stellar.id];
		var res = [];
		if (systems != null) {
			for (var system in systems) {
				if (systems.hasOwnProperty(system)) {
					res.push(systems.get(system));
				}
			}
		}
		return res;
	}
	this.addConnection = function(left, right) {
		var leftConns = this.map[left.id];
		if (leftConns == null) {
			leftConns = {};
			this.map[left.id] = leftConns;
		}
		var rightConns = this.map[right.id];
		if (rightConns == null) {
			rightConns = {};
			this.map[right.id] = rightConns;
		}
		leftConns[right.id] = new JumpConnection(right, left);
		rightConns[left.id] = new JumpConnection(left, right);
		return [leftConns[right.id], rightConns[left.id]];
	}
}

function JumpConnection(stellarA, stellarB) {
	this.stellarA = stellarA;
	this.stellarB = stellarB;
	this.active = false;
	this.activate = function() { this.active = true; };
	this.deactivate = function() { this.active = false; };
}


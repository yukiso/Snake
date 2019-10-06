function Snake(scl) {
	this.pos=createVector(0,0);
	this.dir=createVector(0,0);
	this.total = 0;
	this.tail = [];
	this.speed = 1;

	this.eat = function(foodPos) {
		var d = this.pos.dist(foodPos);
		if (d < 1) {
			this.total++;
			//speed increses by 1% when snake eats
			this.speed+=this.speed/100;
			return true;
		} else {
			return false;
		}
	}

	this.death = function() {
		for (var i = 0; i < this.tail.length; i++) {
			var posT = this.tail[i];
			var d = this.pos.dist(posT);
			if (d < 1) {
				console.log('starting over');
				this.pos.set(0,0);
				this.dir.set(0,0);
				this.total = 0;
				this.tail = [];
				this.speed = 1;
			}
		}
	}

	this.update = function() {
		for (var i = 0; i < this.tail.length - 1; i++) {
			this.tail[i] = this.tail[i + 1];
		}
		if (this.total >= 1) {
			this.tail[this.total - 1] = createVector(this.pos.x,this.pos.y);
		}

		this.pos.add(this.dir);

		this.pos.x = constrain(this.pos.x, 0, width - scl);
		this.pos.y = constrain(this.pos.y, 0, height - scl);
	}

	this.show = function() {
		fill(255);
		for (var i = 0; i < this.tail.length; i++) {
			rect(this.tail[i].x, this.tail[i].y, scl, scl);
		}
		rect(this.pos.x, this.pos.y, scl, scl);
	}
}
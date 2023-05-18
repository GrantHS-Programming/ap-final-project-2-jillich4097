class Sprite {
	constructor({position}){
		this.position = position
		this.width = 50
		this.height = 150
	}
	
	draw(){
		
	}
	
	update(){
		this.draw()
	
	}
	
}

class Fighter {
	constructor({position, velocity, color = 'red', offset}){
		this.position = position
		this.velocity = velocity
		this.width = 50
		this.height = 150
		this.lastKey
		this.attackBox = {
			position: {
				x: this.position.x,
				y: this.position.y,
			},
			offset,
			width: 100,
			height: 50,
		}
		this.color = color
		this.isAttacking
		this.health = 100
	}
function Menu (myId, myClass, myItems) {
	this.id = myId;
	this.className = myClass;
	this.items = myItems;
}

Menu.prototype.render = function() {
	var result = '<ul class="' + this.className + '" id="' + this.id + '">';

	for (let i = 0; i < this.items.length; i++) {
		if (this.items[i] instanceof MenuItem) {
		result += this.items[i].renderItem();
		}
		
	}
}
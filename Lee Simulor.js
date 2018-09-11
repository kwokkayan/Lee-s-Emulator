  class city {
	constructor(ID, name, investment, coor) {
	  this.ID = ID;
	  this.name = name;
	  this.investment = investment;
	  this.tier = math.round(investment / 10);
	  this.coor = coor;
	}
	
	get getName() {
	  return this.name;
	}
	get getID() {
	  return this.ID;	
	}
	get getCoor() {
	  return this.coor;	
	}
	
	invest(amount) {
	  this.investment += amount;	
	}
  }
  
  var shatin = new city;
  document.write("Hello World");
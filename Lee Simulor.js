class city {
  constructor(ID, name, investment) {
	this.ID = ID;
	this.name = name;
	this.investment = investment;
	this.tier = math.round(investment / 10);
  }
	
  get getName() {
	return this.name;
  }
  get getID() {
	return this.ID;	
  }
	
  invest(amount) {
	this.investment += amount;	
  }
}
  
let shatin = new city(1, "shatin", 10);
var nameInput = document.createElement("INPUT");
nameInput.setAttribute("type", "text");

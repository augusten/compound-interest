// File created a random object based on the Person prototype
// taking the values form pre-determined lists

// initialize some lists to create the Person objects from
let names = ["sara", "zsombor", "ben", "dan", "elena", "julija", "liam"]
let ages = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
let startcapitals = [10, 100]
let monthlyadds = [20, 200]

let Person = function ( nam, ag, startcap, monthlya) {
	// Prototype for person to calculate their compound interest
	this.name = nam
	this.age = ag
	this.finances = {}
	this.finances.startcapital = startcap
	this.finances.monthlyadd = monthlya
	this.pension = {
		age: 65,
		interest: {}
	}
	this.pension.interest.pessimistic = 1.02
	this.pension.interest.average = 1.04
	this.pension.interest.optimistic = 1.08
}

let createUser = function ( number, callback ) {
	// creates a new user basd on the Person prototype
	let newUserArray = []
	for (var i = number - 1; i >= 0; i--) {
		let user = new Person ( 
			names[ Math.floor( Math.random()*names.length )], 
			ages[ Math.floor( Math.random()*ages.length )],
			startcapitals[ Math.floor( Math.random()*startcapitals.length )],
			monthlyadds[ Math.floor( Math.random()*monthlyadds.length) ])
		newUserArray.push(user)
	}
	callback ( newUserArray )
}

// Export module
module.exports = createUser
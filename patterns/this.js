// 4 ways this takes a value
// 1. call site
// 2. within methods on objects
// 3. Within an object that has been constructed
// 4. Within a function invoked with .call, .apply, or .bind

// 1. call site
function bar() {
  console.log('bar');
  console.log(this); // undefined in node bc lack of global window object
}
bar();

// 2. within methods on objects

const City = {
  name: 'Thousand Oaks',
  soccerTeams: 100,
  people: 128731,
  getTeamsPerPerson() {
    // if we use an arrow function, we'll get undefined errors thrown
    return this.people / this.soccerTeams;
  },
};

City.getTeamsPerPerson();

// 3. Within an object that has been constructed
function logSoccerTeams() {
  return this.people / this.soccerTeams;
}

City.floo = logSoccerTeams;
City.floo();

const Town = function town(name, state) {
  this.name = name || 'Thousand Oaks';
  this.state = state || 'California';
};

const simi = new Town('Simi Valley', 'California');
console.log(simi);


// 4. Within a function invoked with .call, .apply, or .bind

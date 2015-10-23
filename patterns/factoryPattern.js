'use strict';

// Using a constructor and the prototype
function Chair(){}

Chair.prototype.swivel = function (direction) {
  console.log(`swiveled ${direction}`);
}

const armchair = new Chair();

// Using just the constructor
function Desk(){
  this.swivel = () => {

  }
}

const swiveler = (state) => ({
  swivel: () => {
    console.log(`swiveled ${state.direction}`);
  }
})

// Equivalent to:
// var swiveler = function swiveler(state) {
//   return {
//     swivel: function swivel(state) {
//       console.log("swiveled " + state.direction);
//     }
//   };
// };

const someChair = (state) => {
  let state = {
    name,
    direction
  }
  return Object.assign(
    {},
    swiveler(state)
  );
}

someChair({name: 'Blue', direction: 'right'}).swivel();

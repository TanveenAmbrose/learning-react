import React from 'react'
const obj ={
    name: "Tanveen Ambrose",
    roll: 210310,
    Department: "Computer Science and Engineering",
    Address: "Barisal"
}
function Expression() {
  return (
    <div>
      <h1>Hi my name is {obj.name} </h1><br />
      <h1>My roll is {obj.roll}</h1><br />
      <h1>i am in {obj.Department}</h1><br />
      <h1>My address is {obj.Address}</h1><br />
      <p>lets have some random number each time the page is reloaded .The random number will be {Math.random()*100}</p>
      <h1>{`My name is ${obj.name}. I am in ${obj.Department}`}</h1>
    </div>
  )
}

export default Expression

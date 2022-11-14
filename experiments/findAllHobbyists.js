// return an Array containing names of people that enjoy the hobby
function findAllHobbyists (hobby, hobbies) {
  const hobbyists = []
  for (const person in hobbies) {
    if (hobbies[person].includes(hobby)) {
      hobbyists.push(person)
    }
  }
  return hobbyists
}

const hobbies = {
  Steve: ['Fashion', 'Piano', 'Reading'],
  Patty: ['Drama', 'Magic', 'Pets'],
  Chad: ['Puzzles', 'Pets', 'Yoga']
}

console.log(findAllHobbyists('Petsss', hobbies))

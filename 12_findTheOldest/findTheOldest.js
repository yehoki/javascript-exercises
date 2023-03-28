const findTheOldest = function (people) {
  /*const date = new Date();
  const year = date.getFullYear;
  let age = 0;
  const person = people.reduce((oldest, newPerson) => {
    if (newPerson.yearOfDeath) {
      if (newPerson.yearOfDeath - newPerson.yearOfBirth > age) {
        age = newPerson.yearOfDeath - newPerson.yearOfBirth;
        oldest = newPerson;
    }
} else {
      if (year - newPerson.yearOfBirth > age) {
        age = year - newPerson.yearOfBirth;
        oldest = newPerson;
      }
    }
  });
  console.log(person);
  return person;*/
  const date = new Date();
  const year = date.getFullYear();
  const oldestPerson = people.reduce((oldest, newPerson) => {
    if (oldest.yearOfDeath){
        if (newPerson.yearOfDeath){
            if ((newPerson.yearOfDeath - newPerson.yearOfBirth) - (oldest.yearOfDeath - oldest.yearOfBirth) > 0){
                oldest = newPerson;
            }
        } else {
            if ((year - newPerson.yearOfBirth) - (oldest.yearOfDeath - oldest.yearOfBirth) > 0){
                oldest = newPerson;
            }
        }
    } else {
        if (newPerson.yearOfDeath){
            if ((newPerson.yearOfDeath - newPerson.yearOfBirth) - (year - oldest.yearOfBirth) > 0){
                oldest = newPerson;
            }
        } else {
            if ((year - newPerson.yearOfBirth) - (year - oldest.yearOfBirth) > 0){
                oldest = newPerson;
            }
        }
    }
    return oldest;
})
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;

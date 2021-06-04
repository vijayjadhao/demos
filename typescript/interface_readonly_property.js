var personObj = { SSN: 110555444, name: 'James Bond' };
console.log(personObj);
personObj.name = 'Steve Smith'; // OK
// personObj.SSN = '333666888'; // Compiler Error
console.log(personObj);

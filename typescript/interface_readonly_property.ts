interface Citizen {
    name: string;
    readonly SSN: number; //readonly keyword make it readonly property
}

let personObj: Citizen = {SSN: 110555444, name: 'James Bond'}
console.log(personObj);

personObj.name = 'Steve Smith'; // OK
// personObj.SSN = '333666888'; // Compiler Error
console.log(personObj);
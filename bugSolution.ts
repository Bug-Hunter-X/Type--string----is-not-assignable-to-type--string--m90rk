function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(' ');
}

let user = ["Jane", "Doe"];
console.log(greeterArray(user)); // Correctly handles the string array
console.log(greeter(user[0])); // Accessing the first element of the array
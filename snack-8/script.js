const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

const marco = students.filter(students => students.name === 'Marco Lanci');

let marcoClass;

if (marco.length > 0) {
  marcoClass = marco[0].class;
} else {
  marcoClass = null;
}

console.log(marcoClass);
// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'
const hero = ["Thor,iron-man,Dc,Hello"];
const Villain = ["Test,Test1,Test2,Test3"];

hero.push(Villain);
console.log(hero);
// Output: [ 'Thor,iron-man,Dc,Hello', [ 'Test,Test1,Test2,Test3' ] ]

console.log(hero[1]);
// Output: [ 'Test,Test1,Test2,Test3' ]

const all = hero.concat(Villain);
console.log(all);
// Output: [ 'Thor,iron-man,Dc,Hello', [ 'Test,Test1,Test2,Test3' ], 'Test,Test1,Test2,Test3' ]

const allnew = [...hero, ...Villain];
console.log(allnew);
// Output: [ 'Thor,iron-man,Dc,Hello', 'Test,Test1,Test2,Test3' ]

const anotherar = [1, 2, 3, [4, 5], 0, [[7, 8], 9], 5];
const realar = anotherar.flat(Infinity);
console.log(realar);
// Output: [ 1, 2, 3, 4, 5, 0, 7, 8, 9, 5 ]

console.log(Array.isArray("2"));
// Output: false

console.log(Array.from("2025"));
// Output: [ '2', '0', '2', '5' ]

console.log(Array.from("Aameen"));
// Output: [ 'A', 'a', 'm', 'e', 'e', 'n' ]

console.log(Array.from({ name: "Aameen" }));
// Output: []  // it provide an empty string because it can't convert this {}

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
// Output: [ 100, 200, 300 ]

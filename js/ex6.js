const anArray = [];
for (i = 1; i <= 10; i++) {
  anArray.push(i);
}

console.log(anArray.filter(value => value % 2 === 0).map(x => x * 2));

console.log(anArray.map(x => x * 2).filter(value => value % 2 === 0));

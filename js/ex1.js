class Square {
  constructor(side) {
    this.side = Number(side);
  }
  math1() {
    let perimeter = Number(this.side * 4);
    return perimeter;
  }
  math2() {
    let area = Number(this.side**2);
    return area;
  }
  math3() {
    let diagonal = (Math.sqrt(2 * (Number(this.side**2))));
    return diagonal.toFixed(2);
  }
  // describe() {
  //   return `Square with side ${this.side} has perimeter of ${this.math1()}, area of ${this.math2()}, and 
  //   diagonal of ${this.math3()}`;
  // }

}

const x = new Square(2)


console.log(`Square with side 2 has perimeter of ${x.math1()}, area of ${x.math2()}, and diagonal of ${x.math3()}`);


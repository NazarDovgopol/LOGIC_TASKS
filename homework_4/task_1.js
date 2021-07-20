function calc() {
  return this.a + this.b;
}

const obj = {
  a: 17,
  b: 23,
} 

calc.call(obj);

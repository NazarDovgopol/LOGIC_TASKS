function timingDecorator(f) {
  const start = performance.now();
  f();
  console.log(`Время выполнения синхронной функии:\n${performance.now() - start}ms`);
}

const incrementX1000000 = function f() {
  let n = 0;

  for (let i = 0; i < 1000000; i++) {
    n++;
  }
}

timingDecorator(incrementX1000000);

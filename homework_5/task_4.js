async function timingDecorator(f) {
  const start = performance.now();
  await f();
  console.log(`Время выполнения асинхронной функии:\n${performance.now() - start}ms`);
}

const promise = function f() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done');
    }, 300);
  });
}

timingDecorator(promise);

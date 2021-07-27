function wait() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => reject(1), 1000);
  })
}

async function f() {
  try {
    const result = await wait();
    console.log(result);
  } catch(e) {
    console.log(e);
  } finally {
    console.log('Promise complete');
  }
}

const arr = [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 1 }];

const deleteDuplicate = arr => {
  const set = new Set();
  const newArr = [];

  for (const entries of arr) {
    if (set.add(entries.id)) {
      if (set.size === newArr.length + 1) {
        newArr.push(entries);
      }
    }
  }

  return newArr;
}

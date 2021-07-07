const stringReverse = str => {
  if (!(typeof str === 'string')) {
    return 'Error: argument is not valid';
  }

  let strReverse = '';

  for (let i = str.length - 1; i >= 0; i--) {
    strReverse += str[i];
  }

  return strReverse;
};

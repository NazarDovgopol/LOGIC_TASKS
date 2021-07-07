const factorial = num => {
  if (!(typeof num === 'number')) {
    return 'Error: argument is not valid';
  }

  if (num === 2) {
    return num;
  } else {
    return num * factorial(num - 1);
  }
};

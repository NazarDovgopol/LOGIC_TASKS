const factorialNumsSequence = num => {
  if (!(typeof num === 'number')) {
    return 'Error: argument is not valid';
  }

  if (num === 1) {
    return num;
  } else {
    return num + factorialNumsSequence(num - 1);
  }
};

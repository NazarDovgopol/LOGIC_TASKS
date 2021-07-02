const meanValue = arr => {
  if (!(arr instanceof Array)) {
    return 'Error: argument is not valid';
  }
  
  let allValue = 0;

  for (let i = 0; i < arr.length; i++) {
    allValue += arr[i];
  }

  let meanValue = allValue / arr.length;

  return meanValue;
};
  
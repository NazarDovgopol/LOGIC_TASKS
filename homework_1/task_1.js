const minMaxValue = arr => {
  if (!(arr instanceof Array)) {
    return 'Error: argument is not valid';
  }
  
  let minValue;
  let maxValue;

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      minValue = arr[i];
      maxValue = arr[i];
    }

    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }

    if (arr[i] < minValue) {
      minValue = arr[i];
    }
  }

  return {
    min: minValue, 
    max: maxValue,
  };
};

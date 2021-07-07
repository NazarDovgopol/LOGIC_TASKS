const concatStr = () => {
  let res = '';

  return str => {
    if (!str) {
      return res;
    }  

    return res += str;
  }
};

const concat = concatStr();

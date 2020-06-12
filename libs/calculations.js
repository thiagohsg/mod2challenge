function avg(array) {
  const avg = sum(array) / array.length;
  return avg;

}

function sum(array) {
  const sum = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return sum;
}


export { avg, sum }
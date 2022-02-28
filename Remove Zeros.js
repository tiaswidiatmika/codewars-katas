function removeZeros(array) {
  // Sort "array" so that all elements with the value of zero are moved to the
  // end of the array, while the other elements maintain order.
  // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
  // Zero elements also maintain order in which they occurred.
  // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]
  
  // Do not use any temporary arrays or objects. Additionally, you're not able
  // to use any Array or Object prototype methods such as .shift(), .push(), etc
  
  // the correctly sorted array should be returned.
//   console.log(array);
  let cont = [];
  let contindex = 0
  let zeros = [];
  let zerosindex = 0;
  let index = 0;
  while(index < array.length){
    
    if (array[index] != 0 || array[index] === false) {
      cont[contindex] = array[index];
      contindex++;
    } else {
      zeros[zerosindex] = array[index];
      zerosindex++;
    }
    index++;
  }
  array = [...cont, ...zeros];
  return array;
}

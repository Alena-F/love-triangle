/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let newMassive = [];
  for (let i=0; i<preferences.length; i++) {
    let k = preferences[i];
    let m = preferences[k-1];
    let n = preferences[m-1];
    let z = preferences[n-1];
    if (z==k) {
      newMassive[newMassive.length] = k;
      newMassive[newMassive.length] = m;
      newMassive[newMassive.length] = n;  
      }
  }
  function unique(arr) {
    let result = [];
  
    nextInput:
      for (let y = 0; y < arr.length; y++) {
        let str = arr[y]; 
        for (let j = 0; j < result.length; j++) { 
          if (result[j] == str) continue nextInput; 
        }
        result.push(str);
      }
  
    return Math.floor(result.length/3);
  }
   return unique(newMassive);
};

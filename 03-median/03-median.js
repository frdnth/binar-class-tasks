function findMedian (array) {
  console.log('Data yang akan dicari mediannya:');
  console.log(array);
  array.sort(function (a,b){
      return a-b
  });
let indexMedian = array.length/2;
console.log('Banyak data = '+array.length);
console.log('index Median data = '+indexMedian);
if (indexMedian%1==0) {
  console.log('Median = ')
   return (array[indexMedian-1]+array[indexMedian])/2;
} else {
   console.log('Median = ')
   return (array[Math.floor(indexMedian)]);
}
}

// TEST CASES
console.log(findMedian([1, 2, 3, 4, 5])); // 3
console.log(findMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(findMedian([3, 4, 7, 6, 10])); // 6
console.log(findMedian([1, 3, 3])); // 3
console.log(findMedian([7, 7, 8, 8])); // 7.5

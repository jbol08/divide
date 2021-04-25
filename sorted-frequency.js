// function sortedFrequency(arr, val) {
//     let firstFound = findFirst(arr,val)
//     if (firstFound === -1) return firstFound;
//     let lastFound = findLast(arr, val);
//     return lastFound - firstFound + 1;
      
// }
// function findFirst(arr, val, min = 0, max = arr.length - 1) {
     
//     if (max >= min) {
//     let mid = Math.floor((min + max) / 2)
//     if ((mid === 0 || val > arr[mid - 1]) && arr[mid] === val) {
//       return mid;
//     } else if (val > arr[mid] ) {
//       return findFirst(arr,val, mid + 1, max)
//     }
//     return findFirst(arr, val, min, mid - 1)
//   }
//     return -1;
    
// }
// function findLast(arr, val, min = 0, max = arr.length - 1) {
     
//     if (max >= min) {
//     let mid = Math.floor((min + max) / 2)
//     if ((mid === arr.length - 1 || val < arr[mid + 1]) && arr[mid] === val) {
//       return mid;
//     } else if (val < arr[mid]) {
//       return findLast(arr,val, mid - 1, min)
//     }
//     return findLast(arr, val, mid + 1, max)
//   }
//     return -1;
    
// }
function sortedFrequency(arr, val) {
    let firstFound = findFirst(arr, val);
    if (firstFound == -1) return firstFound;
    let lastFound = findLast(arr, val);
    return lastFound - firstFound + 1;
  }
  
  function findFirst(arr, val, min = 0, max = arr.length - 1) {
    if (max >= min) {
      let mid = Math.floor((min + max) / 2)
      if ((mid === 0 || val > arr[mid - 1]) && arr[mid] === val) {
        return mid;
      } else if (val > arr[mid]) {
        return findFirst(arr, val, mid + 1, max)
      } else {
        return findFirst(arr, val, min, mid - 1)
      }
    }
    return -1
  }
  
  function findLast(arr, val, min = 0, max = arr.length - 1) {
    if (max >= min) {
      let mid = Math.floor((min + max) / 2)
      if ((mid === arr.length - 1 || val < arr[mid + 1]) && arr[mid] === val) {
        return mid;
      } else if (val < arr[mid]) {
        return findLast(arr, val, min, mid - 1)
      } else {
        return findLast(arr, val, mid + 1, max)
      }
    }
    return -1
  }
  

module.exports = sortedFrequency
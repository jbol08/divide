function findFloor(arr,val, min=0,max = arr.length -1) {
    if (max < min) return -1;
    if (val >= arr[max]) return arr[max];
    let mid = Math.floor((min + max) / 2)

    if (val === arr[max]) return arr[max];

    if (mid > 0 && arr[mid] > val && arr[mid - 1] <= val) {
        return arr[mid - 1];
    }

    if (val < arr[mid]) {
      return findFloor(arr,val,min, mid - 1);
    }

    return findFloor(arr, val, mid + 1, max);
}

module.exports = findFloor
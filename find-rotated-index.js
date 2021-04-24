function findRotatedIndex(arr,value) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleValue = arr[middleIdx];
        if (middleValue < value) {
            leftIdx = middleIdx + 1;
        } else if (middleValue > value) {
            rightIdx = middleIdx - 1;
        } else {
            return middleIdx;
        }
    }
    return -1;
}

module.exports = findRotatedIndex
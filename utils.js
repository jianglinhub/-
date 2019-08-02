/* 长度， 范围 */
function generateRandomArray(n, rangeL, rangeR) {
  console.assert(rangeL <= rangeR);
  let arr = [];
  for (let i = 0; i < n; i++) {
      arr[i] = Math.random() * rangeR + rangeL;
  }
  return arr;
}

function printArray(arr, n) {
  for (let i = 0; i < n; i++) {
    console.log(arr[i]);
  }
}

function isSorted(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function testSort(sortName, sort, arr, n) {
  console.time(sortName);
  sort(arr, n);
  console.assert(isSorted(arr ,n));
  console.timeEnd(sortName);
}

function swap(a, b, arr) {
  let c = arr[a]
  arr[a] = arr[b]
  arr[b] = c
}

// 生成一个近乎有序的数组
function generateNearlyOrderedArray(n, swapTimes) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = i;
  }
  for (let i = 0; i < swapTimes; i++) {
    let posx = Math.floor(Math.random() * n);
    let posy = Math.floor(Math.random() * n);
    swap(posx, posy, arr);
  }
  return arr;
}

module.exports = {
  generateRandomArray,
  printArray,
  isSorted,
  testSort,
  swap,
  generateNearlyOrderedArray
}
const chunk = (arr, size) => {
  if (size <= 0) return [];
  
  const len = arr.length;
  size = size > len ? len : size;
  const res = new Array(Math.ceil(len / size));
  let index = 0;
  let reIndex = 0;
  while(index < len) {
    res[reIndex++] = arr.slice(index, index+size);
    index += size;
  }
  return res;
}
const compact = arr => {
  const res = [];
  if (arr === null) return res;
  let resIndex = 0;
  for(const value of arr) {
    if (value) {
      res[resIndex++] = value
    }
  }
  return res;
}
const concat = (...args) => {
  const len = args.length;
  if (!len) return [];

  const arr = args[0];
  const rest = args.slice(1);
  // return arr.concat(...rest);
  const res = arr;
  for (let item of rest) {
    if (Array.isArray(item)) {
      for(let subItem of item) {
        res.push(subItem)
      }
    } else {
      res.push(item)
    }
  }
  return res;
}
const difference = (arr1, arr2) => {
  return arr1.filter(item => arr2.indexOf(item) < 0 );
}
const baseSlice = (arr, start = 0, end = arr.length) => {
  var len = arr.length;
  if (start < 0) {
    start = -start > len ? 0 : start + len;
  }
  end = end > len ? len : end;
  if (end < 0) {
    end = end + len;
  }
  len = end < start ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var res = Array(len);
  var index = -1;
  
  while(++index < len) {
    res[index] = arr[start + index];
  }
  return res;
}
var other = baseSlice([1,2,3,4,5],2);
 
console.log(other);
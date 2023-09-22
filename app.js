//1
new Set([1,1,2,2,3,4]) // {1,2,3,4}


//2
[...new Set("referee")].join("") // "ref"

//3
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false); // 0: {Array(3) => true}
                       // 1: {Array(3) => true}

//4
const hasDuplicate = (arr) => new set(arr).size !== arr.length

//5
const vowels = (v) => {
  return "aeiou".includes(v);
}

const vowelCount = (str) => {
  const map = new Map();
  for (let v of str) {
    let lowerCaseV = v.toLowerCase()
    if(vowels(lowerCaseV)) {
      if(map.has(lowerCaseV)){
        map.set(lowerCaseV, map.get(lowerCaseV) + 1);
      } else {
        map.set(lowerCaseV, 1);
      }
    }
  }
  return map;
}
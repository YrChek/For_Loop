export default function orderByProps(obj, array) {
  const result = [];
  const key = Object.keys(obj).sort();
  // eslint "ругается" на "for..in "
  for (let str = 0; str < key.length;) {
    if (array.includes(key[str]) === false) {
      array.push(key[str]);
    }
    str += 1;
  }
  // eslint "ругается" на "for..in "
  for (let str = 0; str < array.length;) {
    result.push({ key: array[str], value: obj[array[str]] });
    str += 1;
  }
  return result;
}

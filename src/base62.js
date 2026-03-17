const ALPHABET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const BASE = BigInt(ALPHABET.length);

function encode(num){
  let n = BigInt(num);
  let str = '';

  while(n>0){
    let rem = n%BASE;
    str = ALPHABET[Number(rem)] + str;
    n = n/BASE;

  }
  return str.padStart(10, '0');
}

function decode(str){
  let num = 0n;
  for(let char of str){
    num = num*BASE + BigInt(ALPHABET.indexOf(char))
  }
  return num;
}

module.exports = {encode, decode};
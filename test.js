const alphabet = ['A', 'E', 'I', 'O', 'U'];

function solution(word) {
  
  let value = '0';
  let direction = 1;
  let count = 1;

  while (value !== '5') {
    if (change(value) === word) {
      return count;
    }

    while (value.length !== 1 && value.at(-1) === alphabet.length - 1) {
      value = value.substring(0, value.length - 1);
    }
    
    value = value.substring(0, value.length - 1) + (Number(value.at(-1)) + 1);

  }
}

function change(value) {
  return value
    .split('')
    .map((a) => alphabet[Number(a)])
    .join('');
}

// A, AA, AAA, AAAA, AAAAA, AAAAE, AAAAI, AAAAO, AAAAU, AAAE 
// 1 2 3 4 5 6 7 8 9 10

// A AE AEA AEAA AEAAA AEAAE
// 2
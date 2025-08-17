/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word!=='string') {return false}
  let Arr = word.toLowerCase().split('');

  while (1<Arr.length){
    if (Arr[0] !== Arr.at(-1)) {
      return false
    }
        Arr.shift();
        Arr.pop();
  }
  return true
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв.
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence!=='string' || Number(sentence)===0) {return []}
  let words = sentence.toLowerCase().split(' ');

    while (1<words.length){
        if (words[0].length>words[1].length){
          words.splice(1, 1)
          }
        else if (words[0].length<words[1].length) {words.shift()}
        else break
    }
    return words
}

export { isPalindrom, findLongestWords };

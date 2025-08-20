/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function sortedByVowels(wordsArr) {
  const vowels = 'aeiou'
  const countVowels = word => [...word].filter(ch => vowels.includes(ch)).length;
  const sorted = wordsArr.toSorted((a, b) => countVowels(a) - countVowels(b));

  return sorted;
}

export { sortedByVowels };

/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'he#*$#$**&  llo123';
const vowels = 'aeiou'
const consonants= 'bcdfghjklmnpqrstvwxyz'
let vowelsAndConsonantsResult = '';
let vowels_counter=0
let consonants_counter=0

for (let i=0; i<word.length; i++){
    for (let j=0; consonants.length>j; j++){
        if (word[i]===vowels[j]){
            vowels_counter++
        }else if (word[i]===consonants[j]){
            consonants_counter++
        }
    }
}

vowelsAndConsonantsResult+=`hello contains ${vowels_counter} vowels and ${consonants_counter} consonants`
export { vowelsAndConsonantsResult };

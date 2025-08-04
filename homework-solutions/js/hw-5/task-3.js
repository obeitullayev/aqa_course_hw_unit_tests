/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';
const vowels = 'aeiou'
let vowelsAndConsonantsResult = '';
let vowels_counter=0

for (let i=0; i<word.length; i++){
    for (let j=0; vowels.length>j; j++){
        if (word[i]===vowels[j]){
            vowels_counter++
        }
    }
}

vowelsAndConsonantsResult+=`hello contains ${vowels_counter} vowels and ${word.length-vowels_counter} consonants`

export { vowelsAndConsonantsResult };

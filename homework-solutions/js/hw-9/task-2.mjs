/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  if (!character.name || !character.age) throw new Error;

  return characters.push(character)
}

function getCharacter(name) {
  return characters.find(obj => obj.name===name?obj:0)
}

function getCharactersByAge(minAge) {
  if (!minAge || typeof minAge=='string') {throw new Error()}

  return characters.filter(obj => obj.age>=minAge?obj:0)
}

function updateCharacter(name, newCharacter) {
  const character = characters.find(obj => obj.name === name);
  if (!character) {throw new Error() };
  Object.assign(character, newCharacter);
}

function removeCharacter(name) {
  const chIndex = characters.findIndex(obj => obj.name===name )
  if (chIndex===-1) {throw new Error() };
  characters.splice(chIndex, 1)
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };

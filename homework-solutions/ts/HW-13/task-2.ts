// Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true, 
// если пароль соответствует следующим правилам:
//   - Пароль должен содержать хотя бы одну заглавную букву.
//   - Пароль должен содержать хотя бы одну букву в нижнем регистре.
//   - Пароль должен содержать хотя бы одну цифру.
//   - Пароль должен быть не менее 8 символов.
//   - Пароль не должен состоять из одних пробелов
// Функция должна возвращать false, если хотя бы одно из условий не выполнено.

const validatePassword =(pass:string): boolean => {
    const chars = pass.split('');
    return (typeof pass === 'string' &&
            chars.some(el => el>='A' && el <='Z') &&
            chars.some(el => el>='a' && el <='z') &&
            chars.some(el => el>='0' && el <='9') &&
            pass.length>=8 &&
            pass.trim().length>0
    )
}

console.log(validatePassword('ABCDEFGH1a'))
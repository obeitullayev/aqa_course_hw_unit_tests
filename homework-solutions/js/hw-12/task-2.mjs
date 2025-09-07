// Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
//    Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
//    После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
//    Преобразуйте респонс из JSON в объект
//    Проверьте, что айди в респонсе === 201
//    Функция должна возвращать полученный объект из респонса
//    Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена

const bodyObj={ userId: 1, title: "1", completed: false }

async function createTodo({ userId, title, completed }) {
    try {
        const response=await fetch('https://jsonplaceholder.typicode.com/todos', {method: "post",
        body: {
            userId,
            title,
            completed,},})
        if (!response.status===201) throw new Error ('Status not 201')
        const body = await response.json()
        if (!(body.id===201)) throw new Error ('ID not 201')
        return response
    } catch (error) {
        console.error(error.message);
    } finally{
        return 'function finished'
    }
}

createTodo(bodyObj).then(result => console.log(result))

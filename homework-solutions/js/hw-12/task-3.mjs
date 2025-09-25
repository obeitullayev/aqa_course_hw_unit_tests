// На сайте JSONPlaceholder - Free Fake REST API  с помощью функции fetch получить список пользователей. 
//   Вывести на экран: имя, e-mail, телефон и название компании пользователя.
//   Отдельными запросами получить список альбомов пользователя и список фотографий в альбомах. 
//   Дополнительно вывести список альбомов у пользователя с указанием количества в них фотографий. 
//   Для реализации трех запросов воспользоваться Promise.all().
//   (Принадлежность альбомов пользователем связано полем userId, принадлежность фотографий к альбомам сваязано полем albumId). 
//       Пример: 
//       1.  name: Leanne Graham
//           email: Sincere@april.biz
//           phone: 1-770-736-8031 x56442
//           company: Romaguera-Crona    
//           albums:
//             Album name 1 (10 photos)
//             Album name 2 (100 photos)
//       __________________________________

//       2.  name: Ervin Howell   
//           email: Shanna@melissa.tv 
//           phone: 010-692-6593 x09125
//           company: Deckow-Crist
//           albums:
//             Album name 1 (10 photos)
//             Album name 2 (100 photos)

const baseUrl='https://jsonplaceholder.typicode.com'

// респонс запроса
async function getDataFromApi(url) {
    try {
        const response=await fetch(url) 
        const body = await response.json()
        return body
    } catch (error) {
        console.error(error.message);
    }
}


//создает объект пользователя
function createUserObject(user, albums, photos ) {
    try {
        const { name, email, phone, company } = user;
        const result = {
            name,
            email,
            phone,
            company:company.name,
            albums: []};
        let i=1;
        albums.forEach((album) => {
            if (album.userId===user.id){
                const counter=photos.reduce((acc, photo) => {
                    if (album.id===photo.albumId){
                        acc++;
                    }
                    return acc
                },0)
                result.albums.push(`Album name ${i++} (${counter} photos)`)
                }
            }
        )
        return result
    } 
    catch (error) {
        console.error(error.message);
    } 
}

//перебирает результат респонса
async function publishResult() {
    const getUsers = await getDataFromApi(baseUrl+'/users')
    const getAlbums = await getDataFromApi(baseUrl+'/albums')
    const getPhotos = await getDataFromApi(baseUrl+'/photos')
    const users= await Promise.all(getUsers)
    const albums=await Promise.all(getAlbums)
    const photos=await Promise.all(getPhotos)
    const result= users.map(user=>createUserObject(user, albums, photos))
    return result
}

// вызов функции
const result = await publishResult()

for (let i = 0; i < result.length; i++) {
    console.log(`${i + 1}.  name: ${result[i].name}
email: ${result[i].email}
phone: ${result[i].phone}
company: ${result[i].company}
albums:
${result[i].albums.join('\n      ')}
__________________________________
`)}
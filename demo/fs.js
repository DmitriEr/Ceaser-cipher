// file system
const fs = require('fs');
const path = require('path');

// mkdir and mkdirSync - синхронный и асинхронный метод.
// лучше использоваться асинхронный метод
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
  // при работе с асинхронными операциями первый аргумент ошибка
  // if (err) {
    // throw err
  // }
  // console.log('Папка создана')
// })

const filePath = path.join(__dirname, 'test', 'test.txt');
// запись файлов есть синхронные и асинхронные
fs.writeFile(filePath, 'Hello Node JS', (err) => {
  if (err) {
    throw err
  }
  console.log('Файл создан');
})

fs.appendFile(filePath, '\nHello Again', (err) => {
  if (err) {
    throw err
  }
  console.log('Файл создан');
})
// получаем объект буфера
fs.readFile(filePath, (err, content) => {
  if (err) {
    throw err
  }
  console.log(content);
  const data = Buffer.from(content)
  // console.log('Content: ', content);
  console.log('Content: ', data.toString());
})

fs.readFile(filePath, 'utf-8', (err, content) => {
  if (err) {
    throw err
  }
  console.log(content);
})
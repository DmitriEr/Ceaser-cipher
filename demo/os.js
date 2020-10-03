const os = require('os');

console.log('Операционная система: ', os.platform());

console.log('Архитектура процессора: ', os.arch());

console.log('Информация по процессорам: ', os.cpus());

console.log('Свободная память: ', os.freemem());

console.log('Всего память: ', os.totalmem());

console.log('Домашнаяя директория: ', os.homedir());

console.log('Вклчена система секунды: ', os.uptime());
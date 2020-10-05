# Task 1. Caesar cipher CLI tool

Установить все зависимости из package.json - npm install

В файл input.txt - текст, который требуется расшифровать и зашифровать или можно создать свой файл.

В файлe output.txt - отобразится результат работы программы или можно отобразить в другом файле.

Обязательные параметры:
- `input` или `i` c типом `encode` или `decode`;
- `shift` или `s` с числом;

Пример запуска работа из командной строки. Ввод файла в `./input.txt`, вывод текста в файле `output.txt`:
- `node caesar-cli -a encode -s 7 -i input.txt -o output.txt`

Ввод и вывод в консоли:
- `node caesar-cli -a encode -s 7`

Ввод в терминал, вывод в файл `output.txt`:
- `node caesar-cli -a encode -s 7 -o output.txt`

Ввод текста в файле `input.txt`, вывод файла в терминал:
- `node caesar-cli -a encode -s 7 -i input.txt`

Пример шифровки:
Input: `input.txt This is secret. Message about "_" symbol!`
Output: `output.txt Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

Командная строка имеют 4 опции:

`-s`, `--shift`: a shift (сдвиг)
`-i`, `--input`: an input file (файл ввода)
`-o`, `--output`: an output file (файл с результатом)
`-a`, `--action`: an action encode/decode (тип действия)

Спасибо, что посмотрели!

(discrord, telegram) @dmitrier
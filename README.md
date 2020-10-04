# Task 1. Caesar cipher CLI tool

Установить все зависимости из package.json - npm install

В файл input.txt - текст, который требуется расшифровать и зашифровать.

В файлe output.txt - отобразится результат работы программы.

Если input.txt или output.txt пропустить ответ в консоли

Пример запуска работа из командной строки:

`node caesar-cli -a encode -s 7 -i "./input.txt" -o "./output.txt"`

`node caesar-cli --action encode --shift 7 --input input.txt --output output.txt`

`node caesar-cli --action decode --shift 7 --input input.txt --output output.txt`

Пример шифровки:

`input.txt This is secret. Message about "_" symbol!`

`output.txt Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

CLI tool имеют 4 опции:

-s, --shift: a shift (сдвиг)
-i, --input: an input file (файл ввода)
-o, --output: an output file (файл с результатом)
-a, --action: an action encode/decode (тип действия)


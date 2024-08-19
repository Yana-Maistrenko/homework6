/*Вам необхідно написати функцію doubleLetter(str), яка приймає на вхід рядок і повертає новий рядок, 
у якому кожен символ повторюється двічі hello ⇒ hheelllloo.*/
/*let str = prompt("Введіть строку:");
let doubleLetterStr = "";

function doubleLetter(str) {
    for (let i = 0; i < str.length; i++) {
        doubleLetterStr += str[i].repeat(2); // Повторюємо кожен символ двічі
    }
    console.log(doubleLetterStr);
}

doubleLetter(str);*/


/*Вам необхідно написати функцію padString(str, length, symbol, toLeft), яка приймає на вхід рядок, 
число, що є довжиною рядка, який ми хочемо отримати в результаті та символ, яким доповниться рядок, якщо це буде потрібно, 
четвертим параметром є буремний «прапор», чи додавати символи зліва або справа(за замовчуванням). Якщо 2 параметр менше, ніж 
довжина вихідного рядка, то виводимо вихідний рядок без змін. Приклад виклику: padString('Ivan', 6, '*') // 'Ivan**'.*/

/*function padString(str, length, symbol, toLeft = false) {
    if (length > str.length) {
        if (toLeft) {
            return str.padStart(length, symbol);
        } else {
            return str.padEnd(length, symbol);
        }
    } else {
        return str;
    }
}
console.log(padString('Ivan', 8, '*'));
console.log(padString('y', 5, 'e', true));
console.log(padString('ijustwannabepartofyoursymphony', 10, 'e'));*/


/*Вам необхідно написати функцію camelCase(str, separator), яка приймає на вхід рядок і перетворює його до формату camelCase.*/
/*function camelCase(str,separator){
    let words;

    if (typeof separator === 'number') { //це для випадку якщо сепаратором є індекс
        words = [str.slice(0, separator), str.slice(separator)];//розділимо слово на два, перше - від 0 до вказаного індекса сепаратора не включно, друге слово все інше
    } else {
        words = str.split(separator);
    }

    for(let i = 0; i < words.length; i++){
        words[i] = words[i].toLowerCase();
    }

    for (let i = 1; i < words.length; i++) {
        words[i] = words[i].at(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join('');
}

console.log(camelCase('hello friends', ' '));
console.log(camelCase('Camel_CASE', '_'));
console.log(camelCase('CAMEL.case', '.'));
console.log(camelCase('happybirthday', 5));*/

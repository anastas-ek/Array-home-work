// Создать массив «Список покупок». Каждый элемент массива является объектом,
//  который содержит название продукта, необходимое количество и куплен или нет.
//   Написать несколько функций для работы с таким массивом.
let list = [
    { name: 'apple', num: 3, buy: true },
    { name: 'tomato', num: 2, buy: false },
    { name: 'orange', num: 3, buy: true },
    { name: 'garlic', num: 10, buy: false },
    { name: 'cucumber', num: 5, buy: true },
    { name: 'plum', num: 8, buy: false }
]


// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
function sort() {
    list.sort(function (a) {
        if (a.buy) {
            return 1;
        } else if (!a.buy) {
            return -1;
        } else return 0;
    })
}


// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим
//  в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.

function list_push(name_prod) {
    let prod = false;
    for (let i = 0; i < list.length; i++) {
        if (list[i].name === name_prod) {
            list[i].num++;
            prod = true;
        }
    }
    if (!prod) {
        list.unshift({ name: name_prod, num: 1, buy: false });
    }
}

// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

function list_buy(name_prod) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].name === name_prod) {
            list[i].buy = true;
        }
    }
}



// 22. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит
//  из названия товара, количества и цены за единицу товара. Написать следующие функции:
let check = [
    { name: "milk", num: 2, price: 19 },
    { name: "cheese", num: 0.4, price: 319 },
    { name: "meat", num: 2, price: 120 },
    { name: "pepper", num: 3, price: 30 },
    { name: "towel", num: 2, price: 80 },
    { name: "candies", num: 1.5, price: 205 },
    { name: "light bulb", num: 5, price: 15 }
]

// Распечатка чека на экран;

function print_check() {
    let print = '';
    for (let i = 0; i < check.length; i++) {
        print = print + `${i + 1}) ${check[i].name}: ${check[i].num}. Цена:${check[i].price}грн;\n`;
    }
    return print;
}

// Подсчет общей суммы покупки;
function sum() {
    let sum = 0;
    for (let i = 0; i < check.length; i++) {
        sum = sum + check[i].price * check[i].num;
    }
    return `${sum}грн.`;
}

// Получение самой дорогой покупки в чеке;
function big_price() {
    let price = check[0].num * check[0].price;
    let price_name = check[0].name;
    for (let i = 1; i < check.length; i++) {
        if (price < check[i].num * check[i].price) {
            price = check[i].num * check[i].price;
            price_name = check[i].name;
        }
    }
    return `${price_name}: ${price} грн.`
}

// Подсчет средней стоимости одного товара в чеке.
function middle_price() {
    let price = 0;
    for (let i = 0; i < check.length; i++) {
        price = price + check[i].num * check[i].price;

    }
    return (price / check.length).toFixed(2) + 'грн.'
}


// 3)Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. Д.).
//  Каждый элемент массива - это объект, состоящий из двух свойств: название стиля и значение стиля. 
//  С помощью функции document.write () в тегах <p> </ p> можно добавлять атрибуты стиля со всеми стилями,
//   перечисленными в массиве.

let style_css = [
    { name: 'color', value: 'red' },
    { name: 'background-color', value: 'aquamarine' },
    { name: 'font-size', value: '30px' },
    { name: 'box-shadow', value: '10px 5px 10px -5px #AB47BC' },
    { name: 'text-align', value: 'left' },
    { name: ' font-weight', value: 'bold' }
]

// for (let i = 0; i < style_css.length; i++) {
//     console.log(`${i + 1}) ${style_css[i].name}: ${style_css[i].value}`);
// }
// console.log('Функция style с аргументом - порядковый номер свойства!');
// function style(num) {
//     if (!isFinite(num) || num < 1 || num > style_css.length || num % 1 !== 0) {
//         console.log("Ошибка!Введите правильный аргумент функции!");
//     } else {
//         document.write(`<p style = "${style_css[num - 1].name}:${style_css[num - 1].value}">text</p>`);
//     }
// }






// 4)Создать массив аудиторий академии. Объект-аудитория состоит из названий,
//  количества посадочных мест (от 10 до 20) и названий факультетов,
//   для которых она была исключена. Написать несколько функций для работы с ним ^
let academy = [
    { N: 1, name: 'Физика', num: 15, faculties: ['ФТИ', 'ИТС', 'ММИ', 'ФИВТ', 'ФЕЛ', 'РТФ'] },
    { N: 2, name: 'Лаборатория1', num: 10, faculties: ['ФТИ', 'ИТС', 'ФИВТ', 'РТФ'] },
    { N: 3, name: 'Лаборатория2', num: 12, faculties: ['ФТИ', , 'ММИ', 'ФЕЛ', 'РТФ'] },
    { N: 4, name: 'Правовых дисциплин', num: 19, faculties: ['ФЛ', 'ФММ'] },
    { N: 5, name: 'Иностранного языка1', num: 20, faculties: ['ФТИ', 'ИТС', 'ФЛ', 'ФММ'] },
    { N: 6, name: 'Иностранного языка2', num: 12, faculties: ['ФЛ', 'ИТС', 'ФММ', 'ФИВТ'] },
    { N: 7, name: 'Иностранного языка3', num: 14, faculties: ['ФТИ', 'ММИ', 'ФЛ', 'ФММ', 'РТФ'] },
    { N: 8, name: 'Русского языка', num: 20, faculties: ['ИТС', 'ФЛ', 'ФММ', 'РТФ'] },
    { N: 9, name: 'Химия', num: 12, faculties: ['ФЕЛ', 'ФИВТ', 'РТФ'] },
    { N: 10, name: 'Бухгалтерского учета', num: 19, faculties: ['ФЛ', 'ФММ'] },
    { N: 11, name: 'Истории', num: 20, faculties: ['ММИ', 'ФЛ', 'ФММ', 'ФЕЛ'] },
    { N: 12, name: 'Информатики1', num: 10, faculties: ['ИТС', 'ММИ', 'ФММ', 'ФИВТ'] },
    { N: 13, name: 'Информатики2', num: 19, faculties: ['ИТС', 'ММИ', 'ФММ', 'ФИВТ'] },
    { N: 14, name: 'Лекционный зал1', num: 50, faculties: ['ФТИ', 'ФЛ', 'ФММ', 'ФЕЛ'] },
    { N: 15, name: 'Лекционный зал2', num: 55, faculties: ['ИТС', 'ММИ', 'ФИВТ', 'РТФ'] },
    { N: 16, name: 'Электротехники и электронники', num: 13, faculties: ['ФТИ', 'ММИ', 'ФИВТ', 'ФЕЛ'] },
    { N: 17, name: 'Материаловедения, метрологии и стандартизации', num: 12, faculties: ['ММИ', 'ФИВТ', 'ФЕЛ', 'РТФ'] },
]

// Объект-группа состоит из названий, количества студентов и названий факультета;
let groups = [
    { name: 'ТЗ-32', students: 12, faculties: 'ИТС' },
    { name: 'ТС-33', students: 13, faculties: 'ИТС' },
    { name: 'ТИ-31', students: 10, faculties: 'ИТС' },
    { name: 'ФМ-42', students: 29, faculties: 'ФТИ' },
    { name: 'ФМ-32', students: 14, faculties: 'ФТИ' },
    { name: 'ФИ-18', students: 13, faculties: 'ФТИ' },
    { name: 'ФТ-12', students: 14, faculties: 'ФТИ' },
    { name: 'МИ-12', students: 20, faculties: 'ММИ' },
    { name: 'МК-19', students: 15, faculties: 'ММИ' },
    { name: 'МК-13', students: 17, faculties: 'ММИ' },
    { name: 'МЛ-23', students: 12, faculties: 'ММИ' },
    { name: 'АН-32', students: 14, faculties: 'ФЛ' },
    { name: 'НЦ-34', students: 15, faculties: 'ФЛ' },
    { name: 'ЯП-15', students: 10, faculties: 'ФЛ' },
    { name: 'РК-23', students: 9, faculties: 'ФЛ' },
    { name: 'ФМ-13', students: 20, faculties: 'ФММ' },
    { name: 'ФР-45', students: 15, faculties: 'ФММ' },
    { name: 'ФП-17', students: 12, faculties: 'ФММ' },
    { name: 'ФИ-32', students: 11, faculties: 'ФИВТ' },
    { name: 'ФИ-34', students: 10, faculties: 'ФИВТ' },
    { name: 'ФЛ-32', students: 18, faculties: 'ФИВТ' },
    { name: 'ИК-32', students: 19, faculties: 'ФЕЛ' },
    { name: 'ИП-34', students: 15, faculties: 'ФЕЛ' },
    { name: 'ЛМ-34', students: 14, faculties: 'ФЕЛ' },
    { name: 'РП-34', students: 14, faculties: 'РТФ' },
    { name: 'ИМ-12', students: 14, faculties: 'РТФ' },
    { name: 'РТ-15', students: 13, faculties: 'РТФ' },
    { name: 'РФ-13', students: 12, faculties: 'РТФ' },
]


// Вывод на экран всех аудиторий;
function academy_room() {
    for (let i = 0; i < academy.length; i++) {
        console.log(`${academy[i].N} аудитория: '${academy[i].name}'`)
    }
}


// Функция сортировки аудиторий по количеству мест;
function academy_room_num() {
    academy.sort(function (a, b) {
        if (a.num > b.num) {
            return 1;
        } else if (a.num < b.num) {
            return -1;
        } else {
            return 0;
        }
    })
    for (let i = 0; i < academy.length; i++) {
        console.log(`${academy[i].num}чел. - ${academy[i].N} аудитория: '${academy[i].name}'`)
    }
}


// Функция сортировки аудиторий по названию (по алфавиту).
function academy_sort_letter() {
    academy.sort(function (a, b) {
        if (a.name > b.name) {
            return 1;
        } else if (a.name < b.name) {
            return -1;
        } else {
            return 0;
        }
    })
    for (let i = 0; i < academy.length; i++) {
        console.log(`'${academy[i].name} - ${academy[i].N} аудитория'`)
    }
}


// Вывод на экран аудиторий для указанных факультета;
console.log(`class_faculties в аргументе указать факультет:'ИТС', 'ФТИ', 'ММИ', 'ФЛ', 'ФММ', 'ФИВТ', 'ФЕЛ', 'РТФ'\nОбяхательно в кавычках!`)
function class_faculties(fac) {
    for (let i = 0; i < academy.length; i++) {
        for (let k = 0; k < academy[i].faculties.length; k++) {
            if (academy[i].faculties[k] == fac) {
                console.log(`${academy[i].N} аудитория: '${academy[i].name}'`);
            }
        }
    }
}



// Вывод на экран только тех аудиторий, которые подходят для переданной группы. 
console.log(`class_group в аргументе указать группу: 'ТЗ-32','ТС-33','ТИ-31','ФМ-42','ФМ-32','ФИ-18','ФТ-12','МИ-12','МК-19', 'МК-13','МЛ-23','АН-32','НЦ-34','ЯП-15','РК-23','ФМ-13','ФР-45','ФП-17','ФИ-32','ФИ-34','ФЛ-32','ИК-32','ИП-34','ЛМ-34','РП-34','ИМ-12','РТ-15','РФ-13'\nОбяхательно в кавычках!`)
function class_group(group) {
    let fac;
    for (let i = 0; i < groups.length; i++) {
        if (groups[i].name == group) {
            fac = groups[i].faculties;
        }
    }
    class_faculties(fac);
}
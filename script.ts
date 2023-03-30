// задание 1
let a = prompt('Enter your name', 'My name is...')
alert('Nice to meet you ' + a)

// задание 2
let year = 2023
let birth = Number(prompt('Enter your year of birth'))
let age = year - birth
let age2 = age - 1
alert('You are ' + age + ' or ' + age2)

// задание 3
let b = Number(prompt('Введите сторону квадрата'))
let square = b * 4
alert('Периметр равен ' + square)

// задание 4
let radius = Number(prompt('Введите радиус окружности'))
let area = Math.PI * radius ** 2
alert('Площадь равна ' + area)

// задание 5
let km = Number(prompt('Введите расстояние в км'))
let time = Number(prompt('За какое время хотите доехать'))
let speed = km / time
alert('Вам нужно ехать со скоростью ' + speed + ' км/ч')

// задание 6
let dollar = Number(prompt('Введите количество долларов'))
let dollarRate = 0.92
let euro = dollar * dollarRate
alert('Вы имеете ' + euro + ' евро')

// задание 7
let storage = Number(prompt('Введите объём флешки'))
let files = Math.floor(storage / 0.82)
alert('На вашей флешке поместится ' + files + ' файлов')

// задание 8
let sum = Number(prompt('Сколько у вас денег?'))
let price = Number(prompt('Сколько стоит одна шоколадка?'))
let amount = Math.floor(sum / price)
let change = sum % price
alert('Вы можете купить ' + amount + ' шоколадок и у вас останется ' + change + ' рублей')

// задание 9
let digit = Number(prompt('Введите трехзначное число'))
let reverse = String(digit % 10) + String((Math.floor(digit / 10) % (Math.floor(digit / 100) * 10))) + String(Math.floor(digit / 100))
alert('Число ' + digit + ' наоборот будет ' + reverse)

// задание 10
let numb = Number(prompt('Введите число'))
numb % 2 ? alert('Число нечетное') : alert('Число четное')

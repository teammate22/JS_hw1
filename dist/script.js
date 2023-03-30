// задание 1
var a = prompt('Enter your name', 'My name is...');
alert('Nice to meet you ' + a);
// задание 2
var year = 2023;
var birth = Number(prompt('Enter your year of birth'));
var age = year - birth;
var age2 = age - 1;
alert('You are ' + age + ' or ' + age2);
// задание 3
var b = Number(prompt('Введите сторону квадрата'));
var square = b * 4;
alert('Периметр равен ' + square);
// задание 4
var radius = Number(prompt('Введите радиус окружности'));
var area = Math.PI * Math.pow(radius, 2);
alert('Площадь равна ' + area);
// задание 5
var km = Number(prompt('Введите расстояние в км'));
var time = Number(prompt('За какое время хотите доехать'));
var speed = km / time;
alert('Вам нужно ехать со скоростью ' + speed + ' км/ч');
// задание 6
var dollar = Number(prompt('Введите количество долларов'));
var dollarRate = 0.92;
var euro = dollar * dollarRate;
alert('Вы имеете ' + euro + ' евро');
// задание 7
var storage = Number(prompt('Введите объём флешки'));
var files = Math.floor(storage / 0.82);
alert('На вашей флешке поместится ' + files + ' файлов');
// задание 8
var sum = Number(prompt('Сколько у вас денег?'));
var price = Number(prompt('Сколько стоит одна шоколадка?'));
var amount = Math.floor(sum / price);
var change = sum % price;
alert('Вы можете купить ' + amount + ' шоколадок и у вас останется ' + change + ' рублей');
// задание 9
var digit = Number(prompt('Введите трехзначное число'));
var reverse = String(digit % 10) + String((Math.floor(digit / 10) % (Math.floor(digit / 100) * 10))) + String(Math.floor(digit / 100));
alert('Число ' + digit + ' наоборот будет ' + reverse);
// задание 10
var numb = Number(prompt('Введите число'));
numb % 2 ? alert('Число нечетное') : alert('Число четное');

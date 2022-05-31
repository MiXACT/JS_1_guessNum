let n = Math.floor(Math.random() * 1000);
console.log(n);

let userN = prompt('Введите число от 0 до 999:')

while (userN != 'q') {
    if (!isNaN(userN)) {
        if (userN > n) {
            alert('Меньше!');
        } else if (userN < n) {
            alert('Больше!');
        } else {
            alert('Вы угадали!');
            break;
        }
    } else {
        alert('Вы ввели некорректные данные!');
    }
    userN = prompt('Попробуйте ввести число ещё раз:')
}
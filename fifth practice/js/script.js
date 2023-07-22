/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
// 1
document.querySelectorAll('.promo__adv img').forEach(item => item.remove());
// 2
document.querySelector('div.promo__content div.promo__bg div.promo__genre').textContent = 'драма';
// 3
document.querySelector('.promo__bg').style.backgroundImage = "url('img/bg.jpg')";
// 4 + 5
document.querySelectorAll('ul.promo__interactive-list li').forEach(x => x.remove());
movieDB.movies.sort();
for (let i = 0; i < movieDB.movies.length; i++) {
    const li = document.createElement('li');
    li.className = 'promo__interactive-item';
    li.textContent = (i + 1) + ". " + movieDB.movies[i];
    li.insertAdjacentHTML('beforeend', '<div class="delete"></div>')
    document.querySelector('ul.promo__interactive-list').append(li);
}
// другой вариант
// movieDB.movies.forEach((item, index) => {
//     document.querySelector('ul.promo__interactive-list').innerHTML += `
//     <li class="promo__interactive-item">${index + 1}. ${item}
//         <div class="delete"></div>
//     </li>
//     `;
// })
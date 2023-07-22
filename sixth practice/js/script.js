/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

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
        li.insertAdjacentHTML('beforeend', `<div class="delete" id=${i}></div>`)
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



    const btnSubmit = document.querySelector('#submit'),
        inputMovie = document.querySelector('.adding__input'),
        checkboxMovie = document.querySelector('#favorite');

    btnSubmit.addEventListener('click', addMovie);
    checkedButton();

    function deleteMovie(event) {
        movieDB.movies.splice(event.target.id, 1);
        showMovies();
    }

    function addMovie(event) {
        event.preventDefault();
        let movie = inputMovie.value;
        if (!movie) {
            return;
        }
        if (movie.length > 21) {
            movie = movie.substring(0, 21) + "...";
        }
        if (checkboxMovie.checked) {
            console.log('Добавляем любимый фильм');
        }
        inputMovie.value = "";
        movieDB.movies.push(movie);
        showMovies();
    }

    function showMovies() {
        document.querySelector('.promo__interactive-list').innerHTML = "";
        movieDB.movies.sort();
        movieDB.movies.forEach((item, index) => {
            document.querySelector('ul.promo__interactive-list').innerHTML += `
    <li class="promo__interactive-item">${index + 1}. ${item}
        <div class="delete" id="${index}"></div>
    </li>
    `;
        });
        checkedButton();
    }

    function checkedButton() {
        const btns = document.querySelectorAll('.delete');
        btns.forEach(btn => btn.addEventListener('click', deleteMovie));
    }
})
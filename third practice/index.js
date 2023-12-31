/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start() {
    do {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    } while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms))
};

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    };
};

function writeYourGenres() {
    let genre;
    for (let i = 0; i < 3; i++) {
        genre = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
        personalMovieDB.genres.push(genre);
    }
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let movie;
        let rate;
        do {
            movie = prompt('Один из последних просмотренных фильмов?', '');
            rate = prompt('На сколько оцените его?', '');
        } while (movie.count > 50 || movie == '' || rate == '' || movie == null || rate == null)
        personalMovieDB.movies[movie] = rate;
    };
}

function delectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    };
}

console.log(personalMovieDB);
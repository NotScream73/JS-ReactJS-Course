/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        do {
            this.count = prompt('Сколько фильмов вы уже посмотрели?', '');
        } while (this.count == '' || this.count == null || isNaN(this.count))
    },
    showMyDB: function () {
        if (!this.privat) {
            console.log(this);
        };
    },
    writeYourGenres: function () {
        let isValid = false;
        let genres;
        do {
            genres = prompt(`Введите ваши любимые жанры через запятую`, '');
            if (genres == null || genres === ''){
                continue;
            }else{
                isValid = true;
            };
            genres = genres.split(',');
            genres.forEach((item) => {
                if (item == null || item == '' || item == " ") {
                    isValid = false;
                }
            })
        } while (!isValid);
        this.genres = genres;
        this.genres.forEach((value, index) => {
            console.log(`Любимый жанр #${index + 1} - это ${value}`);
        });
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let movie;
            let rate;
            do {
                movie = prompt('Один из последних просмотренных фильмов?', '');
                rate = prompt('На сколько оцените его?', '');
            } while (movie.count > 50 || movie == '' || rate == '' || movie == null || rate == null)
            this.movies[movie] = rate;
        };
    },
    delectPersonalLevel: function () {
        if (this.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (this.count >= 10 && this.count < 30) {
            alert('Вы классический зритель');
        } else if (this.count >= 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        };
    },
    toggleVisibleMyDB: function () {
        this.privat = !this.privat;
    }
};
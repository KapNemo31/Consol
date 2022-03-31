

'use strict';

function Test(){
    console.log('I will conquer this world');
}
Test();

Test();

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    geners: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', "");
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.start();
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const lastFilm = prompt('Один из последних просмотренных фильмов?', ""),
                ball = +prompt('На сколько оцените его?', "");
            if (lastFilm != '' && lastFilm != null && ball != null && ball != '' && lastFilm.length <= 50) {
                personalMovieDB.movies[lastFilm] = ball;
                console.log('Good');
            } else {
                console.log('Error');
                i--;
            }
        }
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function (hiden) {
        if (!hiden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let like = prompt(`Ваш любимый жанр под номером ${i}`, "");
            

            if (like == '' && like == null ) {
                i--;
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
            } else {
                personalMovieDB.geners[i - 1] = like;
            }
        }
        personalMovieDB.geners.forEach((name, i) => {
            console.log(`"Любимый жанр ${i+1} - это ${name}`);
        });

    
    }
};


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


personalMovieDB.start();

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.writeYourGenres();

personalMovieDB.showMyDB(personalMovieDB.privat);

personalMovieDB.toggleVisibleMyDB();
console.log(personalMovieDB);
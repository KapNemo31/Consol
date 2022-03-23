/* Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой 
пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}".
 Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */

'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        start();
    }
}


start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastFilm = prompt('Один из последних просмотренных фильмов?', ""),
            ball = +prompt('На сколько оцените его?', "");
        if (lastFilm != '' && lastFilm != null && ball != null && ball != '' && lastFilm.length <= 50) {
            personalMovieDB.movies[lastFilm] = ball;
            console.log('Good');
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function writeYourGenres(){
    for(let i=1; i<=3; i++){
        let like = prompt(`Ваш любимый жанр под номером ${i}`, "");
        personalMovieDB.geners[i-1] += like;
    }
    
}
writeYourGenres();
function showMyDB(hiden) {
    if (!hiden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

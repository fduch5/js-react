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

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const advs = document.querySelectorAll(".promo__adv img"),
      poster = document.querySelector(".promo__bg"),
      genre = poster.querySelector(".promo__genre"),
      filmList = document.querySelector(".promo__interactive-list");

advs.forEach(adv => {
    adv.remove();
});

genre.textContent = "ДРАМА";
poster.style.backgroundImage = "url(\"./img/bg.jpg\")";

filmList.innerHTML = "";
movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    filmList.innerHTML += `
        <li class="promo__interactive-item">${i+1}. ${film}
            <div class="delete"></div>
        </li>
    `;
});
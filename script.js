'use strict';

let data = [
    {
        name: 'Давидюк Автоном Володимирович',
        age: '01.01.1975',
        service: 'ДПСУ'
    }, {
        name: 'Федишин Юліан Остапович',
        age: '01.01.1976',
        service: 'НПУ'
    }, {
        name: 'Гладчук Драгомир Зорянович',
        age: '01.01.1981',
        service: 'НПУ'
    }, {
        name: 'Бенюк Шерлок Найденович',
        age: '01.01.1977',
        service: 'ДПСУ'
    }, {
        name: 'Гоменюк Флор Макарович',
        age: '01.01.1981',
        service: 'СБУ'
    }, {
        name: 'Лісевич Любомудр Северинович',
        age: '01.01.1977',
        service: 'СБУ'
    }, {
        name: 'Бутейко Царук Вікторович',
        age: '01.01.1981',
        service: 'ЗСУ'
    }, {
        name: 'Швець Щастибог Володимирович',
        age: '01.01.1977',
        service: 'ЗСУ'
    }, {
        name: 'Семенко Дорофій Найденович',
        age: '01.01.1975',
        service: 'ЗСУ'
    }, {
        name: 'Задніпровський Велемудр Янович',
        age: '01.01.1985',
        service: 'ЗСУ'
    }, {
        name: 'Ніколайчук Щек Захарович',
        age: '01.01.1977',
        service: 'ДПСУ'
    }, {
        name: 'Лущик Спас Никодимович',
        age: '01.01.1986',
        service: 'НГУ'
    }, {
        name: 'Коломацький Осемрит Ратиборович',
        age: '01.01.1987',
        service: 'НГУ'
    }, {
        name: 'Самокиш Цвітан Панасович',
        age: '01.01.1974',
        service: 'НГУ'
    }
];

const inputSearch = document.querySelector('#inputSearch');
const resultSearch = document.querySelector('#resultSearch');
const submit = document.querySelector('#submit');
const clear = document.querySelector('#clear');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    resultSearch.innerHTML = '';
    const data = result(inputSearch.value.toUpperCase());
    data.forEach(element => {
        resultSearch.innerHTML += `<p>${element.name}, ${element.age}, ${element.service}</p>`;
    });
});

function result(serv) {
    let res = data.filter(a => a.service === serv);
    return res;
};

clear.addEventListener('click', () => {
    e.preventDefault();
    resultSearch.innerHTML = '';
});


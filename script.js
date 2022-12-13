'use strict';

let data = [
    {
        name: 'Іванов Іван Іванович',
        age: '01.01.1975',
        service: 'ДПСУ'
    }, {
        name: 'Іванов Іван Іванович',
        age: '01.01.1976',
        service: 'НПУ'
    }, {
        name: 'Петров Петро Петрович',
        age: '01.01.1981',
        service: 'НПУ'
    }, {
        name: 'Петров Петро Петрович',
        age: '01.01.1977',
        service: 'ДПСУ'
    }, {
        name: 'Іванов Іван Іванович',
        age: '01.01.1981',
        service: 'СБУ'
    }, {
        name: 'Петров Петро Петрович',
        age: '01.01.1977',
        service: 'СБУ'
    }, {
        name: 'Іванов Іван Іванович',
        age: '01.01.1981',
        service: 'ЗСУ'
    }, {
        name: 'Петров Петро Петрович',
        age: '01.01.1977',
        service: 'ЗСУ'
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

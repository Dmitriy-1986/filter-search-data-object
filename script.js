'use strict';

let data = [
    {
        name: 'Vasa',
        age: '01.01.1975',
        service: 'ДПСУ'
    }, {
        name: 'Alex',
        age: '01.01.1976',
        service: 'НПУ'
    }, {
        name: 'John',
        age: '01.01.1981',
        service: 'НПУ'
    }, {
        name: 'Petya',
        age: '01.01.1977',
        service: 'ДПСУ'
    }, {
        name: 'Oleg',
        age: '01.01.1981',
        service: 'СБУ'
    }, {
        name: 'Petya',
        age: '01.01.1977',
        service: 'СБУ'
    }, {
        name: 'Inokentiy',
        age: '01.01.1981',
        service: 'ЗСУ'
    }, {
        name: 'Maxim',
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

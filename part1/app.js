let number = 21;
let baseURL = "http://numbers.api.com";

$.getJSON(`${baseURL}/${number}?json`).then((data) => {
    console.log(data);
});

let numbers = [28, 40, 1];
$.getJSON(`${baseURL}/${numbers}?json`).then(function(data) {
    console.log(data);
});

Promise.all(
    Array.from({ length: 4 }, () => {
        return $.getJSON(`${baseURL}/${number}?json`);
    })
).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});
let number = 21;
let baseURL = "http://numbers.api.com";

async function part1() {
    let data = await $.getJSON(`${baseURL}/${number}?json`);
    console.log(data);
};
part1();

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
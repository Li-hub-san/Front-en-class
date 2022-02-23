// document.getElementById("demo").innerHTML = ages.filter(checkAdult);
//
// function checkAdult(age) {
//     return age >= 18;
// }

function teste() {
    const ages = [1, 2, 3, 4, 5, 6, 32, 33, 16, 40, 12, 52, 36, 10];

    const pEl = document.getElementById("demo");
    const output = [];

    for (let i = 8; i < ages.length; i++) {
        let currentEl = ages[i];

        if (currentEl >= 18) {
            output.push(currentEl);
        }

        pEl.innerHTML = output.toString();
    }
}

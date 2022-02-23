function verificarMaiorDeIdade() {
    const ages = [1, 2, 3, 4, 5, 6, 32, 33, 16, 40, 12, 52, 36, 10, "22"];
    const pEl = document.getElementById("demo");
    const output = [];

    for (let i = 0; i < ages.length; i++) {
        let currentEl = ages[i];

        if (checkAdult(currentEl)) {
            output.push(currentEl);
        }

        pEl.innerHTML = output.toString();
    }
}



function checkAdult(age) {
    return age >= 18;
}

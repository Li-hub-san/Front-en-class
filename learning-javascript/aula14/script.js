// let a = 10;
// a = "hello";
// console.log(a);
//
// var b = 5;
// b = 20;
// console.log(b);
//
// let c;
// c = 21;
// console.log("let:" + c);
//
// function doSomething() {
//     const numero1 = 5;
//
//     if (numero1 > 0) {
//         console.log("A minha variavel é maior que 0.")
//     }
// }
//
// console.log(doSomething());

const pTag =document.getElementsByTagName("p");
const buttonTag = document.getElementsByTagName("button");

function removeParagraphTags(){

    for (let i = 0; i < 4; i++) {
        let currentTag = pTag[i];
        console.log(currentTag);

        if (currentTag.innerHTML % 2 !== 0) {
            currentTag.remove();
        }
    }

}
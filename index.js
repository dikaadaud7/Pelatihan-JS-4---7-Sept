// 1. Buatlah perintah di console untuk mengambil elemen-elemen dibawah ini (Kerjakan dan gunakan file yang sudah saya kirim):
//    a. Semua elemen 'p'
//    b. teks 'X'
//    c. Jumlah "square" di dalam div "board"
//    d. teks "A game you know"

//  a. Semua elemen 'p'
let semuaP = document.querySelectorAll("p")
let adaP = []
for(i = 0; i<semuaP.length; i++){
    adaP.push(semuaP[i].textContent)
}
console.log(`Semua p tag : ${adaP}`)

//    b. teks 'X'
let textX = document.getElementById("p1-symbol").textContent
console.log(`${textX}`);

//    c. Jumlah "square" di dalam div "board"
let jumlahSquare = document.getElementsByClassName('square')
let squareCount = [];
for (j=0 ; j<=jumlahSquare.length -1; j++) {
    squareCount.push(jumlahSquare[j])    
}
console.log(squareCount)

//    d. teks "A game you know"
let textAGame = document.querySelector('h2').textContent
console.log (`${textAGame}`)


// 2. Buatlah perintah di console untuk memodifikasi DOM dengan JS! (Kerjakan dan gunakan file yang sudah saya kirim):
//    a. Ubah nama pemain menjadi nama anda dan teman.
//    b. Tukar simbol pemain.
//    c. Ubah subtitle menjadi "A game you know and love"

//    a. Ubah nama pemain menjadi nama anda dan teman.
let changeNamep1 = document.getElementById("p1-name")
changeNamep1.textContent = "Andika Daud"

let changeNamep2 = document.getElementById("p2-name")
changeNamep2.textContent = "Aprisela"

//    b. Tukar simbol pemain.

let changeSymbol1 = document.getElementById("p1-symbol")
let changeSymbol2 = document.getElementById("p2-symbol")

var p1Symbol = changeSymbol1.textContent;
var p2Symbol = changeSymbol2.textContent;

if (p1Symbol === 'X' && p2Symbol === 'O') {
    changeSymbol1.textContent = 'O';
    changeSymbol2.textContent = 'X';
} else if (p1Symbol === 'O' && p2Symbol === 'X') {
    changeSymbol1.textContent = 'X';
    changeSymbol2.textContent = 'O';
}

//    c. Ubah subtitle menjadi "A game you know and love"
let subtitle = document.querySelector('h2').append(' and Love')


// 3. Deklarasikan & tetapkan variabel untuk mengingat:
//    a. Nama kalian
//    b. Gabungan antara usia kalian dan 3 orang teman lainnya.
//    c. Elemen #board dari file yang dikirim.

//    a. Nama kalian

let myName ={
    name : "Andika"
}
console.log(myName.name)

//    b. Gabungan antara usia kalian dan 3 orang teman lainnya.

myName = {
    age : 21
}
const person2 = {
    age : 22
}
const person3 = {
    age : 23
}
const person4 = {
    age : 24
}

console.log(`Gabungan Usia : ${myName.age + person2.age + person3.age + person4.age}`)

//    c. Elemen #board dari file yang dikirim.
let board = document.getElementById('board')


// 4. Tampilkan poin-poin dibawah dari objek newJeans:
//    a. "Bunnies"
//    b. Objeknya kang Haerin
//    c. Album berjudul New Jeans.
//    d. "Minji"

const newJeansMembers = [
    {name: "Kim Minji", nickname: "Minji"},
    {name: "Hanni Pham", nickname: "Hanni"},
    {name: "Danielle Marsh", nickname: "Danielle"},
    {name: "Kang Haerin", nickname: "Haerin"},
    {name: "Lee Hyein", nickname: "Hyein"}
];
const newJeans = {
    albums: ["OMG", "Get Up", "New Jeans"],
    fans: "Bunnies",
    members: newJeansMembers
};

//    a. "Bunnies"

console.log(newJeans["fans"]);

//    b. Objeknya kang Haerin

console.log(newJeansMembers[3])

//    c. Album berjudul New Jeans.

console.log(`${newJeans['albums'][2]}`)

//    d. "Minji"

console.log(`The member of New Jeans named ${newJeansMembers[0]['nickname']} is the best!`);


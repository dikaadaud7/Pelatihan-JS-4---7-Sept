// TODO 1: Deklarasikan dan tetapkan variabel yang menunjuk ke elemen-elemen berikut ini
        // 	a. div "statement"
        // 	b. optionButtons; semua children daripada elemen div "options"
        // 	c. div "explanation"


// 	a. div "statement"
const statement = document.getElementById("statement")

// 	b. optionButtons; semua children daripada elemen div "options"
const optionDiv = document.getElementById("options")
const optionButtonss = optionDiv.querySelectorAll("button")

// 	c. div "explanation"
const explain = document.getElementById("explanation")


// TODO 2: Deklarasikan dan tetapkan variabel:
	    // a. bernama "fact"
	    // b. lalu tetapkan valuenya dengan sebuah objek yang berisi properti statement ("string"), answer (boolean), explanation ("string").
	    // c. statement merupakan suatu pernyataan, answer harus true atau false, explanation merupakan penjelasan dari statement tersebut.

const fact ={
    statement: "Kelinci Merupakan Hewan Mamalia",
    answer: true,
    explain: "Benar, Kelinci merupakan hewan mamalia berkaki 4"
}

// TODO 3: Atur isi teks dari elemen "statement" dengan value dari properti statement dari objek "fact"
statement.innerText = fact.statement

// TODO 4: Deklarasikan fungsi disable dan enable untuk menyetel atau menghapus atribut "disabled" dari elemen tombol tertentu. 
//Fungsi disable harus menyetel atribut "disabled" pada tombol ke nilai "", sedangkan fungsi enable harus menghapus atribut "disabled" dari elemen tombol.
function disable(optionButtonss){
    if (optionButtonss === 'true') {
        optionButtonss.setAttribute("disabled", " ");
    }
}    

function enable(optionButtonss) {
    if (optionButtonss === 'false') {
        optionButtonss.removeAttribute("disabled")
    }
}

// // disable tombol true
// disable(trueButton);

// // enable tombol false
// enable(falseButton);

// TODO 5: Deklarasikan fungsi bernama "isCorrect" yang membandingkan tebakan dengan jawaban. isCorrect(tebakan) harus mengembalikan "true" 
// jika tebakannya sesuai jawaban pada objek "fact"

function isCorrect(tebakan){
    return tebakan === fact.answer
}

const tebakan1 = true;
const tebakan2 = false;

console.log(isCorrect(tebakan1)); // Output: true (karena tebakan1 sesuai dengan jawaban)
console.log(isCorrect(tebakan2)); // Output: false (karena tebakan2 tidak sesuai dengan jawaban)

// TODO 6A: Gunakan perulangan "for" untuk menambahkan .AddEventListener klik ke masing-masing "optionButtons".
// Mendapatkan referensi ke semua tombol opsi
const optionButtons = document.querySelectorAll('button[name="true"], button[name="false"]');
// TODO 6B: Dalam fungsi event handler, tampilkan properti explanation dari objek "fact" dengan mengatur teks pada elemen "explanation".
const explanationElement = document.getElementById('explanation');

for (let i = 0; i < optionButtons.length; i++) {
  optionButtons[i].addEventListener('click', function () {
      
 // TODO 8: Dalam fungsi event handler ->
		            // a. Dapatkan nilai/value dari tombol yang diklik.
		            // b. Gunakan conditional untuk membandingkan tebakan dengan jawaban.
		            // c. Tambahkan pada properti class, "correct" atau "incorrect" sesuai jawaban yang dipilih.  

      // a. Dapatkan nilai/value dari tombol yang diklik
      const tebakan =  optionButtons[i].value === 'true';
      
      // b. Gunakan conditional untuk membandingkan tebakan dengan jawaban
      const jawaban = fact.answer;
      
      // // c. Tambahkan pada properti class, "correct" atau "incorrect" sesuai jawaban yang dipilih
      
      if (tebakan === jawaban) {
        optionButtons[i].classList.add('correct');
      } else {
        optionButtons[i].classList.add('incorrect');
      }

      // TODO 7: Dalam fungsi event handler -> gunakan perulangan untuk menonaktifkan semua tombol opsi. 
       for (let j = 0; j < optionButtons.length; j++) {
           optionButtons[j].setAttribute('disabled', '');
         }

      if(optionButtons[i].value === 'true'){
          explanationElement.textContent = fact.explain;
        }else{
            explanationElement.textContent = "False, Kelinci Merupakan Hewan Mamalia";
        }
    });
    
}
   
var textInput = prompt("Scrivi un testo").split(" "); //rendo array il testo dato in input
console.log(textInput);
var badWordList = prompt("Scrivi le parole che vuoi censurare all'interno del testo.").split(" "); //Do in input le parole da censurare e le metto in un array con split
var totTextWord = textInput.length;
var badWordcount = 0; //contatore per contare le parole da censurare

for (var i = 0; i < textInput.length; i++) {  //con questo ciclo controllo la lista delle parole da censurare e le sostituisco con xxx.
  if(textInput.includes(badWordList[i])){ //controllo se la parola da censurare è contenuta nell'array.
    var  indexOfWord = textInput.indexOf(badWordList[i]) //se la parola è contenuta trovo l'indice e la sostituisco
    textInput[indexOfWord] ="xxx";
    badWordcount++;
  }
}

document.write(textInput + "<br>");
document.write("Parole censurate: " + badWordcount + "su un totale di: " + totTextWord);

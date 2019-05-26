var wrongGuesses = 0;
var wordLength = 0;

window.onload = function () {

   let container = document.getElementById('alphabetDiv')
   for (let i = 0; i < 26; i++) {
      let elem = document.createElement('div');
      let node = document.createTextNode(String.fromCharCode(65 + i));

      elem.setAttribute('class', 'alphabetBtn');
      elem.appendChild(node);
      // document.body.appendChild(elem);
      container.appendChild(elem);
   }

   // create some vertical space between alphabet buttons and word to guess (a not so elegant solution)
   // let elem = document.createElement('div');
   // elem.setAttribute('style', 'height: 50px');
   // document.body.appendChild(elem);
}

$(function () {

   function init() {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function () {
         if (this.readyState == 4 && this.status == 200) {
            wordLength = parseInt(this.responseText);
            console.log(wordLength); //temporarily for testing purpose
            setPlaceholders();
         }
      };
      xmlhttp.open('GET', 'init.php', true);
      xmlhttp.send();
   }

   function setPlaceholders() {

      // Dynamically create placeholders for the letters of the word to be guessed
      // let elem = document.createElement('br');
      // document.body.appendChild(elem);

      let container = document.getElementById('wordDiv');
      for (let i = 1; i <= wordLength; i++) {
         let elem = document.createElement('div');
         elem.setAttribute('class', 'fillWord');
         // document.body.appendChild(elem);
         container.appendChild(elem);
      }

      // dirty fix!
      $('.fillWord').html('.');
      // dirty fix!
   }

   $('.alphabetBtn').click(function () {
      var letterToSearch = this.innerHTML
      var found = false;
      var compareString = '';
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function () {
         if (this.readyState == 4 && this.status == 200) {
            compareString = this.responseText;
            console.log(compareString); //temporarily for testing purpose
            updateScreen();
         }
      };
      xmlhttp.open('GET', 'compare.php?q=' + this.innerHTML, true);
      xmlhttp.send();

      function updateScreen() {
         // Check if the chosen letter is in the word to be guessed. If so, fill it.         
         for (let i = 0; i < wordLength; i++) {
            if (compareString.substr(i, 1) == '1') {
               found = true;
               $('.fillWord').eq(i).html(letterToSearch);
            }
         }

         if (found === true) { // Check if we guessed the whole word correct
            let allCorrect = true;
            for (let i = 0; i < wordLength; i++) {
               if ($('.fillWord').eq(i).html() == '.') {
                  allCorrect = false;
               }
            }
            if (allCorrect === true) {
               alert('Gefeliciteerd! Je hebt gewonnen!');
            }
         } else { // Check if max number of wrong guesses is reached            
            wrongGuesses += 1;
            $('#lblFouteBeurten').html(wrongGuesses);
            if (wrongGuesses === 10) {
               alert('Helaas pindakaas! Je hebt 10 foute beurten gemaakt, dus verloren.');
            }
         }
      }
   });

   init();

});

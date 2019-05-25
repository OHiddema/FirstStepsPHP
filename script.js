window.onload = function () {
   for (let i = 0; i < 26; i++) {
      let elem = document.createElement('div');
      let node = document.createTextNode(String.fromCharCode(65 + i));

      elem.setAttribute('class', 'alphabetBtn');
      elem.appendChild(node);
      document.body.appendChild(elem);
   }
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
      let elem = document.createElement('br');
      document.body.appendChild(elem);

      for (let i = 1; i <= wordLength; i++) {
         let elem = document.createElement('div');
         elem.setAttribute('class', 'fillWord');
         document.body.appendChild(elem);
      }

      // dirty fix!
      $('.fillWord').html('.');
      // dirty fix!
   }

   $('.alphabetBtn').click(function () {
      var compareString = '';
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function () {
         if (this.readyState == 4 && this.status == 200) {
            compareString = this.responseText;
            console.log(compareString); //temporarily for testing purpose
         }
      };
      xmlhttp.open('GET', 'compare.php?q=' + this.innerHTML , true);
      xmlhttp.send();
   });

   init();

});

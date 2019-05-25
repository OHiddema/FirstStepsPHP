# FirstStepsPHP
My first steps with PHP

The goal of this repo is to use PHP to mask the word to be guessed in the game 'galgje' from the user.
Starting point is this repo: https://github.com/OHiddema/galgje

My first thoughts on how to achieve this:

1. When the page loads, a request is sent to the server. The server chooses a random word from an array of words, and returns the length of the word.
2. This return value is used to dynamiccaly create the placeholders on the HTML page for each letter of the word to be guessed.
3. When the user clicks one of the 26 letter buttons (A..Z), a request with this letter is sent to the server.
4. The server checks if the letter is in the word to be guessed and returns a string with the positions of this letter.
Examples:
'001010': the letter is on the 3rd and 5th position.
'0000000': the letter is not in the word.

The rest of the logic (counting the number of wrong guesses, check if the whole word is guessed) for now still remains on the front-end, in javascript.

__________________________________________________________________________________________________________
Implementation:

Step 1:
 - [x] On load, server chooses random word and returns its length.

Step 2:
 - [x] Dynamically create the page, based on the length returned from the server.
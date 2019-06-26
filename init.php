<?php

   // Choose a random word from $wordArray
   // Put this word in the sessionvariable 'wordToGuess'
   // Return the length of the word to guess

   session_start();
   $wordArray = array ('ab', 'abc', 'abcd', 'abcde', 'abcdef', 'abcdefg', 'abcdefgh', 'abcdefghi', 'abcdefghij');
   $rndIndex = rand(0, count($wordArray)-1);
   $wordToGuess = $wordArray[$rndIndex];
   $_SESSION['wordToGuess'] = $wordToGuess;
   echo strlen($wordToGuess);
?>
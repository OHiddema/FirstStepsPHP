<?php
   session_start();

   $letter = $_REQUEST["q"];
   $letter = strtolower($letter);

   // Check if the chosen letter is in the word to be guessed
   $word = $_SESSION['wordToGuess'];
   $returnString = '';
   for ($i = 0; $i < strlen($word); $i++) {
       $returnString .= (substr($word, $i, 1) == $letter) ? '1' : '0';
   }
   echo $returnString;
?>
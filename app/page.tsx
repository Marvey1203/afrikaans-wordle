'use client'
import { useState } from 'react';
import StartScreen from './comps/startScreen';
import Board from './comps/Board';

export default function Home() {
  const words: (string | undefined)[] = [
    "aalwé", "aanb.", "aand.", "aanh.", "aanhê", "aank.", "aanm.", "aant.", "aanv.", "aanw.", "aarde", "adder", "adjk.", "adjt.", "adml.", "adres",
    "advt.", "advv.", "aflas", "aflei", "agter", "aitsa", "Akad.", "akker", "albei", "album", "algar", "alles", "almal", "altyd", "Amer.", "amper", "ander",
    "angel", "Angl.", "anker", "anode", "anon.", "appel", "appl.", "April", "Arab.", "Aram.", "argon", "Arnth", "Asmaa", "asook", "asst.", "astr.", "ateïs", 
    "atome", "atoom", "attr.", "Augus", "Aulia", "AVBOB", "awend", "añkom", "B.Ed.", "b.nw.", "B.Sc.", "baaie", "babas", "Bahaa", "balie", "balle",
    "basis", "batik", "batt.", "beaam", "bedel", "beeld", "befok", "begin", "behou", "beide", "beken", "berge", "berig", "berin", "besem", "besit", "beste", "beter",
    "beton", "betr.", "beuel", "bevat", "bewer", "bewys", "binne", "blaar", "blare", "blits", "bloed", "bloei", "bloet", "blyer", "bláde", "boarm", "boeie", "boeke",
    "boere", "boeta", "bôgom", "bokas", "boter", "braai", "braak", "braam", "breed", "breek", "breuk", "bring", "brode", "broek", "broer", "brood", "broom", "broot",
    "bruid", "bruin", "bróde", "buike", "buite", "bulle", "burge", "Bybel", "bydra", "bylae", "bynes", "béter", "C", "Chant", "china", "China", "D", "D.Ed.", "D.Sc.",
    "dagga", "dagsê", "Deens", "deken", "delta", "denne", "derde", "Deut.", "diens", "diere", "Diets", "Diits", "dikw.", "Dimli", "diode", "djinn", 
    "drama", "dreig", "drink", "dronk", "droog", "druif", "Duits", "duvet", "dwerg", "dwing", , "eende", "egter", "eiens", "eiers", "einde", "ekvv.", "eland", "elfde",
    "elite", "enige", "enkel", "erken", "Eseg.", "Ester", "ester", "etim.", "fabel", "fasie", "fauna", "faune", "Febr.", "fiets", "filet", "fliek", "flier", "fliir",
    "flora", "frank", "Frans", "frase", "Frañs", "frees", "freug", "Fries"
  ];
  
  // Create an empty list to store unique words
  var uniqueWords: string[] = [];

  // Local storage for the users gueses
  window.localStorage.setItem("Tries", JSON.stringify(0))
  // Local storage for words not used
  window.localStorage.setItem("wordsNotUsed", JSON.stringify([
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'          
]))
  
  // Loop through each word in the input list
  for (var i = 0; i < words.length; i++) {
    // Check if the word is not undefined and has a length of 5
    if (words[i] && !words[i]?.includes(".") && words[i]?.length === 5) {
      uniqueWords.push(words[i] ? words[i]!.toLowerCase() : '' );
    }
  }
    const [gameStarted, setGameStarted] = useState(false);
    const [gameWon, setGameWon] = useState(false); // New state for tracking win status
    const [gameLost, setGameLost] = useState(false); // New state for tracking lost status
    const currentWord = uniqueWords[Math.floor(Math.random() * uniqueWords.length)]
    const handleGameWin = () => {
      setGameWon(true);
      setTimeout(() => {
        setGameStarted(false);
        setGameWon(false);
      }, 2000); 
    };    
    const handleGameLost = () => {
      setGameLost(true);
      setTimeout(() => {
        setGameStarted(false);
        setGameLost(false);
      }, 3000); 
    };
  
    return (
      <div className="flex flex-col h-screen justify-center items-center">
        {!gameStarted && !gameWon && !gameLost && <StartScreen setGameStarted={setGameStarted} />}
        {(gameStarted || gameWon || gameLost) && (
          <div className=''>
            <Board currentWord={currentWord} onGameWin={handleGameWin} onGameLost={handleGameLost} />
          </div>
        )}
      </div>
    );
  }
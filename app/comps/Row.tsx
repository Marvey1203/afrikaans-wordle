import React, { ChangeEvent, useState, useEffect, useRef, KeyboardEvent } from "react";
import Modal from "./Modal";

interface RowProps {
  currentWord: string;
  onGameWin: Function;
  onGameLoss: Function; 
  callBack: Function;
  uniqueWords: string[]
}

const Row: React.FC<RowProps> = ({ currentWord, onGameWin, onGameLoss, callBack, uniqueWords }) => {
  const [inputs, setInputs] = useState<string[]>(["", "", "", "", ""]);
  const [bgColors, setBgColors] = useState<string[]>(["bg-black", "bg-black", "bg-black", "bg-black", "bg-black"]);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([null, null, null, null, null]);
  const [lost, setLost] = useState(false)
  const [won, setWon] = useState(false)
  let tries = JSON.parse(localStorage.getItem('Tries')!)
  let wordsNotUsedArray = JSON.parse(localStorage.getItem("wordsNotUsed")!)
  const checkIfWordInWordsNotUsed = (wordInputArray: string[], checkArray: string[]) => {
    for (let char of wordInputArray) {
      let index = checkArray.indexOf(char);
      if (index !== -1) {
        checkArray.splice(index, 1);
        console.log(`${char} removed from wordsNotUsedArray`);
        localStorage.setItem("wordsNotUsed", JSON.stringify(checkArray));
        callBack(checkArray)
      }
    }
  };
  const checkIfWordExists = (wordsList: string[], theCurrentWord: string) => {
    if (wordsList.includes(theCurrentWord)){
      return true
    }else return false
  }
  
  // useEffect(() => {
  //   // Focus on the first input of the first row when the component mounts
  //   inputRefs.current[0]?.focus();
  // }, []);
  useEffect(() => {
    if (tries === 6) {
      setLost(true)
      setTimeout(() => {
        setLost(false)
        onGameLoss();
      }, 2000);
       // Call the callback for game loss
      
    }
  }, [tries]);
  

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value.toLowerCase();
    setInputs(newInputs);
   
    if (index < inputs.length - 1 && event.target.value !== "") {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === "Enter") {
      if (!checkIfWordExists(uniqueWords, inputs.join(""))){
        return
      }
      checkIfWordInWordsNotUsed(inputs, wordsNotUsedArray)
      // Check the inputs when Enter is pressed
      checkInputs(event);

      // Move focus to the first input of the next row
      const nextRow = inputRefs.current.findIndex((ref, i) => i > index && inputs[i] === "");
      if (nextRow !== -1) {
        inputRefs.current[nextRow]?.focus();
      } else {
        // If no next row found, move to the first input of the current row
        inputRefs.current[index + 1]?.focus();
      }
    } else if (event.key === "Backspace") {
      // Handle backspace key press
      if (index > 0 && inputs[index] === "" && inputs[index - 1] !== "") {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };



  const checkInputs = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (!checkIfWordExists(uniqueWords, inputs.join(""))){
      alert(`${inputs.join("")} is nie 'n woord nie`)
      setTimeout(() => {
      }, 1000);
      return

    }

    // Compare the guessed word with the current word
    const newBgColors = currentWord.split("").map((char, index) => {

      if (char === inputs[index]) {
        return 'bg-green-400';
      } else if (currentWord.includes(inputs[index])) {
        return 'bg-yellow-400';
      } else {
        return 'bg-black';
      }
      

    });

    setBgColors(newBgColors);
    // Check if the guessed word is correct
    if (currentWord === inputs.join("")) {
      // Consider using a styled notification or modal instead of alert
      setWon(true)
      setTimeout(() => {
        setWon(false)
        onGameWin();
      }, 2000);

    } else {
      // Increment the value stored in the localStorage
      localStorage.setItem( "Tries", JSON.stringify(JSON.parse(localStorage.getItem('Tries')!) + 1))
    }


  };

    

  return (
    <>
    {won && <Modal heading={`Congratulations! You guessed the word: ${JSON.stringify(currentWord)}`} />}
    {lost && <Modal heading={`Oh no! You lost the game. The word was: ${JSON.stringify(currentWord)}`} />}

    <div className="mx-auto my-auto">


      <form onSubmit={(e) => e.preventDefault()} className="flex flex-row justify-center items-center">
        {inputs.map((input, index) => (
          <div key={index} className="relative">
            <input
              ref={(el) => (inputRefs.current[index] = el)}
              key={index}
              type="text"
              value={input}
              onChange={(event) => handleInputChange(event, index)}
              onKeyDown={(event) => handleKeyPress(event, index)}
              maxLength={1}
              className={`p-2 font-bold text-xl w-12 h-12 md:w-14 md:h-14 md:text-4xl border border-white text-white ${bgColors[index]}`}
              aria-label={`Letter ${index + 1}`}
            />
          </div>
        ))}
        <button onClick={checkInputs}>
        </button>
      </form>
    </div>
    </>
  );
};

export default Row;

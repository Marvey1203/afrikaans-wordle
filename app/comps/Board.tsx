import { useState } from "react";
import Row from "./Row";
import WordsNotUsedDislay from "./WordsNotUsedDisplay";
interface RowProps {
    currentWord: string
    onGameWin: Function,
    onGameLost: Function,
    uniqueWords: string[]
}
const Board: React.FC<RowProps> = ({
    currentWord,
    onGameWin,
    onGameLost,
    uniqueWords
}) => {
    const [wordsNotUsedArray, setwordsNotUsedArray] = useState(JSON.parse(localStorage.getItem("wordsNotUsed")!))
    const callBack = (e: string[]) => {
        setwordsNotUsedArray(e)
    }


    return ( 
        <>
        
        <div className="w-full py-10">
            <Row onGameWin={onGameWin} currentWord={currentWord} onGameLoss={onGameLost} callBack={callBack} uniqueWords={uniqueWords}/>
            <Row onGameWin={onGameWin} currentWord={currentWord} onGameLoss={onGameLost} callBack={callBack} uniqueWords={uniqueWords}/>
            <Row onGameWin={onGameWin} currentWord={currentWord} onGameLoss={onGameLost} callBack={callBack} uniqueWords={uniqueWords}/>
            <Row onGameWin={onGameWin} currentWord={currentWord} onGameLoss={onGameLost} callBack={callBack} uniqueWords={uniqueWords}/>
            <Row onGameWin={onGameWin} currentWord={currentWord} onGameLoss={onGameLost} callBack={callBack} uniqueWords={uniqueWords}/>
            <Row onGameWin={onGameWin} currentWord={currentWord} onGameLoss={onGameLost} callBack={callBack} uniqueWords={uniqueWords}/>
        </div>
        <WordsNotUsedDislay wordsNotUsedArray={wordsNotUsedArray}/>
        </>
        
     );
}
 
export default Board;
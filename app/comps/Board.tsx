import { useState } from "react";
import Row from "./Row";
import WordsNotUsedDislay from "./WordsNotUsedDisplay";
interface RowProps {
    currentWord: string
    onGameWin: Function,
    onGameLost: Function
}
const Board: React.FC<RowProps> = ({
    currentWord,
    onGameWin,
    onGameLost
}) => {
    const [wordsNotUsedArray, setwordsNotUsedArray] = useState(JSON.parse(localStorage.getItem("wordsNotUsed")!))
    const callBack = (e: string[]) => {
        setwordsNotUsedArray(e)
    }


    return ( 
        <>
        
        <div className="w-full py-10">
            <Row onGameWin={onGameWin} currentWord={currentWord} onGameLoss={onGameLost} callBack={callBack}/>
            <Row onGameWin={onGameWin} currentWord={currentWord} onGameLoss={onGameLost} callBack={callBack}/>
            <Row onGameWin={onGameWin} currentWord={currentWord} onGameLoss={onGameLost} callBack={callBack}/>
            <Row onGameWin={onGameWin} currentWord={currentWord} onGameLoss={onGameLost} callBack={callBack}/>
            <Row onGameWin={onGameWin} currentWord={currentWord} onGameLoss={onGameLost} callBack={callBack}/>
            <Row onGameWin={onGameWin} currentWord={currentWord} onGameLoss={onGameLost} callBack={callBack}/>
        </div>
        <WordsNotUsedDislay wordsNotUsedArray={wordsNotUsedArray}/>
        </>
        
     );
}
 
export default Board;
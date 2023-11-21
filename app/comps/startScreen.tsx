interface startScreenProps {
    setGameStarted: any
}
const StartScreen: React.FC<startScreenProps> = ({
    setGameStarted
}) => {
    return ( 
        <div className="flex flex-col gap-5 md:gap-8 justify-center items-center py-10 h-screen">
            <h1 className="font-bold text-xl underline md:text-4xl">Wordle in Afrikaans</h1>
            <p className="text-lg md:text-2xl">Jy kry 6 kanse om 'n 5 letter woord te raai</p>
            <button className="py-2 px-8 bg-green-600 text-bold rounded-2xl shadow-2xl text-lg md:text-3xl md:py-3 md:px-10 text-white" onClick={() => setGameStarted(true)}>Speel</button>
        </div>
     );
}
 
export default StartScreen;
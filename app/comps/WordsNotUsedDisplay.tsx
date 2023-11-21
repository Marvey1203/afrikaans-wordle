
interface props {
    wordsNotUsedArray: string[]
}
const WordsNotUsedDislay: React.FC<props> = ({
    wordsNotUsedArray
}) => {
    console.log(wordsNotUsedArray)
    
  return ( 
    <div className='flex flex-col gap-5 justify-center items-center'>
      <h2 className='font-semibold text-lg md:text-xl text-black'>Die letters wat jy nog nie gebruik het nie</h2>
      <div className='flex flex-row justify-center items-center w-4/5 mx-auto'>
        {wordsNotUsedArray.map((char: string, index: number) => (
          <p className='text-sm md:text-md lg:text-lg xl:text-xl mx-[3px]' key={index}>{char}</p>
        ))}
      </div>
    </div>
  );
}

export default WordsNotUsedDislay;

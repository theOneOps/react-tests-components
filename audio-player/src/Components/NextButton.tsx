import nexticon from '../assets/next-icon.svg'

interface nextButtonProps
{
  nextAudio:()=>void
}

export default function NextButton({nextAudio}:nextButtonProps) {

  return (
    <button
    onClick={nextAudio}
     className='bg-slate-600 flex justify-center items-center rounded-3xl p-2'>
  <img className='w-4 h-4' src={nexticon} alt="" />
  </button>
  )
}
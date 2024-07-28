import previcon from '../assets/prev-icon.svg'

interface prevButtonProps
{
  prevAudio:()=>void
}

export default function PreviousButton({prevAudio}:prevButtonProps) {
  return (
    <button
    onClick={prevAudio}
     className='bg-slate-600 flex justify-center items-center rounded-3xl p-2'>
    <img className='block w-4 h-4' src={previcon} alt="" />
  </button>
  )
}
import playicon from '../assets/play-icon.svg'
import pauseicon from '../assets/pause-icon.svg'


interface PlayButtonProps
{
  play:boolean,
  changePlay:()=>void
}
export default function PlayButton({play, changePlay}:PlayButtonProps) {

  
  return (
    <button
    onClick={changePlay}
     className='bg-slate-100 flex justify-center items-center p-2 rounded-3xl'>
  <img className='w-8 h-8' src={play ? playicon  : pauseicon} alt="" />
  </button>
  )
}
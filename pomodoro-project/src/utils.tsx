export default function getFormatedChrono(time:number)
{
    const minute : string = (Math.trunc(time/60) > 9 ? `${Math.trunc(time/60)}`: `0${Math.trunc(time/60)}`)
    const second : string = ((time % 60) > 9 ? `${time % 60}`: `0${time % 60}`)

    return `${minute}:${second}`

}
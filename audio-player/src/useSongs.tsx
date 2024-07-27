import { useEffect, useState } from "react"

export function useSongs()
{
    const [error, setError] = useState<string>("")
    const[songs, setSongs] = useState<object>({})

    useEffect(()=>{
        const play = async()=>{
            try
            {
                const response = await fetch("../public/data/playlist.json")
                const data = await response.json()
                if (!data.ok) throw new Error("error in resource finding !")
                setSongs(data)
            }catch(e)
            {
                if (e instanceof Error)
                    setError(e.message)
            }
        }
        play()
    },[])

    return {error, songs}
}
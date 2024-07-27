import { useState, useEffect } from "react";



export function fstLoadData({query, pageIndex}) {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>("")
  const [images, setImages] = useState<object[]>([])


  useEffect(()=>{
    
    async function loadData()
    {
      try{
        const response = await fetch(`https://api.unsplash.com/search/photos?page=${pageIndex}&query=${query}&client_id=${import.meta.env.VITE_APP_ACCESS_KEY}`)
        if (!response.ok)
          throw new Error("problem with the variable in the url")

        const data = await response.json()
        console.log(data.results)
        setImages([...new Set([...images, ...data.results])])
        setLoading(false)
      }
      catch(e)
      {
        if (e instanceof Error)
            setError(e.message)
      }
    }

    loadData()
  
  }, [pageIndex])


  useEffect(()=>{
    async function loadData()
    {
      try{
        const response = await fetch(`https://api.unsplash.com/search/photos?page=${pageIndex}&query=${query}&client_id=${import.meta.env.VITE_APP_ACCESS_KEY}`)
        if (!response.ok)
          throw new Error("problem with the variable in the url")

        const data = await response.json()
        console.log(data.results)
        setImages([...new Set([...data.results])])
        setLoading(false)
      }
      catch(e)
      {
        if (e instanceof Error)
            setError(e.message)
      }
    }

    loadData()
  
  }, [query])

    return {loading, error, images}
  }

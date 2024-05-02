import { fstLoadData } from "./useGetData";
import { useState, useRef, useCallback } from "react";
import spinner from "./assets/spinner.gif";


function App() {


  const [pageIndex, setPageIndex] = useState<number>(0)
  const [query, setQuery] = useState<string>("dog")


  const {loading, error, images} = fstLoadData({query, pageIndex})

  const observer = useRef<IntersectionObserver>()

  const lastImage = useCallback((img:Element)=>{
    if (loading) return;

    if (observer.current) observer.current?.disconnect()
    observer.current = new IntersectionObserver(entries=>{

      if (entries[0].isIntersecting)
        {
          console.log("dernière image")
          setPageIndex(pageIndex => pageIndex + 1)
        }

    })
    if (img) observer.current.observe(img)
  }, [loading])

  function fetchQuerySearch(e:React.ChangeEvent<HTMLInputElement>){
    if (e.target.value == "")
      setQuery("random")
    else
      setQuery(e.target.value)
    setPageIndex(0)
  }



  let content : JSX.Element;

  if (loading)
    content = <img className="w-full h-full object-cover" src={spinner} alt="spinner"/>
  else if (error && error.length > 0)
    content = <p>{error}</p>
  else {
    content = images.map((img, idx) => (
      <div key={idx}>
        {images.length === idx + 1 ? (
          <img ref={lastImage} className="w-full h-full object-cover" src={img.urls.raw} alt={`Image ${idx + 1}`} />
        ) : (
          <img className="w-full h-full object-cover" src={img.urls.raw} alt={`Image ${idx + 1}`} />
        )}
      </div>
    ));
  }

  return (
    <div className="container mx-auto my-4 space-y-4 px-16 max-w-[1200px]">
      <div>
        <h1 className="text-2xl md:text-4xl">Unsplash Clone</h1>
        <p>Look for images ...</p>
      </div>

      <div>
        <input
        value={query}
          onChange={e => fetchQuerySearch(e)}
          placeholder="Look for something ..."
          className="w-full px-3 py-2 rounded-sm md:rounded-md border border-gray-400 outline-none"
          type="text"
        />
      </div>

      <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
        {content}
      </div>
    </div>
  );
}

export default App;

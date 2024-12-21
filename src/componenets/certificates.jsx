    import { useEffect } from "react"
    import { useState } from "react"
    import '../styles/education-style.css'

    export default function Certificates({children: slides, autoSlide=false, autoSlideInterval = 5000}){
        
        const [curr,setCurr] = useState(0)
        const prev = () =>
            setCurr((curr) => (curr === 0 ? slides[0].length - 1 : curr - 1))
        const next = () =>
            setCurr((curr) => (curr === slides[0].length - 1 ? 0 : curr + 1))
        
        useEffect(()=>{
            if (!autoSlide) return
            const slideInterval = setInterval(next, autoSlideInterval)
            return()=> clearInterval(slideInterval)
        },[])

        return(
            <div className="overflow-hidden relative slide  ">
                <div className="flex  transition-transform ease-out duration-500 "  style={{ transform: `translateX(-${curr * 100}%)` }}>
                    {slides[0]}
                </div>
                <div className="absolute inset-0 flex items-center
                justify-between p-4">
                    <button 
                        onClick={prev} 
                        className="p-1 rounded-full shadow bg-gray-400  text-gray-100 font-bold hover:bg-white">
                        {"<"}
                    </button>
                    <button 
                        onClick={next} 
                        className="p-1 rounded-full shadow bg-gray-400 text-gray-100 font-bold hover:bg-white">
                        {">"}
                    </button>
                </div>
                <div className="absolute bottom-4 right-0 left-0">
                    <div className="flex items-center justify-center gap-2">
                        {slides[0].map((_,i)=>(
                        <div key={i}
                        className={`
                            translation-all w-3 h-3 bg-gray-800 rounded-full
                            ${curr===i? "p-2": "bg-opacity-50"}`}
                        ></div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
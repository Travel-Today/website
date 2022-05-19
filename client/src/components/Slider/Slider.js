import {Children, useState, useEffect} from 'react'

function Slider({children, duration, leftArrow, rightArrow, overlay, indicator=false, auto=false, className}) {
  const [activeSlide, setActiveSlide] = useState(0)
    
    const updateSlide = (newIndex) => {
        if (newIndex < 0){
            newIndex = Children.count(children) - 1
        }else if(newIndex >=Children.count(children)){
            newIndex = 0
        }

        setActiveSlide(newIndex)
    }

    useEffect(()=>{
        if(auto){
        const interval = setInterval(()=>{
            updateSlide(activeSlide + 1) 
        }, duration * 1000)

        return () => {
            if(interval){
                clearInterval(interval)
            }
        }
    }        
    })

  return (
    <div className={`h-full relative overflow-hidden ${className}`}>

        <div className="h-full whitespace-nowrap tranform duration-1000" style={{transform:`translateX(-${activeSlide * 100}%)`}}>
            {/* {Children.map(children, (child, index) =>{
                return cloneElement(child)
            })} */}
            {children}
        </div>

        {overlay && (<div className="absolute top-0 left-0 h-full w-full">{overlay}</div>)}
            
        <button onClick={() => {updateSlide(activeSlide - 1)}} className="absolute top-[50%] left-8  transform -translate-y-[50%] -translate-x-4 text-white text-3xl">
            {leftArrow}
        </button>
        <button onClick={() => {updateSlide(activeSlide + 1)}} className="absolute top-[50%] right-8 transform -translate-y-[50%] translate-x-4 text-white text-3xl">
            {rightArrow}
        </button>

        {indicator && (
            <div className="absolute w-full bottom-0 mb-2  left-0 flex justify-center flex-wrap">
            {Children.map(children, (child, index)=>{
                return(
                    <button className={`mx-2 my-1 px-[10px] py-[5px] text-[10px] font-bold rounded-full ${activeSlide === index ? "bg-white text-black" : "border border-white text-white"}`} onClick={() => {updateSlide(index)}}>
                        {index+1}
                    </button>
                )
            })}
            </div>
        )}
  
    </div>
  )
}

export default Slider
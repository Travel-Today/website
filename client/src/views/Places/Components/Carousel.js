import {useRef, useEffect, useState} from "react"
import {motion} from 'framer-motion'
import {ImageList, categoryTag} from '../../../static'
import {AiOutlineHeart} from 'react-icons/ai'
import {BiCommentDots, BiBookmarkPlus} from 'react-icons/bi'

function Carousel(){
    const [width, setWidth] = useState(0)
    const carousel = useRef()
    
    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    return(
        <div ref={carousel} className="cursor-grab overflow-hidden pt-8">
                <motion.div 
                drag="x" 
                dragConstraints={{right:0, left: -width}} 
                className=" flex ">
                    {ImageList.map(image => {
                        return(
                           <ImageCard image={image} key={image.id}/>
                        )
                    })}
                </motion.div>
            </div>
    )
}


const ImageCard = ({image}) => {

    const boxVarient = {
        hidden: {
            y:0,
            opacity:1
        },
        visible: {
            y:0,
            opacity:1,
            background:"linear-gradient(to top right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.01))",
            transition:{
                type:"spring",
                duration:2
            }
        }
    }

    const childVarient = {
        hidden: {
            y:5,
            opacity:0
        },
        visible: {
            y:0,
            opacity:1
        }
    }

    return (
      <motion.div className=" relative min-h-[23rem] lg:min-h-[30rem] min-w-[300px] md:min-w-[30rem] mx-2">
      <motion.img whileHover={{
          scale: 1.2
      }} src={image.url} alt="" className="w-full h-full object-cover rounded-xl"/>
      
      <div className="absolute top-0 left-0 w-full h-full rounded-xl bg-gradient-to-tr from-black/[0.6] to-black/[0.3]">    
      <motion.div
      variants={boxVarient}
      initial="hidden"
      whileHover="visible"
      className="flex flex-col justify-between w-full h-full px-2 pt-4 rounded-xl lg:p-[20px]">
          <motion.div 
          variants={childVarient}
          className="flex items-center justify-between">
              <div className="flex">
              <motion.button 
              whileHover={{
                  color:'rgb(185, 28, 28)'
              }}
              className="px-4 py-2 bg-white mx-2 flex rounded-2xl items-center justify-center">
                  <AiOutlineHeart className="text-gray-700 text-sm md:text-xl hover:text-red-700 "/>
                  <p className="px-2 text-sm md:text-normal font-semibold">1.2K</p>
              </motion.button>
              <motion.button 
              whileHover={{
                  color:'rgb(29, 78, 216)'
              }}
              className="px-4 py-2 bg-white mx-2 flex items-center justify-center rounded-2xl">
                  <BiCommentDots className="text-gray-700 text-sm md:text-xl hover:text-blue-700"/>
                  <p className="px-2 text-sm md:text-normal font-semibold">1.2K</p>
              </motion.button>
              </div>
              <motion.button 
              className="p-2 mr-2 lg:mr-0 bg-white rounded-full">
                  <BiBookmarkPlus  className="text-gray-700 text-sm md:text-xl hover:text-green-700"/>
              </motion.button>
          </motion.div>
          <div className="mb-6 lg:mb-4 mx-2">
            <div className="w-full flex flex-wrap justify-start mb-4">
                {image.categories.map(category => (
                    <Tag category={categoryTag[category]} key={category}/>
                    ))}
            </div>
              <a href="/"><p className="text-slate-300 text-3xl mb-2 mr-10 hover:text-white">{image.title}</p></a>
              <p className="text-slate-300 text-sm">Janith pm &middot; 20/01/2022</p>
            </div>
          
      </motion.div>
      </div>
  </motion.div>
    )
  }
  
  const Tag = ({category})=>(
      <button className={`${category.color} text-xs bg-white/[0.8] px-[10px] py-[5px] font-semibold uppercase rounded-2xl mb-2 mr-1`}>{category.title}</button>
  )
  



export default Carousel

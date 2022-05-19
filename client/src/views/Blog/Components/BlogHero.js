import {useState, useEffect} from 'react'
import {Slider, Slide} from '../../../components/Slider'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import {ImageList} from '../../../static'

function BlogHero() {

    const[windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
       setWindowWidth(window.innerWidth)
    }, [])

    return (
        <>
            {(windowWidth < 768) ? <SmallHero/> : <LargeHero/>}
            {/* <div className="my-20 h-[70vh] w-full grid gird-cols-1 md:grid-cols-3 gap-8">
                <div className="h-full w-full bg-purple-400 md:col-span-2"></div>
                <div className="h-full w-full bg-yellow-400"></div>
            </div> */}
        </>
    )
}

const SmallHero = () => (
    <Slider 
    duration={2}
    leftArrow={<BsChevronCompactLeft  className="text-white text-4xl"/>}
    rightArrow={<BsChevronCompactRight  className="text-white text-4xl"/>}
    // indicator={true}
    auto={true}
    className="h-[500px]"
    >

        {ImageList.map(item => {
            return(
                <Slide>
                    <SlideCard item={item} height="500px"/>
                </Slide>

            )
        })}

    </Slider>
)

const LargeHero = () => (

    <div className="grid grid-cols-2 gap-4 mt-10">
        
        <Slider
        leftArrow={<BsChevronCompactLeft  className="text-white text-4xl"/>}
        rightArrow={<BsChevronCompactRight  className="text-white text-4xl"/>}
        indicator={true}
        auto={true}
        className="h-[616px]"
        duration={7}
        >

        {ImageList.map(item => {
            return(
                <Slide>
                    <SlideCard item={item} height="616px"/>
                </Slide>

            )
        })}
        </Slider>

        <div className="grid grid-rows-2 gap-4">
            
            <Slider
            duration={5}
            leftArrow={<BsChevronCompactLeft  className="text-white text-4xl"/>}
            rightArrow={<BsChevronCompactRight  className="text-white text-4xl"/>}
            overlay={<Ovr/>}
            indicator={true}
            auto={true}
            className="h-[300px]"

            >
            {ImageList.map(item => {
            return(
                <Slide>
                    <SlideCard item={item} height="300px"/>
                </Slide>

            )
            })}
            </Slider>

            <Slider
            duration={3}
            leftArrow={<BsChevronCompactLeft  className="text-white text-4xl"/>}
            rightArrow={<BsChevronCompactRight  className="text-white text-4xl"/>}
            auto={true}
            className="h-[300px]"
            >
            {ImageList.map(item => {
            return(
                <Slide>
                    <SlideCard item={item} height="300px"/>
                </Slide>

            )
            })}    
            </Slider>

        </div>

    </div>
)

const SlideCard = ({item, height}) => {
    return(
        <div className={`relative w-full h-[${height}] flex justify-center items-center`}>
        <img src={item.url} alt="" className="w-full h-full object-cover border-2"/>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-black/[0.8] to-black/[0.1]">
            <div className="h-full flex flex-col justify-end p-10 pb-20">
                <p className="text-4xl text-center lg:text-left font-semibold mb-2">{item.title}</p>
                <p className="text-lg text-center lg:text-left slate-600 mb-2">Ad amet anim velit id duis labore.</p>
                <div className="flex items-center justify-center lg:justify-start mt-2">
                    <p>janithpm</p><p>&middot;</p> <p>20/01/2022</p>
                </div>
            </div>
        </div>
    </div> 
    )
}

const Ovr = () => {
    return(
        <div className="w-full h-full bg-black/[0.6] flex items-start justify-center hover:bg-slate-700">
            <h1 className="text-3xl text-white mt-20">overlay component</h1>
        </div>
    )
}

export default BlogHero
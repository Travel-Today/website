import {motion} from 'framer-motion'
import {AiOutlineHeart} from 'react-icons/ai'
import {BiCommentDots, BiBookmarkPlus} from 'react-icons/bi'
import {ImageList, categoryTag} from '../../../static'

function PopularArticles() {
  return (
    <div className="w-full my-2 lg:my-8">
      <p className="text-4xl text-center lg:text-left font-semibold mb-10">Popular Articles 🌟</p>
      <div>
        {ImageList.map(item => {
          return(
            <TitleCard item={item}/>
          )
        })}
      </div>
    </div>
  )
}

const Tag = ({category})=>(
  <button className={`${category.color} text-xs bg-white px-[10px] py-[5px] font-semibold uppercase rounded-2xl mb-2 mr-1 border-2`}>{category.title}</button>
)


const TitleCard = ({item}) => {
  return(
    <div className="w-full lg:grid lg:grid-cols-3 my-4 border-2 rounded-xl">
      
      <div className="w-full flex items-center justify-center">
          <div className="lg:h-52 lg:w-52 my-0 lg:my-4">
            <img src={item.url} alt="" className="w-full h-full object-cover rounded-xl"/>
          </div>        
      </div>
      
      
      <div className="w-full lg:col-span-2 flex flex-col justify-center lg:justify-between p-6 ">
            
            <div className="w-full flex justify-center flex-wrap lg:justify-start mb-1">
                {item.categories.map(category => (
                    <Tag category={categoryTag[category]} key={category}/>
                ))}
            </div>

            <div className="">
              <p className="text-3xl text-center lg:text-left font-semibold mb-2">{item.title}</p>
              <p className="text-lg text-center lg:text-left slate-600 mb-2">Ad amet anim velit id duis labore quis velit mollit tempor qui consequat aliquip.id duis labore quis velit mollit tempor qui consequat aliquip.</p>
              <div className="flex items-center justify-center lg:justify-start mt-4">
                  <p>janithpm</p><p>&middot;</p> <p>20/01/2022</p>
              </div>
            </div>
              
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center justify-between">
                <motion.button 
                // whileHover={{
                //   boxShadow: '1px 1px 3px rgb(150, 150, 150)',
                // }}
                className="flex items-center justify-center border-2 px-4 py-1 mr-4 rounded-2xl">
                  <AiOutlineHeart className="text-xl mr-2"/>
                  <p className="">1.2K</p>
                </motion.button>
                <motion.button 
                // whileHover={{
                //   boxShadow: '1px 1px 3px rgb(150, 150, 150)',
                // }}
                className="flex items-center justify-center border-2 px-4 py-1 mr-4 rounded-2xl">
                  <BiCommentDots className="text-xl mr-2"/>
                  <p className="">1.2K</p>
                </motion.button>
              </div>
              <motion.button
              // whileHover={{
              //   boxShadow: '1px 1px 3px rgb(150, 150, 150)',
              // }}
              className="border-2 p-2 rounded-full"
              >
                <BiBookmarkPlus className="text-xl"/>
              </motion.button>
            </div>

      </div>
      
    </div>
  )
}


export default PopularArticles
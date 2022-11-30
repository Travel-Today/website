import BaseContainer from '../../components/BaseContainer'
import {useAuth0,withAuthenticationRequired } from '@auth0/auth0-react'
import BlogHero from './Components/BlogHero'
import PopularArticles from './Components/PopularArticles'
import RecentArticleSidebar from './Components/RecentArticleSidebar'

// import PopularPosts from './PopularPosts'
// import SearchBar from '../../components/SearchBar'
// import OptInFormTile from '../../components/OptInFormTile'
// import RecentPostSidebar from "./RecentPostSidebar"
// import CategoryTile from "./CategoryTile"
// import {Navigate} from 'react-router-dom'

function Blog() {
  return (
    <>
      <BaseContainer>
        <BlogHero/>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-x-4 mt-10">
          <div className="w-full h-full md:col-span-2">
            <PopularArticles/>
          </div>
          <div className="w-full h-full">
            <RecentArticleSidebar/>
          </div>
        </div>
      </BaseContainer>
    </>
  )
}

// export default withAuthenticationRequired(Blog, {
//   // Show a message while the user waits to be redirected to the login page.
//   onRedirecting: () => <div>Redirecting you to the login page...</div>,
// });

export default Blog


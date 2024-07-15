import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Introduction from './components/Introduction'
import ExploreOurTags from './components/ExploreOurTags'
import ExploreOurBlogs from './components/ExploreOurBlogs'

export default function HomePage() {
  return (
    <div>
      <Header />
      <Introduction />
      <ExploreOurTags />
      <ExploreOurBlogs />
      <Footer />
    </div>
  )
}

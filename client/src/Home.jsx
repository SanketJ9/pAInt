import React, { useState, useEffect } from 'react'
import Card from './components/Card'
import FormField from './components/FormField'
import Loader from './components/Loader'
import './Home.css'

const RenderCards = ({ data, title }) => {
  if (data?.lenth > 0) {
    return data.map((post) => <Card key={post._id} {...post} />)
  }

  return (
    <h2 className='mt-5 font-bold text-[#6449ff] text-xl uppercase'></h2>
  )
}

const Home = () => {

  const [loading, setLoading] = useState(false)
  const [allPost, setAllPost] = useState(null)

  const [searchText, setSearchText] = useState('sad')

  return (
    <section className='max-w-7xl mx-auto'>
      <div className='font-bold text-[#ffffff] text-[32px]'>
        <h1 className=''>Gallery</h1>
        <p className='mt-2 text-[#a5a5a5] text-[16px] max-w[500px]'>
          Browse through the gallery of imaginative and visually stunning images generated by DALL-E AI
        </p>
      </div>

      <div className='font-bold text-[#6449ff]'>
        <FormField />
        <Card />
      </div>

      <div className="Posts">
        {loading ? (
          <div className="loader">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className='font-medium text-[#666e75]'>
                Showing results for <span className='text-[#394996]'>{searchText}</span>
              </h2>
            )}
          </>
        )}

        <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
          {searchText ? (
            <RenderCards
              data={[]}
              title="No search results found"
            />
          ) : (
            <RenderCards
              data={[]}
              title="No posts found"
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default Home
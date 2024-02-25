import React from 'react'
import Header from '../Components/Header/Header'
import SearchResult from '../Components/Main/SearchResult'
import DefaultCards from '../Components/Main/DefaultCards'


const Home = () => {
    
  return (
    <div>
       <Header/>
     
     <SearchResult/>
     <DefaultCards/>
    </div>
  )
}

export default Home

import React, { useContext } from 'react'
import  { RecipeCtx } from '../../Context/RecipeContext'
import Cards from '../Cards/Cards';

const SearchResult = () => {

    const ctx = useContext(RecipeCtx);
  return (
    <div>
        {
            ctx.result.length!=0? <div className='text-4xl text-center font-bold m-5'> Your results..</div>:null
        }
      {
        ctx.result.length!=0 ?<div className='flex justify-center flex-wrap gap-4'>
            {
                ctx.result.map((data)=> <Cards {...data}/>)
            }
        </div>:null
      }
    </div>
  )
}

export default SearchResult

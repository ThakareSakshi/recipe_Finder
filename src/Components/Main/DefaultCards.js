import React, { useContext, useEffect } from 'react'
import { RecipeCtx } from '../../Context/RecipeContext';
import RecipeCard from '../Cards/RecipeCard'
import axios from "axios";

const DefaultCards = () => {
    const ctx=useContext(RecipeCtx);


    useEffect(()=>{
        async function getDefaultCardsData(){
           
                const options = {
                    method: 'GET',
                    url: 'https://the-vegan-recipes-db.p.rapidapi.com/',
                    headers: {
                    'X-RapidAPI-Key': 'cf4d5e6099msh4319fd91e2cfce2p110419jsnb558428ce19d',
                    'X-RapidAPI-Host': 'the-vegan-recipes-db.p.rapidapi.com'
                    }
                };
              
              try {
                  const response = await axios.request(options);
                 const data=response.data.filter((data,index)=>data.title.length<18);
                 console.log(data);
                 ctx.setDefaultData([...data]);
              } catch (error) {
                  console.error(error);
              }
        }
        getDefaultCardsData()
    },[])
  return (
    <div>
        <h1 className='font-bold text-5xl text-center px-4 py-8 m-6 max-md:text-3xl'>Let's cherish the moment of great taste</h1>
      {
        ctx.defaultData.length!=0? <div className='w-full flex flex-wrap gap-4 justify-center'>
              {
                ctx.defaultData.map((cardData)=><RecipeCard key={cardData.id} {...cardData}/>)
              }
        </div>:null
      }
      
    </div>
  )
}

export default DefaultCards

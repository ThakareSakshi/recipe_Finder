import React, { useContext, useRef } from 'react'
import axios from "axios"
import RecipeContext, { RecipeCtx } from '../../Context/RecipeContext';

const Header = () => {
    const inputText=useRef(null);
    const ctx=useContext(RecipeCtx);

    const SeachRecipe=async()=>{
        const options = {
            method: 'GET',
            url: 'https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2',
            params: {
              type: 'public',
              co2EmissionsClass: 'A+',
              'field[0]': 'uri',
              beta: 'true',
              random: 'true',
              q:inputText.current.value
            },
            headers: {
              'Accept-Language': 'en',
              'X-RapidAPI-Key': 'cf4d5e6099msh4319fd91e2cfce2p110419jsnb558428ce19d',
              'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              console.log(response.data.hits);
              ctx.setResult([...response.data.hits]);
          } catch (error) {
              console.error(error);
          }
    }
  return (
    <div className='relative w-full h-[500px] overflow-hidden bg-[url("https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/10/food-rainbow-vegetable-fruit-variety-group-healthy-1296x728-header.jpg?w=1155&h=1528")] bg-no-repeat bg-cover bg-fixed flex justify-center items-center'>
     
    <div className='w-full absolute h-screen bg-[rgba(0,0,0,0.6)]'></div>
    <div className='z-10 absolute flex flex-col items-center'>
      <h1 className='text-5xl font-bold text-center text-white capitalize m-4 font-curv'>Get Ready to cook today...</h1>
    <div className=' rounded-full bg-transparent border-2 border-solid border-gray-300 px-3 text-white w-fit'>
       <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" ref={inputText} className='p-3 w-[600px] rounded-full bg-transparent outline-none max-md:w-[210px]' placeholder='search your recipe ....' />
      <button onClick={SeachRecipe}>Search</button>
    </div>
    </div>
   </div>
  )
}

export default Header

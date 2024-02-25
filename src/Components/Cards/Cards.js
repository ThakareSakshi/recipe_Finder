import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { RecipeCtx } from '../../Context/RecipeContext';

const Cards = (props) => {

    const navigate=useNavigate();
    const ctx=useContext(RecipeCtx);

    const ShowDetails=()=>{
       ctx.seturl(props._links.self.href);
       navigate("/details/recipe");
    }
  return (
   <a>
     <div className='p-2 shadow-md w-62 relative cursor-pointer' onClick={ShowDetails}>
      <img src={props.recipe.image} className='w-60 h-60'/>
      <div className='flex justify-between gap-2 items-center'><p className='p-2 py-4 text-lg font-semibold w-60 overflow-clip'>{props.recipe.label}</p>
      <i class="fa-regular fa-heart"></i></div>
      <p className='text-green-500 absolute bottom-2 left-4 '>Recipe</p>

      
    </div>
   </a>
  )
}

export default Cards

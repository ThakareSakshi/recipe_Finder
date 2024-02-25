import React from 'react'
import { useNavigate } from 'react-router-dom'

const RecipeCard = (props) => {
  const navigate=useNavigate();

  const ShowDetails=()=>{
      navigate("/details/"+props.id);
  }
  return (
    <div className='w-62 p-2 shadow-md cursor-pointer' onClick={ShowDetails}>
        <img src={props.image} alt="image" className='w-60 h-60'/>
        <div className='flex justify-between items-center p-2'><h2 className='text-xl font-semibold'>{props.title}</h2><i class="fa-regular fa-heart"></i></div>
        <p className='text-green-400 px-2'>{props.difficulty}</p>
      
    </div>
  )
}

export default RecipeCard

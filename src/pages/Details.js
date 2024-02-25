import React, { useContext, useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { RecipeCtx } from '../Context/RecipeContext';

const Details = () => {
    const par=useParams();
    const ctx=useContext(RecipeCtx)
    console.log(par);
    
  const urlid="https://the-vegan-recipes-db.p.rapidapi.com/"+par.id;
    const [details,setDetails]=useState({});
    
     
    
    useEffect(()=>{
      async function getDefaultCardsData(){
         
              const options = {
                  method: 'GET',
                  url: urlid,
                 
                  headers: {
                  'X-RapidAPI-Key': 'cf4d5e6099msh4319fd91e2cfce2p110419jsnb558428ce19d',
                  'X-RapidAPI-Host': 'the-vegan-recipes-db.p.rapidapi.com'
                  }
              };
            
            try {
                const response = await axios.request(options);
               const data=response.data
               console.log(data);
              setDetails(data)
            } catch (error) {
                console.error(error);
            }
      }
      getDefaultCardsData()
  },[])
   
  return (
    <>
      {
      details.length != 0 ?
       <><div className='flex w-full gap-6 '>
      <img src={details.image} alt="image" className='h-fit w-1/2'/>
      <div>
        <h1 className='text-3xl font-bold text-amber-900 my-4'>{details.title}</h1>
        <p>{details.description}</p>
        <p><span className='font-semibold text-green-700'>Portion</span> : {details.portion}</p>
        <p><span className='font-semibold text-green-700'>Time : </span> {details.time}</p>
       <h2 className='text-xl font-bold text-amber-900 my-4'>Ingredients</h2> 
       <ul>
        {
          details.ingredients.map((dt)=> <li className='text-sm text-gray-600 p-1'> - {dt}</li>)
        }
       </ul>
      
      </div>
    </div>
    <h2 className='text-xl font-bold text-amber-900 m-4'>Method</h2>
     
       
     <p className='p-4'><span className='font-bold text-green-700'>Step 1 : </span> {details.method[0]["Step 1"]}</p>
     <p className='p-4'><span className='font-bold text-green-700'>Step 4 : </span> {details.method[1]["Step 2"]}</p>
     <p className='p-4'><span className='font-bold text-green-700'>Step 3 : </span> {details.method[2]["Step 3"]}</p>
     <p className='p-4'><span className='font-bold text-green-700'>Step 4 : </span> {details.method[3]["Step 4"]}</p>
     <p className='p-4'><span className='font-bold text-green-700'>Step 5 : </span> {details.method[4]["Step 5"]}</p>
   </>:<div>helllo</div>}
    </>
  )
}

export default Details

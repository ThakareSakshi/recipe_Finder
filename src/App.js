
import RecipeContext from './Context/RecipeContext';
import Home from './pages/Home';
import Details from './pages/Details';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Favourite from './pages/Favourite';

function App() {
  const router=createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/details/:id",
        element:<Details/>
    },
    {
      path:"/Liked",
      element:<Favourite/>
    }
])
  return (
    <RecipeContext>
      <RouterProvider router={router}>

      </RouterProvider>
    </RecipeContext>
  );
}

export default App;

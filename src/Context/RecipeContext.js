import { createContext, useState } from "react";

export const RecipeCtx = createContext();

const RecipeContext = (props) => {
  const [defaultData, setDefaultData] = useState([]);
  const [result, setResult] = useState([]);
  const [url,seturl]=useState("");
  const data = {
    defaultData,
    setDefaultData,
    result,
    setResult,
    url,
    seturl
  };
  return <RecipeCtx.Provider value={data}>{props.children}</RecipeCtx.Provider>;
};

export default RecipeContext;

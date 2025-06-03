import { createContext, useState } from "react";
export const Itemcontex=createContext(null);
 export const Itemprovider=(props)=>
{
    const [item,setItem]=useState([])
    return(
        <Itemcontex.Provider value={{item,setItem}}>
          {props.children}
        </Itemcontex.Provider>
    );
}
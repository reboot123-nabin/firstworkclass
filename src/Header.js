import React from "react";
import Sdata from './Sdata';


const Header=(props)=>{
    const show=(val)=>{
        return(
            <>
                <h1>{val.name}</h1>
            </>
        )
    }
  
    return(
        <>
        {/* <h1> i am header</h1> */}
        {/* <h2>{props.name}</h2>
        <h2>{props.title}</h2>
        <h2>{props.id}</h2> */}
        
       {Sdata.map(show)}
       {/* {Sdata} */}
       
        </>
    )
}

export default Header;
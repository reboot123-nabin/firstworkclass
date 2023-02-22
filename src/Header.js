import React from "react";
import Sdata from './Sdata';


const Header=(props)=>{

    const data=(val)=>{
        return(
            <>
            <h1>{val.name}</h1>
            <h1>{val.title}</h1>
            <h1>{val.id}</h1>
            </>
        )
    }
    console.log("data of props",props)
    return(
        <>
        {/* <h1> i am header</h1> */}
        {/* <h2>{props.name}</h2>
        <h2>{props.title}</h2>
        <h2>{props.id}</h2> */}
        
        {
            Sdata.map(data)
        }
        </>
    )
}

export default Header;
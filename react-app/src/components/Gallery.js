import { useState,useEffect } from "react";
import Gcomponent from "./Gcomponent";
const imgData = require('./data.json');

export default function Gallery() {
   const [data , setData ]  = useState('')
 useEffect(() => {
    const images = imgData.value
    setData(images)
    console.log(images)
 } ,[])

    return(
    <>
    <div className="">
        <Gcomponent data={data}/>
    </div>
    </>
    )

}
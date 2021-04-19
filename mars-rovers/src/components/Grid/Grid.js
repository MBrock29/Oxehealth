import React from "react";
import s from './Grid.module.scss'
import Card from "../Card/Card";

export default function Grid({roverData, error}) {
    
    const errorMessage = "Something went wrong"

      if (!roverData)
      return <div>Loading...</div>

    return (
       <div className={s.container}>
         <div className={s.errorContainer}>
         {error && (<h2 className={s.errorMessage}>{errorMessage}</h2>)}
         </div>
         <div className={s.grid}>
            {roverData.map((rover, index) => {
              const {name, state} = rover
              return (
                <Card name={name} state={state} key={index}/>
              )
            })}           
            
        </div>
       </div>
    )
}

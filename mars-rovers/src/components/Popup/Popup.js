import React, {useState} from 'react'
import s from "./Popup.module.scss"
import axios from "axios";

export default function Popup({closeModal, fetchRoverData}) {
    const [newRover, setNewRover] = useState()
    const [error, setError] = useState(false)
    const errorMessage = "Sorry, could not add new Rover"
    const addNewRover = () => {
        axios.post(`/add-rover/${newRover}`).then((response) => {
          closeModal()
          fetchRoverData()
          console.log(response)
        }).catch((error) => {
          setError(true)
          console.log(error)
        })
      }

    return (
        <div className={s.container}>
            <div className={s.header}><h2>New Rover</h2></div>
            <div className={s.content}>
                <div className={s.contentContainer}> 
                {error && (<h2 className={s.errorMessage}>{errorMessage}</h2>)}
                     <h3>Launch new rover to mars</h3>
                     <input className={s.input} type="text" placeholder="Rover Name" onChange={(e) => setNewRover(e.target.value)} />
                </div>
                <div className={s.buttonContainer}>
                    <button className={s.button} onClick={closeModal}>Cancel</button>
                    <button className={s.button} onClick={addNewRover}>Launch</button>
                </div>
            </div>
        </div>
    )
}


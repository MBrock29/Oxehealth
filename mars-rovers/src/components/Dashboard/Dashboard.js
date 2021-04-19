import React, {useState, useEffect} from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import s from "./Dashboard.module.scss"
import Popup from "../Popup/Popup"
import Grid from '../Grid/Grid'
import axios from "axios"

export default function Dashboard() {
    const [roverData, setRoverData] = useState();
    const [error, setError] = useState(false)
    const [popupOpen, setPopupOpen] = useState(false)
    const launchModal = () => {  
        setPopupOpen(true)
    }

    const fetchRoverData = () => {
        axios.get('/rovers').then((response) => {
          const roverData = response.data
          setRoverData(roverData);
      })
      .catch((error) => {
        setError(true)
        console.log(error);
      })
      }
  
      useEffect(() => {
        fetchRoverData()
        }, []);
    return (
        <div className={s.container}>
            <Header />
            <Grid roverData={roverData} error={error}/>
            <Footer launchModal={launchModal}/>
            {popupOpen && (<Popup closeModal={() => setPopupOpen(false)} fetchRoverData={() => fetchRoverData()}/>)}
        </div>
    )
}

import React from 'react'
import s from "./Footer.module.scss"

export default function Footer({launchModal}) {
    return (
        <div className={s.container}>
            <button onClick={launchModal} className={s.button}>New Rover</button>
        </div>
    )
}

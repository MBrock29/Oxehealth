import React from 'react'
import s from "./Card.module.scss"

export default function Card({name, state}) {
    return (
        <div className={s.container}>
            <div className={s.header}>
                {name}
            </div>
            <div className={s.content}>
                {state}
            </div>
        </div>
    )
}

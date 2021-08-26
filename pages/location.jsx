import React from 'react'
import SubHeader from '../components/SubHeader/SubHeader'
import s from '../styles/pages/Location.module.scss'


const location = () => {
    return (
        <div className={s.container}>
            <SubHeader text='¿Cómo llegar?' />
            Location
        </div>
    )
}

export default location

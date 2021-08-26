import React from 'react'
import SubHeader from '../components/SubHeader/SubHeader'
import s from '../styles/pages/Gallery.module.scss'

const gallery = () => {
    return (
        <div className={s.container}>
            <SubHeader text='Galería' />
            Gallery
        </div>
    )
}

export default gallery

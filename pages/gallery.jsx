import React from 'react'
import SubHeader from '../components/SubHeader/SubHeader'
import s from '../styles/pages/Gallery.module.scss'
import Gallery from "react-photo-gallery"


const gallery = () => {

    const photos  = [
        {
            src : "http://localhost:3000/static/assets/bannerRoom2.jpg",
            width : 4,
            height: 3
        },
        {
            src : "http://localhost:3000/static/assets/bannerRoom3.jpg",
            width : 3,
            height: 4
        },
        {
            src : "http://localhost:3000/static/assets/bannerRoom4.jpg",
            width : 3,
            height: 4
        },
        {
            src : "http://localhost:3000/static/assets/bannerRoom5.jpg",
            width : 4,
            height: 3
        },
    ]
    return (
        <div className={s.container}>
            <SubHeader text='Galería' />
            Gallery
            <Gallery photos={photos} />
        </div>
    )
}

export default gallery

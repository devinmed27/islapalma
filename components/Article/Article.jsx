import React from 'react'
import Image from 'next/image'
import s from './Article.module.scss'

const Article = ({text,title, imagePath, align }) => {
    const alignItem =  {
        alignSelf: align
    }
    return (
        <article className={s.container}>
            <Image src={imagePath} placeholder='blur'  />
            <div className={s.textContainer} style={alignItem}>
                <h2>{title}</h2>
                <p>{text}</p>
                <img className={s.rbleaft} src='/static/assets/rbleaft.png' alt="" />
                <img className={s.ltleaft} src='/static/assets/ltleaft.png' alt="" />
                <img className={s.lbleaft} src='/static/assets/lbleaft.png' alt="" />
            </div>
        </article>
    )
}

export default Article

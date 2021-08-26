import React from 'react'
import s from '../../styles/pages/Promo.module.scss'


// posible getStatic paths
export const getServerSideProps = async (ctx) => {
    const id = ctx.params.id
    console.log(id)
    return{
        props:{
            id
        }
    }
}



const promo = ({id}) => {
    return (
        <div className={s.container}>
            Promo {id}
        </div>
    )
}

export default promo

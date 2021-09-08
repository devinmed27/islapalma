import React from "react";
import s from "./RoomCard.module.scss";
import Image from "next/image";

const RoomCard = () => {

    const data = [
        {
            iconPath: '/static/users.png',
            text: 'Capacidad para 2 personas'
        },
        {
            iconPath:'/static/air.png',
            text:'Aire acondicionado - Ventilador (6 Pm- 6 Am)'
        },
        {
            iconPath:'/static/bath.png',
            text:'Baño privado'
        },
        {
            iconPath:'/static/eye.png',
            text:'Vista a la reserva ó al interior'
        },
        {
            iconPath:'/static/closet.png',
            text:'Clóset'
        },
        {
            iconPath:'/static/bed.png',
            text:'Cama doble ó cama Queen size'
        }
    ]

  return (
    <div className={s.container}>
      <div className={s.title}>Este es el titulo</div>
      <div className={s.imgContainer}>
        <Image source={} />
      </div>
      <div className={s.cardContainer}>
        <Image source={} />
        <p>Habitación</p>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          {data.map((el) => {
            <li>
              <img />
              <p>{el.text}</p>
            </li>;
          })}
        </ul>
        <button>Reserva</button>
      </div>
    </div>
  );
};

export default RoomCard;

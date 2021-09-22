import React from "react";
import SubHeader from "../components/SubHeader/SubHeader";
import BookBar from "../containers/BookBar/BookBar";
import s from "../styles/pages/Rooms.module.scss";
import Image from "next/image";
import RoomCard from "../containers/RoomCard/RoomCard";
import hotel_1 from "../public/static/assets/hotel_1.png";
import icon1 from "../public/static/assets/user.png";
import icon2 from "../public/static/assets/fan.png";
import icon3 from "../public/static/assets/bath.png";
import icon4 from "../public/static/assets/eye.png";
import icon5 from "../public/static/assets/closet.png";
import icon6 from "../public/static/assets/bed.png";
import icon7 from "../public/static/assets/tv.png";
import bannerPath1 from "../public/static/assets/bannerRoom1.jpg"
import imgPath1 from "../public/static/assets/imgRoom1.jpg"
import bannerPath2 from "../public/static/assets/bannerRoom2.jpg"
import imgPath2 from "../public/static/assets/imgRoom2.jpg"
import bannerPath3 from "../public/static/assets/bannerRoom3.jpg"
import imgPath3 from "../public/static/assets/imgRoom3.jpg"
import bannerPath4 from "../public/static/assets/bannerRoom4.jpg"
import imgPath4 from "../public/static/assets/imgRoom4.jpg"
import bannerPath5 from "../public/static/assets/bannerRoom5.jpg"
import imgPath5 from "../public/static/assets/imgRoom5.jpg"


const data = [
  {
    title: "GARZAS",
    imgPath: imgPath1,
    bannerPath: bannerPath1,
    description:
      "Aquí encontraras un espacio de conexión con la naturaleza, con los que amas y contigo mismo. Este lugar esta diseñado para tu descanso y diversión con toda la magia que trae un ambiente caribeño.",
    features: [
      {
        iconPath: icon1,
        text: "Capacidad para 2 personas",
      },
      {
        iconPath: icon2,
        text: "Aire acondicionado - Ventilador (6 Pm- 6 Am)",
      },
      {
        iconPath: icon3,
        text: "Baño privado",
      },
      {
        iconPath: icon4,
        text: "Vista a la reserva ó al interior",
      },
      {
        iconPath: icon5,
        text: "Clóset",
      },
      {
        iconPath: icon6,
        text: "Cama doble ó cama Queen size",
      },
    ],
  },
  {
    title: "GAVIOTAS",
    imgPath: imgPath2,
    bannerPath: bannerPath2,
    description:
      "Hermosa y comoda habitacion dotada de todo lo que necesitas para un placido descanso en medio de la naturaleza, vén y disfruta de una experiencia inolvidables.",
    features: [
      {
        iconPath: icon1,
        text: "Capacidad para 2 personas",
      },
      {
        iconPath: icon2,
        text: "Aire acondicionado - Ventilador (6 Pm- 6 Am)",
      },
      {
        iconPath: icon3,
        text: "Baño privado",
      },
      {
        iconPath: icon4,
        text: "Vista al mar (muelle)",
      },
      {
        iconPath: icon7,
        text: "Tv satelital",
      },
      {
        iconPath: icon6,
        text: "Cama king",
      },
    ],
  },
  {
    title: "PELICANOS",
    imgPath: imgPath3,
    bannerPath: bannerPath3,
    description:
      "Aquí encontraras un espacio de conexión con la naturaleza, con los que amas y contigo mismo. Este lugar esta diseñado para tu descanso y diversión con toda la magia que trae un ambiente caribeño.",
    features: [
      {
        iconPath: icon1,
        text: "Capacidad para 3 personas",
      },
      {
        iconPath: icon2,
        text: "Aire acondicionado - Ventilador (6 Pm- 6 Am)",
      },
      {
        iconPath: icon3,
        text: "Baño privado",
      },
      {
        iconPath: icon4,
        text: "Vista a la reserva ó al interior",
      },
      {
        iconPath: icon5,
        text: "Clóset",
      },
      {
        iconPath: icon6,
        text: "Cama queen más una cama sencilla",
      },
    ],
  },
  {
    title: "GUACAMAYOS",
    imgPath: imgPath4,
    bannerPath: bannerPath4,
    description:
      "Vén y vive los mejores momentos al lado de los que amas. Drisfruta con tu familia  todas las maravillas que nos ofrece el mar.",
    features: [
      {
        iconPath: icon1,
        text: "Capacidad para 4 personas",
      },
      {
        iconPath: icon2,
        text: "Aire acondicionado - Ventilador (6 Pm- 6 Am)",
      },
      {
        iconPath: icon3,
        text: "Baño privado",
      },
      {
        iconPath: icon4,
        text: "Vista a la reserva ó al interior",
      },
      {
        iconPath: icon5,
        text: "Clóset",
      },
      {
        iconPath: icon6,
        text: "Cama queen y 2 camas sencillas",
      },
    ],
  },
  {
    title: "FLAMINGOS",
    imgPath: imgPath5,
    bannerPath: bannerPath5,
    description:
      "Aquí encontraras un espacio de conexión con la naturaleza, con los que amas y contigo mismo. Este lugar esta diseñado para tu descanso y diversión con toda la magia que trae un ambiente caribeño.",
    features: [
      {
        iconPath: icon1,
        text: "Capacidad para 5 personas",
      },
      {
        iconPath: icon2,
        text: "Aire acondicionado - Ventilador (6 Pm- 6 Am)",
      },
      {
        iconPath: icon3,
        text: "Baño privado",
      },
      {
        iconPath: icon4,
        text: "Vista a la reserva ó al interior",
      },
      {
        iconPath: icon5,
        text: "Clóset",
      },
      {
        iconPath: icon6,
        text: "Cama queen y 3 camas sencillas",
      },
    ],
  },
];

const rooms = () => {
  return (
    <div className={s.container}>
      <SubHeader text="Habitaciones" />
      <div className={s.main}>
        <div className={s.topContent}>
          <p>
            Hermosa y monumental construcción típica caribeña en madera y palma
            distribuida en dos niveles para en total 40 habitaciones, capacidad
            máxima 120 personas. Amplias zonas de áreas sociales.
          </p>
          <Image src={hotel_1} alt="Foto del hotel" placeholder="blur" />
          <div className={s.line}>
            <img src="/static/assets/line_icon.png" alt="plant" />
          </div>
          <img
            className={s.figure}
            src="/static/assets/rooms_figure.png"
            alt="figure"
          />
        </div>
        <div className={s.roomsContainer}>
          {data.map((room, index) => (
            <RoomCard
              title={room.title}
              description={room.description}
              imgPath={room.imgPath}
              bannerPath={room.bannerPath}
              features={room.features}
            />
          ))}
        </div>
      </div>
      <BookBar />
    </div>
  );
};

export default rooms;

import React from "react";
import SubHeader from "../components/SubHeader/SubHeader";
import BookBar from "../containers/BookBar/BookBar";
import s from "../styles/pages/Rooms.module.scss";
import Image from "next/image";
import RoomCard from "../containers/RoomCard/RoomCard";
import hotel_1 from "../public/static/assets/bannerPpalRooms.png";
import line from "../public/static/assets/line_icon.png";
import figure from "../public/static/assets/rooms_figure.png";
import figure2 from "../public/static/assets/figure.png"
import { dataRooms } from "../utils/texts";

const Rooms = () => {
  const data = dataRooms;
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
          <Image
            src={hotel_1}
            alt="Foto del hotel"
            placeholder="blur"
            objectFit="fill"
          />
          <div className={s.line}>
            <div className={s.iconContainer}>
              <Image src={line} alt="plant" />
            </div>
          </div>
          <div className={s.figure}>
            <Image src={figure} alt="figure" />
          </div>
          <div className={s.figure2}>
            <Image src={figure2} alt="figure" />
          </div>
        </div>
        <div className={s.roomsContainer}>
          {data.map((room, index) => (
            <RoomCard
            key={room.title}
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

export default Rooms;

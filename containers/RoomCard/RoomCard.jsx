import React, { useState } from "react";
import s from "./RoomCard.module.scss";
import Image from "next/image";
import leafIcon from "../../public/static/assets/subheader_icon.png";
import Button from "../../components/Button/Button";
import CarouselView from "../../components/CarouselView/CarouselView";

const RoomCard = ({ title, description, imgPath, bannerPath, features }) => {
  const [url, setUrl] = useState(process.env.BOOK_URL_ES);
  const img = "http:" + bannerPath
  let images = []

  imgPath.map((el) => {
    images.push(el.url)
  })
  return (
    <div className={s.container}>
      <div className={s.title}>
        <h3>{title}</h3>
      </div>
      <div className={s.imgContainer}>
        <Image src={img} alt="banner image" width={1444} height={962} />
      </div>
      <div className={s.infoPpal}>
        <div className={s.left}>
          <div className={s.cardContainer}>
            <CarouselView data={images} />
          </div>
          <div className={s.texts}>
            <p>Habitación</p>
            <h3>{title}</h3>
          </div>
          <p className={s.description}>{description}</p>
        </div>
        <div className={s.right}>
          <div className={s.separator}>
            <div className={s.iconContainer}>
              <Image className={s.img} src={leafIcon} alt="Plantas" />
            </div>
            <div className={s.line}></div>
          </div>
          <div className={s.features}>
            {features.map((el) => {
              return (
                <div className={s.feature} key={el.text}>
                  <div className={s.icon}>
                    <Image src={el.iconPath} alt="icon" width={25} height={25}/>
                  </div>
                  <p>{el.text}</p>
                </div>
              );
            })}
          </div>
          <div className={s.btn}>
            <a href={url} target="_blank" rel="noreferrer">
              <Button secondary={true} text="Reserva" />
            </a>
          </div>
          <div className={s.iconFooter}>
            <Image className={s.img} src={leafIcon} alt="Plantas" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;

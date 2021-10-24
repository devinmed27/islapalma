import React from "react";
import Image from "next/image";
import Button from "../Button/Button";
import s from "./HomeBanner.module.scss";
import downArrowPath from "../../public/static/assets/arrow.png";

const HomeBanner = ({text, img}) => {
  return (
    <div className={s.container}>
      <Image objectFit="cover" src={img} layout="fill" alt="background image"/>
      {/* <img  src={img} alt="background image"/> */}
      <div className={s.info}>
        <h3>{text}</h3>
        <div className={s.buttonArrow}>
          <a href={process.env.BOOK_URL_ES} target="_blank" rel="noreferrer">
            <Button text="Reserva" />
          </a>
          <Image width={47} height={47} src={downArrowPath} alt="arrow icon"/>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;

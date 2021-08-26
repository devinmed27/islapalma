import React from "react";
import Image from "next/image";
import Button from "../Button/Button";
import s from "./HomeBanner.module.scss";
import bgPath from "../../public/static/assets/home-banner.png";
import downArrowPath from "../../public/static/assets/arrow.png";

const HomeBanner = () => {
  return (
    <div className={s.container}>
      <Image objectFit="cover" src={bgPath} layout="fill" />
      <div className={s.info}>
        <h2>Relax, aventura y buenos momentos</h2>
        <div className={s.buttonArrow}>
          <a href={process.env.BOOK_URL_ES} target="_blank">
            <Button text="Reserva" />
          </a>
          <Image width={47} height={47} src={downArrowPath} />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;

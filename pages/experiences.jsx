import React, { useState } from "react";
import SubHeader from "../components/SubHeader/SubHeader";
import s from "../styles/pages/Experiences.module.scss";
import Image from "next/image";
import banner from "../public/static/assets/experiences-banner.jpg";
import BookBar from "../containers/BookBar/BookBar";
import ExperienceCard from "../components/ExperienceCard/ExperienceCard";

import Button from "../components/Button/Button";

import{cardsInfo} from "../utils/texts" 

const experiences = () => {
  const [url, setUrl] = useState(process.env.BOOK_URL_ES);

  return (
    <div className={s.container}>
      <SubHeader text="Experiencias" />
      <div className={s.banner}>
        <div className={s.imgContainer}>
          <Image src={banner} />
        </div>
        <p className={s.text}>
          AQUI ENCONTRARÁS LAS MEJORES AVENTURAS, QUE SE CONVERTIRÁN EN MOMENTOS
          INOLVIDABLES
        </p>
      </div>
      <div className={s.sectionTwo}>
        {cardsInfo.map(({ text, title, service, imagePath, iconPath }) => (
          <ExperienceCard
            key={title}
            text={text}
            title={title}
            service={service}
            imagePath={imagePath}
            iconPath={iconPath}
          />
        ))}
      </div>
      <div className={s.sectionThree}>
        <div className={s.title}>
          <div></div>
          <p>VEN A VIVIR</p>
          <div></div>
        </div>
        <p className={s.text}>¿QUÉ ESPERAR PARA VIVIR LA EXPERIENCIA DE ISLA PALMA?</p>
        <a href={url} target="_blank">
          {/* <Button text="RESERVA" width="90px" height="30px" fontSize="13px" /> */}
          <Button text="Reserva" />
        </a>
      </div>
      <BookBar />
    </div>
  );
};

export default experiences;

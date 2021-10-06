import React, { useState, useEffect } from "react";
import SubHeader from "../components/SubHeader/SubHeader";
import s from "../styles/pages/Experiences.module.scss";
import Image from "next/image";
import banner from "../public/static/assets/experiences-banner.jpg";
import BookBar from "../containers/BookBar/BookBar";
import ExperienceCard from "../components/ExperienceCard/ExperienceCard";

import Button from "../components/Button/Button";

import { cardsInfo } from "../utils/texts";

const Experiences = () => {
  const [url, setUrl] = useState(process.env.BOOK_URL_ES);
  const [size, setSize] = useState(null);

  let aux = []

  if (size < 768) {
    aux = ["column", "column", "column", "column", "column"];
  } else {
    aux = ["row", "row-reverse", "row", "row-reverse", "row"];
  }

  useEffect(() => {
    setSize(screen.width);
  }, []);

  return (
    <div className={s.container}>
      <SubHeader text="Experiencias" />
      <div className={s.banner}>
        <div className={s.imgContainer}>
          <Image src={banner} alt= "imagen de playa" objectFit="fill"/>
        </div>
        <p className={s.text}>
          AQUI ENCONTRARÁS LAS MEJORES AVENTURAS, QUE SE CONVERTIRÁN EN MOMENTOS
          INOLVIDABLES
        </p>
      </div>
      <div className={s.sectionTwo}>
        {cardsInfo.map(
          ({ text, title, service, imagePath, iconPath }, index) => (
            <ExperienceCard
              key={title}
              text={text}
              title={title}
              service={service}
              imagePath={imagePath}
              iconPath={iconPath}
              align={aux[index]}
            />
          )
        )}
      </div>
      <div className={s.sectionThree}>
        <div className={s.title}>
          <div></div>
          <p>VEN A VIVIR</p>
          <div></div>
        </div>
        <p className={s.text}>
          ¿QUÉ ESPERAR PARA VIVIR LA EXPERIENCIA DE ISLA PALMA?
        </p>
        <a href={url} target="_blank" rel="noreferrer">
          <Button text="Reserva" />
        </a>
      </div>
      <BookBar />
    </div>
  );
};

export default Experiences;

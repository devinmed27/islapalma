import React, { useState } from "react";
import SubHeader from "../components/SubHeader/SubHeader";
import s from "../styles/pages/Experiences.module.scss";
import Image from "next/image";
import banner from "../public/static/assets/experiences-banner.jpg";
import BookBar from "../containers/BookBar/BookBar";
import ExperienceCard from "../components/ExperienceCard/ExperienceCard";
import icon2Path from "../public/static/assets/surf-icon.png";
import icon4Path from "../public/static/assets/sub-icon.png";
import icon3Path from "../public/static/assets/snorkel-icon.png";
import icon1Path from "../public/static/assets/trees-icon.png";
import icon5Path from "../public/static/assets/party-icon.png";
import card2Path from "../public/static/assets/surf.jpg";
import card4Path from "../public/static/assets/sub.jpg";
import card3Path from "../public/static/assets/snorkel.jpg";
import card1Path from "../public/static/assets/fla.jpg";
import card5Path from "../public/static/assets/party.jpg";
import Button from "../components/Button/Button";

const experiences = () => {
  const [url, setUrl] = useState(process.env.BOOK_URL_ES);

  const cardsInfo = [
    {
      title: "AVENTURA EN EL BIO-PARQUE",
      text: "DISFURTARÁS UN RECORRIDO POR LA RESERVA DONDE PORDRÁS DISFRUTAR DE AVIVAMIENTO DE AVES, Y ANIMALES QUE HABITAN EN LA ISLA.",
      service: "SERVICIO GRATUITO, AGENDA TU CITA EN LA RECEPCIÓN",
      imagePath: card1Path,
      iconPath: icon1Path,
    },
    {
      title: "PADDLE O KAYAK",
      text: "UN EXCELENTE DEPORTE PARA PRACTICAR CARDIO Y DISFRUTAR DEL MAL. NO OLVIDES AGENDAR TEMPRANO EN LA PLAYA, PARA QUE TE ASIGNEN EL TIEMPO DE USO.",
      service: "SERVICIO GRATUITO, AGENDA TU CITA EN LA RECEPCIÓN",
      imagePath: card2Path,
      iconPath: icon2Path,
    },
    {
      title: "SNORKEL",
      text: "SI TE GUSTAN LOS DEPORTES ACUÁTICOS DE BAJO RIESGO, NO OLVIDES TRAER TU KIT DE SNORKERL, PARA QUE PUEDAS APRECIAL TODA LA VIDA SALVAJW QUE HABITA EN LA ISLA, YA QUE CONTAMOS CON UNA HERMOSA BARRERA CORALINA.",
      service: "SERVICIO GRATUITO",
      imagePath: card3Path,
      iconPath: icon3Path,
    },
    {
      title: "BUCEO",
      text: "DÍA COMPLETO DE PASEO POR EL ARCHIPIÉLAGO DE SAN BERNARDO CON INDUCCIÓN BÁSICA DE BUCEO Y 2 INMERSIONES EN PUNTOS DIFERENTES. DURACIÓN APROXIMADA 6 HORAS.",
      service: "SERVICIO CON COSTO ADICIONAL",
      imagePath: card4Path,
      iconPath: icon4Path,
    },
    {
      title: "CELEBRACIONES",
      text: "CONTAMOS CON DIRERENTES PAQUETES DE DECORACIONES PARA QUE SORPRENDAS EN TODA OCASIÓN A ESA PERSONA ESPECIAL.",
      service: "VER PAQUETES DE DECORACIÓN EN PLANES",
      imagePath: card5Path,
      iconPath: icon5Path,
    },
  ];

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

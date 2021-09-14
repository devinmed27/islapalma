import React from "react";
import SubHeader from "../../components/SubHeader/SubHeader";
import s from "../../styles/pages/Promos.module.scss";
import Image from "next/image"
import PromotionCard from "../../components/PromotionCard/PromotionCard";
import banner from "../../public/static/assets/promBanner.png";
import subBanner from "../../public/static/assets/subBannerProm.png";
import card1Path from "../../public/static/assets/plan1-image.jpg";
import banner1Path from "../../public/static/assets/plan1-banner.jpg";
import iconA1Path from "../../public/static/assets/boat-icon.png";
import iconA2Path from "../../public/static/assets/cocktail-icon.png";
import iconA3Path from "../../public/static/assets/lunch-icon.png";
import iconA4Path from "../../public/static/assets/natural-icon.png";
import pricePath from "../../public/static/assets/money-icon.png";
import card2Path from "../../public/static/assets/plan2-image.jpg";
import banner2Path from "../../public/static/assets/plan2-banner.jpg";
import card3Path from "../../public/static/assets/plan3-image.jpg";
import banner3Path from "../../public/static/assets/plan3-banner.jpg";



const index = () => {

  const cardsInfo = [
    {
      title: "PASADÍA VIP",
      imagePath: card1Path,
      bannerPath: banner1Path,
      subtitle: "Relaja tus sentidos y recupera tu energía",
      features: [
        {
          iconPath: iconA1Path,
          text: "Traslado náutico desde Tolú"
        },
        {
          iconPath: iconA2Path,
          text: "Cocktail de bienvenida"
        },
        {
          iconPath: iconA3Path,
          text: "Almuerzo Gourmet"
        },
        {
          iconPath: iconA4Path,
          text: "Visita al Bioparque"
        }
      ],
      description : "Disfruta de la playa de arena blanca y agua turquesa ideal para prácticas de snorkeling por sus paisajes submarinos la cual recomendamos no olvides en traer tu kit personal",
      info: "NO INCLUYE: Bebidas extras, servicio de kayak o paddle, traslados nauticos no especificados.",
      price1 : 190000,
      price2 : 145000,
      pricePath : pricePath
    },
    {
      title: "PLAN ENAMORADOS",
      imagePath: card2Path,
      bannerPath: banner2Path,
      subtitle: "Descubriendo juntos lugares asombrosos",
      features: [
        {
          iconPath: iconA1Path,
          text: "Alojamiento habitación las garzas (1 noche)"
        },
        {
          iconPath: iconA2Path,
          text: "Cocktail de bienvenida"
        },
        {
          iconPath: iconA3Path,
          text: "Almuerzo, cena romantica y desayuno"
        },
        {
          iconPath: iconA4Path,
          text: "Disfrute de todas nuestas instalaciones"
        }
      ],
      description : "Disfruta de una velada romántica para dos en un espacio privado, con cena a la carta, botella de vino tinto o blanco y postre",
      info: "NO INCLUYE: Bebidas y alimentación extras, traslados náuticos ni activiades no especificadas.",
      price1 : 1519000,
      price2 : "",
      pricePath : pricePath
    },
    {
      title: "PLAN BODAS",
      imagePath: card3Path,
      bannerPath: banner3Path,
      subtitle: "Sabemos de la importancia de esta fecha para ustedes es por ello que nos complace ofrecer nuestro servicio para el gran día",
      features: [
        {
          iconPath: "",
          text: "En Isla palma contamos con un ambiente romántico  diseñado para crear experiencias fascinantes e inolvidables y hacer realidad la boda que siempre soñaste."
        },
        {
          iconPath: "",
          text: "Déjate atrapar por la magia de Isla palma."
        },
        {
          iconPath: "",
          text: "*Solo aceptamos solicitudes de Bodas para temporada baja que comprende, no aplica para puentes festivos, Semana Santa y  después del 15 de Diciembre hasta el 16 de Enero."
        },
        {
          iconPath: "",
          text: "Contáctanos para más información."
        }
      ],
      description : "",
      info: "",
      price1 : "",
      price2 : "",
      pricePath : ""
    }
  ];


  return (
    <div className={s.container}>
      <SubHeader text="Planes" />
      <div className={s.bannerContainer}>
      <Image src = {banner} />
      </div>
      <div className={s.cardsContainer}>
        {cardsInfo.map((card,index) => (
          <PromotionCard
            key={card.title}
            text={card.text}
            title={card.title}
            subtitle={card.subtitle}
            info={card.info}
            imagePath={card.imagePath}
            bannerPath={card.bannerPath}
            features = {card.features}
            description = {card.description}
            price1 = {card.price1}
            price2 = {card.price2}
            index = {index}
          />
        ))}
      </div>
      <div className={s.bannerContainer}>
      <Image src = {subBanner} />
      </div>
    </div>
  );
};

export default index;

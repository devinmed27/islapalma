import React, { useState } from "react";
import s from "../../styles/pages/Promo.module.scss";
import formatterPeso from "../../utils/formatterPeso";
import Button from "../../components/Button/Button";
import Image from "next/image";

import { cardsInfoP } from "../../utils/texts";

// // posible getStatic paths
export const getServerSideProps = async (ctx) => {

  const idx = ctx.params.id;
  const promo = cardsInfoP[idx];
  return {
    props: {
      promo,
    },
  };
};

const Promo = ({ promo }) => {
  const [url, setUrl] = useState(process.env.BOOK_URL_ES);

  return (
    <div className={s.container}>
      <div className={s.title}>
        <h3>{promo.title}</h3>
        <p className={s.sub}>{promo.subtitle}</p>
      </div>
      <div className={s.imgContainer}>
        <Image src={promo.bannerPath} alt="icon path"/>
      </div>
      <div className={s.infoPpal}>
        <div className={s.cardContainer}>
          <Image src={promo.imagePath} alt="promotion image"/>
        </div>
        <div className={s.features}>
          {promo.features.map(({ text, iconPath }) => (
            <div className={s.feature} key={text}>
              {iconPath != "" ? (
                <div className={s.featureL}>
                  <div className={s.iconContainer}>
                    <Image src={iconPath} alt="icon image"/>
                  </div>
                </div>
              ) : (
                <p></p>
              )}
              <div className={s.featureR}>
                <p>{text}</p>
              </div>
            </div>
          ))}
          <div className={s.additionalInfo}>
            <p className={s.text}>{promo.description}</p>
            <a href={url} target="_blank" rel="noreferrer">
              <Button secondary={true} text="Reserva" />
            </a>
            <p className={s.info}>{promo.info}</p>
          </div>
          <div className={s.priceInfo}>
            {promo.pricePath != "" ? (
              <div className={s.topInfo}>
                <div className={s.priceContainer}>
                  <Image src={promo.pricePath} alt="promotion image"/>
                </div>
                <div className={s.text}>
                  <p>Adultos: {formatterPeso(promo.price1)}</p>
                  {promo.price2 != "" ? (
                    <p>Niños de 4 a 7: {formatterPeso(promo.price2)}</p>
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;

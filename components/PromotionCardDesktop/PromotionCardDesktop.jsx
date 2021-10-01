import React, { useState } from "react";
import s from "./PromotionCardDesktop.module.scss";
import formatterPeso from "../../utils/formatterPeso";
import Button from "../Button/Button";
import Image from "next/image";

const PromotionCardDesktop = ({
  title,
  imagePath,
  bannerPath,
  description,
  subtitle,
  features,
  price1,
  price2,
  pricePath,
  info,
}) => {
  const [url, setUrl] = useState(process.env.BOOK_URL_ES);

  return (
    <div className={s.container}>
      <div className={s.title}>
        <h3>{title}</h3>
        <p className={s.sub}>{subtitle}</p>
      </div>
      <div className={s.imgContainer}>
        <Image src={bannerPath} />
      </div>
      <div className={s.infoPpal}>
        <div className={s.top}>
          <div className={s.cardContainer}>
            <Image src={imagePath} />
          </div>
          <div className={s.features}>
            {features.map(({ text, iconPath }) => (
              <div className={s.feature}>
                {iconPath != "" ? (
                  <div className={s.featureL}>
                    <div className={s.iconContainer}>
                      <Image src={iconPath} />
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
            <p className={s.text}>{description}</p>
            <a href={url} target="_blank">
              <Button secondary={true} text="Reserva" />
            </a>
            <p className={s.info}>{info}</p>
          </div>
        </div>
        </div>


        <div className={s.priceInfo}>
          {pricePath != "" ? (
            <div className={s.topInfo}>
              {/* <div className={s.priceContainer}>
                <Image src={pricePath} />
              </div> */}
              <div className={s.text}>
              {price1 != "" ? (
                  <p>Adultos: {formatterPeso(price1)}</p>
                ) : (
                  <p></p>
                )}
                {price2 != "" ? (
                  <p>Niños de 4 a 7: {formatterPeso(price2)}</p>
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
  );
};

export default PromotionCardDesktop;

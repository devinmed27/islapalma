import React, { useState } from "react";
import s from "../../styles/pages/Promo.module.scss";
import formatterPeso from "../../utils/formatterPeso";
import Button from "../../components/Button/Button";
import Image from "next/image";

import { createClient } from "contentful";

export const getServerSideProps = async (ctx) => {
  var client = await createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  try {
    const promoCard = await client
      .getEntries({ content_type: "promoCard" })
      .then((entries) => entries.items);
    const idx = ctx.params.id;
    
    return {
      props: {
        promoCard,
        idx,
        statusCode: 200,
      },
    };
  } catch (e) {
    res.statusCode = 503;
    return { props: { home: {}, statusCode: 503 } };
  }
};

const Promo = ({ promoCard,idx }) => {
  const cardsInfoP = promoCard;
  // const cardsInfoP = promoCard;
  const promo = cardsInfoP[idx].fields;
  const [url, setUrl] = useState(process.env.BOOK_URL_ES);
  const image = "http:" + promo.image.fields.file.url
  const banner = "http:" + promo.banner.fields.file.url
  // const price = "http:" + promo.pricePath.fields.file.url
  
  return (
    <div className={s.container}>
      <div className={s.title}>
        <h3>{promo.title}</h3>
        <p className={s.sub}>{promo.subtitle}</p>
      </div>
      <div className={s.imgContainer}>
        <Image src={banner} alt="icon path" width={1444} height={960}/>
      </div>
      <div className={s.infoPpal}>
        <div className={s.cardContainer}>
          <Image src={image} alt="promotion image" width={1444} height={1425}/>
        </div>
        <div className={s.features}>
          {promo.features.map(({ text, iconPath }) => (
            <div className={s.feature} key={text}>
              {iconPath != "" ? (
                <div className={s.featureL}>
                  <div className={s.iconContainer}>
                    <Image src={iconPath} alt="icon image" width={36} height={36}/>
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
            {promo.price1 != 1 ? (
              <div className={s.topInfo}>
                {/* <div className={s.priceContainer}>
                  <Image src={price} alt="promotion image" width={36} height={36}/>
                </div> */}
                <div className={s.text}>
                  <p>Adultos: {formatterPeso(promo.price1)}</p>
                  {promo.price2 != 1? (
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

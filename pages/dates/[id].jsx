import React from "react";
import s from "../../styles/pages/Date.module.scss";
import formatterPeso from "../../utils/formatterPeso";
import Image from "next/image";
import leaf from "../../public/static/assets/rbleaft.png"

import { cardsInfoP2 } from "../../utils/texts";

import { createClient } from "contentful";

export const getServerSideProps = async (ctx) => {
  var client = await createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  try {
    const datesCard = await client
      .getEntries({ content_type: "datesCard" })
      .then((entries) => entries.items);
    const idx = ctx.params.id;
    
    return {
      props: {
        datesCard,
        idx,
        statusCode: 200,
      },
    };
  } catch (e) {
    res.statusCode = 503;
    return { props: { home: {}, statusCode: 503 } };
  }
};

const Promo = ({ datesCard,idx }) => {
  const cardsInfoP = datesCard.reverse();
  const promo = cardsInfoP[idx].fields;
  const image = "http:" + promo.image.fields.file.url

  return (
    <div className={s.container}>
      <div className={s.cardContainer}>
        <Image src={image} alt="promotion image" width={1444} height={963}/>
      </div>
        <div className={s.info}>
            <div className={s.iconContainer}>
                <Image src={leaf} alt="leaf icon"/>
            </div>
          <h3 className={s.title}>{promo.title}</h3>
          <p className={s.description}>{promo.description}</p>
          <p className={s.amount}>Desde: {formatterPeso(promo.price1)}</p>
        </div>
    </div>
  );
};

export default Promo;
